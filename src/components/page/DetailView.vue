<template>
  <div class="l-inputview">
    <GlobalHeader 
      :mode="mode"
      :title="title"
    />
    <div class="l-chart">
      <Chart
        class="c-chart"
        :json="json"
        :year="year"
        :month="month"
        :day="day"
      />
     </div>
     <div class="p-detaile">
       <span class="c-text__date">{{year}}-{{month}}-{{day}}</span>
       <span class="c-text__point">{{json.prefecture}}{{json.port}}</span>
      </div>
      <div class="p-detaileSun c-flexbox">
        <span class="c-icon"><img src="@/assets/img/icon_sun.png" width="16"></span>
        <span class="c-text"><span class="c-time c-time--start">{{json.tide.chart[year + '-' + month + '-' + day].sun.rise}}</span> - <span class="c-time c-time--end">{{json.tide.chart[year + '-' + month + '-' + day].sun.set}}</span></span>
      </div>
      <div class="p-detaileMoon c-flexbox">
        <span class="c-icon"><img src="@/assets/img/icon_moon.png" width="16"></span>
        <span class="c-text"><span class="c-time c-time--start">{{json.tide.chart[year + '-' + month + '-' + day].moon.rise}}</span> - <span class="c-time c-time--end">{{json.tide.chart[year + '-' + month + '-' + day].moon.set}}</span></span>
      </div>
      <div class="p-detaileFlood">
        満潮: 
        <span v-for="flood in json.tide.chart[year + '-' + month + '-' + day].flood">
          <span class="c-time">{{flood.time}}</span> <span class="c-cm">{{flood.cm}}cm</span>
        </span>
      </div>
      <div class="p-detaileEdd">
        干潮: 
        <span v-for="flood in json.tide.chart[year + '-' + month + '-' + day].edd">
          <span class="c-time">{{flood.time}}</span> <span class="c-cm">{{flood.cm}}cm</span>
        </span>
      </div>
  </div>
</template>

<script>
import GlobalHeader from '@/components/particle/GlobalHeader';
import Chart from '@/components/particle/Chart';
import json from '@/assets/respons';

export default {
  name: "InputView",
  components: {
    GlobalHeader,Chart,
  },
  data() {
    return {
      mode:'detail',
      title: '',
      year: this.$route.params.year,
      month: this.$route.params.month,
      day: this.$route.params.day,
      prefecture: this.$route.params.prefecture,
      port: this.$route.params.port,
      json: {},
    }
  },
  created() {
    const storageKey = 'TWK-' + this.year + '_' + this.month + '_' + this.day + '_' + this.prefecture + '_' + this.port;
    const storageValue =　JSON.parse(this.$localStorage.get(storageKey));
    this.title = storageValue.port;
    this.json = storageValue;
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>