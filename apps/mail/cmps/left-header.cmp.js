import mailFilter from './mail-filter.cmp.js'

export default {
    template: `
             <div class="grid" class="logo-items">
                 <span class="hamburger-menu cursor-pointer"> <svg  fill="rgb(227, 227, 227)" width="24" height="24" focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></span>
                 <img class="logo-img cursor-pointer"src="../../assets/img/logo.svg"/>
                 <div>
                     <span class="logo-txt cursor-pointer">Gmail</span>
                 </div>
            </div>  
           

    `,
    components: {
        mailFilter
    }
}