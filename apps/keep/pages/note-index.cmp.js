import { noteService } from '../services/note.service.js'
import {
  eventBus,
  showErrorMsg,
  showSuccessMsg,
} from '../../../services/event-bus.service.js'

import noteFilter from '../cmps/note-filter.cmp.js'
import noteNav from '../cmps/note-nav.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'

export default {
  name: 'note-index',
  template: `
<section className="note-index">
  <div className="grid-container">
    <note-filter @filter="setFilter" class="grid-header"/>
    <note-nav @showNote="showNote" class="grid-aside" />
    <note-list v-if="notes" @remove="removeNote" :notes='notesToShow' :noteToShow="noteToShow" @saved="noteSaved" @close="noteClosed" class="grid-main"/>
    <note-add v-if="noteToShow" :note="noteToShow" @saved="noteSaved" @close="noteClosed"/>
  </div>
</section>
`,
  data() {
    return {
      notes: null,
      noteToShow: null,
      filterBy: {
        info: { title: '', msg: '' },
        type: '',
      },
    }
  },
  created() {
    noteService.query().then((notes) => {
      this.notes = notes
    })
    // eventBus.on('email-to-note', this.emailToNote)
  },
  methods: {
    removeNote(noteId) {
      noteService.remove(noteId).then(() => {
        noteService.query().then((notes) => {
          showSuccessMsg('note was deleted successfully!')
          this.notes = notes
        })
      })
    },
    showNote() {
      this.noteToShow = noteService.getEmptyNote()
    },
    noteSaved() {
      noteService.query().then((notes) => {
        this.notes = notes
        this.noteToShow = null
      })
    },
    noteClosed() {
      this.noteToShow = null
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    // emailToNote(email) {
    //   this.noteToShow = noteService.getEmptyNote()
    //   const newNote = noteService.emailToNote(email)
    //   noteService.save(newNote).then((note) => {
    //     this.showNote(note)
    //     this.$router.push('/keep')
    //   })
    // },
  },
  computed: {
    notesToShow() {
      const regex = new RegExp(this.filterBy.info.title, 'i')
      const regexType = new RegExp(this.filterBy.type, 'i')
      let notes = this.notes.filter((note) => regex.test(note.info.title))
      notes = notes.filter((note) => regexType.test(note.type))
      return notes
    },
  },
  components: {
    noteFilter,
    noteNav,
    noteList,
    noteAdd,
  },
}
