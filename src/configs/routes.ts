const ROUTES = {
  main: {
    createRoot: (): string => "/",
    mask: "/",
  },

  markets: {
    createRoute: (): string => "/markets",
    mask: "markets",

    detail: {
      createRoute: (id: string): string => `/markets/${id}`,
      mask: "markets/:id",
    },
  },

  search: {
    createRoute: (): string => "/search",
    mask: "search",
  },
};

export default ROUTES;
