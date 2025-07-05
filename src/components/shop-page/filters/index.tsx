"use client";

import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks/redux";
import { applyFilters, resetFilters } from "@/lib/features/products/productsSlice";

const Filters = () => {
  const dispatch = useAppDispatch();

  const handleApplyFilters = () => {
    dispatch(applyFilters());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <div className="flex gap-2">
        <Button
          type="button"
          className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
          onClick={handleApplyFilters}
        >
          Apply Filter
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-12 rounded-full h-12 flex items-center justify-center"
          onClick={handleResetFilters}
        >
          ×
        </Button>
      </div>
    </>
  );
};

export default Filters;
