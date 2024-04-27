"use client";
import React, { useState, useEffect } from "react";
import { ComboboxPopover } from "../comboboxpopover";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Plan {
  name: string;
  price: number | { yearly: number; monthly: number };
}

interface Service {
  name: string;
  plans: Plan[];
  trial: string;
}

interface Category {
  name: string;
  services: Service[];
}

const Services: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [paidServices, setPaidServices] = useState<Set<string>>(new Set());
  const [selectedPlans, setSelectedPlans] = useState<Map<string, Plan>>(
    new Map()
  );

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/lib/services.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const handlePlanSelect = (serviceName: string, plan: Plan) => {
    setSelectedPlans((prevSelectedPlans) => {
      const newSelectedPlans = new Map(prevSelectedPlans);
      newSelectedPlans.set(serviceName, plan);
      return newSelectedPlans;
    });
    setPaidServices((prevPaidServices) => {
      const newPaidServices = new Set(prevPaidServices);
      newPaidServices.add(serviceName);
      return newPaidServices;
    });
  };

  const totalPaidServices = Array.from(paidServices).length;

  const totalCost = Array.from(selectedPlans.values()).reduce((total, plan) => {
    const planPrice =
      typeof plan.price === "number" ? plan.price : plan.price?.monthly || 0;
    return total + planPrice;
  }, 0);

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ">
        <Card>
          <CardHeader>
            <CardTitle className="text-6xl">{totalCost.toFixed(0)}$</CardTitle>
            <CardDescription className="text-base">
              paid monthly
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-6xl">{totalPaidServices}</CardTitle>
            <CardDescription className="text-base">
              Number of Services you pay for
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              {category.services.map((service) => (
                <div
                  key={service.name}
                  className="border shadow rounded-lg p-2"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="ml-2 text-lg">{service.name}</h3>
                    <ComboboxPopover
                      value={selectedPlans.get(service.name)?.name || ""}
                      onValueChange={(value) => {
                        const selectedPlan = service.plans.find(
                          (plan) => plan.name === value
                        );
                        if (selectedPlan) {
                          handlePlanSelect(service.name, selectedPlan);
                        }
                      }}
                      options={service.plans.map((plan) => ({
                        value: plan.name,
                        label: plan.name,
                        description:
                          typeof plan.price === "number"
                            ? `$${plan.price}`
                            : `$${plan.price.monthly}/month or $${plan.price.yearly}/year`,
                      }))}
                      trial={service.trial}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
