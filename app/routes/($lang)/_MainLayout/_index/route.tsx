import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import Header from "~/components/Header";
import i18next from "~/localization/i18n.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Bartosz Załęski" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader({ request }: LoaderFunctionArgs) {
  const currentLanguage = i18next.getLocale(request);
  return currentLanguage;
}

export default function MainLayout() {
  const currentLanguage: string = useLoaderData();
  const params = useParams();
  const paramsLanguage = params.lang;
  return (
    <div className="bg-lbg min-h-[200vh] text-dbg">
      <Header currentLanguage={paramsLanguage || currentLanguage} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
