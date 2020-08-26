<template>
  <div class="l-inputview l-view">
    <GlobalHeader 
      :mode="mode"
      :title="title"
    />
    <div class="l-view__inner">
      <InputMulchSelect />
      <datepicker
        input-class="c-select"
        format="yyyy/MM/dd"
        v-model="date"
      />
      <div class="c-buttonContainer">
        <button 
          v-on:click="viewPost"
          v-bind:disabled="isButtonDisabled"
          class="c-button"
        >表示</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";
import GlobalHeader from '@/components/particle/GlobalHeader';
import InputMulchSelect from '@/components/particle/InputMulchSelect';
import { ja } from "vuejs-datepicker/dist/locale";

const API_URL = 'https://tide736.net/api/get_tide.php';
import API_TEST from '@/assets/json/test.json';

export default {
  name: "InputView",
  components: {
    Datepicker,
    GlobalHeader,
    InputMulchSelect,
  },
  data: function () {
    return {
      mode: 'input',
      title: '適当な地名',
      port: '',
      portLabel: '',
      prefecture: '',
      prefectureLabel: '',
      check: false,
      isButtonDisabled: true,
      date: new Date(),
    }
  },
  methods: {
    activeChaek(){
      if(this.port != '' && this.prefecture != '' && this.date != '') {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },
    viewPost(){
      const parms = '?pc='+this.prefecture+'&hc='+this.port+'&yr=2020'+'&mn=05'+'&dy=30'+'&rg=day';
      const submitParams = {
        'pc': this.prefecture,
        'hc': this.port,
        'yr': this.date.getFullYear(),
        'mn': this.zeroPadding(this.date.getMonth() + 1, 2),
        'dy': this.zeroPadding(this.date.getDate(), 2),
        'rg': 'day'
      };
      this.getApi(API_URL, submitParams).then(res => {
        //APIがちゃんと動かない時はテストデータに差し替える
        if(res.data.status == 0) {
          res.data = API_TEST;
        }
        let isNewData = true;
        const storageIndex = 'TW-index';
        const storageKey = 'TWK-' + submitParams.yr + '_' + submitParams.mn + '_' + submitParams.dy + '_' + submitParams.pc + '_' + submitParams.hc;
        let nowIndex =　this.$localStorage.get(storageIndex);

        if (nowIndex == null) {
          nowIndex = storageKey;
        } else if(nowIndex.indexOf(storageKey) != -1) {
          isNewData = false;
        } else {
          nowIndex += ',' + storageKey;
        }

        if(isNewData) {
          const storageValue = {
            'prefecture': this.prefectureLabel,
            'port': this.portLabel,
            'date': submitParams.yr + '-' + this.zeroPadding(submitParams.mn,2) + '-' + this.zeroPadding(submitParams.dy,2),
            'tide': res.data.tide,
          }
          this.$localStorage.set(storageIndex,nowIndex);
          this.$localStorage.set(storageKey,JSON.stringify(storageValue));
        }
        this.$router.push({ path : `/detail/${submitParams.yr}/${submitParams.mn}/${submitParams.dy}/${submitParams.pc}/${submitParams.hc}` });
      });
    },
    getApi(path, params, headers){
      if (!params) {
        params = {};
      }
      if (!headers) {
        headers = {};
      }
      return axios({
        method: "GET",
        url: path,
        params: params,
        headers: headers
      });
    },
    zeroPadding(num,length){
      return ('0000000000' + num).slice(-length);
    }
  }
};
</script>

<style lang="scss">
html {
  font-size: 14px;
}
html,body {
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6 {
  font-size: 1rem;
  padding: 0;
  margin: 0;
  line-height: 1.5rem;
}

.l-view {
  &__inner {
    padding: 10px;
  }
}
.c-buttonContainer {
  text-align: center;
  margin-top: 20px;
}
.c-button {
  border: none;
  border-radius: 24px;
  background: #3B4043;
  color: #ffffff;
  width: 148px;
  height:48px;
  font-size:16px;
  font-weight: bold;
  margin: 0 auto;
  &:disabled {
    background: #aaaaaa;
  }
}
</style>