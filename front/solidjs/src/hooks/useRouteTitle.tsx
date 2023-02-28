import { useLocation } from "@solidjs/router";

const ROUTE_TITLE_MAPPING = {
  "/": "Classement des meilleures citations entendues chez Zenika",
  "/add": "AJouter une citation",
};

export function useRouteTitle() {
  const { pathname } = useLocation();

  const getTitleFromRoute = (pathname: string) => {
    if (pathname in ROUTE_TITLE_MAPPING) {
      return ROUTE_TITLE_MAPPING[pathname as keyof typeof ROUTE_TITLE_MAPPING];
    } else {
      return ROUTE_TITLE_MAPPING["/"];
    }
  };

  return {
    title: getTitleFromRoute(pathname),
  };
}
