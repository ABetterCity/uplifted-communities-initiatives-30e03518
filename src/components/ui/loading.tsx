
import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="animate-pulse">Loading...</div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="w-full space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
    </div>
  );
}
