import { mailService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus.service.js"

export default {
    template: `
        <section class="mail-edit">
            <h1>Mail Edit</h1>
            <form @submit.prevent="save">
                <input ref="to" type="text" v-model="mailToEdit.from">
                <input type="text" v-model="mailToEdit.title">
                <button ref="btn">Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            mailToEdit: null,
        }
    },
    created() {
        const mailId = this.$route.params.id
        if (mailId) {
            mailService.get(mailId)
                .then(mail => this.mailToEdit = mail)
        } else {
            this.mailToEdit = mailService.getEmptyMail()
            this.mailToEdit.isSent = true

        }
    },
    mounted() {
        this.$refs.to.focus()
        console.log(this.$refs.btn);
    },
    methods: {
        save() {
            // const mail = mailService.save(this.mailToEdit)
            // this.$emit('saved', mail)
            // this.mailToEdit = mailService.getEmptyMail()
            mailService.save(this.mailToEdit)
                .then(mail => {
                    // this.$emit('saved', mail)
                    // this.mailToEdit = mailService.getEmptyMail()
                    const msg = {
                        txt: `Mail saved ${mail.id}`,
                        type: 'success',
                        timeout: 4000,
                    }
                    eventBus.emit('user-msg', msg)
                    this.$router.push('/mail')
                })
        }
    }
}