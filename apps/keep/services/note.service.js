import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptyNote,
  getNextNoteId,
  // emailToNote,
}

function query() {
  return storageService.query(NOTE_KEY)
}

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
  if (note.id) {
    return storageService.put(NOTE_KEY, note)
  } else {
    return storageService.post(NOTE_KEY, note, false)
  }
}

function getEmptyNote() {
  return {
    id: '',
    info: { title: '', msg: '', url: '', label: '', todos: [] },
    type: 'note-txt',
  }
}

function getNextNoteId(noteId) {
  return storageService.query(NOTE_KEY).then((notes) => {
    var idx = notes.findIndex((note) => note.id === noteId)
    if (idx === notes.length - 1) idx = -1
    return notes[idx + 1].id
  })
}

// function emailToNote(email) {
//   const note = getEmptyNote()
//   const { subject: title, msg } = email
//   note.info.title = title
//   note.info.msg = msg
//   return note
// }

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = []
    notes.push(
      _createNote(
        'Reminder: YOU ARE AWESOME',
        "today, more than any other day, it's very important that you remember how awesome you are!"
      )
    )
    notes.push(
      _createNote(
        'Sometimes the smallest things take up the most room in your heart.” — Winnie the Pooh.',
        "After a successful season with Sporting that brought the young player to the attention of Europe's biggest football clubs, Ronaldo signed with English powerhouse Manchester United in 2003. He was an instant sensation and soon came to be regarded as one of the best forwards in the game",
        'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'note-img'
      )
    )
    notes.push(
      _createNote(
        'Rivers know this: There is no hurry. We shall get there some day',
        "Motivation is your desire to do something with your personal life, at work, in school, in sports, or in any hobbies. The motivation to do something can help you achieve your big goals and dreams, whatever they may be. Knowing how to motivate yourself can help you accomplish anything you set your mind to, so let's get to that next with some quotes to inspire you."
      )
    )
    notes.push(
      _createNote(
        'A hug is always the right size.” — Winnie the Pooh',
        'The best time to plant a tree was 20 years ago. The second best time is now',
        'https://efootballhub.net/pes21-mobile/images/players/235934122_l.png',
        'note-img'
      )
    )
    notes.push(
      _createNote(
        'I wake up every morning and think to myself, "How far can I push this company in the next 24 hours?"',
        "If the person you are talking to doesn't appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear"
      )
    )
    notes.push(
      _createNote(
        'Any day spent with you is my favorite day',
        "We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes―understanding that failure is not the opposite of success, it's part of success.",
        'https://yt3.ggpht.com/ytc/AMLnZu-DpPcvPWIsG8LKmbMfFVkpE16XgPxX202A6oWbVoQ=s900-c-k-c0x00ffffff-no-rj',
        'note-img'
      )
    )
    notes.push(
      _createNote(
        'Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.',
        'Simply put, that should be the official motto of the Jr. NBA Court of Leaders. It was announced Thursday that 12 supremely talented student-athletes were named to the second installment of the program. While their unbelievable talent on the basketball court played a big part in being selected, their outstanding leadership qualities were just as important. The Jr. NBA Court of Leaders is a youth leadership council comprised of high school players from around the country. The goal is to help young adults learn how to amplify their voices not only in their local communities, but also across the basketball landscape. “Coming out of everything that was happening in 2020 with the pandemic and just different things that were going on socially around the country, you saw a lot of our NBA and WNBA players use their platform to speak out,” said Candice Haynes, the NBA Domestic Youth Player Development Program Manager. “We wanted to make sure there was also an opportunity for youth athletes to have their voices heard. “We saw a lot of kids that we had relationships with through our Jr. NBA programs that were being vocal and being active on social media and felt like it was a great opportunity for us to connect with those young people and introduce them to some',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kCrw3N9kzVNr-DwA0j-TGy80yQZrdOTAbQ&usqp=CAU',
        'note-img'
      )
    )
    notes.push(
      _createNote(
        "You're braver than you believe, stronger than you seem and smarter than you think",
        "Don't underestimate the value of Doing Nothing, of just going along, listening to all the things you can't hear, and not bothering additional opportunities and resources that we can provide,” Haynes said. The first cohort of the program is co-chaired by the WNBA's Naphessa Collier, who plays for the Minnesota Lynx, and the NBA's Jaren Jackson Jr., who is a member of the Memphis Grizzlies. NBA and WNBA players will be named as co-chairs of this second group at a later date."
      )
    )
    notes.push(
      _createNote(
        'The KING is BACK!',
        'The Prose Train has been a really great space for me when it comes to collaboration and creativity while not being too stressful. Writing with so many people has been a really great way to learn about new ideas, unique perspectives and to develop my literary skills. On top of that, the end products are always such a blast to read and something I continue to want to be a part of. So if you are looking for a place to write and have some fun, I would highly suggest joining The Prose Train',
        'https://images.sportschau.de/image/939a5ced-1032-4294-9729-8bb395d8ed9c/AAABg8yNaZA/AAABg8tMOLk/1x1-256/dpa-will-sich-gegen-eine-anklage-des-englischen-fussballverbandes-wehren-cristiano-ronaldo-100.jpg',
        'note-img'
      )
    )
    notes.push(
      _createNote(
        'Prince of Persia- Summary:',
        "In the holy city of Alamut resides the Sands of Time, which gives mortals the power to turn back time. After leading an attack on the city, Dastan (Jake Gyllenhaal), the adopted son of Persia's king, acquires a dagger that gives the one who holds it access to the Sands. Dastan goes on the run with an Alamut princess named Tamina (Gemma Arterton) after being accused of killing his father. The pair must protect the ancient treasure from dark forces and unmask the king's assassin."
      )
    )
    notes.push(
      _createNote(
        'Best Disney Movies',
        'Sleeping beauty, Coco, Hercules, Beauty and the Beast, The Lion King, Mulan, Tarzan, Aladdin, Aladdin 2: the Return of Jaffar, Aladdin and the King of Thieves ',
        'https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg',
        'note-img'
      )
    )
    notes.push(
      _createNote('Get my stuff together', '', '', 'note-todo', '', [
        'pick up kids from school',
        'go to the GYM',
        'complete my CA-Proj',
      ])
    )
    utilService.saveToStorage(NOTE_KEY, notes)
  }
  return notes
}

function _createNote(
  title,
  msg = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio fugiat est, aliquid laudantium ipsam, nulla explicabo obcaecati odio molestias unde! Architecto incidunt unde autem quod fugiat praesentium labore voluptatem.',
  url = '',
  type = 'note-txt',
  label = '',
  todos = []
) {
  const note = getEmptyNote()
  note.id = utilService.makeId()
  note.info = { title, msg, url, label, todos }
  note.bgColor = utilService.getRandomColor()
  note.type = type
  return note
}
