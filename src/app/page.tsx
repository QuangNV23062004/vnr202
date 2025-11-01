"use client";
import Image from "next/image";
import TabProvider from "../context/tab-context";
import TabLayout from "@/components/tab-components/tab-layout";

export default function Home() {
  return (
    <TabProvider>
      <TabLayout />
    </TabProvider>
  );
}
