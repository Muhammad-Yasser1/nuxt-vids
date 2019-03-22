import Cookie from "js-cookie";

export default function(context) {
  if (process.client) {
    if (window.localStorage.getItem("token")) {
      context.store.state.token = window.localStorage.getItem("token");
      context.store.state.isAdmin = Boolean(
        window.localStorage.getItem("isAdmin")
      );
      if (context.store.state.isAdmin) {
        context.redirect("/admin");
      } else {
        context.redirect("/main");
      }
    }
  }
  if (process.server) {
    if (Cookie.get("token")) {
      context.store.state.token = Cookie.get("token");
      context.store.state.isAdmin = Boolean(Cookie.get("isAdmin"));
      if (context.store.state.isAdmin) {
        context.redirect("/admin");
      } else {
        context.redirect("/main");
      }
    }
  }
}
