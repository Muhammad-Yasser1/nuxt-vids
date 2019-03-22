export const state = () => ({
  vids: [],
  token: "",
  isAdmin: false,
  editMode: true
});

export const mutations = {
  authenticateUsers(state, payload) {
    let fbUrl =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=";
    if (payload.loginMode) {
      fbUrl =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=";
    }
    this.$axios
      .$post(fbUrl + process.env.apiKey, {
        email: payload.user.email,
        password: payload.user.password,
        returnSecureToken: true
      })
      .then(res => {
        state.token = res.idToken;
        window.localStorage.setItem("token", res.idToken);
        if (res.email == "anoop@simple.com") {
          state.isAdmin = true;
          window.localStorage.setItem("isAdmin", true);
          return this.$router.push({
            path: "/admin"
          });
        } else {
          state.isAdmin = false;
          window.localStorage.removeItem("isAdmin");
          this.$router.push({
            path: "/main"
          });
        }
      });
  },
  logout(state) {
    state.token = null;
    state.isAdmin = false;
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isAdmin");
    this.$router.push("/");
  },
  getVids(state) {
    state.vids = [];
    return this.$axios
      .get("https://nuxt-vids.firebaseio.com/vids.json")
      .then(res => {
        for (const vidKey in res.data) {
          if (res.data.hasOwnProperty(vidKey)) {
            const val = res.data[vidKey];
            state.vids.push({
              ...val,
              id: vidKey
            });
          }
        }
      });
  },
  createVid(state, payload) {
    state.token = localStorage.getItem("token");
    this.$axios
      .post(
        "https://nuxt-vids.firebaseio.com/vids.json?auth=" + state.token,
        payload
      )
      .then(res => {
        return this.commit("getVids");
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateVid(state, payload) {
    state.token = localStorage.getItem("token");
    this.$axios
      .put(
        "https://nuxt-vids.firebaseio.com/vids/" +
          payload.id +
          ".json?auth=" +
          state.token,
        payload
      )
      .then(res => {
        const target = state.vids.findIndex(x => x.id == payload.id);
        state.vids[target] = payload;
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteVid(state, payload) {
    state.token = localStorage.getItem("token");
    this.$axios
      .delete(
        "https://nuxt-vids.firebaseio.com/vids/" +
          payload.id +
          ".json?auth=" +
          state.token
      )
      .then(res => {
        const target = state.vids.findIndex(x => x.id == payload.id);
        state.vids.splice(target, 1);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const actions = {
  nuxtServerInit(vuexContext, nuxtContext) {
    return nuxtContext.$axios
      .get("https://nuxt-vids.firebaseio.com/vids.json")
      .then(res => {
        for (const vidKey in res.data) {
          if (res.data.hasOwnProperty(vidKey)) {
            const val = res.data[vidKey];
            vuexContext.state.vids.push({
              ...val,
              id: vidKey
            });
          }
        }
      });
  },
  authenticateUsers(vuexContext, payload) {
    vuexContext.commit("authenticateUsers", payload);
  },
  createVid(vuexContext, payload) {
    vuexContext.commit("createVid", payload);
  },
  updateVid(vuexContext, payload) {
    vuexContext.commit("updateVid", payload);
  },
  deleteVid(vuexContext, payload) {
    vuexContext.commit("deleteVid", payload);
  }
};

export const strict = false;
