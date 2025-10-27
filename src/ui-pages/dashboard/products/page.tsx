"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import products from "@/data/products.json";
import { ChevronDown, Plus, Search, Trash2, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const toggleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((p) => p.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const getStatusColor = (status: string) => {
    if (status === "Active") return "bg-green-100 text-green-700";
    return "bg-red-100 text-red-700";
  };

  const getInventoryColor = (inventory: string) => {
    const count = Number.parseInt(inventory);
    if (count === 0) return "text-red-600";
    if (count < 10) return "text-orange-600";
    return "text-gray-600";
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search item" className="pl-10" />
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ChevronDown className="w-4 h-4" />
              All categories
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <ChevronDown className="w-4 h-4" />
              Status: any
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Upload className="w-4 h-4" />
              Import file
            </Button>
            <Link href="/products/create">
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add product
              </Button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border bg-muted/50">
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    checked={selectedProducts.length === products.length}
                    onChange={toggleSelectAll}
                    className="rounded"
                  />
                </TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => toggleSelect(product.id)}
                      className="rounded"
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-10 h-10 rounded bg-muted"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        {product.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        product.status,
                      )}`}
                    >
                      {product.status === "Active" ? "✓" : "✕"} {product.status}
                    </span>
                  </TableCell>
                  <TableCell
                    className={`text-sm ${getInventoryColor(product.inventory)}`}
                  >
                    {product.inventory}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-foreground">
                    {product.price}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </Link>
                      <Link href={`/products/${product.id}/edit`}>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
