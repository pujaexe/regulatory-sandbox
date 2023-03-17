// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadsvgIcon(props: DownloadsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.6 18.8a1.4 1.4 0 00-1.4 1.4v5.6a1.4 1.4 0 01-1.4 1.4H6.2a1.4 1.4 0 01-1.4-1.4v-5.6a1.4 1.4 0 10-2.8 0v5.6A4.2 4.2 0 006.2 30h19.6a4.2 4.2 0 004.2-4.2v-5.6a1.4 1.4 0 00-1.4-1.4zm-13.594 2.394c.133.128.29.227.462.294a1.316 1.316 0 001.064 0c.172-.067.329-.166.462-.294l5.6-5.6a1.406 1.406 0 00-1.988-1.988l-3.206 3.22V3.4a1.4 1.4 0 10-2.8 0v13.426l-3.206-3.22a1.405 1.405 0 10-1.988 1.988l5.6 5.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DownloadsvgIcon;
/* prettier-ignore-end */
