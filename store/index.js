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
            }
        },
        actions: {          
            async nuxtServerInit({state},{app}) {
                if(state.SubAdminPass) {
                    app.$cookiz.set('SubAdminPass', state.SubAdminPass)
                    app.$cookiz.set('SubAdminUser', state.SubAdminUser)
                    app.$cookiz.set('SubAdminEmail', state.SubAdminEmail)
                } else {
                    state.SubAdminUser = app.$cookiz.get('SubAdminUser')
                    state.SubAdminPass = app.$cookiz.get('SubAdminPass')
                    state.SubAdminEmail = app.$cookiz.get('SubAdminEmail')                   
                } 
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
