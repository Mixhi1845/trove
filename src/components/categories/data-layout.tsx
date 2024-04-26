import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function DataIDLayout({ children, title }: Props) {
  return (
    <div className="relative flex grow flex-col py-16">
      <div className="container relative flex grow flex-col px-4">
        <div className="h-[8vmax] border rounded-lg bg-muted">
          <div className="flex h-full items-center justify-center">
            <span>Create Connection: panoramic image</span>
          </div>
        </div>
        <div className="mt-6  md:text-lg">{children}</div>
      </div>
    </div>
  );
}
