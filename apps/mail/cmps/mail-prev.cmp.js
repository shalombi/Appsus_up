import { mailService } from '../services/mail-service.js'
import { storageService } from '../services/async-storage.service.js'
// import { eventBus } from "../services/event-bus.service.js"


export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" v-if="mail">
        <div class="prev-btns-left cursor-pointer">
        <!-- src="../../assets/img/actions-main-cmp/check_box_outline_blank_white_20dp.png" -->
            <!-- <input class="cursor-pointer" type="checkbox" class="cursor-pointer"/> -->


            <!-- <img @click="mailSelect(mail.id)"  src="../../assets/img/actions-main-cmp/check_box_outline_blank_white_20dp.png"/> -->
            <img @click="mailSelect(mail.id)"  :src="displayCheckbox(mail)"/>

            <img  @click.prevent="star(mail.id)" class="cursor-pointer" :src="displayStar(mail)"/>
        </div>


        <div>
        <router-link :to="'/mail/' + mail.id">
            <span  class="from cursor-pointer">{{mail.from}}</span>
        </router-link> 
        </div>

        <div>
        <router-link :to="'/mail/' + mail.id">
            <span class="title cursor-pointer">{{mail.title}}</span>
        </router-link> 
        </div>
        
        <div>
            <span v-if="mail.time" class="date-arrived cursor-pointer">{{mail.time.date}}</span>
        </div>

        <div class="prev-btns-right">
            <img class="cursor-pointer" src="../../assets/img/prev-cmp/archive_white_20dp.png"/>
            <img @click.prevent="remove(mail)" class="cursor-pointer" src="../../assets/img/prev-cmp/delete_white_20dp.png"/>
            <img class="cursor-pointer" src="../../assets/img/prev-cmp/drafts_white_20dp.png"/>
            <img class="cursor-pointer" src="../../assets/img/prev-cmp/schedule_white_20dp.png"/>
        </div>

    </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        remove(mail) {
            this.$emit('remove', mail.id)
        },
        star(mailId) {
            mailService.get(mailId)
                .then(mail => {
                    mail.isStarred = !mail.isStarred
                    return mail
                })
                .then(mail => storageService.put('mails', mail))
                .then(() => { this.changeUrlImgeIndicate() })
        },
        // TODO : REFACTOR  - one function
        displayCheckbox(mail) {
            if (mail.isSelected) return "../../assets/img/actions-main-cmp/check_box_white_20dp.png"
            else return "../../assets/img/actions-main-cmp/check_box_outline_blank_white_20dp.png"
        },
        // check_box_white_20dp.png
        displayStar(mail) {
            if (mail.isStarred) return "../../assets/img/star_googyellow500_20dp.png"
            else return "../../assets/img/star.jpeg"
        },

        changeUrlImgeIndicate() {
            this.$emit('changeUrlImgeIndicate')
        },
        submit() {
            // console.log('submit')
        },
        mailSelect(mailId) {
            // console.log(mail)

            // storageService.put()

            mailService.get(mailId)
                .then(mail => {

                    mail.isSelected = !mail.isSelected
                    return mail
                })
                .then(mail => storageService.put('mails', mail))
                .then(() => { this.changeUrlImgeIndicate() })
            // storageService.query
            // var mailsId = !mailsId ?[] : mailsId
            // mailsId.push(mail.id)
            // console.log(mailsId)
            // console.log(mailId)
        }
    },
    created() {
    }
    ,
    computed: {
    }
}