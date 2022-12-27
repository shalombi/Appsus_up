export default {
    // props:["filterByStar"],
    template: `
        <section class="">
            <input 
                class="mail-filter"
                placeholder="🔍    Search mail"
                @input="filter"
                v-model="filterBy.title" 
                type="search" 
                placeholder="Search">
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: ''
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}