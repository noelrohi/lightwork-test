import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Calendar, Edit, Trash2 } from "lucide-react";

export default function PresetQuotation() {
  const jobTypes = [
    {
      type: "Air Conditioning Repair",
      description: "Standard AC repair service including diagnostics, refrigerant...",
      basePrice: 150,
      additionalCharges: 50,
    },
    {
      type: "Plumbing Installation",
      description: "New plumbing system installation with repair of existing pipe...",
      basePrice: 200,
      additionalCharges: 75,
    },
    {
      type: "Electrical Wiring",
      description: "Residential electrical wiring service for both new installations...",
      basePrice: 180,
      additionalCharges: 60,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Preset Quotation</h1>
        <Button>Add Quote</Button>
      </div>
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">120</div>
          <div className="text-sm text-muted-foreground">Quotes</div>
        </div>
        <div className="flex-1 p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">320</div>
          <div className="text-sm text-muted-foreground">Line Items</div>
        </div>
        <div className="flex-1 p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">19</div>
          <div className="text-sm text-muted-foreground">Job Types</div>
        </div>
        <div className="flex-1 p-4 border rounded-lg text-center">
          <div className="text-2xl font-bold">500£</div>
          <div className="text-sm text-muted-foreground">Average Pricing</div>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <Input placeholder="Search..." className="flex-1" />
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
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Date Range
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead>Additional Charges</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobTypes.map((job) => (
            <TableRow key={job.type}>
              <TableCell>{job.type}</TableCell>
              <TableCell>{job.description}</TableCell>
              <TableCell>${job.basePrice}</TableCell>
              <TableCell>${job.additionalCharges}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
