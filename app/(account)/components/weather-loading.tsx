import { Skeleton } from "@/components/ui/skeleton";

export function WeatherLoading() {
  return (
    <div className="p-6">
      <div className="flex  justify-start flex-col space-y-4">
        <Skeleton className="h-[24px] w-[230px] rounded-sm" />
        <Skeleton className="h-4 w-[230px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-[36px] w-[114px] rounded-3xl" />
      </div>
    </div>
  );
}
