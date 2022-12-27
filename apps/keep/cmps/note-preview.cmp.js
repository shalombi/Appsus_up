import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodo from './note-todo.cmp.js'

export default {
  name: 'note-preview',
  props: ['note'],
  template: `
<section className="note-preview">
  <component :note="note" :is="note.type">
  </component>
</section>
`,
  components: {
    noteTxt,
    noteImg,
    noteTodo,
  },
}
