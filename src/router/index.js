import Vue from 'vue'
import Router from 'vue-router'
import InvitationView from "../views/InvitationView"
import ReplyDetailView from "../views/ReplyDetailView"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'invitationView',
      component: InvitationView
    },
    {
      path: '/replyDetailView/:invid',
      name: 'replyDetailView',
      component: ReplyDetailView
    }
  ]
})
