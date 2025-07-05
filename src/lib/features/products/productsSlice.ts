import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, isBagProduct, CategoryType } from "@/types/product.types";

export type Color = {
  name: string;
  code: string;
};

export type PriceRange = {
  min: number;
  max: number;
};

// Define a type for the slice state
interface ProductsState {
  colorSelection: Color;
  sizeSelection: string;
  // Filter states
  filteredProducts: Product[];
  allProducts: Product[];
  activeFilters: {
    category: string | null;
    categoryType: CategoryType | null;
    colors: string[];
    sizes: string[];
    dressStyle: string | null;
    priceRange: PriceRange;
  };
  sortBy: "most-popular" | "low-price" | "high-price";
}

// Define the initial state using that type
const initialState: ProductsState = {
  colorSelection: {
    name: "Brown",
    code: "bg-[#4F4631]",
  },
  sizeSelection: "Large",
  filteredProducts: [],
  allProducts: [],
  activeFilters: {
    category: null,
    categoryType: null,
    colors: [],
    sizes: [],
    dressStyle: null,
    priceRange: { min: 0, max: 1000 },
  },
  sortBy: "most-popular",
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setColorSelection: (state, action: PayloadAction<Color>) => {
      state.colorSelection = action.payload;
    },
    setSizeSelection: (state, action: PayloadAction<string>) => {
      state.sizeSelection = action.payload;
    },
    // Filter actions
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string | null>) => {
      state.activeFilters.category = action.payload;
    },
    setCategoryTypeFilter: (state, action: PayloadAction<CategoryType | null>) => {
      state.activeFilters.categoryType = action.payload;
    },
    setColorFilters: (state, action: PayloadAction<string[]>) => {
      state.activeFilters.colors = action.payload;
    },
    setSizeFilters: (state, action: PayloadAction<string[]>) => {
      state.activeFilters.sizes = action.payload;
    },
    setDressStyleFilter: (state, action: PayloadAction<string | null>) => {
      state.activeFilters.dressStyle = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<PriceRange>) => {
      state.activeFilters.priceRange = action.payload;
    },
    setSortBy: (state, action: PayloadAction<"most-popular" | "low-price" | "high-price">) => {
      state.sortBy = action.payload;
    },
    applyFilters: (state) => {
      let filtered = [...state.allProducts];

      // Apply category filter
      if (state.activeFilters.category) {
        filtered = filtered.filter(
          (product) => product.category.title === state.activeFilters.category
        );
      }

      // Apply category type filter
      if (state.activeFilters.categoryType) {
        filtered = filtered.filter(
          (product) => product.category.type === state.activeFilters.categoryType
        );
      }

      // Apply color filters
      if (state.activeFilters.colors.length > 0) {
        filtered = filtered.filter((product) =>
          product.colors.some((color) =>
            state.activeFilters.colors.includes(color.name)
          )
        );
      }

      // Apply size filters
      if (state.activeFilters.sizes.length > 0) {
        filtered = filtered.filter((product) =>
          product.size.some((size) =>
            state.activeFilters.sizes.includes(size)
          )
        );
      }

      // Apply dress style filter
      if (state.activeFilters.dressStyle) {
        filtered = filtered.filter(
          (product) => !isBagProduct(product) && product.dressStyle.title === state.activeFilters.dressStyle
        );
      }

      // Apply price range filter
      filtered = filtered.filter(
        (product) =>
          product.price >= state.activeFilters.priceRange.min &&
          product.price <= state.activeFilters.priceRange.max
      );

      // Apply sorting
      switch (state.sortBy) {
        case "low-price":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "high-price":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "most-popular":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
      }

      state.filteredProducts = filtered;
    },
    resetFilters: (state) => {
      state.activeFilters = initialState.activeFilters;
      state.sortBy = initialState.sortBy;
      state.filteredProducts = state.allProducts;
    },
  },
});

export const {
  setColorSelection,
  setSizeSelection,
  setAllProducts,
  setCategoryFilter,
  setCategoryTypeFilter,
  setColorFilters,
  setSizeFilters,
  setDressStyleFilter,
  setPriceRange,
  setSortBy,
  applyFilters,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
