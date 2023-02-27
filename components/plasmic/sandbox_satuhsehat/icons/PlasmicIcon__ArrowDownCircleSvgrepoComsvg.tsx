// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownCircleSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowDownCircleSvgrepoComsvgIcon(
  props: ArrowDownCircleSvgrepoComsvgIconProps
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
        d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        d={"M12 16V8m-3 5l2.913 2.913v0a.123.123 0 00.174 0v0L15 13"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowDownCircleSvgrepoComsvgIcon;
/* prettier-ignore-end */
