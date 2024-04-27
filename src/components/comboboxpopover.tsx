"use client";

import * as React from "react";

import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboboxOption = {
  value: string;
  label: string;
  description?: string;
};

type ComboboxPopoverProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: ComboboxOption[];
  trial: string;
};

export function ComboboxPopover({
  value,
  onValueChange,
  options,
  trial,
}: ComboboxPopoverProps) {
  const [open, setOpen] = React.useState(false);
  const selectedOption =
    options.find((option) => option.value === value) || null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-[125px] justify-start"
          onClick={() => setOpen(true)}
        >
          {selectedOption ? <>{selectedOption.label}</> : <>+ Select a plan</>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(value) => {
                    onValueChange(value);
                    setOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {option.description && (
                    <span className="text-sm ml-2 text-muted-foreground">
                      {option.description}
                    </span>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
            <Separator />
            <div className="px-2 py-1.5 leading-none">
              <p className="text-xs text-muted-foreground">Trial</p>
              <p>{trial}</p>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
