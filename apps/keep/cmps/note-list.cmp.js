import { noteService } from '../services/note.service.js'
import {
  showErrorMsg,
  showSuccessMsg,
} from '../../../services/event-bus.service.js'

import notePreview from './note-preview.cmp.js'
import noteAdd from './note-add.cmp.js'

export default {
  name: 'note-list',
  props: ['notes', 'noteToShow'],
  template: `
<section className="note-list-container">
<div className="note-list" v-if="notes">
    <div v-for="note in notes" :style="{backgroundColor:note.bgColor}" class="note-item" title="edit note" @click="EditNote(note.id)">
      <note-preview :note="note"/>
      <div className="note-actions">
        <input type="color" v-model="note.bgColor" @click.stop="" @input="changeColor(note)" id="note-input-color" title="set note color" />
        <button @click.stop="remove(note.id)" title="delete note">🗑️</button>
        <note-add v-if="noteToShow" :note="noteToShow" @saved="noteSaved" @close="noteClosed"/>
      </div>
    </div>
  </div>
<div v-else class="loading">Loading...</div>
</section>
`,
  data() {
    return {
      notes: this.notes,
      noteToShow: null,
    }
  },
  methods: {
    remove(noteId) {
      this.$emit('remove', noteId)
    },
    EditNote(noteId) {
      noteService.get(noteId).then((note) => {
        this.noteToShow = note
      })
    },
    changeColor(note) {
      noteService.save(note)
    },
    pin() {
      alert('not ready yet... Sorry!')
    },
    noteSaved() {
      if (!this.noteToShow.info.title) {
        showErrorMsg('Missing note details...')
        return
      }
      noteService
        .save(this.noteToShow)
        .then((note) => {
          showSuccessMsg(`Note saved successfully!`)
          this.$emit('saved')
        })
        .then(() => (this.noteToShow = null))
        .catch((err) => {
          console.log('An error occured...', err)
          showErrorMsg("Can't create note...")
        })
    },
    noteClosed() {
      this.noteToShow = null
      this.$emit('close')
    },
  },
  computed: {
    setBgColor() {
      return {
        backgroundColor: this.note.bgColor,
      }
    },
  },
  components: {
    notePreview,
    noteAdd,
  },
}
