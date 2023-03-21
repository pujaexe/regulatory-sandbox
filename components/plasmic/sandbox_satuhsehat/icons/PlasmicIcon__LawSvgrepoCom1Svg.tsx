// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LawSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LawSvgrepoCom1SvgIcon(props: LawSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 42"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M36.348 9.826a3.57 3.57 0 01-3.566 3.568h-1.118v18.56a3.57 3.57 0 01-3.566 3.565H9.218a3.566 3.566 0 110-7.134h1.116V9.825a3.57 3.57 0 013.568-3.57H32.78a3.57 3.57 0 013.568 3.569v.002zM9.218 33.069h15.49a3.563 3.563 0 010-2.232H9.221a1.116 1.116 0 100 2.232h-.004zM29.212 9.826c0-.38.06-.756.177-1.117H13.904c-.248 0-.49.083-.685.237l-.004.002a1.105 1.105 0 00-.427.878v18.56h14.008a1.348 1.348 0 011.326 1.032 1.396 1.396 0 01-.554 1.552 1.115 1.115 0 00-.04 1.94 1.116 1.116 0 001.689-.957l-.005-22.127zm-1.9 3.178H14.578v2.448H27.31v-2.447zm0 4.996H14.578v2.447H27.31V18zm0 4.996H14.578v2.45H27.31v-2.45zm6.584-13.17a1.119 1.119 0 00-1.116-1.117 1.096 1.096 0 00-.685.237h-.005a1.107 1.107 0 00-.429.88v1.116h1.12a1.119 1.119 0 001.115-1.116z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LawSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
