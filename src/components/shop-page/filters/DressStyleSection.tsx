"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { setDressStyleFilter, applyFilters } from "@/lib/features/products/productsSlice";
import { cn } from "@/lib/utils";

type DressStyle = {
  title: string;
  value: string;
};

const dressStylesData: DressStyle[] = [
  {
    title: "Casual",
    value: "Casual",
  },
  {
    title: "Formal",
    value: "Formal",
  },
  {
    title: "Party",
    value: "Party",
  },
  {
    title: "Gym",
    value: "Gym",
  },
];

const DressStyleSection = () => {
  const dispatch = useAppDispatch();
  const { activeFilters } = useAppSelector((state) => state.products);

  const handleStyleClick = (style: string) => {
    dispatch(setDressStyleFilter(activeFilters.dressStyle === style ? null : style));
    dispatch(applyFilters());
  };

  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Dress Style
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col text-black/60 space-y-0.5">
            {dressStylesData.map((dStyle, idx) => (
              <button
                key={idx}
                onClick={() => handleStyleClick(dStyle.value)}
                className={cn(
                  "flex items-center justify-between py-2 w-full text-left transition-colors hover:text-black",
                  activeFilters.dressStyle === dStyle.value ? "text-black font-medium" : "text-black/60"
                )}
              >
                {dStyle.title} <MdKeyboardArrowRight className={cn(
                  "transition-transform",
                  activeFilters.dressStyle === dStyle.value && "transform rotate-90"
                )} />
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DressStyleSection;
