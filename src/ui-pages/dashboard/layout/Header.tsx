"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-10 bg-muted border-0" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">My account</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
