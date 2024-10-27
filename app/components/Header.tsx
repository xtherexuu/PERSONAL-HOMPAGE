import { Link, NavLink, useLocation, useParams } from "@remix-run/react";
import srcToSth from "../../resources/images/sth.svg";
import { useTranslation } from "react-i18next";
import {
  returnLanguageIfSupported,
  supportedLanguages,
} from "~/localization/resource";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Header({
  currentLanguage,
}: {
  currentLanguage: string;
}) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { t, i18n } = useTranslation();
  const params = useParams();
  const paramsLang = params.lang;
  const location = useLocation();
  const path = location.pathname.split("/").slice(2).join("/");

  useEffect(() => {
    if (!isMenuOpened) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpened]);

  return (
    <>
      <div
        className={`fixed xs:hidden w-screen h-[calc(100vh_-_71px)] top-[71px] left-0 backdrop-blur-[3px] bg-dbg bg-opacity-50 z-[2] transition-opacity${
          isMenuOpened ? " opacity-100" : " opacity-0"
        }`}
      />
      <div
        className={`fixed xs:hidden z-[3] h-[calc(100vh_-_71px)] top-[71px] right-0 inline-flex flex-col items-start gap-[20px] p-[20px] bg-lbg transition-transform${
          isMenuOpened ? "" : " translate-x-[100%]"
        }`}
      >
        <nav className="flex flex-col gap-[20px] text-2xl font-medium">
          <NavLink
            onClick={() => {
              setIsLangMenuOpen(false);
              setIsMenuOpened(false);
            }}
            to={
              paramsLang && returnLanguageIfSupported(paramsLang)
                ? `/${paramsLang}`
                : "/"
            }
            className={({ isActive }) =>
              isActive ? "text-shine-red font-semibold" : ""
            }
          >
            {t("nav_home")}
          </NavLink>
          <NavLink
            onClick={() => {
              setIsLangMenuOpen(false);
              setIsMenuOpened(false);
            }}
            to={
              paramsLang && returnLanguageIfSupported(paramsLang)
                ? `/${paramsLang}/order`
                : "/order"
            }
          >
            {t("nav_order")}
          </NavLink>
          <NavLink
            onClick={() => {
              setIsLangMenuOpen(false);
              setIsMenuOpened(false);
            }}
            to={
              paramsLang && returnLanguageIfSupported(paramsLang)
                ? `/${paramsLang}/recruitment`
                : "/recruitment"
            }
          >
            {t("nav_recruitment")}
          </NavLink>
          <NavLink
            onClick={() => {
              setIsLangMenuOpen(false);
              setIsMenuOpened(false);
            }}
            to={
              paramsLang && returnLanguageIfSupported(paramsLang)
                ? `/${paramsLang}/blog`
                : "/blog"
            }
          >
            BLOG
          </NavLink>
        </nav>
      </div>
      <header className="flex sticky top-0 left-0 z-[4] items-center justify-between p-[20px]">
        <img src={srcToSth} className="w-[30px] s:w-[40px] m:w-[50px]" />
        <nav className="hidden xs:flex gap-[20px] text-l s:text-xl m:text-2xl font-medium">
          <NavLink
            to={
              paramsLang && returnLanguageIfSupported(paramsLang)
                ? `/${paramsLang}`
                : "/"
            }
            className={({ isActive }) =>
              isActive ? "text-shine-red font-semibold" : ""
            }
          >
            {t("nav_home")}
          </NavLink>
          <NavLink to="/order">{t("nav_order")}</NavLink>
          <NavLink to="/recruitment">{t("nav_recruitment")}</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
        </nav>
        <div className="flex gap-[20px] items-center">
          <div className="relative">
            <button
              onClick={() => {
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
              className="flex items-center justify-between gap-[5px] s:gap-[8px] py-[5px] s:py-[8px] px-[10px] rounded-[12px] shadow-lng"
            >
              <div className="flex items-center gap-[5px]">
                <div
                  className={`w-[20px] s:w-[25px] h-[15px] s:h-[20px] bg-cover rounded-[12px] bg-center ${
                    currentLanguage === "pl" ? "bg-pl-flag" : "bg-uk-flag"
                  }`}
                ></div>
                <p className="text-sm s:text-base">
                  {currentLanguage === "pl" ? "PL" : "EN"}
                </p>
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </button>
            <ul
              className={
                isLangMenuOpen
                  ? "absolute z-[5] top-[calc(100%_+_20px)] w-full flex flex-col rounded-[12px] shadow-lng bg-lbg"
                  : "hidden"
              }
            >
              {supportedLanguages.map((lang) => (
                <li
                  className={`hover:bg-[#00000030] ${
                    lang === "pl" ? "rounded-b-[12px]" : "rounded-t-[12px]"
                  }`}
                  key={lang}
                >
                  <Link
                    to={`/${lang}/${path}`}
                    onClick={() => {
                      i18n.changeLanguage(lang);
                      setIsLangMenuOpen(false);
                    }}
                    className="flex items-center gap-[5px] py-[8px] px-[10px]"
                  >
                    <div
                      className={`w-[20px] s:w-[25px] h-[15px] s:h-[20px] bg-cover rounded-[12px] bg-center ${
                        lang === "pl" ? "bg-pl-flag" : "bg-uk-flag"
                      }`}
                    ></div>
                    <p className="text-sm s:text-base">{lang.toUpperCase()}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              setIsLangMenuOpen(false);
              setIsMenuOpened(!isMenuOpened);
            }}
            className="flex xs:hidden flex-col gap-[6px] overflow-x-hidden overflow-y-hidden py-[1px]"
          >
            <div
              className={`w-[35px] h-[4px] bg-vdbg rounded-[5px] transition-transform${
                isMenuOpened ? " rotate-45 translate-y-[10px]" : ""
              }`}
            />
            <div
              className={`w-[35px] h-[4px] bg-vdbg rounded-[5px] transition-transform${
                isMenuOpened ? " translate-x-[calc(20px_+_100%_+_2px)]" : ""
              }`}
            />
            <div
              className={`w-[35px] h-[4px] bg-vdbg rounded-[5px] transition-transform${
                isMenuOpened ? " -rotate-45 -translate-y-[10px]" : ""
              }`}
            />
          </button>
        </div>
      </header>
    </>
  );
}
