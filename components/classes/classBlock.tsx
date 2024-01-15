import React from 'react';
import { ReactNode } from "react";
import Image from "next/image";
import { Class } from "../../tina/__generated__/types";

export type ClassParams = {
  classInstance: Class;
}

const ClassBlock = function(params: ClassParams) : JSX.Element {

  const { classInstance } = params;

  const wrapperClassNames = `size-40 {BgColor} text-center`;

  return (
    <div>
      {classInstance.name}
    </div>
  )
}

export default ClassBlock;