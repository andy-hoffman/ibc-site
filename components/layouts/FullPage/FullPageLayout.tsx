import React from "react";
import layoutData from "../../../content/global/index.json";
import { Global } from "../../../tina/__generated__/types";

export const FullPageLayout = ({
  rawData = {},
  data = layoutData,
  children,
}: {
  rawData?: object;
  data?: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
          className={`min-h-screen flex flex-col ${
            data.theme.font === "nunito" && "font-nunito"
          } ${data.theme.font === "lato" && "font-lato"} ${
            data.theme.font === "sans" && "font-sans"
          }`}
        >
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </div>
    </>
  );
};
