// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: NCicNLzCjc

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

import { useScreenVariants as useScreenVariantsqbGzfD819Z3T3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: QBGzfD819Z3t3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_sandbox_satuhsehat.module.css"; // plasmic-import: mazsTSCdeXMvNewzsED8CP/projectcss
import sty from "./PlasmicNavbarv2.module.css"; // plasmic-import: NCicNLzCjc/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon

export type PlasmicNavbarv2__VariantMembers = {};
export type PlasmicNavbarv2__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbarv2__VariantsArgs;
export const PlasmicNavbarv2__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbarv2__ArgsType = {
  slot?: React.ReactNode;
  isMenuShow?: boolean;
  onIsMenuShowChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicNavbarv2__ArgsType;
export const PlasmicNavbarv2__ArgProps = new Array<ArgPropType>(
  "slot",
  "isMenuShow",
  "onIsMenuShowChange"
);

export type PlasmicNavbarv2__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof p.PlasmicImg>;
  freeBox?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultNavbarv2Props {
  slot?: React.ReactNode;
  isMenuShow?: boolean;
  onIsMenuShowChange?: (val: string) => void;
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

function PlasmicNavbarv2__RenderFunc(props: {
  variants: PlasmicNavbarv2__VariantsArgs;
  args: PlasmicNavbarv2__ArgsType;
  overrides: PlasmicNavbarv2__OverridesType;
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
        path: "ismenu",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "isMenuShow",
        type: "writable",
        variableType: "boolean",

        valueProp: "isMenuShow",
        onChangeProp: "onIsMenuShowChange"
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqbGzfD819Z3T3()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"logo"}
        data-plasmic-override={overrides.logo}
        alt={""}
        className={classNames(sty.logo)}
        displayHeight={"50px" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"auto" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/sandbox_satuhsehat/images/logokemkespng.png",
          fullWidth: 133,
          fullHeight: 60,
          aspectRatio: undefined
        }}
      />

      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__is3DD
            )}
            component={Link}
            href={`/v-2`}
            platform={"nextjs"}
          >
            {"Beranda"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__tXiWw
            )}
            component={Link}
            href={`/v-2`}
            platform={"nextjs"}
          >
            {"Tentang"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__l2Ec6
            )}
            component={Link}
            href={`/mitra-terdaftar-1`}
            platform={"nextjs"}
          >
            {"Mitra"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__brGjE
            )}
            component={Link}
            href={`/v-2`}
            platform={"nextjs"}
          >
            {"FAQ"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__k3PGh
            )}
            component={Link}
            href={`/doc-v-2`}
            platform={"nextjs"}
          >
            {"Dokumen"}
          </p.PlasmicLink>
        </p.Stack>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames(projectcss.all, projectcss.button, sty.button)}
          onClick={async event => {
            const $steps = {};
            $steps["updateVariable"] = true
              ? (() => {
                  const actionArgs = {
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "YZjntF30s",
                        componentUuid: "NCicNLzCjc",
                        argName: "operation"
                      },
                      () => 4
                    ),
                    variable: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "YZjntF30s",
                        componentUuid: "NCicNLzCjc",
                        argName: "variable"
                      },
                      () => ({
                        objRoot: $state,
                        variablePath: ["isMenuShow"]
                      })
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "YZjntF30s",
                      componentUuid: "NCicNLzCjc"
                    },
                    () =>
                      (({ variable, value, startIndex, deleteCount }) => {
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
                  interactionUuid: "YZjntF30s",
                  componentUuid: "NCicNLzCjc"
                },
                $steps["updateVariable"]
              );
            }
          }}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <MenuSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg___0A88X)}
                role={"img"}
              />
            ),

            value: args.slot
          })}
        </button>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo", "freeBox", "button"],
  logo: ["logo"],
  freeBox: ["freeBox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof p.PlasmicImg;
  freeBox: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarv2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarv2__VariantsArgs;
    args?: PlasmicNavbarv2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbarv2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbarv2__ArgsType,
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
          internalArgPropNames: PlasmicNavbarv2__ArgProps,
          internalVariantPropNames: PlasmicNavbarv2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbarv2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarv2";
  } else {
    func.displayName = `PlasmicNavbarv2.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarv2 = Object.assign(
  // Top-level PlasmicNavbarv2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicNavbarv2
    internalVariantProps: PlasmicNavbarv2__VariantProps,
    internalArgProps: PlasmicNavbarv2__ArgProps
  }
);

export default PlasmicNavbarv2;
/* prettier-ignore-end */
