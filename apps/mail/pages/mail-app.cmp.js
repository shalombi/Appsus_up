import { mailService } from '../services/mail-service.js'
import { eventBus } from '../services/event-bus.service.js'

import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'

import navBar from '../cmps/nav-bar.cmp.js'


// prev
import mailPrev from '../cmps/mail-prev.cmp.js'
import leftHeader from '../cmps/left-header.cmp.js'
import rightHeader from '../cmps/right-header.cmp.js'
import { storageService } from '../services/async-storage.service.js'
// import mailEdit from './mail-edit.cmp.js'

export default {
    props: ["filterByObj"],
    template: `
    <section class="grid-app-mail">

        <header class="">
           <left-header/>
            <div class="right-header">
                <mail-filter v-if="mails" @filter="filter"/>
               <right-header/>
            </div>    
          </header>

          <nav-bar :mails="mails"/>
                
              

        <main>
            <!-- Main -->
            <div class="head-actions flex space-between">

                <div class="flex main-action-left">
                   <!-- <button class="nonebcc">  -->
                    <div class="flex select">
                        <img @click="removeSelected" class="main-action cursor-pointer select"  src="../../assets/img/actions-main-cmp/check_box_outline_blank_white_20dp.png"/>
                        <img  @click="print" class="main-action cursor-pointer" src="../../assets/img/actions-main-cmp/arrow_drop_down_white_20dp.png"/>
                    </div>
                    <div class="flex ref-more-act">
                        <img class="main-action cursor-pointer"  src="../../assets/img/actions-main-cmp/refresh.png"/>
                        <img  class="main-action cursor-pointer" src="../../assets/img/actions-main-cmp/more_vert.png"/>
                    </div>
                </div>
                


                <div class="flex main-action-right">
                    <span class="mail-to-display">1-14 of 14</span>
                    <img  class="main-action cursor-pointer" src="../../assets/img/actions-main-cmp/chevron_left.png"/>
                    <img  class="main-action cursor-pointer" src="../../assets/img/actions-main-cmp/chevron_right_white_20dp.png"/>
                </div>

            </div>

            <section class="grid main-sorting">

                <div class="cursor-pointer">
                    <img src="../../assets/img/actions-main-cmp/Primary.png" />
                    <span>Primary</span>
                </div>

                <div class="cursor-pointer">
                    <img src="../../assets/img/actions-main-cmp/promotion.png" />
                    <span>Promotions</span>
                </div>

                <div class="cursor-pointer">
                    <img src="../../assets/img/actions-main-cmp/social.png" />
                    <span>Social</span>
                </div>

                <div class="cursor-pointer">
                   <img src="../../assets/img/actions-main-cmp/update.png" />
                    <span>Updates</span>
                </div>
            </section>

            <mail-prev/>
            <section class="mail-app" v-if="mails">
        <!-- TODO: ADD FILTER -->
        <!-- <mail-filter @filter="filter"/> -->

        <!-- TODO: MAKE WORK WITH MAIL -->
        <!-- <router-link to="/mail/edit">Add a mail...</router-link> -->
        <mail-list
            @changeUrlImgeIndicate="changeUrlImgeIndicate"
            @selected="selectMail" 
            @remove="removeMail" 
            :mails="mailsToShow"/>
         </section>


    
            <!-- TODO: DIV , DIV -->
            <!-- <div class="sort-subject">sort-subject</div> -->
            <!-- <div class="mails-list">mails-list</div> -->

        </main>
    </section>


 
    `,
    data() {
        return {
            mails: null,
            // selectedMail: null,
            filterBy: {},
        }
    },
    created() {
        this.load()
    },
    methods: {
        load() {
            mailService.query()
                .then(mails => {
                    console.log('load');
                    // console.log(mails)
                    this.mails = mails
                })
        },
        print() {
            console.log('lll')
        },
        removeMail(mailId) {
            mailService.remove(mailId)
                .then(() => {
                    const idx = this.mails.findIndex(mail => mail.id === mailId)
                    this.mails.splice(idx, 1)

                    const msg = {
                        txt: `Mail ${mailId} deleted...`,
                        type: 'success',
                    }
                    eventBus.emit('user-msg', msg)
                })
        },
        selectMail(mail) {
            this.selectedMail = mail
        },
        mailSaved(mail) {
            this.mails.push(mail)
        },
        filter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        },
        changeUrlImgeIndicate() {
            this.load()
        },
        removeSelected() {

            mailService.query()
                .then(mails => {
                    mails.filter(mail => !mail.isSelected)
                    console.log(mails)
                    return mails
                })
                .then(updatedMails =>{
                    
                //     utilService.saveToStorage('mails', updatedMails)
                // this.load
                })
            // mails => mails.forEach(mail => {
            // storageService.q

            // console.log(mail)
            // storageService.remove('mails', mail.id) 
            // if (mail.isSelected) this.removeMail(mail.id)
            // }))


            // mailService.query()
            //     .then(mails => {
            //         var mails = mails.filter(mail => mail.isSelected)
            //         console.log(mails, 'pppp')
            //         return Promise.resolve(mails)


            //         // console.log('mails', mails)
            //         // return mails
            //     })
            //     .then(mails => mails.forEach(mail => {
            //         // var mails = 
            //         console.log(mail)
            //         if (mail.isSelected) this.removeMail(mail.id)

            //     }))


            // .then(mails => mails.forEach(mail => {
            // console.log(mail)
            // storageService.remove('mails', mail.id) 
            // if (mail.isSelected) this.removeMail(mail.id)
            // }))






            // var selectedMails = this.mails.filter(mail => mail.isSelected)

            // selectedMails.forEach(mail => {
            //     console.log(mail);
            //     storageService.remove('mails', mail.id)
            // });

            // mailService.query()
            // .then(mails => { })
            // selectedMails.forEach(mail=>)
            // console.log('selectedMails', selectedMails)
        }
    },
    computed: {
        mailsToShow() {
            const regex = new RegExp(this.filterBy.title, 'i')
            var mails = this.mails.filter(mail => regex.test(mail.title))

            if (this.filterByObj) {

                if (this.filterByObj.byStar) {
                    mails = this.mails.filter(mail => (mail.isStarred))

                }
                if (this.filterByObj.bySent) {
                    mails = this.mails.filter(mail => (mail.isSent))

                }
            }
            return mails

        }
    },
    components: {
        mailFilter,
        mailList,
        mailPrev,
        leftHeader,
        navBar,
        rightHeader
    }
}