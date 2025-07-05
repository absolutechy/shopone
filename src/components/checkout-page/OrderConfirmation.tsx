"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { clearCart } from "@/lib/features/carts/cartsSlice";
import { resetCheckout } from "@/lib/features/checkout/checkoutSlice";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function OrderConfirmation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cart, adjustedTotalPrice } = useAppSelector((state) => state.carts);
  const { shippingAddress, shippingMethod, paymentMethod } = useAppSelector(
    (state) => state.checkout
  );

  const handlePlaceOrder = () => {
    // Here you would typically make an API call to create the order
    // For now, we'll just clear the cart and checkout state
    dispatch(clearCart());
    dispatch(resetCheckout());
    router.push("/shop"); // Redirect to shop page
  };

  if (!cart || !shippingAddress) return null;

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] border border-black/10 p-6 space-y-6">
        <h3 className="text-xl font-bold">Order Summary</h3>
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <img
                    src={item.srcUrl}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-0 right-0 bg-black text-white w-5 h-5 flex items-center justify-center rounded-bl-lg text-xs">
                    {item.quantity}
                  </div>
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="font-medium">
                ${item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>
        <hr className="border-t-black/10" />
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-black/60">Subtotal</span>
            <span className="font-medium">${adjustedTotalPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-black/60">Shipping</span>
            <span className="font-medium">
              {shippingMethod === "express" ? "$15.00" : "Free"}
            </span>
          </div>
          <hr className="border-t-black/10" />
          <div className="flex justify-between items-center">
            <span className="text-lg">Total</span>
            <span className="text-lg font-bold">
              ${shippingMethod === "express" ? adjustedTotalPrice + 15 : adjustedTotalPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border border-black/10 p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-black/40 mt-1" />
            <div>
              <h4 className="font-bold mb-2">Shipping Address</h4>
              <p className="text-black/60">
                {shippingAddress.firstName} {shippingAddress.lastName}
                <br />
                {shippingAddress.address}
                <br />
                {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                <br />
                {shippingAddress.country}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MdOutlineLocalShipping className="text-2xl text-black/40 mt-1" />
            <div>
              <h4 className="font-bold mb-2">Shipping Method</h4>
              <p className="text-black/60">
                {shippingMethod === "express" ? "Express Shipping" : "Standard Shipping"}
                <br />
                {shippingMethod === "express" ? "2-3 Business Days" : "5-7 Business Days"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handlePlaceOrder}
          className="text-sm md:text-base font-medium bg-black rounded-full w-full max-w-[200px] py-4 h-[54px] md:h-[60px] group"
        >
          Place Order{" "}
          <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
        </Button>
      </div>
    </div>
  );
} 