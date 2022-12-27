import { mailService } from "../services/mail-service.js"

import leftHeader from "../cmps/left-header.cmp.js"
import rightHeader from "../cmps/right-header.cmp.js"
import navBar from "../cmps/nav-bar.cmp.js"

export default {
    template: `

    <header class="details-head">
       <left-header/>
        <div class="right-header">
            <!-- <mail-filter v-if="mails" @filter="filter"/> -->
            <div></div>
           <right-header/>
        </div>    
      </header>

    
      
    
        <section v-if="mail" class="mail-details">

          <nav-bar/>

          <section class="mail-content">

            <div class="actions-details flex">

                <div class="left-actions-details flex">

                    <!-- </div> -->
                    <div class="arrow-back">
                      <img src="../../assets/img/details_cmp/arrow_back_white_20dp_1.png"/>
                    </div>

                    <div>
                        <img src="../../assets/img/details_cmp/archive_white_20dp_2.png"/>
                        <img src="../../assets/img/details_cmp/report_white_20dp_3.png"/>
                        <img src="../../assets/img/details_cmp/delete_white_20dp_4.png"/> 
                    </div>
                    <span class="separator">|</span>
                    <div>
                        <img src="../../assets/img/details_cmp/mark_as_unread_white_20dp_5.png"/>
                        <img src="../../assets/img/details_cmp/schedule_white_20dp_6.png"/>
                        <img src="../../assets/img/details_cmp/add_task_white_20dp_7.png"/>
                    </div>
                    <span class="separator">|</span>
    
                    <div>
                        <img src="../../assets/img/details_cmp/move_to_inbox_white_20dp_8.png"/>
                        <img src="../../assets/img/details_cmp/label_white_20dp_9.png"/>
                        <img src="../../assets/img/details_cmp/more_vert_10.png"/>
                   </div>


                </div>


                <div class="right-actions-details flex">
                <span>27 of many</span>
                <img src="../../assets/img/details_cmp/chevron_left.png"/>
                <img src="../../assets/img/details_cmp/chevron_right_white_20dp.png"/>
                <span>En</span>
                <img  class="main-action cursor-pointer" src="../../assets/img/actions-main-cmp/arrow_drop_down_white_20dp.png"/>

                </div>

                <!-- action-details -->
            </div>






            <section class="content"> 
                <img class="user-details user-img-icon" src="../../assets/img/details_cmp/content-mail-cmp/user.png"/>

                <section class="info-details">

                <section class="title-details flex space-between">

                <div>
                    <span class="title-details-span"> {{ mail.title }} </span>
                </div>
                  
                  <div class="flex gap12px">
                      <img class="action" src="../../assets/img/details_cmp/content-mail-cmp/print_black_20dp.png"/>
                      <img  class="action" src="../../assets/img/details_cmp/content-mail-cmp/open_in_new_black_20dp.png"/>
                  </div>
                </section>

                <section class="flex space-between subtitle-details">
                    <div class="flex gap12px">
                        <span class="mail-info">{{ mail.from }}</span>
                        <span class="mail-info">{{ mail.address }} </span>
                        
                        <!-- <div><span>to me</span></div> -->
                    </div>
                    
                    <div class="flex gap12px">
                        <span class="mail-info" v-if="mail.time">{{ mail.time.fullDate }}</span>
                        <img class="action" src="../../assets/img/details_cmp/content-mail-cmp/star_border_black_20dp.png"/>
                        <img class="action" src="../../assets/img/details_cmp/content-mail-cmp/reply_black_20dp.png"/>
                        <img class="action" src="../../assets/img/details_cmp/content-mail-cmp/more_vert_black_20dp.png"/>                       
                    </div>
                </section>



                    <span class="mail-info msg-details">{{ mail.msg }}</span>
                </section >
                <!-- <span>{{ mail.msg }}</span> -->
            </section>
            

            <!-- .mail-details .content -->
              

              <!-- <img :src="imgUrl" alt=""> -->
              <!-- <button @click="$emit('close')">Close</button> -->

              <!-- TODO:remove comment -->
              <!-- <router-link class="router-link-back" to="/mail"><h1>Back</h1></router-link> -->

        </section>
    </section>
        

    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        const id = this.$route.params.id
        mailService.get(id)
            .then(mail => this.mail = mail)
    },
    computed: {
        imgUrl() {
            // return `../../img/${this.mail.vendor}.png`
        }
    },
    components: {
        leftHeader,
        rightHeader,
        navBar
    }
}