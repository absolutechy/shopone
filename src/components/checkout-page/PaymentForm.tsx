"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks/redux";
import { setPaymentMethod } from "@/lib/features/checkout/checkoutSlice";
import { PaymentMethod } from "@/lib/features/checkout/checkoutSlice";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const paymentMethods: { id: PaymentMethod; label: string; icon: string }[] = [
  {
    id: "credit_card",
    label: "Credit Card",
    icon: "/icons/mastercard.svg",
  },
  {
    id: "paypal",
    label: "PayPal",
    icon: "/icons/paypal.svg",
  },
  {
    id: "apple_pay",
    label: "Apple Pay",
    icon: "/icons/applePay.svg",
  },
  {
    id: "google_pay",
    label: "Google Pay",
    icon: "/icons/googlePay.svg",
  },
];

export default function PaymentForm() {
  const dispatch = useAppDispatch();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("credit_card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setPaymentMethod(selectedMethod));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => setSelectedMethod(method.id)}
            className={cn(
              "flex items-center space-x-4 p-4 rounded-[20px] border transition-all",
              selectedMethod === method.id
                ? "border-black"
                : "border-black/10 hover:border-black/30"
            )}
          >
            <div className="w-12 h-12 relative">
              <Image
                src={method.icon}
                alt={method.label}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-medium">{method.label}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          className="text-sm md:text-base font-medium bg-black rounded-full w-full max-w-[200px] py-4 h-[54px] md:h-[60px] group"
        >
          Review Order{" "}
          <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
        </Button>
      </div>
    </form>
  );
} 