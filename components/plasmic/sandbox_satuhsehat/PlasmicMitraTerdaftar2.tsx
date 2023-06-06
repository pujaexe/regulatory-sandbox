// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mazsTSCdeXMvNewzsED8CP
// Component: OVqjk0nNAZQ

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
import sty from "./PlasmicMitraTerdaftar2.module.css"; // plasmic-import: OVqjk0nNAZQ/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: yxVuo-XHb-/icon

export type PlasmicMitraTerdaftar2__VariantMembers = {};
export type PlasmicMitraTerdaftar2__VariantsArgs = {};
type VariantPropType = keyof PlasmicMitraTerdaftar2__VariantsArgs;
export const PlasmicMitraTerdaftar2__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMitraTerdaftar2__ArgsType = {};
type ArgPropType = keyof PlasmicMitraTerdaftar2__ArgsType;
export const PlasmicMitraTerdaftar2__ArgProps = new Array<ArgPropType>();

export type PlasmicMitraTerdaftar2__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  navbarv2?: p.Flex<typeof Navbarv2>;
  h1?: p.Flex<"h1">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<"div">;
};

export interface DefaultMitraTerdaftar2Props {}

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

function PlasmicMitraTerdaftar2__RenderFunc(props: {
  variants: PlasmicMitraTerdaftar2__VariantsArgs;
  args: PlasmicMitraTerdaftar2__ArgsType;
  overrides: PlasmicMitraTerdaftar2__OverridesType;
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
          <div className={classNames(projectcss.all, sty.freeBox__omuf3)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__hhqJe)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__nukDm)}
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
                      sty.text__drDqH
                    )}
                  >
                    {
                      'Status "Tercatat" diberikan kepada penyelenggara IDK yang sudah mendaftar serta telah lolos verifikasi dan validasi dokumen. \n\nPenyelenggara IDK dengan status "Tercatat" tidak serta merta diberikan hak untuk menggunakan logo Kementerian Kesehatan dalam media promosinya. Penggunaan logo Kementerian Kesehatan diatur lebih lanjut melalui PMK No.7 Tahun 2017 tentang Penggunaan Logo Kementerian Kesehatan.'
                    }
                  </div>
                </p.Stack>
                <div
                  className={classNames(projectcss.all, sty.column__vmIgc)}
                />
              </div>
            ) : null}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4JmN)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.columns__fixXi)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column___3YX2R)}
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
                  className={classNames(projectcss.all, sty.column___9SmoF)}
                />
              </div>
            ) : null}
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xyCis)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__j2EH)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__nAfvN)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/conficarepng.png",
                    fullWidth: 1683,
                    fullHeight: 554,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xZwW1)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__bxj5W
                      )}
                    >
                      {"CONFICARES"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2BXap
                      )}
                    >
                      {"PT. Qlcom Solusi Bisnis"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___3Vz9M)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__vfZno)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/dkonsulLogoAdityasKemalFakhruddinpng.png",
                    fullWidth: 907,
                    fullHeight: 360,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__t5Nuf)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__irUaO
                      )}
                    >
                      {"dkonsul"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ntExc
                      )}
                    >
                      {"PT. Global Urban Esensial"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__cWrYp)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__z8W13)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/medifaDoctorTool1Png.png",
                    fullWidth: 429,
                    fullHeight: 139,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qtLCe)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__lwQzM
                      )}
                    >
                      {"DoctorTool"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vyRdr
                      )}
                    >
                      {"PT. Medifa Infoyasa Suryantara"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hVrF)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qu7Aa)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/aretaDubDubpng.png",
                    fullWidth: 5692,
                    fullHeight: 1668,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ll8XD)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___4Fxar
                      )}
                    >
                      {"Dub-Dub"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aJhKn
                      )}
                    >
                      {"PT. Areta Rekayasa Teknologi"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__d6K5)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rwIpf)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/ekaHospitalpng.png",
                    fullWidth: 2481,
                    fullHeight: 1218,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__pfAt)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___0FxTs
                      )}
                    >
                      {"Eka Hospital"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ly9Q
                      )}
                    >
                      {"Pelita Reliance International Hospital"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lUoOs)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__pjFdO)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/elitech2Png.png",
                    fullWidth: 4322,
                    fullHeight: 4124,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__eJlU2)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__l3Vk
                      )}
                    >
                      {"Elitech"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gM66J
                      )}
                    >
                      {"PT. Sinko Prima Alloy"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iOcav)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__uaWxg)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/farmaseepng.png",
                    fullWidth: 601,
                    fullHeight: 124,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___9NQxI)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5___2B9Po
                      )}
                    >
                      {"Farmasee"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2WWcl
                      )}
                    >
                      {"PT. Visi Tekno Farma Persada"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jV6Ut)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__oY8Iq)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/fitHappypng.png",
                    fullWidth: 1024,
                    fullHeight: 1024,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b6X0V)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__wxEbg
                      )}
                    >
                      {"FitHappy"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pCoav
                      )}
                    >
                      {"PT. Cepat Sembuh Hidup Sehat"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__o5JEb)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__lPvD)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/getmedikpng.png",
                    fullWidth: 2206,
                    fullHeight: 802,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wis1H)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__r6VO
                      )}
                    >
                      {"GetMedik"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aAeNi
                      )}
                    >
                      {"PT. Layanan Medik Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ua2I)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___3CqHy)}
                  displayHeight={"72px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"72px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sandbox_satuhsehat/images/grtwellNew2Xpng.png",
                    fullWidth: 1534,
                    fullHeight: 1256,
                    aspectRatio: undefined
                  }}
                />

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ikdiA)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__szcwo
                      )}
                    >
                      {"Getwell"}
                    </h5>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rKdJj
                      )}
                    >
                      {"PT. Telemedika Teknologi Indonesia"}
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__yi0RU)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jehX7
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-1`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rinP2
                    )}
                  >
                    {"1"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__u3YfS
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-2`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0R8Jb
                    )}
                  >
                    {"2"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__q8CzK
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-3`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lGbj5
                    )}
                  >
                    {"3"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__hRx3K
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-4`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fl2Ch
                    )}
                  >
                    {"4"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__h2X3H
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-5`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__j5D
                    )}
                  >
                    {"5"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__homtl
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-6`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___083R6
                    )}
                  >
                    {"6"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__plfp
                  )}
                  component={Link}
                  href={`/mitra-terdaftar-7`}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rUos2
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
              className={classNames(projectcss.all, sty.freeBox___6Au8B)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0Bw1
                )}
              >
                {"© Kementerian Kesehatan RI "}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ijPwZ
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
  PlasmicMitraTerdaftar2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMitraTerdaftar2__VariantsArgs;
    args?: PlasmicMitraTerdaftar2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMitraTerdaftar2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMitraTerdaftar2__ArgsType,
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
          internalArgPropNames: PlasmicMitraTerdaftar2__ArgProps,
          internalVariantPropNames: PlasmicMitraTerdaftar2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMitraTerdaftar2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMitraTerdaftar2";
  } else {
    func.displayName = `PlasmicMitraTerdaftar2.${nodeName}`;
  }
  return func;
}

export const PlasmicMitraTerdaftar2 = Object.assign(
  // Top-level PlasmicMitraTerdaftar2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navbarv2: makeNodeComponent("navbarv2"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMitraTerdaftar2
    internalVariantProps: PlasmicMitraTerdaftar2__VariantProps,
    internalArgProps: PlasmicMitraTerdaftar2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMitraTerdaftar2;
/* prettier-ignore-end */
