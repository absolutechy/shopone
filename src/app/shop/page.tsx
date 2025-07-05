"use client";

import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { setAllProducts, setSortBy, applyFilters, setCategoryTypeFilter } from "@/lib/features/products/productsSlice";
import { useSearchParams } from "next/navigation";
import { CategoryType } from "@/types/product.types";

export default function ShopPage() {
  const dispatch = useAppDispatch();
  const { filteredProducts, sortBy } = useAppSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const searchParams = useSearchParams();

  useEffect(() => {
    // Combine all products and set them in the store
    const allProducts = [
      ...newArrivalsData,
      ...topSellingData,
      ...relatedProductData,
    ];
    dispatch(setAllProducts(allProducts));

    // Get category from URL params
    const category = searchParams.get("category") as CategoryType | null;
    if (category) {
      dispatch(setCategoryTypeFilter(category));
    } else {
      dispatch(setCategoryTypeFilter(null));
    }

    dispatch(applyFilters());
  }, [dispatch, searchParams]);

  // Calculate pagination
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleSortChange = (value: "most-popular" | "low-price" | "high-price") => {
    dispatch(setSortBy(value));
    dispatch(applyFilters());
  };

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">
                  {filteredProducts.length} Products
                </h1>
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalProducts)} of{" "}
                  {totalProducts} Products
                </span>
                <div className="flex items-center">
                  Sort by:{" "}
                  <Select 
                    value={sortBy}
                    onValueChange={handleSortChange}
                  >
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="low-price">Low Price</SelectItem>
                      <SelectItem value="high-price">High Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
            <hr className="border-t-black/10" />
            {totalPages > 1 && (
              <Pagination className="justify-between">
                <PaginationPrevious
                  href="#"
                  className="border border-black/10"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
                <PaginationContent>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .slice(0, 3)
                    .map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          className="text-black/50 font-medium text-sm"
                          isActive={currentPage === page}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  {totalPages > 3 && (
                    <PaginationItem>
                      <PaginationEllipsis className="text-black/50 font-medium text-sm" />
                    </PaginationItem>
                  )}
                  {totalPages > 3 &&
                    Array.from({ length: totalPages }, (_, i) => i + 1)
                      .slice(-3)
                      .map((page) => (
                        <PaginationItem key={page} className="hidden lg:block">
                          <PaginationLink
                            href="#"
                            className="text-black/50 font-medium text-sm"
                            isActive={currentPage === page}
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(page);
                            }}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                </PaginationContent>
                <PaginationNext
                  href="#"
                  className="border border-black/10"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
