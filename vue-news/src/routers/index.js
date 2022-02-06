import VueRouter from "vue-router";
import Vue from "vue";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import createListView from '../views/CreateListView';

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
           // component : NewsView,
           component : createListView('NewsView'),
           name:'news',
       },
       {
           path: '/ask',
           // component : createListView('AskView'),
           component : AskView,
           name:'ask'
       },
       {
           path: '/jobs',
           component : JobsView,
           // component : createListView('JobsView'),
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
