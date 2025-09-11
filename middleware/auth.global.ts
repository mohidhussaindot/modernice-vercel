export default defineNuxtRouteMiddleware((to, from) => {
  const token = process.client ? localStorage.getItem("token") : null;
  const userInfo = process.client ? JSON.parse(localStorage.getItem("userInfo") || "{}") : null;
  const path = to.path.replace(/^\/[a-z]{2}(?=\/|$)/, "");
if (
    token &&
    (path === "/auth/login" || path === "/auth/register")
) {
    return userInfo.role === "player" ? navigateTo("/dashboard") : navigateTo("/organizer/dashboard");
}
});