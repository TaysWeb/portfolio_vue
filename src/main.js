import 'bootstrap/dist/css/bootstrap.css'
import './app.css'
import 'animate.css'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


/* add each imported icon to the library */
library.add(faCheckCircle ,faLinkedin, faFacebook,faGithub,faTwitter)



createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'


