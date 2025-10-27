"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Star } from "lucide-react";
import Link from "next/link";

// Mock product data - in a real app, this would come from a database
const productData = {
  1: {
    id: 1,
    title: "Boston Round Cream Pack",
    category: "Electronics",
    price: "$228.00",
    salePrice: "$180.00",
    rating: 4.5,
    reviews: 128,
    status: "Active",
    stock: 32,
    description:
      "Premium quality cream pack with advanced formulation. Perfect for daily skincare routine. Contains natural ingredients and is dermatologically tested.",
    images: ["/cream-pack.jpg", "/cream-pack.jpg", "/cream-pack.jpg"],
    specifications: {
      weight: "250g",
      material: "Glass",
      color: "Transparent",
      warranty: "1 Year",
    },
  },
  2: {
    id: 2,
    title: "Cutting-edge device title goes here",
    category: "Home items",
    price: "$21.00",
    salePrice: "$18.50",
    rating: 4.2,
    reviews: 95,
    status: "Active",
    stock: 32,
    description:
      "High-quality home device with modern design and excellent functionality.",
    images: ["/modern-tech-devices.png", "/modern-tech-devices.png"],
    specifications: {
      weight: "500g",
      material: "Plastic",
      color: "Black",
      warranty: "2 Years",
    },
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = productData[params.id as keyof typeof productData];

  if (!product) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to products
            </Button>
          </Link>
          <Link href={`/products/${product.id}/edit`}>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Edit Product
            </Button>
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Images */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Status */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-foreground">
                  {product.title}
                </h1>
                <Badge
                  className={
                    product.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }
                >
                  {product.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{product.category}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-foreground">
                  {product.salePrice}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {product.price}
                </span>
              </div>
              <p className="text-sm text-green-600">
                Save{" "}
                {Math.round(
                  ((Number.parseFloat(product.price.replace("$", "")) -
                    Number.parseFloat(product.salePrice.replace("$", ""))) /
                    Number.parseFloat(product.price.replace("$", ""))) *
                    100,
                )}
                %
              </p>
            </div>

            {/* Stock */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">
                Availability
              </p>
              <p className="text-sm text-muted-foreground">
                {product.stock} in stock
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">
                Description
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="space-y-4 pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground">
                Specifications
              </p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-xs text-muted-foreground capitalize">
                      {key}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 h-12">
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 h-12 bg-transparent">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
