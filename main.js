const { createApp } = Vue

import { router } from './routes.js'

import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
  // name: 'main',
  template: `
        <section>
            <app-header />
              <router-view class="main-layout"/>
            <user-msg />
        </section>
    `,
  components: {
    appHeader,
    userMsg,
  },
}

const app = createApp(options)
app.use(router)
app.mount('#app')
