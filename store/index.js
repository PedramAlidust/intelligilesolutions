import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: {
                name: 'Jack Dorsi',
                email: 'jack.dorsi@gmail.com',
            },
            SubAdminPass: null , 
            SubAdminUser: null ,
            SubAdminEmail: null,
        },
        mutations: {
            SetSubAdmin(state, payload) {
                state.SubAdminUser = payload.username;
                state.SubAdminPass = payload.password;
                state.SubAdminEmail = payload.email;

                /* Remove Old Cookies */
                this.$cookiz.remove('SubAdminPass')
                this.$cookiz.remove('SubAdminUser')
                this.$cookiz.remove('SubAdminEmail')

                /* Set New Cookies */
                if(state.SubAdminPass) {
                    this.$cookiz.set('SubAdminPass', state.SubAdminPass)
                    this.$cookiz.set('SubAdminUser', state.SubAdminUser)
                    this.$cookiz.set('SubAdminEmail', state.SubAdminEmail)
                }             
            },
            StoreUserName(state, payload) {
                state.SubAdminUser = payload;
            }, 
            StoreUserPass(state, payload) {
                state.SubAdminPass = payload;
            },
            StoreUserEmail(state, payload) {
                state.SubAdminEmail = payload;
            }, 
        },
        actions: {              
            nuxtServerInit({ commit }) {
                commit('StoreUserName', this.$cookiz.get('SubAdminUser')),
                commit('StoreUserPass', this.$cookiz.get('SubAdminPass')),
                commit('StoreUserEmail', this.$cookiz.get('SubAdminEmail')) 
           },

            SetSubAdmin({commit}, payload) {
                commit('SetSubAdmin', payload);
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
        }
    });
};

export default createStore;
