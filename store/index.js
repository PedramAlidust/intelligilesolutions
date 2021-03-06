import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            user: {
                name: 'Jack Dorsi',
                email: 'jack.dorsi@gmail.com',
                avatar: ''
            }
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            /*
            nuxtServerInit(vuexContext, context) {
              return axios.get('https://nuxt-blog.firebaseio.com/posts.json')
                .then(res => {
                  const postsArray = []
                  for (const key in res.data) {
                    postsArray.push({ ...res.data[key], id: key })
                  }
                  vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e));
            },
            */

            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;
