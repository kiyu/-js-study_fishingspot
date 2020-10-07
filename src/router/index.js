import Vue from "vue";
import Router from "vue-router";
import InputView from "@/components/page/InputView";
import HistoryView from "@/components/page/HistoryView";
import DetailView from "@/components/page/DetailView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "input",
      component: InputView
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView
    },
    {
      path: "/detail/:year/:month/:day/:prefecture/:port",
      name: "detail",
      component: DetailView
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
