// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: Jat-LigOLR

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
import Navbarv2 from "../../Navbarv2"; // plasmic-import: NCicNLzCjc/component
import TableItem from "../../TableItem"; // plasmic-import: rueRHuGiXL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_sandbox_satuhsehat.module.css"; // plasmic-import: mazsTSCdeXMvNewzsED8CP/projectcss
import sty from "./PlasmicMitraTerdaftar1.module.css"; // plasmic-import: Jat-LigOLR/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon

export type PlasmicMitraTerdaftar1__VariantMembers = {};
export type PlasmicMitraTerdaftar1__VariantsArgs = {};
type VariantPropType = keyof PlasmicMitraTerdaftar1__VariantsArgs;
export const PlasmicMitraTerdaftar1__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMitraTerdaftar1__ArgsType = {};
type ArgPropType = keyof PlasmicMitraTerdaftar1__ArgsType;
export const PlasmicMitraTerdaftar1__ArgProps = new Array<ArgPropType>();

export type PlasmicMitraTerdaftar1__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  navbarv2?: p.Flex<typeof Navbarv2>;
  h1?: p.Flex<"h1">;
  h2?: p.Flex<"h2">;
  tableItem?: p.Flex<typeof TableItem>;
  footer?: p.Flex<"div">;
};

export interface DefaultMitraTerdaftar1Props {}

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

function PlasmicMitraTerdaftar1__RenderFunc(props: {
  variants: PlasmicMitraTerdaftar1__VariantsArgs;
  args: PlasmicMitraTerdaftar1__ArgsType;
  overrides: PlasmicMitraTerdaftar1__OverridesType;
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
        path: "navbarv2.isMenuShow",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          {true ? (
            <div
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(projectcss.all, sty.header)}
            >
              <Navbarv2
                data-plasmic-name={"navbarv2"}
                data-plasmic-override={overrides.navbarv2}
                className={classNames("__wab_instance", sty.navbarv2)}
                isMenuShow={p.generateStateValueProp($state, [
                  "navbarv2",
                  "isMenuShow"
                ])}
                onIsMenuShowChange={p.generateStateOnChangeProp($state, [
                  "navbarv2",
                  "isMenuShow"
                ])}
              />
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__pptR)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.columns___7HtPl)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__djOVn)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Penyelenggaran Inovasi Kesehatan (IDK)Terdaftar"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fb7Eh
                    )}
                  >
                    {
                      "Daftar penyelenggara Inovasi Kesehatan Digital yang telah bergabung dan dibina oleh Regulatory Sandbox kementrian Kesehatan RI"
                    }
                  </div>
                </p.Stack>
                <div className={classNames(projectcss.all, sty.column__gJtk)} />
              </div>
            ) : null}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__epQ2K)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__ffIIt)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__uBpb)}
                >
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Daftar Inovasi Kesehatan Digital"}
                  </h2>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.column__rPnBp)}
                />
              </div>
            ) : null}
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eJobP)}
            >
              <TableItem
                data-plasmic-name={"tableItem"}
                data-plasmic-override={overrides.tableItem}
                className={classNames("__wab_instance", sty.tableItem)}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pmVtE)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rfyc0)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__cKHT)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__uqYZe
                      )}
                    >
                      {"Artificial intelegent, Patient and Engagement Platform"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__v1D8S
                      )}
                    >
                      {"PT Sari Baut Net"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__paQuW)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qXpS)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xbGcl)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__vq4Lv
                      )}
                    >
                      {"MedicTech"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__newDu
                      )}
                    >
                      {"PT InnoView Indo Tech"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nrzCo)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__r8MgL)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__iKyPq)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__umAku
                      )}
                    >
                      {"PERIKSAIN"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zoXl6
                      )}
                    >
                      {"PT Kreasi Periksa Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dzymu)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__vNoRg)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__cxCsb)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___7Lalq
                      )}
                    >
                      {"Getwell"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rVecy
                      )}
                    >
                      {"PT TELEMEDIKA TEKNOLOGI INDONESIA"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1L4Dk)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__kQ9Lf)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mrGTp)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__rHays
                      )}
                    >
                      {"SAM Element"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__agNKt
                      )}
                    >
                      {"PT SAM Elemen Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gMrmj)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__xSRlM)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___2Ky2T)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__n3XW9
                      )}
                    >
                      {"Okedok"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lBfPq
                      )}
                    >
                      {"PT Medis Indonesia Digita"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zq5M)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ilXmy)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___4TTN)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___1J0L1
                      )}
                    >
                      {"TanyaDNA"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aRofj
                      )}
                    >
                      {"PT Genomik Solidaritas Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xjBoo)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__t23V4)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/menuIconspng.png",
                    fullWidth: 70,
                    fullHeight: 70,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xn1Km)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__oajH
                      )}
                    >
                      {"SehatQ"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__oAgc
                      )}
                    >
                      {"PT Sehatq Harsana Emedika"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__nligE)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__zGAuF
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-1`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__thcWw
                    )}
                  >
                    {"1"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ts1C
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-2`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8D0Hy
                    )}
                  >
                    {"2"}
                  </div>
                </p.PlasmicLink>
              </div>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            hasGap={true}
            className={classNames(projectcss.all, sty.footer)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___9Lt0)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yuEj0
                )}
              >
                {"© Kementerian Kesehatan RI "}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yhd3N
                )}
              >
                {
                  "Jl. HR. Rasuna Said Blok X5 Kav. 4-9\nJakarta Selatan, Jakarta, Indonesia 12950\n"
                }
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "navbarv2", "h1", "h2", "tableItem", "footer"],
  header: ["header", "navbarv2"],
  navbarv2: ["navbarv2"],
  h1: ["h1"],
  h2: ["h2"],
  tableItem: ["tableItem"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  navbarv2: typeof Navbarv2;
  h1: "h1";
  h2: "h2";
  tableItem: typeof TableItem;
  footer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMitraTerdaftar1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMitraTerdaftar1__VariantsArgs;
    args?: PlasmicMitraTerdaftar1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMitraTerdaftar1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMitraTerdaftar1__ArgsType,
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
          internalArgPropNames: PlasmicMitraTerdaftar1__ArgProps,
          internalVariantPropNames: PlasmicMitraTerdaftar1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMitraTerdaftar1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMitraTerdaftar1";
  } else {
    func.displayName = `PlasmicMitraTerdaftar1.${nodeName}`;
  }
  return func;
}

export const PlasmicMitraTerdaftar1 = Object.assign(
  // Top-level PlasmicMitraTerdaftar1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navbarv2: makeNodeComponent("navbarv2"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    tableItem: makeNodeComponent("tableItem"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMitraTerdaftar1
    internalVariantProps: PlasmicMitraTerdaftar1__VariantProps,
    internalArgProps: PlasmicMitraTerdaftar1__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMitraTerdaftar1;
/* prettier-ignore-end */
