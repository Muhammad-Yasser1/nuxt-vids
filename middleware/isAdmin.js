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
}
