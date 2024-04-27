"use client";

import React, { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Match } from "@/lib/ui/match";
import copy from "copy-to-clipboard";
import { FaCheck, FaCopy, FaInfo } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SymbolData {
  [category: string]: {
    code: string;
    text: string;
    isEmoji: boolean;
    name: string;
    keywords: string[];
  }[];
}

interface CardSelection {
  [category: string]: number | null;
}

const ScientificSymbols = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [symbols, setSymbols] = useState<SymbolData>({});
  const [selectedSymbols, setSelectedSymbols] = useState<CardSelection>({});

  useEffect(() => {
    // Fetch symbols JSON data
    fetch("/lib/symbols.json")
      .then((response) => response.json())
      .then((data: SymbolData) => {
        setSymbols(data);
        // Initialize selectedSymbols state
        const initialSelectedSymbols: CardSelection = {};
        Object.keys(data).forEach((category) => {
          initialSelectedSymbols[category] = null;
        });
        setSelectedSymbols(initialSelectedSymbols);
      })
      .catch((error) => {
        console.error("Error fetching symbols:", error);
      });
  }, []);

  const handleSymbolClick = (category: string, index: number) => {
    copy(symbols[category][index].text);
    setSelectedSymbols({ ...selectedSymbols, [category]: index });
  };

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {Object.keys(symbols).map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{category}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-9">
              {symbols[category].map((symbol, index: number) => (
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
                      <PopoverContent className="w-80">
                        <div className="flex justify-between items-center">
                          <div className="items-center flex">
                            <p className="text-sm items-center flex size-8 justify-around mr-2 border rounded-lg">
                              {symbol.text}
                            </p>
                            <p className="font-semibold">{symbol.name}</p>
                          </div>
                          <div className="py-1 px-2 border rounded-lg">
                            <p>{symbol.code}</p>
                          </div>
                        </div>
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

export default ScientificSymbols;
