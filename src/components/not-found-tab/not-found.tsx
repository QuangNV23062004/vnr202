"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-white text-gray-800 px-4 gap-20">
      {/* Google logo */}
      <div>
        {" "}
        <h1
          className="text-[70px] font-bold mb-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </h1>
        {/* Error text */}
        <div className="text-left max-w-lg">
          <h2 className="text-xl font-semibold">
            <span className="text-gray-900">404.</span> That’s an error.
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The requested URL was not found on this server.{" "}
            <span className="text-gray-500">That’s all we know.</span>
          </p>
        </div>
      </div>

      {/* Illustration placeholder */}
      <div className="mt-10">
        <Image
          width={200}
          height={200}
          src={"/google_not_found-removebg.png"}
          alt="Google 404 illustration"
        />
      </div>
    </div>
  );
}
