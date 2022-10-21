import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        name: null,
        email: null,
        password: null,
      },
      admin: {
        name: null,
        password: null,
        token: null,
        tempadmintoken: null,
        role: null,
      },
      DspProfile: false,
      SubAdminPass: null,
      SubAdminUser: null,
      SubAdminEmail: null,
      token: null,
      products: "",
      loadedPosts: [],
      sub_total_price: 0,
      cards: [],
      profile: {
        saved: [],
        comments: "",
        tickets: [],
        orders: "",
        cart: [],
      },
      trending_discount: 0,
      offers: "",
      alert: "",
    },
    mutations: {
      /* User Log In Logic */
      async login(state, payload) {
        /*get token config */
        var LoginConfig = {
          method: "post",
          url: "/wp-json/jwt-auth/v1/token",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username: payload.username,
            password: payload.password,
          },
        };
        /* get token request */
        await this.$axios(LoginConfig)
          .then((response) => {
            state.token = response.data.token;

            /* check if user is logged in */
            if (state.token) {
              /* Remove Old Login Cookie */
              this.$cookiz.remove("jwt-token");

              /* Set New Login Cookie */
              this.$cookiz.set("jwt-token", state.token);

              /* redirect to user profile */
              this.$router.push({ path: "/profile" });

              /*set reloaded local storage */
              localStorage.setItem("reloaded", "1");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Admin Login Logic */
      async LoginAdmin(state, payload, commit) {
        /*Admin get token config */
        var AdminLogConf = {
          method: "post",
          url: "/wp-json/jwt-auth/v1/token",
          headers: { "Content-Type": "application/json" },
          data: { username: payload.username, password: payload.password },
        };

        /* request for get Admintoken  */
        await this.$axios(AdminLogConf)
          .then((response) => {
            state.tempadmintoken = response.data.token;
          })
          .catch((error) => {
            console.log(error);
          });

        /* post request to get user role */
        await this.$axios({
          method: "post",
          url: "/wp-json/wp/v2/users/me",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + state.tempadmintoken,
          },
        })
          .then((response) => {
            if (
              response.data.roles[0] == "administrator" ||
              response.data.roles[0] == "editor"
            ) {
              /* check if user is logged in and is admin or subadmin */
              state.admin.token = state.tempadmintoken;
              /* Remove Old AdminLogin Cookie */
              this.$cookiz.remove("AdminToken");
              /* Set New AdminLogin Cookie */
              this.$cookiz.set("AdminToken", state.admin.token);
              /* Remove Old admin name Cookie */
              this.$cookiz.remove("AdminName");
              /*Set Admin name cookie */
              this.$cookiz.set("AdminName", response.data.name);
              /* Remove Old admin name Cookie */
              this.$cookiz.remove("AdminEmail");
              /*Set Admin name cookie */
              this.$cookiz.set("AdminEmail", response.data.email);
              /* redirect to user admin area */
              this.$router.push({ path: "/admin" });
              /*set reloaded local storage */
              localStorage.setItem("readmin", "1");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get Admin Role */
      async getAdminRole(state) {
        /* if admin token exista commit role in state */
        if (this.$cookiz.get("AdminToken")) {
          /* get user role */
          await this.$axios({
            method: "post",
            url: "/wp-json/wp/v2/users/me",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$cookiz.get("AdminToken"),
            },
          })
            .then((response) => {
              state.admin.role = response.data.roles[0];
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },

      /*Register User Logic */
      RegisterUser(state, payload) {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.password = payload.password;

        /* Remove Old User cookies */
        this.$cookiz.remove("Username");
        this.$cookiz.remove("UserEmail");
        this.$cookiz.remove("Userpassword");

        /* set register user info in cookie */
        if (state.user.name && state.user.email && state.user.password) {
          this.$cookiz.set("Username", state.user.name),
            this.$cookiz.set("UserEmail", state.user.email),
            this.$cookiz.set("Userpassword", state.user.password);
        }
      },
      /*End Register user logic */

      /*Register SubAdmin Logic */
      SetSubAdmin(state, payload) {
        state.SubAdminUser = payload.username;
        state.SubAdminPass = payload.password;
        state.SubAdminEmail = payload.email;

        /* Remove Old Cookies */
        this.$cookiz.remove("SubAdminPass");
        this.$cookiz.remove("SubAdminUser");
        this.$cookiz.remove("SubAdminEmail");

        /* Set New Cookies */
        if (state.SubAdminPass) {
          this.$cookiz.set("SubAdminPass", state.SubAdminPass);
          this.$cookiz.set("SubAdminUser", state.SubAdminUser);
          this.$cookiz.set("SubAdminEmail", state.SubAdminEmail);
        }
      },
      /* End Register SubAdmin Logic */

      /* store SubAdmin in state from cookie */
      StoreSunAdminName(state, payload) {
        state.SubAdminUser = payload;
      },
      StoreSunAdminPass(state, payload) {
        state.SubAdminPass = payload;
      },
      StoreSunAdminEmail(state, payload) {
        state.SubAdminEmail = payload;
      },
      /* store user in state from cookie */
      StoreUSerInfo(state, payload) {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.password = payload.password;
      },

      SetAlert(state, data) {
        state.alert = data;
      },
      SetUserData(state, data) {
        state.user = data;
      },
      SetProductsData(state, data) {
        state.products = data;
      },
      SetOffersData(state, data) {
        state.offers = data;
      },
      SetCommentsData(state, data) {
        state.profile.comments = data;
      },
      SetTicketsData(state, data) {
        state.profile.tickets = data;
      },
      SetOrdersData(state, data) {
        state.profile.orders = data;
      },
      SetSavedData(state, data) {
        state.profile.saved = data;
      },
      SetCartData(state, data) {
        state.profile.cart = data;
      },
      UpdateCart(state, price) {
        state.sub_total_price = price;
      },
      ApplyCupon(state, cupon) {
        state.offers.map((offer) => {
          if (offer.acf.cuponcode == cupon) {
            state.trending_discount = offer.acf.discount;
          }
        });
      },
      SetCardsData(state, cards) {
        state.cards = cards;
      },
      AddNewCart(state, card) {
        state.cards.push(card);
      },
      DeleteFromCart(state, id) {
        state.profile.cart.map((cart) => {
          if (id == cart.id)
            state.profile.cart.splice(state.profile.cart.indexOf(cart), 1);
        });
      },
      AddToCart(state, data) {
        console.log(data);
        state.profile.cart.push(data);
      },
      SavedProduct(state, data) {
        state.profile.saved.push(data);
      },
      AddNewTicket(state, data) {
        state.profile.tickets.push(data);
      },
      DeleteSaved(state, data) {
        state.profile.saved.map((saved) => {
          if (data.id == saved.id)
            state.profile.saved.splice(state.profile.saved.indexOf(saved), 1);
        });
      },
      ExitAdminPanel() {
          /* Remove Old AdminLogin Cookie */
          this.$cookiz.remove("AdminToken");
          /* redirect Admin to Main Page */
          this.$router.push({ path: "/" });
      }
    },
    actions: {
      async nuxtServerInit({ commit, state }, context) {
        /* commit subadmin on page load */
          commit("StoreSunAdminName", this.$cookiz.get("SubAdminUser")),
          commit("StoreSunAdminPass", this.$cookiz.get("SubAdminPass")),
          commit("StoreSunAdminEmail", this.$cookiz.get("SubAdminEmail")),
        /* get role of admin */  
          commit("getAdminRole");

        /* header to get products */
        await this.$axios
          .get("/wp-json/wp/v2/products")
          .then((products) => commit("SetProductsData", products.data));
      
        await this.$axios
          .get("/wp-json/wp/v2/offers")
          .then((data) => commit("SetOffersData", data.data));
        
        if (this.$cookiz.get("jwt-token")) {
          /* get user token for login */
          const LoginToken = this.$cookiz.get("jwt-token");

          /* login if token is not null */
          if (LoginToken) {
            const headers = {
              Authorization: "Bearer" + context.$cookiz.get("jwt-token"),
              "Content-Type": "application/json",
            };
          
            await this.$axios
              .post(
                "/wp-json/wp/v2/users/me",
                { token: state.token },
                { headers }
              )
              .then((data) => commit("SetUserData", data.data));
            await this.$axios
              .get("/wp-json/wp/v2/comments", { headers })
              .then((data) => commit("SetCommentsData", data.data));

            await this.$axios
              .get("/wp-json/wp/v2/ticket", { headers })
              .then((data) => commit("SetTicketsData", data.data));

            await this.$axios
              .get("/wp-json/wp/v2/orders", { headers })
              .then((data) => commit("SetOrdersData", data.data));
 

            await this.$axios
              .get("/wp-json/wp/v2/savedproducts", { headers })
              .then((data) => commit("SetSavedData", data.data));
 
            await this.$axios
              .get("/wp-json/wp/v2/cart", { headers })
              .then((data) => commit("SetCartData", data.data));

            await this.$axios
              .get("/wp-json/wp/v2/paymentinfo", { headers })
              .then((data) => commit("SetCardsData", data.data));
            /* end user profile section */
          }
        }
      },

      /*end server init */
      async AddToCart({ commit }, { productid, userid }) {
        const headers = this.$headers;
        await this.$axios
          .post(
            "/wp-json/wp/v2/cart",
            { status: "publish", acf: { productid, userid } },
            { headers }
          )
          .then((response) =>
            commit("AddToCart", { id: response.id, acf: { productid, userid } })
          );
      },

      async DeleteSaved({ commit }, id) {
        const headers = this.$headers;

        await this.$axios
          .delete(`/wp-json/wp/v2/savedproducts/${id}`, { headers })
          .then((response) => commit("DeleteSaved", response.data));
      },

      async AddTicket({ commit }, data) {
        const headers = this.$headers;
        await this.$axios
          .post(
            "/wp-json/wp/v2/ticket",
            {
              status: "publish",
              acf: {
                ticket_author: data.author,
                ticket_content: data.description,
                ticket_Priority: data.priority,
                department: data.department,
                ticket_status: data.status,
                date: data.date,
                time: data.time,
              },
            },
            { headers }
          )
          .then(
            commit("AddNewTicket", {
              acf: {
                ticket_author: data.author,
                ticket_content: data.description,
                ticket_Priority: data.priority,
                department: data.department,
                ticket_status: data.status,
                date: data.date,
                time: data.time,
              },
            })
          );
      },

      async SavedProducts({ commit }, data) {
        const headers = this.$headers;

        await this.$axios
          .post(
            "/wp-json/wp/v2/savedproducts",
            {
              status: "publish",
              acf: data.acf,
            },
            { headers }
          )
          .then((response) => commit("SavedProduct", { acf: data.acf }));
      },

      async CheckoutCart({ commit }, data) {
        const headers = this.$headers;

        await this.$axios.post(
          "/wp-json/wp/v2/orders",
          {
            status: "publish",
            acf: data.acf,
          },
          { headers }
        );
      },

      async AddNewCart({ commit, state }, data) {
        const headers = this.$headers;

        await this.$axios
          .post(
            "/wp-json/wp/v2/paymentinfo",
            {
              status: "publish",
              acf: data.acf,
            },
            { headers }
          )
          .then((res) => {
            commit("AddNewCart", data);
            commit("SetAlert", { message: "Cart Added.", type: "success" });
            alert(state.alert.message);
          });
      },

      async DeleteFromCart({ commit }, id) {
        const headers = this.$headers;

        await this.$axios
          .delete(`/wp-json/wp/v2/cart/${id}`, { headers })
          .then((res) => commit("DeleteFromCart", id));
      },
      /* end user profile section */

      /*sub admin section */
      SetSubAdmin({ commit }, payload) {
        commit("SetSubAdmin", payload);
      },

      /* register user action */
      RegisterUser({ commit }, payload) {
        commit("RegisterUser", payload);
      },

      /* Login User Action */
      LoginUser({ commit }, payload) {
        commit("login", payload);
      },

      /*Login Admin Action */
      LoginAdmin({ commit }, payload) {
        commit("LoginAdmin", payload);
      },

      /*get user role action */
      GetAdminRole({ commit }, payload) {
        commit("getAdminRole", payload);
      },

      /*Exit Admin User */
      ExitAdmin({commit}) {
        commit("ExitAdminPanel")
      }
    },
    getters: {
      GetSubAdminUser(state) {
        return state.SubAdminUser;
      },
      GetSubAdminPass(state) {
        return state.SubAdminPass;
      },
      GetSubAdminEmail(state) {
        return state.SubAdminEmail;
      },
      GetAdminRole(state) {
        return state.admin.role;
      },
      GetAdminToken(state) {
        return state.admin.token;
      },
    },
  });
};

export default createStore;
