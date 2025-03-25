
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
      <div className="bg-white rounded-lg shadow p-4 border-b">
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2 p-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
        </div>
        <Skeleton className="h-14 w-full" />
      </div>
    </div>
  );
}
