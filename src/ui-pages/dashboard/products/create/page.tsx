"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

export default function CreateProductPage() {
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    stock: "",
    unit: "Pcs",
    regularPrice: "",
    salePrice: "",
    active: true,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleUnitChange = (value: string) => {
    setFormData((prev) => ({ ...prev, unit: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, active: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to products
            </Button>
          </Link>
        </div>

        {/* Form */}
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Create new
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base font-semibold">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Name of product"
                value={formData.title}
                onChange={handleInputChange}
                className="h-12"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="More information"
                value={formData.description}
                onChange={handleInputChange}
                className="min-h-32 resize-none"
              />
            </div>

            {/* Product Images */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Product images</Label>
              <div className="flex gap-4 flex-wrap">
                {/* Upload Area */}
                <label className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                  <div className="text-center">
                    <div className="text-3xl text-gray-400 mb-2">📷</div>
                    <span className="text-xs text-gray-500">Upload</span>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                {/* Image Previews */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Category and Tags */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category" className="text-base font-semibold">
                  Category
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger id="category" className="h-12">
                    <SelectValue placeholder="Automatic selection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="home">Home items</SelectItem>
                    <SelectItem value="food">Food and Drinks</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-base font-semibold">
                  Tags (comma separated)
                </Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="Tag name, Tag two, ..."
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>
            </div>

            {/* Stock and Unit */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="stock" className="text-base font-semibold">
                  In stock
                </Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  placeholder="Number"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="unit" className="text-base font-semibold">
                  Unit
                </Label>
                <Select value={formData.unit} onValueChange={handleUnitChange}>
                  <SelectTrigger id="unit" className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pcs">Pcs</SelectItem>
                    <SelectItem value="Box">Box</SelectItem>
                    <SelectItem value="Kg">Kg</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Prices */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="regularPrice"
                  className="text-base font-semibold"
                >
                  Price (regular)
                </Label>
                <Input
                  id="regularPrice"
                  name="regularPrice"
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  value={formData.regularPrice}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="salePrice" className="text-base font-semibold">
                  Sale price
                </Label>
                <Input
                  id="salePrice"
                  name="salePrice"
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  value={formData.salePrice}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>
            </div>

            {/* Active Checkbox */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="active"
                checked={formData.active}
                onCheckedChange={handleCheckboxChange}
              />
              <Label
                htmlFor="active"
                className="text-base font-semibold cursor-pointer"
              >
                Active product
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-base"
            >
              Submit product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
