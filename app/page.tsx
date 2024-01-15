import React, { useState } from "react";
import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { FullPageLayout } from "../components/layouts/FullPage/FullPageLayout";
import { client } from "../tina/__generated__/client";
import { useEffect } from "react";
import FullWidthSection from "@/components/page/FullWidthSection";
import HeroBanner from "@/components/contentBlocks/HeroSlider";
import BoxSection from "@/components/page/BoxSection";

export default async function Page(children: any, data: any)
{
  const content = await client.queries.page({
    relativePath: `home.md`,
  });

  return (
    <FullPageLayout>
      <FullWidthSection>
        <HeroBanner
          headline={"Looking for Ways to Support Us?"}
          body={"Make a donation, or even become a member through your donation."}
          label={"Donate"}
          url={"/"}
          bgImage={"/images/bells.png"}
        />
      </FullWidthSection>
      <Blocks {...content.data.page} />
    </FullPageLayout>
  );
}



