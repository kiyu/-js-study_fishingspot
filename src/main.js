import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import VueLocalStorage from "vue-localstorage";
require("@/assets/scss/prepends.scss");

Vue.config.productionTip = false;
Vue.use(VueLocalStorage);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",

  data: function() {
    return {
      API_URL: "https://tide736.net/api/get_tide.php"
    };
  },
  methods: {
    getApi(path, params, headers) {
      return axios({
        method: "GET",
        url: path,
        params: params,
        headers: headers
      });
    },

    saveLocalStorage(params, res) {
      let isNewData = true;
      const storageIndex = "TW-index";
      const storageKey =
        "TWK-" +
        params.yr +
        "_" +
        params.mn +
        "_" +
        params.dy +
        "_" +
        params.pc +
        "_" +
        params.hc;
      let nowIndex = this.$localStorage.get(storageIndex);

      if (nowIndex == null) {
        nowIndex = storageKey;
      } else if (nowIndex.indexOf(storageKey) != -1) {
        isNewData = false;
      } else {
        nowIndex += "," + storageKey;
      }

      if (isNewData) {
        const storageValue = {
          prefecture: params.prefecture,
          port: params.port,
          date:
            params.yr +
            "-" +
            this.zeroPadding(params.mn, 2) +
            "-" +
            this.zeroPadding(params.dy, 2),
          tide: res.data.tide
        };
        this.$localStorage.set(storageIndex, nowIndex);
        this.$localStorage.set(storageKey, JSON.stringify(storageValue));
      }
    },

    zeroPadding(num, length) {
      return ("0000000000" + num).slice(-length);
    }
  }
});
