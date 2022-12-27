export default {
  name: 'note-filter',
  template: `
<section>
  <section className="note-filter">
    <input @input="filter" v-model="filterBy.info.title" type="search" placeholder="🔍 Search note title" class="note-filter-search"/>
    <input @input="filter" v-model="filterBy.type" type="text" placeholder="🔍 text / image / todo" class="note-filter-search"/>
  </section>
</section>
`,
  data() {
    return {
      filterBy: {
        info: {
          title: '',
        },
        type: '',
      },
    }
  },
  methods: {
    filter() {
      if (this.filterBy.type === 'text') this.filterBy.type = 'note-txt'
      else if (this.filterBy.type === 'image') this.filterBy.type = 'note-img'
      else if (this.filterBy.type === 'todo') this.filterBy.type = 'note-todo'
      this.$emit('filter', this.filterBy)
    },
  },
}
