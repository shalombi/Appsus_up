// import { mailService } from '../services/mail-service.js'
// import { storageService } from '../services/async-storage.service.js '
// import { eventBus } from "../services/event-bus.service.js"

export default {
    template: `
    `
}
// export default {
//     props: ['compose'],
//     template: `
//             <section class="mail-compose" v-if="compose">
//                 <div class="flex space-between head-compose">
//                     <span>New Message</span>
//                      <div class="compose-prev-actions-top">
//                         <img src="../../assets/img/schedule_send_white_20dp.png"/>
//                         <img src="../../assets/img/schedule_send_white_20dp.png"/>
//                         <img src="../../assets/img/schedule_send_white_20dp.png"/>
//                      </div>
//                 </div>
            
//                 <form @submit.prevent="save">

//                     <hr/>
//                         <input type="text" placeholder="To" v-model="mailToEdit.to"/>
//                     <hr/>
//                         <input type="text" placeholder="Title" v-model="mailToEdit.title"/>
//                     <hr/>

//                     <div class="msg-compose-prev">
//                         <input type="textarea" placeholder="msg" v-model="mailToEdit.msg"/>
//                     </div>
                    
//                     <div class="edit-text"></div>
//                     <div class="compose-prev-actions-bottom">
                        
//                         <!-- <img src="../../assets/img/schedule_send_white_20dp.png"/>
//                         <img src="../../assets/img/schedule_send_white_20dp.png"/>
//                         <img src="../../assets/img/schedule_send_white_20dp.png"/> -->
//                     </div>
                    
//                     <button>save</button>
//                 </form>

//             </section>
//     `,
//     data() {
//         return {
//             isCompose: true,
//             mailToEdit: null,
//         }
//     },
//     created() {
//         const mailId = this.$route.params.id
//         this.mailToEdit = mailService.getEmptyMail()
//     },
//     methods: {

//         // save() {
//         //     console.log('save')
//         //     alert('save')
//         // }
//         save() {
//             // const mail = mailService.save(this.mailToEdit)
//             // this.$emit('saved', mail)
//             // this.mailToEdit = mailService.getEmptyMail()
//             alert('save')
//             mailService.save(this.mailToEdit)
//                 .then(mail => {
//                     // this.$emit('saved', mail)
//                     // this.mailToEdit = mailService.getEmptyMail()
//                     const msg = {
//                         txt: `Mail saved ${mail.id}`,
//                         type: 'success',
//                         timeout: 4000,
//                     }
//                     eventBus.emit('user-msg', msg)

//                     this.isCompose = false,
//                     this.$router.push('/mail')
//                 })
//         }
//     },
//     mounted() {
//         // this.$refs.to.focus()
//         // console.log(this.$refs.btn);
//     },
// }