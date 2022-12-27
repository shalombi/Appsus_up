import { noteService } from '../services/note.service.js'

import {
  showSuccessMsg,
  showErrorMsg,
  eventBus,
} from '../../../services/event-bus.service.js'

export default {
  name: 'note-add',
  props: ['note'],
  template: `
<section className="note-add">
  <form v-if="noteToEdit" class="note-edit-form">
    <input v-model="noteToEdit.info.title" type="text" placeholder="Title" class="title" />
    <input v-model="noteToEdit.info.msg" v-if="isNoteTxt" type="text" placeholder="Take a note..." />
    <input v-model="noteToEdit.info.url" v-if="isNoteImg" type="text" placeholder="Image url" />
    <h4 v-if="isNoteTodo"></h4>
    <input v-model="noteToEdit.info.todos[idx]" v-for="(todo,idx) in noteToEdit.info.todos" v-if="isNoteTodo" type="text" placeholder="Insert todo here..."/>
  </form>
  <div className="form-extras">
    <label>Choose a note type</label>
    <div className="choose-note-type">
      <button className="btn-note-txt" @click.prevent="changeToTxt" title="text note"></button>
      <button className="btn-note-img" @click.prevent="changeToImg" title="image note"></button>
      <button className="btn-note-todo" @click.prevent="changeToTodo" title="todos note"></button>
    </div>
    <div className="create-note-buttons">
      <button class="btn btn-submit" @click="save">Save</button>
      <!-- <button className="btn btn-send-note" @click="send" title="send as email">Send as email</button> -->
      <button class="btn btn-close" @click.stop="close">Close</button>
    </div>
  </div>
    
</section>
`,
  data() {
    return {
      noteToEdit: this.note,
    }
  },
  methods: {
    save() {
      if (!this.noteToEdit.info.title) {
        showErrorMsg('Missing note details...')
        return
      }
      noteService
        .save(this.noteToEdit)
        .then((note) => {
          showSuccessMsg(`Note created successfully!`)
          this.$emit('saved')
          this.noteToEdit = null
        })
        .catch((err) => {
          console.log('An error occured...', err)
          showErrorMsg("Can't create note...")
        })
    },
    close() {
      this.noteToEdit = null
      this.$emit('close')
    },
    changeToImg() {
      this.noteToEdit.type = 'note-img'
    },
    changeToTxt() {
      this.noteToEdit.type = 'note-txt'
    },
    changeToTodo() {
      this.noteToEdit.type = 'note-todo'
      this.noteToEdit.info.todos = new Array(1)
    },
    send() {
      eventBus.emit('send-note', this.noteToEdit)
    },
  },
  computed: {
    isNoteTxt() {
      return this.noteToEdit.type === 'note-txt'
    },
    isNoteImg() {
      return this.noteToEdit.type === 'note-img'
    },
    isNoteTodo() {
      return this.noteToEdit.type === 'note-todo'
    },
  },
}
