// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MobilePhoneChatHealthDeviceTelephoneSmartphoneSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MobilePhoneChatHealthDeviceTelephoneSmartphoneSvgrepoComsvgIcon(
  props: MobilePhoneChatHealthDeviceTelephoneSmartphoneSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      fill={"#000"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"1. Online Health"}>
        <path
          d={
            "M18.21 32H7.79A4.8 4.8 0 013 27.21V4.79A4.8 4.8 0 017.79 0h10.42A4.8 4.8 0 0123 4.79V5a1 1 0 01-2 0v-.21A2.79 2.79 0 0018.21 2H7.79A2.79 2.79 0 005 4.79v22.42A2.79 2.79 0 007.79 30h10.42A2.79 2.79 0 0021 27.21V27a1 1 0 012 0v.21A4.8 4.8 0 0118.21 32z"
          }
          fill={"#27ada7"}
        ></path>

        <path
          d={"M13 28a2 2 0 112-2 2 2 0 01-2 2zm0-2z"}
          fill={"#ffb150"}
        ></path>

        <path
          d={
            "M16 6h-6a1 1 0 010-2h6a1 1 0 010 2zm6 18a8 8 0 01-5.29-2H14a1 1 0 01-.89-1.45l1.19-2.39A7.93 7.93 0 0114 16a8 8 0 118 8zm-6.38-4h1.49a.94.94 0 01.69.29A6 6 0 1016 16a6.1 6.1 0 00.32 1.93 1 1 0 01-.05.77z"
          }
          fill={"#27ada7"}
        ></path>

        <path
          d={
            "M24 15h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2z"
          }
          fill={"#ffb150"}
        ></path>
      </g>
    </svg>
  );
}

export default MobilePhoneChatHealthDeviceTelephoneSmartphoneSvgrepoComsvgIcon;
/* prettier-ignore-end */
