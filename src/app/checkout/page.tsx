"use client";

import BreadcrumbCheckout from "@/components/checkout-page/BreadcrumbCheckout";
import ShippingForm from "@/components/checkout-page/ShippingForm";
import PaymentForm from "@/components/checkout-page/PaymentForm";
import OrderConfirmation from "@/components/checkout-page/OrderConfirmation";
import { useAppSelector } from "@/lib/hooks/redux";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const { step } = useAppSelector((state) => state.checkout);
  const { cart } = useAppSelector((state) => state.carts);

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (!cart || cart.items.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

  if (!cart || cart.items.length === 0) return null;

  const renderStep = () => {
    switch (step) {
      case "shipping":
        return <ShippingForm />;
      case "payment":
        return <PaymentForm />;
      case "confirmation":
        return <OrderConfirmation />;
      default:
        return <ShippingForm />;
    }
  };

  const stepTitle = () => {
    switch (step) {
      case "shipping":
        return "Shipping Information";
      case "payment":
        return "Payment Method";
      case "confirmation":
        return "Order Confirmation";
      default:
        return "Checkout";
    }
  };

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbCheckout />
        <h2
          className={cn([
            integralCF.className,
            "font-bold text-[32px] md:text-[40px] text-black uppercase mb-8",
          ])}
        >
          {stepTitle()}
        </h2>
        <div className="max-w-[800px]">
          {renderStep()}
        </div>
      </div>
    </main>
  );
} 