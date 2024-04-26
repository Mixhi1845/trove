"use client";

import { useEffect } from "react";
import PageLayout from "@/components/page-layout";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout title="Something went wrong!">
      <div>
        <p>We&apos;ve unfortunately encountered an error.</p>
        <p>You can try to reload the page you were visiting.</p>
      </div>
    </PageLayout>
  );
}
