export default {
  name: 'note-img',
  props: ['note'],
  template: `
<section className="note-img">
      <h2 class="note-title">{{note.info.title}}</h2>
      <img :src=note.info.url />
  </section>
`,
  data() {
    return {}
  },
}
