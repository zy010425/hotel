import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "@/views/xz/Product.vue"
import Login from "@/views/xz/Login.vue"
import MessageList from "@/views/xz/MessageList.vue"
import Cart from "@/views/xz/Cart.vue"
import Resiger from "@/views/xz/Resiger.vue"
import Delete from "@/views/xz/Delete.vue"
import Order from "@/views/xz/Order.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "首页" }
  },

  {
    path: "/messagelist",  
    component: MessageList,
    meta: { title: "首页" }
  },

  {
    path: "/product",
    component: Product,
    meta: { title: "商品" }
  },
  {
    path: "/login", component: Login,
    meta: { title: "登录" }
  },
  {
    path: "/cart", component: Cart,
    meta: { title: "购物车" }
  },


  {
    path: "/resiger", component: Resiger,
    meta: { title: "注册" }
  },
  {
    path: "/Delete", component: Delete,
    meta: { title: "注销" }
  },
  {
    path: "/Order", component: Order,
    meta: { title: "填写订单" }
  },


];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
