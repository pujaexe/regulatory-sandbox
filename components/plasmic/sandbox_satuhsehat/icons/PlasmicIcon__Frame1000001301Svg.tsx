// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1000001301SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1000001301SvgIcon(props: Frame1000001301SvgIconProps) {
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
          "M33.253 21.485H21.51V33.26A3.743 3.743 0 0025.258 37a3.743 3.743 0 003.746-3.74v-4.294h4.249A3.743 3.743 0 0037 25.226a3.745 3.745 0 00-3.747-3.74zm0-8.451h-4.249V8.74A3.743 3.743 0 0025.257 5a3.743 3.743 0 00-3.746 3.74v11.775h11.742A3.743 3.743 0 0037 16.775a3.745 3.745 0 00-3.747-3.741zM8.747 21.485A3.743 3.743 0 005 25.225a3.743 3.743 0 003.747 3.74h4.3v4.242a3.743 3.743 0 003.747 3.74 3.743 3.743 0 003.746-3.74V21.484H8.747v.001z"
        }
        fill={"#01B3AC"}
      ></path>

      <path
        d={
          "M8.799 12.48a3.743 3.743 0 003.746-3.74A3.743 3.743 0 008.8 5a3.744 3.744 0 00-3.747 3.74A3.744 3.744 0 008.8 12.48z"
        }
        fill={"#D1DD27"}
      ></path>

      <path
        d={
          "M16.794 5a3.743 3.743 0 00-3.747 3.74v4.294H8.8a3.743 3.743 0 00-3.747 3.74 3.743 3.743 0 003.747 3.74h11.74V8.742A3.745 3.745 0 0016.794 5z"
        }
        fill={"#D1DD27"}
      ></path>
    </svg>
  );
}

export default Frame1000001301SvgIcon;
/* prettier-ignore-end */
