// import { mailService } from '../services/mail-service.js'
// import { storageService } from '../services/async-storage.service.js '

import mailCompose from './mail-compose.cmp.js'


export default {
    props: ["mails"],
    template: `
    <aside>
            <div class="compose">
                <router-link to="/mail/edit">
                <button @click="" class="compose-btn">
                    <img class="compose-img btn" src="../../assets/img/compose.jpeg"/>
                    <span>Compose</span>
                </button>
                </router-link>
            </div>

            <section class="actions flex">
                <router-link to="/mail">
                <button>
                    <img src="../../assets/img/inbox_white_20dp.png"/>
                    <span>Inbox</span>    
                    <span> {{ calculateInfo('isReceived') }} </span>
                </router-link>
                </button>
                
                <router-link to="/mail/starred">
                <button>
                    <img src="../../assets/img/star.jpeg"/>
                    <span>Starred</span>    
                    <span>{{ calculateInfo('isStarred') }}</span>
                </router-link>
                </button>
                
                <button>
                    <img src="../../assets/img/schedule_white_20dp.png"/>
                    <span>Snoozed</span>    
                    <span></span>
                </button> 
                
                <router-link to="/mail/sent">
                <button>
                    <img src="../../assets/img/send_white_20dp.png"/>
                    <span>Sent</span>    
                    <span>{{ calculateInfo('isSent') }}</span>
                </router-link>
                </button>

                <button>
                    <img src="../../assets/img/schedule_send_white_20dp.png"/>
                    <span>Scheduled</span>    
                    <span></span>
                </button> 

                <button>
                    <img src="../../assets/img/inbox_white_20dp.png"/>
                    <span>Drafts</span>    
                    <span>4</span>
                </button> 


            </section >

        </aside>
        <mail-compose :compose="compose"/>
    `,
    methods: {
        showCompose() {
            this.compose = !this.compose
        },
        calculateInfo(key) {
            console.log(key);
            var counter = 0
            if (this.mails) {
                this.mails.forEach(mail => {
                    if (mail[key]) counter++
                })
                console.log(counter, 'counter');
                return counter
            }


        }
    },

    // mounted() {
    //     this.calculateInfo('isStarred')
    // }
    // ,
    data() {
        return {
            compose: false

        }
    },
    components: {
        mailCompose
    }
}