// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: IVTbCxM9Wzl

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_sandbox_satuhsehat.module.css"; // plasmic-import: mazsTSCdeXMvNewzsED8CP/projectcss
import sty from "./PlasmicMitraDiawasi1.module.css"; // plasmic-import: IVTbCxM9Wzl/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon

export type PlasmicMitraDiawasi1__VariantMembers = {};
export type PlasmicMitraDiawasi1__VariantsArgs = {};
type VariantPropType = keyof PlasmicMitraDiawasi1__VariantsArgs;
export const PlasmicMitraDiawasi1__VariantProps = new Array<VariantPropType>();

export type PlasmicMitraDiawasi1__ArgsType = {};
type ArgPropType = keyof PlasmicMitraDiawasi1__ArgsType;
export const PlasmicMitraDiawasi1__ArgProps = new Array<ArgPropType>();

export type PlasmicMitraDiawasi1__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  navbarv2?: p.Flex<typeof Navbarv2>;
  h1?: p.Flex<"h1">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<"div">;
};

export interface DefaultMitraDiawasi1Props {}

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

function PlasmicMitraDiawasi1__RenderFunc(props: {
  variants: PlasmicMitraDiawasi1__VariantsArgs;
  args: PlasmicMitraDiawasi1__ArgsType;
  overrides: PlasmicMitraDiawasi1__OverridesType;
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
          <div className={classNames(projectcss.all, sty.freeBox__tjtIg)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__tCdRu)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__ghaKx)}
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
                    {"Penyelenggaran Inovasi Kesehatan (IDK)Diawasi"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p3XzN
                    )}
                  >
                    {
                      "Daftar penyelenggara Inovasi Kesehatan Digital yang telah bergabung dan dibina oleh Regulatory Sandbox kementrian Kesehatan RI"
                    }
                  </div>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.column__tlvHl)}
                />
              </div>
            ) : null}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bwMb)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__q7JkP)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__jYpEx)}
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
                    {"Daftar Inovasi Digital Kesehatan"}
                  </h2>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.column__ckJfj)}
                />
              </div>
            ) : null}
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cYuK)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___2HmOe)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__r0Ds9)}
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
                    className={classNames(projectcss.all, sty.freeBox__l8V0R)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__zdLxq
                      )}
                    >
                      {"Sehati TeleCTG"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7K2K9
                      )}
                    >
                      {"PT Zetta Telecetege Intenasional"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__v5CCd)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__diOhG)}
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
                    className={classNames(projectcss.all, sty.freeBox___66Fx)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___64ERf
                      )}
                    >
                      {"Halodoc"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aQMpA
                      )}
                    >
                      {"PT Media Dokter Investama"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rAad9)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rwW4O)}
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
                    className={classNames(projectcss.all, sty.freeBox__lCbsr)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__gsFxq
                      )}
                    >
                      {"FitHappy"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nIulc
                      )}
                    >
                      {"PT CEPAT SEMBUH HIDUP SEHAT"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gEyP)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__dex4D)}
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
                    className={classNames(projectcss.all, sty.freeBox__h87Rz)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__g4UC6
                      )}
                    >
                      {"Klinisia"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1Abos
                      )}
                    >
                      {"PT Kawan Sehat Indonesia "}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lu3U7)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__m36A1)}
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
                    className={classNames(projectcss.all, sty.freeBox__iOp3)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__waxSo
                      )}
                    >
                      {"dkonsul"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wDfNe
                      )}
                    >
                      {"PT. GLOBAL URBAN ESENSIAL"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sMwZb)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___4C0F9)}
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
                    className={classNames(projectcss.all, sty.freeBox__smTEy)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__lJbeJ
                      )}
                    >
                      {"CONFICARES"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bkTOf
                      )}
                    >
                      {"PT QLCOM SOLUSI BISNIS"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__e4Szx)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___75Vhe)}
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
                    className={classNames(projectcss.all, sty.freeBox__kBogs)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___2PltO
                      )}
                    >
                      {"Cexup"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ksN9I
                      )}
                    >
                      {"PT. Tele Cexup Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__joiFn)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___3SrxI)}
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
                    className={classNames(projectcss.all, sty.freeBox__bgNhq)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__vQxVm
                      )}
                    >
                      {"Naluri"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__b1TIo
                      )}
                    >
                      {"PT NALURI HIDUP INDONESIA"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vrjsJ)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__senGq)}
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
                    className={classNames(projectcss.all, sty.freeBox__wGwEo)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__jEJy
                      )}
                    >
                      {"Eka Hospital"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iOcIp
                      )}
                    >
                      {"PELITA RELIANCE INTERNATIONAL HOSPITAL"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__u55T)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__q4ZP
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-1`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1YDc
                    )}
                  >
                    {"1"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wknDb
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-2`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kFgK5
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
              className={classNames(projectcss.all, sty.freeBox___3WKx)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zeFds
                )}
              >
                {"© Kementerian Kesehatan RI "}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uwOrm
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
  root: ["root", "header", "navbarv2", "h1", "h2", "footer"],
  header: ["header", "navbarv2"],
  navbarv2: ["navbarv2"],
  h1: ["h1"],
  h2: ["h2"],
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
  footer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMitraDiawasi1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMitraDiawasi1__VariantsArgs;
    args?: PlasmicMitraDiawasi1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMitraDiawasi1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMitraDiawasi1__ArgsType,
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
          internalArgPropNames: PlasmicMitraDiawasi1__ArgProps,
          internalVariantPropNames: PlasmicMitraDiawasi1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMitraDiawasi1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMitraDiawasi1";
  } else {
    func.displayName = `PlasmicMitraDiawasi1.${nodeName}`;
  }
  return func;
}

export const PlasmicMitraDiawasi1 = Object.assign(
  // Top-level PlasmicMitraDiawasi1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navbarv2: makeNodeComponent("navbarv2"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMitraDiawasi1
    internalVariantProps: PlasmicMitraDiawasi1__VariantProps,
    internalArgProps: PlasmicMitraDiawasi1__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMitraDiawasi1;
/* prettier-ignore-end */
