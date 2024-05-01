import PageLayout from "@/components/page-layout";
import ProfileFaker from "@/components/tool-components/profile-faker";
import ToolDescription from "@/components/tool-components/tool-description";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "ProfileDataFaker" });

  return {
    title: t("title"),
    description: t("meta-description"),
  };
}

export default function Page() {
  return (
    <PageLayout
      title="Social Media Profile Faker"
      description="Create Compelling Fake Online Identities"
    >
      <ToolDescription title="About">
        <p>
          In today&apos;s digital landscape, where social media presence can
          make or break personal and professional opportunities, the Social
          Media Profile Faker is a powerful tool that enables users to protect
          themselfes. Whether you&apos;re an aspiring influencer, a marketer
          seeking to test campaign strategies, or an individual looking to
          protect their privacy, this versatile tool provides a secure and
          customizable way to generate realistic social media profiles that can
          captivate audiences and expand your digital reach.
        </p>
        <ul>
          <li>
            Create fully customizable social media profiles, complete with
            profile pictures, biographies, and more
          </li>
          <li>
            Experiment with different personas and personas to understand the
            dynamics of social media marketing and personal branding
          </li>
          <li>
            Safeguard your privacy by generating alternative online identities
            to protect your personal information
          </li>
        </ul>
      </ToolDescription>
      <ProfileFaker />
    </PageLayout>
  );
}
