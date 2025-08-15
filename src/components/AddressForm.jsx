"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { Router } from "next/router";

const AddressForm = ({ setShippingForm }) => {
  // Form validation schema using Zod
  const addressSchema = z.object({
    fullName: z.string().min(3, "Full Name must be at least 3 characters"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(1, "State is required"),
    pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
    phoneNumber: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
    address: z.string().min(1, "Address is required"),
    landmark: z.string().optional(),
  });

  //Initialize the form with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
  });

  //function runs if the form passes validation
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const router = useRouter();

  //handle form submission
  const handleShippingForm = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <div className="w-full mx-auto p-6  rounded-lg ">
      <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
      <form className="space-y-4" onSubmit={handleSubmit(handleShippingForm)}>
        {/* Full Name */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            {...register("fullName")}
            type="text"
            id="fullName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   "
            placeholder="Aryan Nandanwar"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="city"
          >
            City
          </label>
          <input
            {...register("city")}
            type="text"
            id="city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  "
            placeholder="Nagpur"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="state"
          >
            State
          </label>
          <select
            {...register("state")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   "
            id="state"
            defaultValue="MH"
          >
            <option value="">Select State</option>
            <option value="MH">Maharashtra</option>
            <option value="DL">Delhi</option>
            <option value="KA">Karnataka</option>
            <option value="TN">Tamil Nadu</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="GJ">Gujarat</option>
            <option value="RJ">Rajasthan</option>
            <option value="WB">West Bengal</option>
            <option value="PB">Punjab</option>
            <option value="KL">Kerala</option>
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>

        {/* Pincode */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <input
            {...register("pincode")}
            type="text"
            maxLength="6"
            id="pincode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  "
            placeholder="440001"
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm">{errors.pincode.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  "
            id="phoneNumber"
            placeholder="+91 0000000000"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Address Line 1 */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Address
          </label>
          <input
            {...register("address")}
            type="text"
            id="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   "
            placeholder="Flat / House No., Building Name"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Landmark */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="landmark"
          >
            Landmark (Optional)
          </label>
          <input
            {...register("landmark")}
            type="text"
            id="landmark"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   "
            placeholder="Near Big Bazaar"
          />
          {errors.landmark && (
            <p className="text-red-500 text-sm">{errors.landmark.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-2  hover:text-white hover:bg-black transition-all duration-300 rounded-xl cursor-pointer"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
