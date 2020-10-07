<template>
  <div class="mulchSeclect">
    <div class="p-inputSection">
      <select
        class="c-select"
        data-select__prefecture
        v-model="selectedKey"
        v-on:change="selectedPrefecture"
      >
        <option value="" disabled selected class="c-select__placeholder">都道府県を選択してください</option>
        <option
          v-for="prefecture in prefectures"
          v-bind:value="prefecture.value"
          v-bind:key="prefecture.id"
          >{{ prefecture.label }}
        </option>
      </select>
    </div>
    <div class="p-inputSection">
      <select
        class="c-select"
        data-select__port
        v-on:change="selectedPort"
        v-model="selectedValue"
        disabled
      >
        <option
          v-if="selectedItem"
          v-for="(item, key) in selectedItem"
          :key="key"
          v-bind:value="item.value"
        >
          {{ item.label }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import prefecturesJSON from "@/assets/json/prefectures.json";
import portsJSON from "@/assets/json/port.json";
let ports = {};
for (const port in portsJSON) {
  const portData = {
    label: portsJSON[port]["portLabel"],
    value: portsJSON[port]["portCode"]
  };
  if (!ports[portsJSON[port]["prefecturesCode"]]) {
    ports[portsJSON[port]["prefecturesCode"]] = [];
  }
  ports[portsJSON[port]["prefecturesCode"]].push(portData);
}

export default {
  name: "InputMulchSeclect",
  data: function() {
    return {
      selectedKey: "",
      selectedItem: "",
      selectedValue: "",
      prefectures: prefecturesJSON,
      ports: ports
    };
  },
  methods: {
    selectedPrefecture: function() {
      document.querySelector("[data-select__port]").disabled = false;
      this.selectedItem = this.ports[this.selectedKey];
      this.$parent.prefecture = this.selectedKey;
      this.$parent.prefectureLabel = this.prefectures[this.selectedKey][
        "label"
      ];
      this.$parent.activeChaek();
    },
    selectedPort: function() {
      this.$parent.port = this.selectedValue;
      this.$parent.portLabel = this.selectedItem[this.selectedValue - 1][
        "label"
      ];
      this.$parent.activeChaek();
    }
  }
};
</script>
<style lang="scss"></style>>
