// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JusticeSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JusticeSvgrepoCom1SvgIcon(
  props: JusticeSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M34.12 9.81c.275 0 .544.082.773.232.231.157.412.377.52.634l4.488 10.454c.079.183.117.382.113.581v.013a5.894 5.894 0 01-11.788 0v-.013c-.004-.2.035-.398.114-.58l3.656-8.52H25.46v19.044l9.898 4.102a1.4 1.4 0 01-.535 2.694H13.395a1.4 1.4 0 01-.536-2.694l9.802-4.062V12.611h-6.657l3.656 8.52c.079.182.118.38.113.58v.013a5.894 5.894 0 11-11.787 0v-.013c-.004-.2.034-.398.113-.58l4.487-10.455a1.4 1.4 0 011.293-.867h8.782V8.093a1.4 1.4 0 012.8 0V9.81h8.66zM16.868 21.726l-2.988-6.965-2.987 6.963 5.975.002zm20.241 0l-2.989-6.962-2.988 6.962h5.977z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JusticeSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
