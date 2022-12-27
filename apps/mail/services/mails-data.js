import { utilService } from './util-service.js'


export const demoData = {
  getDemoData,

}

// c

var data = [
  {
    id: utilService.makeId(),
    isSelected: false,
    // Note: is option to send mail to us, then the mail object looks like that : isReceived:true
    isSent: false,
    isReceived: true,
    from: 'eBay',
    to: 'me',
    address: '<ebay@reply.ebay.com>',
    time: { fullDate: 'Tue, Dec 19, 19:47 PM', date: 'Dec 19' },
    title: 'Don\'t miss Green Monday deals and more savings',
    msg: 'eBay Inc. isReceived this e-mail to you at shalombiton555@gmail.com because your Notification Preferences indicate that you want to receive general email promotions. If you do not wish to receive further communications like this, please unsubscribe. Alternatively, you can change your Notification Preferences in My eBay. Please note that it may take up to 10 days to process your request.',
    thumbnail: '',
    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'eBay',
    to: 'me',
    address: '<ebay@reply.ebay.com>',
    time: { fullDate: 'Tue, Dec 13, 7:47 PM', date: 'Dec 13' },

    title: 'Don\'t miss Green Monday deals and more savings',
    msg: 'eBay Inc. isReceived this e-mail to you at shalombiton555@gmail.com because your Notification Preferences indicate that you want to receive general email promotions. If you do not wish to receive further communications like this, please unsubscribe. Alternatively, you can change your Notification Preferences in My eBay. Please note that it may take up to 10 days to process your request.',
    thumbnail: '',
    isStarred: true
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'noreply-google',
    to: 'me',
    address: 'Google',
    time: { fullDate: 'Sat, Dec 3, 7:56 PM', date: 'Dec 3' },
    title: 'Publicly Accessible Google API Key for WikiTube',
    msg: 'Dear Customer, We have detected a publicly accessible Google API key associated with the following Google Cloud Platform project: Project WikiTube (id: booming-cairn-367214 with API key ,Therefore, we recommend that you take the following steps',
    isReceived: true,
    thumbnail: '',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'Adobe Creative',
    to: 'me',
    address: '<mail@mail.adobe.com> ',
    time: { fullDate: 'Tue, Nov 29, 9:51 AM', date: 'Nov 29' },
    title: 'Colour that bursts off the scree',
    msg: 'Capture character with Tom van Schelven. It’s not often that you see a trampoline on an editorial fashion shoot.,',
    thumbnail: '',
    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'Amazon Web',
    to: 'me',
    address: '<marketing@amazon.com>',
    time: { fullDate: 'Mon, Nov 28, 12:14 PM', date: 'Nov 28' },
    title: 'Starting today: livestream re:Invent for free',
    msg: 'AWS re:Invent kicks off today Tune in all week for live keynotes and leadership sessions. Be first to hear big announcements, get inspired by successful AWS customer stories, and learn about product innovations that can help your business overcome its unique challenges. All keynotes and leadership sessions will be available to watch on demand, as well as all the breakout sessions.,',
    thumbnail: '',
    isStarred: false
  },

  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'eBay',
    to: 'me',
    address: '',
    time: { fullDate: 'Tue, Nov 19, 7:51 AM', date: 'Nov 19' },

    title: 'Sell or shop for a good reason on Giving Tuesday',
    msg: 'If you do not wish to receive further communications like this, please unsubscribe. Alternatively, you can change your Notification Preferences in My eBay. Please note that it may take up to 10 days to process your request.Visit our Privacy Notice and User Agreement if you have any questions.',
    thumbnail: '',
    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'CodeSandbox',
    to: 'me',
    address: '<hello@codesandbox.io>',
    time: { fullDate: 'Nov 17, 2022, 11:12 PM', date: 'Nov 17' },
    title: 'Improve how you collaborate to open source',
    msg: 'Less time setting up,more time contributing. With CodeSandbox contribution branches, instant previews, powerful devtools, live coding and our GitHub App, your workflow will be much more efficient.,',
    thumbnail: '',

    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'Raz Israeli',
    to: 'me',
    address: 'noreply@github.com',
    time: { fullDate: '', date: 'Oct 11' },
    title: '@RazIsraeli has invited you to collaborate on the RazIsraeli/Appsus repository',
    msg: 'You can accept or decline this invitation. You can also head over to https://github.com/RazIsraeli/Appsus to check out the repository or visit @RazIsraeli to learn a bit more about them.',
    thumbnail: '',
    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'GitHub',
    to: 'me',
    address: 'noreply@github.com',
    time: { fullDate: 'Thu, Jul 22, 1:39 PM', date: 'Jul 22' },
    title: '[GitHub] Please verify your device',
    msg: 'A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device. Device: Chrome on macOS Verification code: 32131262',
    thumbnail: '',
    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: false,
    isReceived: true,
    from: 'GitHub',
    to: 'me',
    address: 'noreply@github.com',
    time: { fullDate: 'Thu, Jul 21, 1:39 PM', date: 'Jul 21' },
    title: '[GitHub] Please verify your device',
    msg: 'A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device. Device: Chrome on macOS Verification code: 4038122262',
    thumbnail: '',
    isStarred: false
  },
  {
    id: utilService.makeId(),
    isSelected: false,
    isSent: true,
    isReceived: false,
    from: 'shalombiton555@gmail.com',
    to: 'razisrael977@gmail.com',
    address: 'shalombiton555@gmail.com',
    time: { fullDate: 'Thu, Jul 21, 1:39 PM', date: 'Jul 21' },
    title: '@ShalomBiton has invited you to you',
    msg: 'You can accept or decline this invitation. You can also head over to https://github.com/ShalomBiton/Appsus to check out the repository or visit @ShalomBiton to learn a bit more about them.',
    thumbnail: '',
    isStarred: false
  },
]


function getDemoData() {
  return data
}