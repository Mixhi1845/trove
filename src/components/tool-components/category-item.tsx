import Link from "next/link";
import { ReactNode } from "react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

type Props = {
  badge?: ReactNode;
  route: string;
  toolname: string;
};

export default function CategoryItem({ badge, route, toolname }: Props) {
  return (
    <Link
      className="group flex items-center text-muted-foreground transition-colors hover:text-foreground/80 "
      href={route}
    >
      <span className="flex items-center ">
        {toolname}
        {badge && (
          <Badge
            className="ml-2 text-muted-foreground transition-colors group-hover:text-foreground/80"
            variant="outline"
          >
            {badge}
          </Badge>
        )}
      </span>
    </Link>
  );
}
