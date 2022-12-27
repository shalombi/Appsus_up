export default {
  template: `
    <header class="app-header">
        <router-link to="/" class="main-nav-router">
            <img src="./assets/img/app-logo.png" alt="Appsus logo" class="app-logo"/>
        </router-link>
        <nav class="app-head-nav">
            <router-link to="/mail" class="main-nav-router">Email</router-link>
            <router-link to="/keep" class="main-nav-router">Keep</router-link>
        </nav>
    </header>
    `,
}
