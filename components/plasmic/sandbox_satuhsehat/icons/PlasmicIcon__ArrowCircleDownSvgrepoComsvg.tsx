// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowCircleDownSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowCircleDownSvgrepoComsvgIcon(
  props: ArrowCircleDownSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9 13l3 3m0 0l3-3m-3 3V8m9 4a9 9 0 10-18 0 9 9 0 0018 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowCircleDownSvgrepoComsvgIcon;
/* prettier-ignore-end */
