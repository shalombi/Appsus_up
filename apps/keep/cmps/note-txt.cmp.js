export default {
  name: 'note-txt',
  props: ['note'],
  template: `
  <section className="note-txt">
      <h2 class="note-title">{{note.info.title}}</h2>
      <p class="note-msg">{{note.info.msg}}</p>
  </section>
`,
}
