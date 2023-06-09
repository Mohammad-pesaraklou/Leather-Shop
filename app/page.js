"use client";
import FeaturedProducts from "@/components/template/FeaturedProducts";
// components
import Home from "../components/modules/Home";
import Attributes from "@/components/template/Attributes";
export default function Main() {
  return (
    <div>
      <Home />
      <Attributes />
      <FeaturedProducts />
    </div>
  );
}
