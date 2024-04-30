"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DesignAPI } from "@/lib/getApiData";
import { Skeleton } from "@/components/ui/skeleton";
import { LuRefreshCcw } from "react-icons/lu";

interface DesignQuotesData {
  yoast_head_json: {
    og_description: string;
  };
  title: {
    rendered: string;
  };
}

export default function DesignQuotes() {
  const [data, setData] = useState<DesignQuotesData[] | null>(null);

  async function updateQuote() {
    try {
      const qtRand = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      const response = await DesignAPI(qtRand);

      setData(response);
    } catch (error) {
      console.error(error);
      setData([
        {
          yoast_head_json: { og_description: "Oops... Something went wrong" },
          title: { rendered: "" },
        },
      ]);
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if (!data || data.length === 0) return <Skeleton className="w-full h-80" />;

  const qtIndex = Math.floor(Math.random() * data.length);

  return (
    <>
      <div className="mx-auto py-4 md:py-12">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <blockquote className="blockquote text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {data[qtIndex].yoast_head_json.og_description}
          </blockquote>
          <div className="space-y-2">
            {data[qtIndex].title.rendered && (
              <footer className="blockquote-footer text-muted-foreground">
                <cite title="Source Title">
                  - {data[qtIndex].title.rendered}
                </cite>
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
