import swal from 'sweetalert2'

export default {
    install(Vue) {
        Vue.prototype.$alert = swal
    }
}