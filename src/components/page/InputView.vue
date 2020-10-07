<template>
  <div class="l-inputview l-view">
    <GlobalHeader :mode="mode" :title="title" />
    <div class="l-view__inner">
      <InputMulchSelect />
      <datepicker input-class="c-select" format="yyyy/MM/dd" v-model="date" />
      <div class="p-buttonSection">
        <button
          v-on:click="viewPost"
          v-bind:disabled="isButtonDisabled"
          class="c-button"
        >
          表示
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import GlobalHeader from "@/components/particle/GlobalHeader";
import InputMulchSelect from "@/components/particle/InputMulchSelect";
import { ja } from "vuejs-datepicker/dist/locale";
Datepicker.props.language.default = () => ja;

export default {
  name: "InputView",
  components: {
    Datepicker,
    GlobalHeader,
    InputMulchSelect
  },
  data: function() {
    return {
      mode: "input",
      title: "適当な地名",
      port: "",
      portLabel: "",
      prefecture: "",
      prefectureLabel: "",
      check: false,
      isButtonDisabled: true,
      date: new Date()
    };
  },
  methods: {
    activeChaek() {
      if (this.port != "" && this.prefecture != "" && this.date != "") {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },

    getParams(prefectureID, portID, date) {
      return {
        pc: prefectureID,
        hc: portID,
        yr: date.getFullYear(),
        mn: this.$root.zeroPadding(date.getMonth() + 1, 2),
        dy: this.$root.zeroPadding(date.getDate(), 2),
        rg: "day",
        prefecture: this.prefectureLabel,
        port: this.portLabel
      };
    },

    viewPost() {
      const params = this.getParams(this.prefecture, this.port, this.date);
      this.$root.getApi(this.$root.API_URL, params).then(res => {
        this.$root.saveLocalStorage(params, res);
        this.$router.push({
          path: `/detail/${params.yr}/${params.mn}/${params.dy}/${params.pc}/${params.hc}`
        });
      });
    }
  }
};
</script>

<style lang="scss"></style>
