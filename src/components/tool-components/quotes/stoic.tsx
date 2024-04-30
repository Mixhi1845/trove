"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { StoicAPI } from "@/lib/getApiData";
import { LuRefreshCcw } from "react-icons/lu";
import { Skeleton } from "@/components/ui/skeleton";

interface StoicQuotesData {
  quote: string;
  author: string;
  content?: string;
}

export default function StoicQuotes() {
  const [data, setData] = useState<StoicQuotesData | null>(null);

  async function updateQuote() {
    try {
      const response = await StoicAPI();
      setData(response);
    } catch (error) {
      console.error(error);
      setData({ quote: "Opps... Something went wrong", author: "" }); // update the state with a default object
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return <Skeleton className="w-full h-80" />;

  return (
    <>
      <div className="mx-auto py-4 md:py-12">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <blockquote className="blockquote text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {data.quote}
          </blockquote>
          <div className="space-y-2">
            {data.author && (
              <footer className="blockquote-footer text-muted-foreground">
                <cite title="Source Title">- {data.author}</cite>
              </footer>
            )}
          </div>
          <div>
            <Button onClick={updateQuote}>
              <LuRefreshCcw className="mr-2 h-5 w-5" />
              New Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
