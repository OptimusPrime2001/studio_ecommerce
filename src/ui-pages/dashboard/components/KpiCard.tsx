"use client";

import { Card, CardContent } from "@components/ui/card";
import kpis from "@data/kpis.json";
import { DollarSign, Eye, ShoppingBag, Users } from "lucide-react";

const iconMap: Record<string, any> = {
  ShoppingBag,
  DollarSign,
  Eye,
  Users,
};

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => {
        const Icon = iconMap[kpi.icon];
        return (
          <Card key={kpi.title} className="bg-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    {kpi.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground mb-2">
                    {kpi.value}
                  </p>
                  <p
                    className={`text-xs ${kpi.positive ? "text-green-600" : "text-red-600"}`}
                  >
                    {kpi.change}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg ${kpi.positive ? "bg-blue-100" : "bg-red-100"}`}
                >
                  <Icon
                    className={`w-6 h-6 ${kpi.positive ? "text-blue-600" : "text-red-600"}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
