"use client";

import React, { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Match } from "@/lib/ui/match";
import copy from "copy-to-clipboard";
import { FaCheck, FaCopy } from "react-icons/fa";

interface SymbolData {
  [category: string]: string[];
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
      })
      .catch((error) => {
        console.error("Error fetching symbols:", error);
      });
  }, []);

  const handleSymbolClick = (category: string, index: number) => {
    copy(symbols[category][index]);
    setSelectedSymbols({ ...selectedSymbols, [category]: index });
  };

  const filteredSymbols =
    value !== "" && symbols[value] ? { [value]: symbols[value] } : symbols;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Object.keys(filteredSymbols).map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{category}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-7 md:grid-cols-4 lg:grid-cols-7">
              {filteredSymbols[category].map(
                (symbol: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleSymbolClick(category, index)}
                    className="group shadow grid aspect-square cursor-pointer grid-rows-3 flex-col items-center  rounded-md border border-input bg-background p-2 transition hover:bg-muted"
                  >
                    <span className="ml-auto text-sm text-transparent transition duration-75 group-hover:text-foreground/75 group-hover:text-opacity-100">
                      <Match
                        value={
                          selectedSymbols[category] === index
                            ? "copied"
                            : "copy"
                        }
                        copy={() => <FaCopy />}
                        copied={() => <FaCheck />}
                      />
                    </span>
                    <span className="flex cursor-pointer justify-center text-xl">
                      {symbol}
                    </span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ScientificSymbols;

{
  /*<div className="mb-6 flex items-center ">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="size-auto justify-between p-1 pr-2 text-3xl"
            >
              <CaretSortIcon className="mr-2 size-4 shrink-0 opacity-50" />
              <span className="text-primary">{value ? value : "All"}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="h-auto p-0 text-xl">
            <Command>
              <CommandInput placeholder="Search category..." className="h-9" />
              <CommandEmpty>No symbol found.</CommandEmpty>
              <CommandGroup>
                {symbols &&
                  Object.keys(symbols).map((category) => (
                    <CommandItem
                      key={category}
                      value={category}
                      onSelect={(currentValue: string) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {category}
                      <CheckIcon
                        className={
                          value === category
                            ? "ml-auto size-4 opacity-100"
                            : "ml-auto size-4 opacity-0"
                        }
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <h1 className="pl-1 text-3xl">Symbols</h1>
      </div>*/
}
