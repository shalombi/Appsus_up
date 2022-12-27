// import homePage from './pages/app-home.cmp.js'
import noteApp from './apps/keep/pages/note-index.cmp.js'

import emailApp from './apps/mail/pages/mail-app.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.cmp.js'
import mailEdit from './apps/mail/pages/mail-edit.cmp.js'
import starredPage from './apps/mail/pages/starred-page.cmp.js'
import sentPage from './apps/mail/pages/sent-page.cmp.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   component: homePage,
    // },
    {
      path: '/keep',
      component: noteApp,
    },
    {
      path: '/mail/:id',
      component: mailDetails
    },
    {
      path: '/mail',
      component: emailApp,
    },
    {
      path: '/mail/edit/:id?',
      component: mailEdit
    },
    {
      path: '/mail/starred',
      component: starredPage
    },
    {
      path: '/mail/sent',
      component: sentPage
    },


  ],
}

export const router = createRouter(routerOptions)
