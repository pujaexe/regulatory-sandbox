// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LawSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LawSvgrepoComsvgIcon(props: LawSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-2 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.443 4.445a1.615 1.615 0 01-1.613 1.614h-.506v8.396a1.615 1.615 0 01-1.613 1.613H2.17a1.613 1.613 0 110-3.227h.505V4.445A1.615 1.615 0 014.289 2.83h8.54a1.615 1.615 0 011.614 1.614zM2.17 14.96h7.007a1.612 1.612 0 010-1.01H2.172a.505.505 0 000 1.01zm9.045-10.515a1.62 1.62 0 01.08-.505H4.29a.5.5 0 00-.31.107l-.002.001a.5.5 0 00-.193.397v8.396h6.337a.61.61 0 01.6.467.632.632 0 01-.251.702.505.505 0 10.746.445zm-.86 1.438h-5.76V6.99h5.76zm0 2.26h-5.76V9.25h5.76zm0 2.26h-5.76v1.108h5.76zm2.979-5.958a.506.506 0 00-.505-.505.496.496 0 00-.31.107h-.002a.501.501 0 00-.194.398v.505h.506a.506.506 0 00.505-.505z"
        }
      ></path>
    </svg>
  );
}

export default LawSvgrepoComsvgIcon;
/* prettier-ignore-end */
