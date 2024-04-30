"use client";

import { useState, useEffect } from "react";
import { ExchangeAPI } from "@/lib/getApiData";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface CurrencyData {
  amount: number;
  base: string;
  date: string;
  rates: { [key: string]: number };
}

export default function MoneyExchange() {
  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    async function fetchCurrencyData() {
      const data = await ExchangeAPI();
      setCurrencyData({
        ...data,
        rates: {
          ...data.rates,
          EUR: 1,
        },
      });
    }
    fetchCurrencyData();
  }, []);

  useEffect(() => {
    if (currencyData) {
      const conversionRate =
        currencyData.rates[toCurrency] / currencyData.rates[fromCurrency];
      setConvertedAmount(amount * conversionRate);
    }
  }, [fromCurrency, toCurrency, amount, currencyData]);

  return (
    <div id="tool" className="flex items-center justify-center lg:h-[50vh] ">
      <div className="bg-muted rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Currency Converter</h1>
        <div className="flex items-center space-x-4">
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(currencyData?.rates || {}).map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(currencyData?.rates || {}).map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-6 text-center">
          <p className="text-4xl font-bold ">{convertedAmount.toFixed(2)}</p>
          <p className="text-muted-foreground">Converted Amount</p>
        </div>
      </div>
    </div>
  );
}
