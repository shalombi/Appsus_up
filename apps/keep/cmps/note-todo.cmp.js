export default {
  name: 'note-todo',
  props: ['note'],
  template: `
  <section className="note-todo">
  <h2 class="note-title">{{note.info.title}}</h2>
      <ul>
        <li v-model="note.info.todos[idx]" v-for="(todo,idx) in note.info.todos" :key="todo" @click.stop="toggleDone(idx)" ref="todo"><input type="checkbox" ref="check" />  {{todo}}</li>
      </ul>
  </section>
`,
  data() {
    return {
      note: this.note,
    }
  },
  methods: {
    toggleDone(idx) {
      const elCheckbox = this.$refs.check[idx]
      if (elCheckbox.checked) {
        this.$refs.todo[idx].style.textDecoration = 'line-through'
      } else this.$refs.todo[idx].style.textDecoration = 'none'
    },
  },
}
