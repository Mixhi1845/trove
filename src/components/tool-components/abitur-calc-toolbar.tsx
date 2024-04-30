"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { LuDownload, LuFileUp } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/icons";
import { statesConfig } from "@/config/states";

export function DataTableToolbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Select value="bayern">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Bayern" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {statesConfig.states.map((state) => (
                <SelectItem value={state.value} key={state.value}>
                  <p className="flex items-center">
                    <Icons.states.berlin className="size-4 mr-2" />
                    {/* {state.icon} */}
                    {state.title}
                  </p>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <LuFileUp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Import Values (.txt)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <LuDownload />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Backup Values (.txt)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
