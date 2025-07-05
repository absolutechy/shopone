"use client";

import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { useAppDispatch } from "@/lib/hooks/redux";
import { setShippingAddress, setShippingMethod } from "@/lib/features/checkout/checkoutSlice";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ShippingForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setShippingAddress(formData));
    dispatch(setShippingMethod("standard")); // Default to standard shipping
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </InputGroup>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputGroup>
          <InputGroup.Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </InputGroup>
      </div>
      <InputGroup>
        <InputGroup.Input
          type="text"
          name="address"
          placeholder="Address"
          required
          value={formData.address}
          onChange={handleInputChange}
        />
      </InputGroup>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="state"
            placeholder="State"
            required
            value={formData.state}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            required
            value={formData.zipCode}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="country"
            placeholder="Country"
            required
            value={formData.country}
            onChange={handleInputChange}
          />
        </InputGroup>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          className="text-sm md:text-base font-medium bg-black rounded-full w-full max-w-[200px] py-4 h-[54px] md:h-[60px] group"
        >
          Continue to Payment{" "}
          <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
        </Button>
      </div>
    </form>
  );
} 