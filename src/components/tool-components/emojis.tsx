"use client";

import { Badge } from "../ui/badge";
import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Match } from "@/lib/ui/match";
import copy from "copy-to-clipboard";
import { FaCheck, FaCopy, FaInfo } from "react-icons/fa";

import {
  FaApple,
  FaGoogle,
  FaWindows,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";

interface SymbolData {
  [category: string]: {
    category: string;
    section: string;
    n: string;
    code: string;
    text: string;
    recentlyAdded: boolean;
    name: string;
    vendors: {
      [vendor: string]: boolean;
    };
    tags: string[];
    keywords: string[];
  }[];
}

interface CardSelection {
  [category: string]: number | null;
}

const SymbolPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [symbols, setSymbols] = useState<SymbolData>({});
  const [selectedSymbols, setSelectedSymbols] = useState<CardSelection>({});

  useEffect(() => {
    // Fetch symbols JSON data
    fetch("/lib/emojis.min.json")
      .then((response) => response.json())
      .then((data: SymbolData) => {
        setSymbols(data);
      })
      .catch((error) => {
        console.error("Error fetching symbols:", error);
      });
  }, []);

  const handleSymbolClick = (category: string, index: number) => {
    copy(symbols[category][index].text);
    setSelectedSymbols({ ...selectedSymbols, [category]: index });
  };

  const filteredSymbols =
    value !== "" && symbols[value] ? { [value]: symbols[value] } : symbols;

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {Object.keys(filteredSymbols).map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{category}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-9">
              {filteredSymbols[category].map((symbol, index) => (
                <div
                  key={index}
                  onClick={() => handleSymbolClick(category, index)}
                  className="group shadow grid aspect-square cursor-pointer grid-rows-3 flex-col items-center  rounded-md border border-input bg-background p-2 transition hover:bg-muted"
                >
                  <span className="flex justify-between text-sm text-transparent transition duration-75  group-hover:text-foreground/75 group-hover:text-opacity-100">
                    <Popover>
                      <PopoverTrigger>
                        <FaInfo />
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="flex justify-between items-center">
                          <p className="font-semibold">
                            Facts about {symbol.text}
                            {symbol.recentlyAdded ? (
                              <Badge variant="outline">new</Badge>
                            ) : (
                              ""
                            )}
                          </p>
                          <div className="p-1 border rounded-lg">
                            <p>{symbol.code}</p>
                          </div>
                        </div>
                        <p>Group: {symbol.section}</p>
                        <p>Name: {symbol.name}</p>
                        <div className="grid grid-cols-5 gap-2">
                          <p>
                            {symbol.vendors.Appl ? (
                              <div className="p-1 rounded-lg border-2 border-green-600">
                                <FaApple className="size-full" />
                              </div>
                            ) : (
                              <div className="p-1 rounded-lg border-2 border-destructive">
                                <FaApple className="size-full" />
                              </div>
                            )}
                          </p>
                          <p>
                            {symbol.vendors.Goog ? (
                              <div className="p-1 rounded-lg border-2 border-green-600">
                                <FaGoogle className="size-full" />
                              </div>
                            ) : (
                              <div className="p-1 rounded-lg border-2 border-destructive">
                                <FaGoogle className="size-full" />
                              </div>
                            )}
                          </p>
                          <p>
                            {symbol.vendors.FB ? (
                              <div className="p-1 rounded-lg border-2 border-green-600">
                                <FaFacebook className="size-full" />
                              </div>
                            ) : (
                              <div className="p-1 rounded-lg border-2 border-destructive">
                                <FaFacebook className="size-full" />
                              </div>
                            )}
                          </p>
                          <p>
                            {symbol.vendors.Wind ? (
                              <div className="p-1 rounded-lg border-2 border-green-600">
                                <FaWindows className="size-full" />
                              </div>
                            ) : (
                              <div className="p-1 rounded-lg border-2 border-destructive">
                                <FaWindows className="size-full" />
                              </div>
                            )}
                          </p>
                          <p>
                            {symbol.vendors.Twtr ? (
                              <div className="p-1 rounded-lg border-2 border-green-600">
                                <FaTwitter className="size-full" />
                              </div>
                            ) : (
                              <div className="p-1 rounded-lg border-2 border-destructive">
                                <FaTwitter className="size-full" />
                              </div>
                            )}
                          </p>
                        </div>
                        <p className="text-muted-foreground">Keywords:</p>
                        <p className="text-muted-foreground">
                          {symbol.keywords.join(", ")}
                        </p>
                      </PopoverContent>
                    </Popover>
                    <Match
                      value={
                        selectedSymbols[category] === index ? "copied" : "copy"
                      }
                      copy={() => <FaCopy />}
                      copied={() => <FaCheck />}
                    />
                  </span>
                  <span className="flex cursor-pointer justify-center text-xl">
                    {symbol.text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SymbolPage;
