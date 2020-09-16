<template>
  <div class="p-detail">
    <h2 class="p-detail__title">
      <span class="c-text__date">{{year}}-{{month}}-{{day}}</span>
      <span class="c-text__point">{{json.prefecture}}{{json.port}}</span>
    </h2>
    <p class="c-flexbox">
      <span class="c-icon"><img src="@/assets/img/icon_sun.png" width="16"></span>
      <span class="c-text"><span class="c-time c-time--start">{{json.tide.chart[year + '-' + month + '-' + day].sun.rise}}</span> - <span class="c-time c-time--end">{{json.tide.chart[year + '-' + month + '-' + day].sun.set}}</span></span>
    </p>
    <p class="c-flexbox">
      <span class="c-icon"><img src="@/assets/img/icon_moon.png" width="16"></span>
      <span class="c-text"><span class="c-time c-time--start">{{json.tide.chart[year + '-' + month + '-' + day].moon.rise}}</span> - <span class="c-time c-time--end">{{json.tide.chart[year + '-' + month + '-' + day].moon.set}}</span></span>
    </p>
    <p>
      満潮: 
      <span v-for="flood in json.tide.chart[year + '-' + month + '-' + day].flood">
        <span class="c-time">{{flood.time}}</span> <span class="c-cm">{{flood.cm}}cm</span>
      </span>
    </p>
    <p>
      干潮: 
      <span v-for="flood in json.tide.chart[year + '-' + month + '-' + day].edd">
        <span class="c-time">{{flood.time}}</span> <span class="c-cm">{{flood.cm}}cm</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "DetailData",
  props: ['json','year','month','day'],
  data: function () {
    return {
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>>