import mailApp from "../pages/mail-app.cmp.js"

export default {
    template: `
        <mail-app :filterByObj="filterByObj"/>
    `,
    data() {
        return {
            filterByObj: {
                byStar:true
            }
        }
    },
    created() {
    },
    methods: {
    },
    components: {
        mailApp
    }
}

