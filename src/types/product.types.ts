export type Discount = {
  amount: number;
  percentage: number;
};

export type Color = {
  name: string;
  code: string;
};

export type CategoryType = "men" | "women" | "kids" | "bags";

export type Category = {
  title: string;
  slug: string;
  type: CategoryType;
};

export type DressStyle = {
  title: string;
  slug: string;
};

export const SIZES = ["Small", "Medium", "Large", "X-Large"] as const;
export const BAG_SIZES = ["Small", "Medium", "Large"] as const;
export type Size = typeof SIZES[number];
export type BagSize = typeof BAG_SIZES[number];

export type BaseProduct = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
  colors: Color[];
  category: Category;
};

export type ClothingProduct = BaseProduct & {
  size: Size[];
  dressStyle: DressStyle;
};

export type BagProduct = BaseProduct & {
  size: BagSize[];
  material: string;
  capacity: string;
};

export type Product = ClothingProduct | BagProduct;

// Type guard to check if a product is a bag
export const isBagProduct = (product: Product): product is BagProduct => {
  return product.category.type === "bags";
};
