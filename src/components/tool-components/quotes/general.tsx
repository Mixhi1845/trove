"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuotesAPI } from "@/lib/getApiData";
import { LuRefreshCcw } from "react-icons/lu";
import { Skeleton } from "@/components/ui/skeleton";

interface GeneralQuotesData {
  data: { quoteText: string; quoteAuthor: string }[];
}

export default function GeneralQuotes() {
  const [data, setData] = useState<GeneralQuotesData | null>(null);

  async function updateQuote() {
    try {
      const response = await QuotesAPI();
      setData(response);
    } catch (error) {
      console.error(error);
      setData({
        data: [{ quoteText: "Opps... Something went wrong", quoteAuthor: "" }],
      });
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
            {data.data[0].quoteText}
          </blockquote>
          <div className="space-y-2">
            {data.data[0].quoteAuthor && (
              <footer className="blockquote-footer text-muted-foreground">
                <cite title="Source Title">- {data.data[0].quoteAuthor}</cite>
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
