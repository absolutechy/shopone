import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ShippingAddress = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type PaymentMethod = "credit_card" | "paypal" | "apple_pay" | "google_pay";

export type CheckoutState = {
  shippingAddress: ShippingAddress | null;
  paymentMethod: PaymentMethod | null;
  shippingMethod: "standard" | "express" | null;
  step: "shipping" | "payment" | "confirmation";
};

const initialState: CheckoutState = {
  shippingAddress: null,
  paymentMethod: null,
  shippingMethod: null,
  step: "shipping",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload;
      state.step = "payment";
    },
    setPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload;
      state.step = "confirmation";
    },
    setShippingMethod: (state, action: PayloadAction<"standard" | "express">) => {
      state.shippingMethod = action.payload;
    },
    resetCheckout: (state) => {
      state.shippingAddress = null;
      state.paymentMethod = null;
      state.shippingMethod = null;
      state.step = "shipping";
    },
    setStep: (state, action: PayloadAction<CheckoutState["step"]>) => {
      state.step = action.payload;
    },
  },
});

export const {
  setShippingAddress,
  setPaymentMethod,
  setShippingMethod,
  resetCheckout,
  setStep,
} = checkoutSlice.actions;

export default checkoutSlice.reducer; 