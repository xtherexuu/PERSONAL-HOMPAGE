import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function MainLayout() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{t("greeting")}</h1>
      <Link
        to="/pl"
        onClick={() => {
          i18n.changeLanguage("pl");
        }}
      >
        PL
      </Link>
      <Link
        to="/en"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        EN
      </Link>
    </div>
  );
}
