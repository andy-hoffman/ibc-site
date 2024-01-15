
import React, { useState } from "react";
import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { FullPageLayout } from "../../components/layouts/FullPage/FullPageLayout";
import { client } from "../../tina/__generated__/client";

export default async function Page(children: any, data: any)
{
  return (
    <FullPageLayout>
      Course List
    </FullPageLayout>
  );
}


