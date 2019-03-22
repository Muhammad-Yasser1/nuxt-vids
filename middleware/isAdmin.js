import Cookie from "js-cookie";

export default function(context) {
  if (process.client) {
    if (
      window.localStorage.getItem("token") &&
      !window.localStorage.getItem("isAdmin")
    ) {
      context.redirect("/main");
    }
    if (!window.localStorage.getItem("token")) {
      context.redirect("/");
    }
  }
  if (process.server) {
    if (Cookie.get("token") && !Cookie.get("isAdmin")) {
      context.redirect("/main");
    }
    if (!Cookie.get("token")) {
      context.redirect("/");
    }
  }
}
