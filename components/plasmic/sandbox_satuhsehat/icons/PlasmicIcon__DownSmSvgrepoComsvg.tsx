// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownSmSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownSmSvgrepoComsvgIcon(props: DownSmSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.293 17.707a1 1 0 011.414-1.414L11 19.586V2a1 1 0 012 0v17.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0z"
        }
      ></path>
    </svg>
  );
}

export default DownSmSvgrepoComsvgIcon;
/* prettier-ignore-end */
