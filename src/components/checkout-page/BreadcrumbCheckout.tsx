"use client";

import { useAppSelector } from "@/lib/hooks/redux";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BreadcrumbCheckout() {
  const { step } = useAppSelector((state) => state.checkout);

  return (
    <nav className="mb-5 md:mb-6">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/cart" className="text-black/60 hover:text-black transition-colors">
            Cart
          </Link>
        </li>
        <span className="text-black/60">/</span>
        <li>
          <Link 
            href="/checkout" 
            className={cn(
              "transition-colors",
              step === "shipping" ? "text-black font-medium" : "text-black/60 hover:text-black"
            )}
          >
            Shipping
          </Link>
        </li>
        <span className="text-black/60">/</span>
        <li>
          <Link 
            href="/checkout" 
            className={cn(
              "transition-colors",
              step === "payment" ? "text-black font-medium" : "text-black/60 hover:text-black"
            )}
          >
            Payment
          </Link>
        </li>
        <span className="text-black/60">/</span>
        <li>
          <Link 
            href="/checkout" 
            className={cn(
              "transition-colors",
              step === "confirmation" ? "text-black font-medium" : "text-black/60 hover:text-black"
            )}
          >
            Confirmation
          </Link>
        </li>
      </ol>
    </nav>
  );
} 