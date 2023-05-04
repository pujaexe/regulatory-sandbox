// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: lfKNC0RMO_

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
import sty from "./PlasmicDocV2.module.css"; // plasmic-import: lfKNC0RMO_/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon
import DownSmSvgrepoComsvgIcon from "./icons/PlasmicIcon__DownSmSvgrepoComsvg"; // plasmic-import: zXZ3XcPzrU/icon
import DownloadsvgIcon from "./icons/PlasmicIcon__Downloadsvg"; // plasmic-import: rn5oD25wmM/icon

export type PlasmicDocV2__VariantMembers = {};
export type PlasmicDocV2__VariantsArgs = {};
type VariantPropType = keyof PlasmicDocV2__VariantsArgs;
export const PlasmicDocV2__VariantProps = new Array<VariantPropType>();

export type PlasmicDocV2__ArgsType = {};
type ArgPropType = keyof PlasmicDocV2__ArgsType;
export const PlasmicDocV2__ArgProps = new Array<ArgPropType>();

export type PlasmicDocV2__OverridesType = {
  root?: p.Flex<"div">;
  navbarv2?: p.Flex<typeof Navbarv2>;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  footer?: p.Flex<"div">;
};

export interface DefaultDocV2Props {}

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

function PlasmicDocV2__RenderFunc(props: {
  variants: PlasmicDocV2__VariantsArgs;
  args: PlasmicDocV2__ArgsType;
  overrides: PlasmicDocV2__OverridesType;
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
            <div className={classNames(projectcss.all, sty.freeBox___4UhfL)}>
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
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__eLIj
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
                    sty.link__de63S
                  )}
                  component={Link}
                  href={`/v-2`}
                  platform={"nextjs"}
                >
                  {"tentang"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kyIpk
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
                    sty.link___5DXr
                  )}
                  component={Link}
                  href={`/doc-v-2`}
                  platform={"nextjs"}
                >
                  {"Dokumen"}
                </p.PlasmicLink>
              </Navbarv2>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__yVqwH)}>
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__vHm1T)}
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
                  {"Dokumen Penyelenggaraan Regulatory Sandbox"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xfEcf
                  )}
                >
                  {
                    "Bergabunglah bersama kami untuk membentuk masa depan industri  Digital Kesehatan di Indonesia"
                  }
                </div>
              </p.Stack>
              <div className={classNames(projectcss.all, sty.column__aqOen)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__spFn9)}
                />
              </div>
            </div>
            <DownSmSvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg__rmtib)}
              role={"img"}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___8ZvpG)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__di8Gs)}
            >
              {true ? (
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__g6Efj
                  )}
                >
                  {"Dokumen Pendukung"}
                </h2>
              ) : null}
              {true ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wtME
                  )}
                >
                  {
                    "Regulatory sandbox hadir sebagai ruang uji bagi penyelenggara inovasi digital kesehatan (IDK) untuk mendukung pengembangan regulasi dan ekosistem inovasi digital kesehatan di Indonesia yang implementasinya didasarkan pada Keputusan Menteri Kesehatan (KMK) Republik Indonesia Nomor HK.01.07/MENKES/1280/2023\n\nPada KMK tersebut, dijelaskan mengenai tahapan pelaksanaan regulatory sandbox serta penggunaan identitas visual status kepesertaan bagi penyelenggara IDK yang mendapatkan rekomendasi maupun pembinaan dari Kemenkes RI.\n\nUntuk informasi selengkapnya, silahkan unduh KMK di bawah ini"
                  }
                </div>
              ) : null}
              {true ? (
                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__g8GWo
                  )}
                  component={Link}
                  href={
                    "https://drive.google.com/file/d/1yYJzCBYEZ6Za-4AfBuuGqJtzxoHCQOXT/view?usp=share_link" as const
                  }
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___9CqUh)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/sandbox_satuhsehat/images/image30Png.png",
                      fullWidth: 34,
                      fullHeight: 42,
                      aspectRatio: undefined
                    }}
                  />

                  <h5
                    className={classNames(
                      projectcss.all,
                      projectcss.h5,
                      projectcss.__wab_text,
                      sty.h5___6DLlO
                    )}
                  >
                    {"KMK Regulatory Sandbox"}
                  </h5>
                  <DownloadsvgIcon
                    className={classNames(projectcss.all, sty.svg__ed9V5)}
                    role={"img"}
                  />
                </p.Stack>
              ) : null}
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__deZyE
                )}
              >
                {"Dokumen Persyaratan Regulatory Sandbox"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4U6Mu
                )}
              >
                {
                  "Penyelenggara IDK yang mengajukan pendaftaran regulatory sandbox wajib menyertakan dokumen berikut untuk kelengkapan persyaratan administrasi:"
                }
              </div>
              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___0YPn4
                )}
                component={Link}
                href={
                  "https://drive.google.com/drive/folders/14xFj5viJbSH5soELtmKUGld8ztEisoYj?usp=share_link" as const
                }
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__kCyLo)}
                  displayHeight={"34px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"34px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/docsFileSvgrepoCom1Png.png",
                    fullWidth: 52,
                    fullHeight: 52,
                    aspectRatio: undefined
                  }}
                />

                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__vi6Gv
                  )}
                >
                  {"Pedoman Pengisian Formulir Pendaftaran"}
                </h5>
                <DownloadsvgIcon
                  className={classNames(projectcss.all, sty.svg__rmHpd)}
                  role={"img"}
                />
              </p.Stack>
              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__rmlD3
                )}
                component={Link}
                href={
                  "https://drive.google.com/drive/folders/1bdfztReb0apHCLn6hr4XTSQuDAt_UDxp?usp=share_link" as const
                }
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__o3Mwz)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/image30Png.png",
                    fullWidth: 34,
                    fullHeight: 42,
                    aspectRatio: undefined
                  }}
                />

                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__q8L89
                  )}
                >
                  {"Format Surat Pernyataan dan Permohonan Pencatatan"}
                </h5>
                <DownloadsvgIcon
                  className={classNames(projectcss.all, sty.svg__j7Vvf)}
                  role={"img"}
                />
              </p.Stack>
              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__wpdL
                )}
                component={Link}
                href={
                  "https://drive.google.com/drive/folders/1KwVnJzstFNXgB81zCMrrp1X3LSudCKKK" as const
                }
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qgggo)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/image30Png.png",
                    fullWidth: 34,
                    fullHeight: 42,
                    aspectRatio: undefined
                  }}
                />

                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__as8Vi
                  )}
                >
                  {"Alur Regulatory Sandbox"}
                </h5>
                <DownloadsvgIcon
                  className={classNames(projectcss.all, sty.svg__jD7B)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          </div>
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
              className={classNames(projectcss.all, sty.freeBox__gkLb3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bHFqU
                )}
              >
                {"© Kementerian Kesehatan RI "}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qYDkC
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
  root: ["root", "navbarv2", "columns", "h1", "footer"],
  navbarv2: ["navbarv2"],
  columns: ["columns", "h1"],
  h1: ["h1"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbarv2: typeof Navbarv2;
  columns: "div";
  h1: "h1";
  footer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocV2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocV2__VariantsArgs;
    args?: PlasmicDocV2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocV2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDocV2__ArgsType,
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
          internalArgPropNames: PlasmicDocV2__ArgProps,
          internalVariantPropNames: PlasmicDocV2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDocV2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocV2";
  } else {
    func.displayName = `PlasmicDocV2.${nodeName}`;
  }
  return func;
}

export const PlasmicDocV2 = Object.assign(
  // Top-level PlasmicDocV2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarv2: makeNodeComponent("navbarv2"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicDocV2
    internalVariantProps: PlasmicDocV2__VariantProps,
    internalArgProps: PlasmicDocV2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDocV2;
/* prettier-ignore-end */
