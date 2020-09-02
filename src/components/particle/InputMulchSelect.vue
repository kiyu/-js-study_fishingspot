<template>
  <div class="mulchSeclect">
    <div class="p-inputSection">
      <select 
        class="c-select" 
        v-model="selectedKey"
        v-on:change="selectedPrefecture"
      >
        <option value='' disabled selected class="c-select__placeholder">都道府県を選択してください</option>
        <option v-for="prefecture in prefectures" v-bind:value="prefecture.value" v-bind:key="prefecture.id">{{ prefecture.label }} </option>
      </select>
    </div>
    <div class="p-inputSection">
      <select
        class="c-select"
        v-on:change="selectedPort"
        v-model="selectedValue"
      >
        <option value='' disabled selected style='display:none;'>港を選択してください</option>
        <option v-if="selectedItem" v-for="item in selectedItem" v-bind:value="item.value">{{ item.label }}</option>
      </select>
    </div>
  </div>
</template>
<script>

import prefecturesJSON from '@/assets/json/prefectures.json';
import portsJSON from '@/assets/json/port.json';
let ports = {};
for(const port in portsJSON) {
  const portData = {
    label: portsJSON[port]['portLabel'],
    value: portsJSON[port]['portCode']
  };
  if (!ports[portsJSON[port]['prefecturesCode']]) {
    ports[portsJSON[port]['prefecturesCode']] = [];
  }
  ports[portsJSON[port]['prefecturesCode']].push(portData);
}

export default {
  name: "InputMulchSeclect",
  data: function () {
    return {
      selectedKey: '',
      selectedItem:'',
      selectedValue: '',
      prefectures: prefecturesJSON,
      ports: ports,
    }
  },
  methods: {
    selectedPrefecture: function(){
      this.selectedItem = this.ports[this.selectedKey];
      this.$parent.prefecture = this.selectedKey;
      this.$parent.prefectureLabel = this.prefectures[this.selectedKey]['label'];
      this.$parent.activeChaek();
    },
    selectedPort: function(){
      this.$parent.port = this.selectedValue;
      this.$parent.portLabel = this.selectedItem[this.selectedValue - 1]['label'];
      this.$parent.activeChaek();
    },
  }
};
</script>
<style lang="scss">
</style>>