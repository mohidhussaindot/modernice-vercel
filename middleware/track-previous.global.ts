const routeHistory: { name: string; params?: any }[] = [];

export default defineNuxtRouteMiddleware((to, from) => {
  const isBackNav = to.query._back === '1';

  // Don't record duplicate entries or back navigations
  if (
    from.name &&
    from.name !== to.name &&
    !isBackNav &&
    (!routeHistory.length || routeHistory[routeHistory.length - 1].name !== from.name)
  ) {
    routeHistory.push({
      name: from.name.toString(),
      params: from.params,
    });
  }
});

export function getLastRoute() {
  // Pop route that is the same as the current one (avoid loops)
  while (routeHistory.length > 0) {
    const last = routeHistory.pop();
    if (last?.name !== useRoute().name) {
      return last;
    }
  }
  return null;
}
