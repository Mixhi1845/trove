import PageLayout from "@/components/page-layout";
import ToolDescription from "@/components/tool-components/tool-description";
import MoneyExchange from "@/components/tool-components/exchange-calc";

export default function MoneyExchangePage() {
  return (
    <PageLayout
      title="Exchange Rate Money Calculator"
      description="Currency Conversion Made Easy"
    >
      <ToolDescription title="About">
        <p>
          This Exchange Rate Money Conversion tool allows you to easily convert
          between different currencies, helping you manage your finances and
          make informed decisions when traveling or conducting international
          transactions. Simply enter the amount in your base currency and the
          tool will instantly calculate the equivalent value in your desired
          currency, ensuring you always have up-to-date exchange rates at your
          fingertips.
        </p>
        <p>
          Whether you need to convert Euros to US Dollars, Pounds to Yen, or any
          other currency pair, our currency converter is a powerful and
          user-friendly tool that can save you time and money. Start exploring
          the world with confidence, knowing that you have the right tools to
          manage your finances effectively.
        </p>
      </ToolDescription>
      <MoneyExchange />
    </PageLayout>
  );
}
