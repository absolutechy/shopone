"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { setSizeFilters } from "@/lib/features/products/productsSlice";
import { SIZES } from "@/types/product.types";

const SizeSection = () => {
  const dispatch = useAppDispatch();
  const { activeFilters } = useAppSelector((state) => state.products);

  const toggleSize = (size: string) => {
    const newSizes = activeFilters.sizes.includes(size)
      ? activeFilters.sizes.filter((s) => s !== size)
      : [...activeFilters.sizes, size];
    dispatch(setSizeFilters(newSizes));
  };

  return (
    <Accordion type="single" collapsible defaultValue="filter-size">
      <AccordionItem value="filter-size" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Size
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex items-center flex-wrap">
            {SIZES.map((size, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  "bg-[#F0F0F0] m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px]",
                  activeFilters.sizes.includes(size) && "bg-black font-medium text-white",
                ])}
                onClick={() => toggleSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SizeSection;
