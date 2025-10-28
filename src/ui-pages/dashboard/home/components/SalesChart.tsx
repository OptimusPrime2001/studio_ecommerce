"use client";

// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { month: "Jan", sales: 4 },
  { month: "Feb", sales: 3 },
  { month: "Mar", sales: 2 },
  { month: "Apr", sales: 5 },
  { month: "May", sales: 4 },
  { month: "Jun", sales: 6 },
  { month: "Jul", sales: 5 },
  { month: "Aug", sales: 8 },
  { month: "Sep", sales: 7 },
  { month: "Oct", sales: 9 },
  { month: "Nov", sales: 11 },
  { month: "Dec", sales: 15 },
];

export function SalesChart() {
  return (
    <Card className="bg-card flex-2">
      <CardHeader>
        <CardTitle>Sales growth chart</CardTitle>
        <CardDescription>Last 12 month</CardDescription>
      </CardHeader>
      <CardContent>Chart</CardContent>
    </Card>
  );
}
