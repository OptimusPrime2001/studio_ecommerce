"use client";

import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import orders from "@data/orders.json";

function getStatusVariant(
  status: string,
): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Completed":
      return "secondary"; // Use secondary for completed (green-like)
    case "Pending":
      return "outline"; // Use outline for pending (neutral)
    case "Rejected":
      return "destructive"; // Use destructive for rejected (red)
    case "Draft":
      return "outline"; // Use outline for draft (neutral)
    default:
      return "outline";
  }
}

export const LatestOrders = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Latest orders</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Pages
          </Button>
          <Button variant="default" size="sm">
            Download
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex gap-2">
            <Input placeholder="Search item" className="flex-1" />
            <Button variant="outline">Search</Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Order by</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total sum</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.slice(0, 6).map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <span className="text-primary font-medium">{order.id}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.date}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.customer}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status === "Completed" && "✓"} {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.total}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6">
          <Button variant="outline" className="w-full">
            View all orders
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
