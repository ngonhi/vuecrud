import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue';
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import Index from './components/Index.vue';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
//import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuetify)

// const { required, maxLength, email } = require('vuelidate/lib/validators')
// const { validationMixin, default: Vuelidate } = require('vuelidate')

// Vue.use(Vuelidate)

Vue.config.productionTip = false;

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify(),

  // mixins: [validationMixin],

  // validations: {
  //   name: { required, maxLength: maxLength(10) },
  //   email: { required, email },
  //   },

  // computed: {
  //   nameErrors () {
  //     const errors = []
  //     if (!this.$v.name.$dirty) return errors
  //     !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
  //     !this.$v.name.required && errors.push('Name is required.')
  //     return errors
  //   },
  //   emailErrors () {
  //     const errors = []
  //     if (!this.$v.email.$dirty) return errors
  //     !this.$v.email.email && errors.push('Must be valid e-mail')
  //     !this.$v.email.required && errors.push('E-mail is required')
  //     return errors
  //   },
  //},
  methods: {
    submit () {
      this.$v.$touch()
    }},
  data: () => ({
    valid: false,
    firstname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  })
}).$mount('#app')