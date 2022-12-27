import { utilService } from './util-service.js'
import { storageService } from './async-storage.service.js'
import { demoData } from './mails-data.js'

const MAILS_KEY = 'mails'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
}

function query() {
    // return utilService.loadFromStorage(MAILS_KEY)
    return storageService.query(MAILS_KEY)
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function remove(mailId) {
    // const mails = query()
    // const idx = mails.findIndex(mail => mail.id === mailId)
    // mails.splice(idx, 1)
    // utilService.saveToStorage(MAILS_KEY, mails)
    return storageService.remove(MAILS_KEY, mailId)
}

function save(mail) {
    // mail.id = utilService.makeId()
    // const mails = query()
    // mails.push(mail)
    // utilService.saveToStorage(MAILS_KEY, mails)
    // return mail
    if (mail.id) {
        return storageService.put(MAILS_KEY, mail)
    } else {
        return storageService.post(MAILS_KEY, mail)
    }
}

function getEmptyMail() {
    return { id: '', from: '', title: '', msg: '' }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)

    if (!mails || !mails.length) {
        mails = []
        mails = demoData.getDemoData()
        utilService.saveToStorage(MAILS_KEY, mails)
    }
    return mails
}


// function _createMail(from, title, msg) {
//     const mail = {
//         id: utilService.makeId(),
//         from,
//         title,
//         msg
//     }
//     return mail
// }
