import Vue from 'vue'
import cookies from "js-cookie";

export default ({ app }, inject) => {
    inject('headers', Vue.observable({ 'Authorization': 'Bearer ' + cookies.get('jwt-token'), 'Content-Type': 'application/json' }))
}
