// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: 2Eus14HlTe

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent

import { useScreenVariants as useScreenVariantsqbGzfD819Z3T3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: QBGzfD819Z3t3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_sandbox_satuhsehat.module.css"; // plasmic-import: mazsTSCdeXMvNewzsED8CP/projectcss
import sty from "./PlasmicSliderMitra.module.css"; // plasmic-import: 2Eus14HlTe/css

export type PlasmicSliderMitra__VariantMembers = {};
export type PlasmicSliderMitra__VariantsArgs = {};
type VariantPropType = keyof PlasmicSliderMitra__VariantsArgs;
export const PlasmicSliderMitra__VariantProps = new Array<VariantPropType>();

export type PlasmicSliderMitra__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSliderMitra__ArgsType;
export const PlasmicSliderMitra__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicSliderMitra__OverridesType = {
  sliderMitra?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
};

export interface DefaultSliderMitraProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSliderMitra__RenderFunc(props: {
  variants: PlasmicSliderMitra__VariantsArgs;
  args: PlasmicSliderMitra__ArgsType;
  overrides: PlasmicSliderMitra__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqbGzfD819Z3T3()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"sliderMitra"}
      data-plasmic-override={overrides.sliderMitra}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.sliderMitra
      )}
    >
      <div className={classNames(projectcss.all, sty.column__nUMbx)}>
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(projectcss.all, projectcss.h4, sty.h4)}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "Mitra Penyelenggara inovasi digital (IDK) Klaster telekesehataan yang telah terdaftar",
            value: args.children
          })}
        </h4>
      </div>
      <div className={classNames(projectcss.all, sty.column__ekmz)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Slider
              adaptiveHeight={true}
              className={classNames("__wab_instance", sty.slider__ixGsw)}
              dots={true}
              infinite={false}
              rows={1 as const}
              slidesPerRow={1 as const}
              slidesToShow={2.5 as const}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___28FMt)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={
                  "https://via.placeholder.com/150x90/FF0000/FFFFFF/?text=Slide_1" as const
                }
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___0MDeU)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={
                  "https://via.placeholder.com/150x90/00FF00/FFFFFF/?text=Slide_2" as const
                }
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__gjeVm)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={
                  "https://via.placeholder.com/150x90/0000FF/FFFFFF/?text=Slide_3" as const
                }
              />
            </Slider>
          ),
          value: args.slot
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  sliderMitra: ["sliderMitra", "h4"],
  h4: ["h4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  sliderMitra: "div";
  h4: "h4";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSliderMitra__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSliderMitra__VariantsArgs;
    args?: PlasmicSliderMitra__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSliderMitra__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSliderMitra__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSliderMitra__ArgProps,
          internalVariantPropNames: PlasmicSliderMitra__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSliderMitra__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "sliderMitra") {
    func.displayName = "PlasmicSliderMitra";
  } else {
    func.displayName = `PlasmicSliderMitra.${nodeName}`;
  }
  return func;
}

export const PlasmicSliderMitra = Object.assign(
  // Top-level PlasmicSliderMitra renders the root element
  makeNodeComponent("sliderMitra"),
  {
    // Helper components rendering sub-elements
    h4: makeNodeComponent("h4"),

    // Metadata about props expected for PlasmicSliderMitra
    internalVariantProps: PlasmicSliderMitra__VariantProps,
    internalArgProps: PlasmicSliderMitra__ArgProps
  }
);

export default PlasmicSliderMitra;
/* prettier-ignore-end */
