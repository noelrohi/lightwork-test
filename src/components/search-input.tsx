import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export function SearchInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <div className="relative">
      <Input
        id="input-26"
        className={cn("peer pe-9 ps-9", className)}
        placeholder="Search..."
        type="search"
        {...props}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Search size={16} strokeWidth={2} />
      </div>
    </div>
  );
}
