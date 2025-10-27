"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import orders from "@/data/orders.json";

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-orange-100 text-orange-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    case "Draft":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export function LatestOrders() {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Latest orders</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Pages
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-foreground text-background"
          >
            Download
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          <div className="flex gap-2">
            <Input placeholder="Search item" className="flex-1" />
            <Button variant="outline">Search</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  Order by
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  Total sum
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 6).map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">
                      {order.id}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {order.date}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {order.customer}
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={`${getStatusColor(order.status)}`}>
                      {order.status === "Completed" && "✓"} {order.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {order.total}
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      View detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Button variant="outline" className="w-full bg-transparent">
            View all orders
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
