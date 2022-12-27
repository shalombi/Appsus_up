export default {
  name: 'note-nav',
  template: `
<section>
  <section className="note-nav">
    <div className="nav-header">
      <img src="./assets/img/keep-logo.png" alt="keep logo" />
      <span class="keep-text">Keep</span>
    </div>
    <button @click="addNote" class="btn nav-btn btn-add">New Note</button>
  </section>
</section>
`,
  methods: {
    addNote() {
      this.$emit('showNote')
    },
  },
}
