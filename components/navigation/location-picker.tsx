"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const POPULAR_LOCATIONS = [
  "New York, USA",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Sydney, Australia"
];

export function LocationPicker() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white/60 hover:text-orange-500">
          <MapPin className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <h4 className="font-medium mb-2">Popular Locations</h4>
          <p className="text-sm text-muted-foreground">
            Select your preferred destination
          </p>
        </div>
        <div className="p-2">
          {POPULAR_LOCATIONS.map((location) => (
            <Button
              key={location}
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-sm"
            >
              <MapPin className="mr-2 h-4 w-4" />
              {location}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}