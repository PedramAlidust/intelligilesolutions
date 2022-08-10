export default {
    methods: {
        async FindingProduct(id) {
            if (this.$store.state.products != '') {
                return await this.$store.state.products.find(product => product.id == id)
            }
        },

        Pagination(main_data, show) {
            const page = this.$route.query.page ? this.$route.query.page : 1
            const data = main_data.slice(page * show - show, page * show)
            const pages = Math.ceil(main_data.length / show)

            return {
                data,
                pages,
                page,
            }
        },

        OffPrice(price, discount) {
            return parseInt(price) * ((100 - discount)/100)
        }
    }
}
