import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Agent from './views/Agent.vue'
import Scripts from './views/Scripts.vue'
import Tasks from './views/Tasks.vue'
import Trigger from './views/Trigger.vue'
import Logs from './views/Logs.vue'
import UserManager from './views/UserManager.vue'
import Settings from './views/Settings'
import Login from './views/Login'
import SignUp from './views/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
    path : '/agent',
    name : 'agent',
    component : Agent
    },
    {
      path: '/scripts',
      name: 'scripts',
      component: Scripts
    },
    {
      path: '/tasks',
      name: 'tasks',
      component : Tasks
    },
    {
      path : '/trigger',
      name : 'trigger',
      component : Trigger
    },
    {
      path : '/logs',
      name : 'logs',
      component : Logs
    },
    {
      path : '/usermanager',
      name : 'usermanager',
      component : UserManager
    },
    {
      path : '/settings',
      name : 'settings',
      component : Settings
    },
    {
      path : '/login',
      name : 'login',
      component : Login
    },
    {
      path : '/signup',
      name : 'singup',
      component : SignUp
    }
  ]
})
