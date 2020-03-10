import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Tienda from "../views/Tienda/Tienda.vue";
import Recetas from "../views/Recetas/Recetas.vue";
import Search from "../views/Search/Search.vue";
import Blog from "../views/Blog/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tienda",
    name: "tienda",
    component: Tienda
  },
  {
    path: "/recetas",
    name: "recetas",
    component: Recetas
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
