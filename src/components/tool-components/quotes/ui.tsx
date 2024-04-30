import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { QotdAPI } from "@/lib/getApiData";
import GeneralQuotes from "@/components/tool-components/quotes/general";
import StoicQuotes from "@/components/tool-components/quotes/stoic";
import DesignQuotes from "@/components/tool-components/quotes/design";

export default async function QuotesUI() {
  const qotdqts = await QotdAPI();

  return (
    <div id="tool" className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Quote of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto py-4 md:py-12">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <blockquote className="text-xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {qotdqts.quote.body}
              </blockquote>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  - {qotdqts.quote.author}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Explore Quotes by interests</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="stoicism">Stoicism</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="stoicism">
              <StoicQuotes />
            </TabsContent>
            <TabsContent value="general">
              <GeneralQuotes />
            </TabsContent>
            <TabsContent value="design">
              <DesignQuotes />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
