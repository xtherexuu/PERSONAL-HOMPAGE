import { NavLink, useParams } from "@remix-run/react";
import srcToSth from "../../resources/images/sth.svg";
import { useTranslation } from "react-i18next";
import { returnLanguageIfSupported } from "~/localization/resource";
import srcToPolandFlag from "../../resources/images/pl-flag.svg";
import srcToUnitedKingdomFlag from "../../resources/images/uk-flag.svg";

export default function Header({
  currentLanguage,
}: {
  currentLanguage: string;
}) {
  const { t } = useTranslation();
  const params = useParams();
  const paramsLang = params.lang;
  return (
    <header className="flex items-center justify-between p-[20px]">
      <img src={srcToSth} width={50} />
      <nav className="flex gap-[20px] text-2xl font-medium">
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
      </nav>
      <div>
        <button className="flex items-center justify-between gap-[15px] py-[8px] px-[10px] border-dbg border-[3px] rounded-t-xl">
          <div className="flex items-center gap-[5px]">
            <img
              className="w-[50px] rounded-xl"
              src={
                currentLanguage === "pl"
                  ? srcToPolandFlag
                  : srcToUnitedKingdomFlag
              }
            />
            <p>{currentLanguage === "pl" ? "PL" : "EN"}</p>
          </div>
          <div>V</div>
        </button>
        <ul></ul>
      </div>
    </header>
  );
}
