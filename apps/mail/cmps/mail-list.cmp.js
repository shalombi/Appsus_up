import mailPrev from './mail-prev.cmp.js'

export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
            <!-- <ul> -->
                
                <div v-for="mail in mails" :key="mail.id">
                    <!-- <router-link :to="'/mail/' + mail.id"> -->
                        <mail-prev @remove="remove" :mail="mail" @changeUrlImgeIndicate="changeUrlImgeIndicate"/>
                    <!-- </router-link>  -->
                    <!-- TODO: MAKE TO WORK WITH MAIL -->
                    <!-- <section class="actions"> -->
                        
                        <!-- <router-link :to="'/mail/edit/' + mail.id">Edit</router-link> | -->
                        <!-- <button @click="remove(mail.id)">x</button> -->
                    <!-- </section> -->

                </div>
            <!-- </ul> -->
        </section>
    `,
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId)
        },
        showDetails(mail) {
            this.$emit('selected', mail)
        },
        changeUrlImgeIndicate() {
            console.log('lllll@@@@@')
            this.$emit('changeUrlImgeIndicate')
        }
    },
    components: {
        mailPrev
    }
}