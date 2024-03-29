// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: gr0XLr-NHHB

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
import projectcss from "./plasmic_sandbox_satuhsehat.module.css"; // plasmic-import: mazsTSCdeXMvNewzsED8CP/projectcss
import sty from "./PlasmicMitraTerdaftar6.module.css"; // plasmic-import: gr0XLr-NHHB/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon

export type PlasmicMitraTerdaftar6__VariantMembers = {};
export type PlasmicMitraTerdaftar6__VariantsArgs = {};
type VariantPropType = keyof PlasmicMitraTerdaftar6__VariantsArgs;
export const PlasmicMitraTerdaftar6__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMitraTerdaftar6__ArgsType = {};
type ArgPropType = keyof PlasmicMitraTerdaftar6__ArgsType;
export const PlasmicMitraTerdaftar6__ArgProps = new Array<ArgPropType>();

export type PlasmicMitraTerdaftar6__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  navbarv2?: p.Flex<typeof Navbarv2>;
  h1?: p.Flex<"h1">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<"div">;
};

export interface DefaultMitraTerdaftar6Props {}

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

function PlasmicMitraTerdaftar6__RenderFunc(props: {
  variants: PlasmicMitraTerdaftar6__VariantsArgs;
  args: PlasmicMitraTerdaftar6__ArgsType;
  overrides: PlasmicMitraTerdaftar6__OverridesType;
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
          <div className={classNames(projectcss.all, sty.freeBox__gdWf8)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__p2KKy)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__fRa6H)}
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
                    {"Penyelenggaran Inovasi Kesehatan (IDK)Tercatat"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vfO4N
                    )}
                  >
                    {
                      'Status "Tercatat" diberikan kepada penyelenggara IDK yang sudah mendaftar serta telah lolos verifikasi dan validasi dokumen. \n\nPenyelenggara IDK dengan status "Tercatat" tidak serta merta diberikan hak untuk menggunakan logo Kementerian Kesehatan dalam media promosinya. Penggunaan logo Kementerian Kesehatan diatur lebih lanjut melalui PMK No.7 Tahun 2017 tentang Penggunaan Logo Kementerian Kesehatan.'
                    }
                  </div>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.column___6UWjk)}
                />
              </div>
            ) : null}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hbSn0)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__uxm2M)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__vzDFz)}
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
                  className={classNames(projectcss.all, sty.column__pe2U5)}
                />
              </div>
            ) : null}
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___3LQwd)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___2Zm2)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__nUmC)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/sehatQjpeg.jpg",
                    fullWidth: 726,
                    fullHeight: 472,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gQgQq)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__igy5S
                      )}
                    >
                      {"SehatQ"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___8G7Ko
                      )}
                    >
                      {"PT. Sehatq Harsana Emedika"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__blI7W)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__j4L4D)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/sesamaCarepng.png",
                    fullWidth: 600,
                    fullHeight: 328,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___2AgN)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__mpnNl
                      )}
                    >
                      {"Sesama Care"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wflwM
                      )}
                    >
                      {"PT. Teknologi Sehat Global"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zsnfa)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__sPjfP)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/siapDokjpeg.jpg",
                    fullWidth: 290,
                    fullHeight: 269,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ksY8Z)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__tpKkt
                      )}
                    >
                      {"SIAPDOK"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bbva2
                      )}
                    >
                      {"PT. Telekonsul Digital Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yoDvQ)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___5BZFz)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/sintasipng.png",
                    fullWidth: 4501,
                    fullHeight: 4501,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__fbpaR)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__kXLpd
                      )}
                    >
                      {"SINTASI"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__laLfZ
                      )}
                    >
                      {"PT. Sintesa Inti Prestasi"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__awCe)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__jicmr)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/sirkajpeg.jpg",
                    fullWidth: 1024,
                    fullHeight: 337,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gh3C4)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__og5Jb
                      )}
                    >
                      {"SIRKA"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___8Nz0J
                      )}
                    >
                      {"PT. Sejuta Kawan Sehat"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__g13RU)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___3JiMp)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/sisfomediaSmartHealthMobile2Png.png",
                    fullWidth: 433,
                    fullHeight: 500,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jeKCk)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__fYUa
                      )}
                    >
                      {"SmartHealth Mobile"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pn9NT
                      )}
                    >
                      {"PT. Sisfo Medika"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___18Lc)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__r2AOm)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/smartpsCpng.png",
                    fullWidth: 164,
                    fullHeight: 138,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ipQdK)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__bJi
                      )}
                    >
                      {"SMARTPSC"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__utdkV
                      )}
                    >
                      {"CV. HARMONI INTEGRA"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___30Ou9)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___7122X)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/gsiTanyaDnApng.png",
                    fullWidth: 211,
                    fullHeight: 69,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__kVoz0)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__r395
                      )}
                    >
                      {"TanyaDNA"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__c3XCe
                      )}
                    >
                      {"PT. Genomik Solidaritas Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bYW6)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__awtp0)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/trustmedis11Png.png",
                    fullWidth: 1244,
                    fullHeight: 410,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__aL7E)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__go63F
                      )}
                    >
                      {"Telemedis"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mvAC
                      )}
                    >
                      {"PT. Inovasi Teknologi Solusindo"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jyoTy)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__y62IZ)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/tenangjpeg.jpg",
                    fullWidth: 1280,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__h14Tp)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__jq2Of
                      )}
                    >
                      {"Tenang"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1Mf33
                      )}
                    >
                      {"PT. Tenang Untuk Dunia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__bf9Uf)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__nErHw
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-1`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yhzsD
                    )}
                  >
                    {"1"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__qWXdM
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-2`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ng0AG
                    )}
                  >
                    {"2"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__lwvBk
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-3`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yVfAe
                    )}
                  >
                    {"3"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jeg2
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-4`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__u1Sox
                    )}
                  >
                    {"4"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__z92Qj
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-5`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4Z9WU
                    )}
                  >
                    {"5"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ps7Rk
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-6`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cGlxD
                    )}
                  >
                    {"6"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__sn5Ad
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-7`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__meTmA
                    )}
                  >
                    {"7"}
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
              className={classNames(projectcss.all, sty.freeBox__t4YcY)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6Kb5C
                )}
              >
                {"© Kementerian Kesehatan RI "}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6B5Ex
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
  PlasmicMitraTerdaftar6__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMitraTerdaftar6__VariantsArgs;
    args?: PlasmicMitraTerdaftar6__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMitraTerdaftar6__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMitraTerdaftar6__ArgsType,
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
          internalArgPropNames: PlasmicMitraTerdaftar6__ArgProps,
          internalVariantPropNames: PlasmicMitraTerdaftar6__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMitraTerdaftar6__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMitraTerdaftar6";
  } else {
    func.displayName = `PlasmicMitraTerdaftar6.${nodeName}`;
  }
  return func;
}

export const PlasmicMitraTerdaftar6 = Object.assign(
  // Top-level PlasmicMitraTerdaftar6 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navbarv2: makeNodeComponent("navbarv2"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMitraTerdaftar6
    internalVariantProps: PlasmicMitraTerdaftar6__VariantProps,
    internalArgProps: PlasmicMitraTerdaftar6__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMitraTerdaftar6;
/* prettier-ignore-end */
