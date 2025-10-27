"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import topProducts from "@/data/top-products.json";

const ListProducts = () => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Top selling products</CardTitle>
        <CardDescription>From 2025 Jan - 2025 Dec</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map( ( product, index ) => (
            <div
              key={product.id}
              className="flex items-start gap-3 pb-4 border-b border-border last:border-0"
            >
              <span className="text-sm font-medium text-muted-foreground w-6">
                {index + 1}.
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {product.name}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    {product.pcs} pcs
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ) )}
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            View more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default ListProducts;