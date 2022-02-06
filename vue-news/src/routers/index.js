import VueRouter from "vue-router";
import Vue from "vue";
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import NewsView from '../views/NewsView'
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";

Vue.use(VueRouter);

export const router = new VueRouter({
   // mode:history 옵션으로 url에 # 생략가능
   mode: 'history',
   routes : [
       {
           path: '/',
           redirect : '/news'
       },
       {
           // path: url 주소
           path: '/news',
           // component : url 주소로 갔을 때 표시될 컴포넌트
           component : NewsView,
           name:'news',
       },
       {
           path: '/ask',
           component : AskView,
           name:'ask'
       },
       {
           path: '/jobs',
           component : JobsView,
           name:'jobs'
       },
       {
           path:'/user/:id',
           component: UserView,
           name:'user'
       },
       {
           path:'/item/:id',
           component: ItemView,
           name:'item',
       },
   ]
});
