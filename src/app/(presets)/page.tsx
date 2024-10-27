"use client";

import { DatePickerWithRange } from "@/components/daterange-picker";
import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BEARER_TOKEN } from "@/constants";
import { presetQuotation } from "@/data/preset-quotation";
import { useSuspenseQuery } from "@tanstack/react-query";
import { EditIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { parseAsStringEnum, useQueryState } from "nuqs";

export default function Page() {
  const [type] = useQueryState(
    "type",
    parseAsStringEnum(["fixed", "hourly"])
      .withOptions({
        clearOnDefault: true,
        history: "replace",
      })
      .withDefault("fixed"),
  );

  const { data: presets } = useSuspenseQuery({
    queryKey: ["presets"],
    queryFn: async () => {
      try {
        const data = await presetQuotation.getAllPresets({
          contractorId: "6701dd90778f1dc710cc53bb",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        });
        return data as Array<{
          type: string;
          description: string;
          basePrice: number;
          additionalCharges: number;
        }>;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Preset Quotation</h1>
        <Button size="sm" className="w-[8rem]">
          Add Quote
        </Button>
      </div>
      <div className="border-b flex gap-6">
        <Link
          href="/?type=fixed"
          data-state={type === "fixed" ? "active" : "inactive"}
          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground pb-2 data-[state=active]:font-semibold text-muted-foreground data-[state=active]:text-foreground"
        >
          Fixed
        </Link>
        <Link
          href="/?type=hourly"
          data-state={type === "hourly" ? "active" : "inactive"}
          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground pb-2 data-[state=active]:font-semibold text-muted-foreground data-[state=active]:text-foreground"
        >
          Hourly
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {[
          { description: "120", title: "Quotes" },
          { description: "320", title: "Line Items" },
          { description: "19", title: "Job Types" },
          { description: "500£", title: "Average Pricing" },
        ].map((item) => (
          <PageCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="flex space-x-4">
        <SearchInput containerClassName="flex-1" placeholder="Search..." />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fixed">Fixed</SelectItem>
            <SelectItem value="hourly">Hourly</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead className="whitespace-nowrap">Additional Charges</TableHead>
            <TableHead className="whitespace-nowrap">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {presets.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No Data
              </TableCell>
            </TableRow>
          ) : (
            presets.map((job) => (
              <TableRow key={job.type}>
                <TableCell className="whitespace-nowrap">{job.type}</TableCell>
                <TableCell className="truncate max-w-[25rem]">{job.description}</TableCell>
                <TableCell>${job.basePrice}</TableCell>
                <TableCell className="whitespace-nowrap">${job.additionalCharges}</TableCell>
                <TableCell className="flex gap-2 flex-nowrap">
                  <Button variant="outline" size="sm">
                    <EditIcon className="h-4 w-4" />
                    <span className="text-xs">Edit</span>
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2Icon className="h-4 w-4" />
                    <span className="text-xs">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function PageCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardContent className="pt-4 pb-4">
        <div className="font-medium">{title}</div>
        <div className="font-semibold text-2xl">{description}</div>
      </CardContent>
    </Card>
  );
}
