import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-full flex justify-center items-center">
      <Loader2Icon className="animate-spin size-10" />
    </div>
  );
}
