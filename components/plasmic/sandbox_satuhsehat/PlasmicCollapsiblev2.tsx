// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: vrBPAsBs7q

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
import sty from "./PlasmicCollapsiblev2.module.css"; // plasmic-import: vrBPAsBs7q/css

import ArrowCircleRightSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowCircleRightSvgrepoComsvg"; // plasmic-import: Zlge9B9cCO/icon
import ArrowCircleDownSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowCircleDownSvgrepoComsvg"; // plasmic-import: gVLgtkvi5O/icon

export type PlasmicCollapsiblev2__VariantMembers = {};
export type PlasmicCollapsiblev2__VariantsArgs = {};
type VariantPropType = keyof PlasmicCollapsiblev2__VariantsArgs;
export const PlasmicCollapsiblev2__VariantProps = new Array<VariantPropType>();

export type PlasmicCollapsiblev2__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  isCollapse?: boolean;
  onIsCollapseChange?: (val: boolean) => void;
};
type ArgPropType = keyof PlasmicCollapsiblev2__ArgsType;
export const PlasmicCollapsiblev2__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "isCollapse",
  "onIsCollapseChange"
);

export type PlasmicCollapsiblev2__OverridesType = {
  collapsible?: p.Flex<"div">;
  button?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultCollapsiblev2Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  isCollapse?: boolean;
  onIsCollapseChange?: (val: boolean) => void;
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

function PlasmicCollapsiblev2__RenderFunc(props: {
  variants: PlasmicCollapsiblev2__VariantsArgs;
  args: PlasmicCollapsiblev2__ArgsType;
  overrides: PlasmicCollapsiblev2__OverridesType;
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
        path: "isCollapse",
        type: "writable",
        variableType: "boolean",

        valueProp: "isCollapse",
        onChangeProp: "onIsCollapseChange"
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    true ? (
      <div
        data-plasmic-name={"collapsible"}
        data-plasmic-override={overrides.collapsible}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          sty.collapsible
        )}
      >
        <button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames(projectcss.all, projectcss.button, sty.button)}
          onClick={async event => {
            const $steps = {};
            $steps["updateVariable"] = true
              ? (() => {
                  const actionArgs = {
                    variable: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "riIk7_nFY",
                        componentUuid: "vrBPAsBs7q",
                        argName: "variable"
                      },
                      () => ({
                        objRoot: $state,
                        variablePath: ["isCollapse"]
                      })
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "riIk7_nFY",
                        componentUuid: "vrBPAsBs7q",
                        argName: "operation"
                      },
                      () => 4
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "riIk7_nFY",
                      componentUuid: "vrBPAsBs7q"
                    },
                    () =>
                      (({ variable, value, startIndex, deleteCount }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = p.get(objRoot, variablePath);
                        p.set(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updateVariable"] === "object" &&
              typeof $steps["updateVariable"].then === "function"
            ) {
              $steps["updateVariable"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariable",
                  interactionUuid: "riIk7_nFY",
                  componentUuid: "vrBPAsBs7q"
                },
                $steps["updateVariable"]
              );
            }
          }}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__nm4Du
                  )}
                >
                  {"Enter some text"}
                </h5>
                {(() => {
                  try {
                    return $state.isCollapse ? false : true;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <ArrowCircleRightSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg__oHxZ)}
                    role={"img"}
                  />
                ) : null}
                {(() => {
                  try {
                    return $state.isCollapse ? true : false;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <ArrowCircleDownSvgrepoComsvgIcon
                    className={classNames(projectcss.all, sty.svg__rLO)}
                    role={"img"}
                  />
                ) : null}
              </React.Fragment>
            ),
            value: args.children
          })}
        </button>
        {(() => {
          try {
            return $state.isCollapse;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fVjCy
                  )}
                >
                  {"Enter some text"}
                </div>
              ),
              value: args.slot
            })}
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  collapsible: ["collapsible", "button", "freeBox"],
  button: ["button"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  collapsible: "div";
  button: "button";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollapsiblev2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollapsiblev2__VariantsArgs;
    args?: PlasmicCollapsiblev2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollapsiblev2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCollapsiblev2__ArgsType,
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
          internalArgPropNames: PlasmicCollapsiblev2__ArgProps,
          internalVariantPropNames: PlasmicCollapsiblev2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCollapsiblev2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "collapsible") {
    func.displayName = "PlasmicCollapsiblev2";
  } else {
    func.displayName = `PlasmicCollapsiblev2.${nodeName}`;
  }
  return func;
}

export const PlasmicCollapsiblev2 = Object.assign(
  // Top-level PlasmicCollapsiblev2 renders the root element
  makeNodeComponent("collapsible"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCollapsiblev2
    internalVariantProps: PlasmicCollapsiblev2__VariantProps,
    internalArgProps: PlasmicCollapsiblev2__ArgProps
  }
);

export default PlasmicCollapsiblev2;
/* prettier-ignore-end */
