// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: yZECew2bO7I

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
import sty from "./PlasmicMitraTerdaftar5.module.css"; // plasmic-import: yZECew2bO7I/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon

export type PlasmicMitraTerdaftar5__VariantMembers = {};
export type PlasmicMitraTerdaftar5__VariantsArgs = {};
type VariantPropType = keyof PlasmicMitraTerdaftar5__VariantsArgs;
export const PlasmicMitraTerdaftar5__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMitraTerdaftar5__ArgsType = {};
type ArgPropType = keyof PlasmicMitraTerdaftar5__ArgsType;
export const PlasmicMitraTerdaftar5__ArgProps = new Array<ArgPropType>();

export type PlasmicMitraTerdaftar5__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  navbarv2?: p.Flex<typeof Navbarv2>;
  h1?: p.Flex<"h1">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<"div">;
};

export interface DefaultMitraTerdaftar5Props {}

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

function PlasmicMitraTerdaftar5__RenderFunc(props: {
  variants: PlasmicMitraTerdaftar5__VariantsArgs;
  args: PlasmicMitraTerdaftar5__ArgsType;
  overrides: PlasmicMitraTerdaftar5__OverridesType;
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
          <div className={classNames(projectcss.all, sty.freeBox__urypk)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__tndGx)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__cXvjJ)}
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
                      sty.text__w8WwM
                    )}
                  >
                    {
                      'Status "Tercatat" diberikan kepada penyelenggara IDK yang sudah mendaftar serta telah lolos verifikasi dan validasi dokumen. \n\nPenyelenggara IDK dengan status "Tercatat" tidak serta merta diberikan hak kepada penyelenggara Inovasi Digital Kesehatan untuk menggunakan logo Kementerian Kesehatan dalam media promosinya.'
                    }
                  </div>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.column___2SfD)}
                />
              </div>
            ) : null}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4LiHm)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__x3Dd)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__u0Mvi)}
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
                  className={classNames(projectcss.all, sty.column___5N1DT)}
                />
              </div>
            ) : null}
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nWnK)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mykDi)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rFTyd)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/myclnqsehatIndonesiapng.png",
                    fullWidth: 711,
                    fullHeight: 712,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__eb6M1)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__vJlX8
                      )}
                    >
                      {"myclnq sehat"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ilpQz
                      )}
                    >
                      {"PT. Myclnq Sehat Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bR2O)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qkAoW)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/naluripng.png",
                    fullWidth: 822,
                    fullHeight: 240,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__q2Zrt)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__zwhDz
                      )}
                    >
                      {"Naluri"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__soTne
                      )}
                    >
                      {"PT. Naluri Hidup Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__blKo)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__nf8Rg)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/neurabotpng.png",
                    fullWidth: 1285,
                    fullHeight: 345,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__eWetz)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__ifxEu
                      )}
                    >
                      {"Neurabot"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nE8T0
                      )}
                    >
                      {"PT. Neura Integrasi Solusi"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__soDxS)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fgj2J)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/okeDokpng.png",
                    fullWidth: 633,
                    fullHeight: 394,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xyGYx)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__yyao9
                      )}
                    >
                      {"okedok"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dqRud
                      )}
                    >
                      {"PT. Medis Indonesia Digital"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kxSu7)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__d7Oyx)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/periksaDulupng.png",
                    fullWidth: 150,
                    fullHeight: 50,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___64Or8)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__a1Bxg
                      )}
                    >
                      {"PeriksaDulu"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__t5Uro
                      )}
                    >
                      {"PT. Periksa Canggih Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ctzZ)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rJsUb)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/periksainpng.png",
                    fullWidth: 3979,
                    fullHeight: 775,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__aWlEn)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__yGf1
                      )}
                    >
                      {"PERIKSAIN"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__s2Puy
                      )}
                    >
                      {"PT. Kreasi Periksa Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sovye)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qhanv)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/phamcypng.png",
                    fullWidth: 1024,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___0Oajf)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__dyJtf
                      )}
                    >
                      {"Phamcy"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7JqP
                      )}
                    >
                      {"PT. Tridiamant Benita Abadi"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qfOw)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___66KpJ)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/rilivpng.png",
                    fullWidth: 4669,
                    fullHeight: 2363,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__aTows)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__yxBfz
                      )}
                    >
                      {"Riliv"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lzwHr
                      )}
                    >
                      {"PT. Riliv Psikologi Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wppkL)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__yneqd)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/samElementjpeg.jpg",
                    fullWidth: 1324,
                    fullHeight: 549,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qIcD)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__o4ZHg
                      )}
                    >
                      {"SAM Element"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qvWiL
                      )}
                    >
                      {"PT. Sam Elemen Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yyo37)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___3U5Hf)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/sehatiTeleCtGpng.png",
                    fullWidth: 4167,
                    fullHeight: 4168,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wUfEz)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__yhIga
                      )}
                    >
                      {"Sehati TeleCTG"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hq7GV
                      )}
                    >
                      {"PT. Zetta Telecetege Intenasional"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__oee0)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__a4ZHf
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-1`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kzv2T
                    )}
                  >
                    {"1"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__qGbP4
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-2`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oedXn
                    )}
                  >
                    {"2"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wxlAj
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-3`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1EDc
                    )}
                  >
                    {"3"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___1GOfg
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-4`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vDs0B
                    )}
                  >
                    {"4"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__bYCy9
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-5`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ot0UJ
                    )}
                  >
                    {"5"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__blskg
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-6`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tuxj
                    )}
                  >
                    {"6"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jsat8
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-7`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a0C5G
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
              className={classNames(projectcss.all, sty.freeBox__uKrpk)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eHyNe
                )}
              >
                {"© Kementerian Kesehatan RI "}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ohruC
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
  PlasmicMitraTerdaftar5__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMitraTerdaftar5__VariantsArgs;
    args?: PlasmicMitraTerdaftar5__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMitraTerdaftar5__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMitraTerdaftar5__ArgsType,
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
          internalArgPropNames: PlasmicMitraTerdaftar5__ArgProps,
          internalVariantPropNames: PlasmicMitraTerdaftar5__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMitraTerdaftar5__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMitraTerdaftar5";
  } else {
    func.displayName = `PlasmicMitraTerdaftar5.${nodeName}`;
  }
  return func;
}

export const PlasmicMitraTerdaftar5 = Object.assign(
  // Top-level PlasmicMitraTerdaftar5 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navbarv2: makeNodeComponent("navbarv2"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMitraTerdaftar5
    internalVariantProps: PlasmicMitraTerdaftar5__VariantProps,
    internalArgProps: PlasmicMitraTerdaftar5__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMitraTerdaftar5;
/* prettier-ignore-end */
