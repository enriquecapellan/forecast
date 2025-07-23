"use client";

import { useState, useTransition } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";

export function SearchForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const address = formData.get("address")?.toString().trim();

    if (!address) return;

    setInputDisabled(true);

    const params = new URLSearchParams({ address });

    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
      router.push(`/?${params.toString()}`);
      setInputDisabled(false);
    });
  };

  return (
    <form className="space-y-4 mb-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Enter US Address
        </Label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Input
              id="address"
              type="text"
              placeholder="e.g., 123 Main St, New York, NY 10001 or Los Angeles, CA"
              name="address"
              className="pl-10 pr-4 py-2 w-full"
              disabled={inputDisabled}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <Button type="submit" className="px-6" disabled={isPending}>
            {isPending ? "Loading..." : "Get Forecast"}
          </Button>
        </div>
      </div>
    </form>
  );
}
