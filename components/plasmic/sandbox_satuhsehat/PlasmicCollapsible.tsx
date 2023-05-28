// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: Z0pRxdl5sa

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_sandbox_satuhsehat.module.css"; // plasmic-import: mazsTSCdeXMvNewzsED8CP/projectcss
import sty from "./PlasmicCollapsible.module.css"; // plasmic-import: Z0pRxdl5sa/css

import ArrowRightCircleSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowRightCircleSvgrepoComsvg"; // plasmic-import: Vsh1JbJgG5/icon
import ArrowDownCircleSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowDownCircleSvgrepoComsvg"; // plasmic-import: F5gVYOG9tO/icon

export type PlasmicCollapsible__VariantMembers = {
  isopen: "isopen";
};
export type PlasmicCollapsible__VariantsArgs = {
  isopen?: SingleBooleanChoiceArg<"isopen">;
};
type VariantPropType = keyof PlasmicCollapsible__VariantsArgs;
export const PlasmicCollapsible__VariantProps = new Array<VariantPropType>(
  "isopen"
);

export type PlasmicCollapsible__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCollapsible__ArgsType;
export const PlasmicCollapsible__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicCollapsible__OverridesType = {
  collapse?: p.Flex<"div">;
  button?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
  arrowOpen?: p.Flex<"svg">;
  arrowclose?: p.Flex<"svg">;
  item?: p.Flex<"div">;
};

export interface DefaultCollapsibleProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  isopen?: SingleBooleanChoiceArg<"isopen">;
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

function PlasmicCollapsible__RenderFunc(props: {
  variants: PlasmicCollapsible__VariantsArgs;
  args: PlasmicCollapsible__ArgsType;
  overrides: PlasmicCollapsible__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isopen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isopen
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const [isCollapseActive, triggerCollapseActiveProps] = useTrigger(
    "usePressed",
    {}
  );
  const [isCollapseFocusWithin, triggerCollapseFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );
  const triggers = {
    active_collapse: isCollapseActive,
    focusWithin_collapse: isCollapseFocusWithin
  };

  return (
    <div
      data-plasmic-name={"collapse"}
      data-plasmic-override={overrides.collapse}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.collapse
      )}
      data-plasmic-trigger-props={[
        triggerCollapseActiveProps,
        triggerCollapseFocusWithinProps
      ]}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(projectcss.all, projectcss.button, sty.button, {
          [sty.buttonisopen]: hasVariant($state, "isopen", "isopen")
        })}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Header",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
        {(
          triggers.active_collapse
            ? true
            : triggers.focusWithin_collapse
            ? true
            : true
        ) ? (
          <ArrowRightCircleSvgrepoComsvgIcon
            data-plasmic-name={"arrowOpen"}
            data-plasmic-override={overrides.arrowOpen}
            className={classNames(projectcss.all, sty.arrowOpen)}
            role={"img"}
          />
        ) : null}
        {(
          triggers.active_collapse
            ? true
            : triggers.focusWithin_collapse
            ? true
            : true
        ) ? (
          <ArrowDownCircleSvgrepoComsvgIcon
            data-plasmic-name={"arrowclose"}
            data-plasmic-override={overrides.arrowclose}
            className={classNames(projectcss.all, sty.arrowclose)}
            role={"img"}
          />
        ) : null}
      </button>
      {(
        triggers.active_collapse
          ? true
          : triggers.focusWithin_collapse
          ? true
          : hasVariant($state, "isopen", "isopen")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"item"}
          data-plasmic-override={overrides.item}
          className={classNames(projectcss.all, sty.item, {
            [sty.itemisopen]: hasVariant($state, "isopen", "isopen")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  collapse: [
    "collapse",
    "button",
    "freeBox",
    "arrowOpen",
    "arrowclose",
    "item"
  ],
  button: ["button", "freeBox", "arrowOpen", "arrowclose"],
  freeBox: ["freeBox"],
  arrowOpen: ["arrowOpen"],
  arrowclose: ["arrowclose"],
  item: ["item"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  collapse: "div";
  button: "button";
  freeBox: "div";
  arrowOpen: "svg";
  arrowclose: "svg";
  item: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollapsible__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollapsible__VariantsArgs;
    args?: PlasmicCollapsible__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollapsible__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCollapsible__ArgsType,
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
          internalArgPropNames: PlasmicCollapsible__ArgProps,
          internalVariantPropNames: PlasmicCollapsible__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCollapsible__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "collapse") {
    func.displayName = "PlasmicCollapsible";
  } else {
    func.displayName = `PlasmicCollapsible.${nodeName}`;
  }
  return func;
}

export const PlasmicCollapsible = Object.assign(
  // Top-level PlasmicCollapsible renders the root element
  makeNodeComponent("collapse"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),
    arrowOpen: makeNodeComponent("arrowOpen"),
    arrowclose: makeNodeComponent("arrowclose"),
    item: makeNodeComponent("item"),

    // Metadata about props expected for PlasmicCollapsible
    internalVariantProps: PlasmicCollapsible__VariantProps,
    internalArgProps: PlasmicCollapsible__ArgProps
  }
);

export default PlasmicCollapsible;
/* prettier-ignore-end */
