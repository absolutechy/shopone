"use client";

import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { setCategoryFilter, setCategoryTypeFilter, applyFilters } from "@/lib/features/products/productsSlice";
import { cn } from "@/lib/utils";
import { CategoryType } from "@/types/product.types";

type Category = {
  title: string;
  slug: string;
  type?: CategoryType;
};

const categoriesData: Category[] = [
  {
    title: "Men",
    slug: "/shop?category=men",
    type: "men",
  },
  {
    title: "Women",
    slug: "/shop?category=women",
    type: "women",
  },
  {
    title: "Kids",
    slug: "/shop?category=kids",
    type: "kids",
  },
  {
    title: "Bags",
    slug: "/shop?category=bags",
    type: "bags",
  },
  {
    title: "T-shirts",
    slug: "/shop?category=t-shirts",
  },
  {
    title: "Shorts",
    slug: "/shop?category=shorts",
  },
  {
    title: "Shirts",
    slug: "/shop?category=shirts",
  },
  {
    title: "Hoodie",
    slug: "/shop?category=hoodie",
  },
  {
    title: "Jeans",
    slug: "/shop?category=jeans",
  },
];

const CategoriesSection = () => {
  const dispatch = useAppDispatch();
  const { activeFilters } = useAppSelector((state) => state.products);

  const handleCategoryClick = (e: React.MouseEvent, category: Category) => {
    e.preventDefault();
    if (category.type) {
      const newCategoryType = activeFilters.categoryType === category.type ? null : category.type;
      dispatch(setCategoryTypeFilter(newCategoryType));
      dispatch(setCategoryFilter(null)); // Reset category filter when type is selected
    } else {
      const newCategory = activeFilters.category === category.title ? null : category.title;
      dispatch(setCategoryFilter(newCategory));
      dispatch(setCategoryTypeFilter(null)); // Reset type filter when category is selected
    }
    dispatch(applyFilters());
  };

  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {/* Category Types */}
      <div className="mb-4">
        <h3 className="font-medium text-black mb-2">Categories</h3>
        {categoriesData.filter(cat => cat.type).map((category, idx) => (
          <button
            key={idx}
            type="button"
            className={cn(
              "flex items-center justify-between py-2 text-left w-full",
              activeFilters.categoryType === category.type && "text-black font-medium"
            )}
            onClick={(e) => handleCategoryClick(e, category)}
          >
            {category.title} <MdKeyboardArrowRight />
          </button>
        ))}
      </div>

      {/* Product Categories */}
      <div>
        <h3 className="font-medium text-black mb-2">Product Types</h3>
        {categoriesData.filter(cat => !cat.type).map((category, idx) => (
          <button
            key={idx}
            type="button"
            className={cn(
              "flex items-center justify-between py-2 text-left w-full",
              activeFilters.category === category.title && "text-black font-medium"
            )}
            onClick={(e) => handleCategoryClick(e, category)}
          >
            {category.title} <MdKeyboardArrowRight />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
