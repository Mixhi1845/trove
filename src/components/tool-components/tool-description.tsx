import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import ScrollToToolLink from "@/lib/useSmoothScroll";

interface Description {
  title: string;
  className?: string;
  children: ReactNode;
  isTool?: boolean;
}

export default function ToolDescription({
  title,
  children,
  className,
  isTool = true,
}: Description) {
  return (
    <Card className={cn("mb-4 lg:max-w-3xl", className)}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {title}
          {isTool && <ScrollToToolLink />}
        </CardTitle>
      </CardHeader>
      <CardContent className="prose">{children}</CardContent>
    </Card>
  );
}
