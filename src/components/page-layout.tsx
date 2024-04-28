import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  description?: string;
  title: string;
};

export default function PageLayout({ children, title, description }: Props) {
  return (
    <div className="relative flex grow flex-col py-16">
      <div className="container relative flex grow flex-col px-4">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight  md:text-5xl">
          {title}
        </h1>
        <h2 className="font-medium text-muted-foreground leading-tight tracking-tight  md:text-xl">
          {description}
        </h2>
        <div className="mt-6  md:text-lg">{children}</div>
      </div>
    </div>
  );
}
