import VueRouter from "vue-router";
import Vue from "vue";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import NewsView from "../views/NewsView";
import createListView from '../views/CreateListView';
import bus from "../utils/bus";
import {store} from "../store";

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
           // component : createListView('NewsView'),
           name:'news',
           beforeEnter : (to, from, next) => {
               bus.$emit('start:spinner');
               store.dispatch('FETCH_LIST', to.name)
                   .then(() => next())
                   .catch((err) => {
                       console.log(err);
                   })

           }
       },
       {
           path: '/ask',
           // component : createListView('AskView'),
           component : AskView,
           name:'ask',
           beforeEnter : (to, from, next) => {
               bus.$emit('start:spinner');
               store.dispatch('FETCH_LIST', to.name)
                   .then(() => next())
                   .catch((err) => {
                       console.log(err);
                   })

           }
       },
       {
           path: '/jobs',
           component : JobsView,
           // component : createListView('JobsView'),
           name:'jobs',
           beforeEnter : (to, from, next) => {
               bus.$emit('start:spinner');
               store.dispatch('FETCH_LIST', to.name)
                   .then(() => {
                       // bus.$emit('end:spinner');
                       next();
                   })
                   .catch((err) => {
                       console.log(err);
                   })

           }
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
