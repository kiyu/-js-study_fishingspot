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
     <div class="p-detaileDate">
       <span class="c-datetext">{{year}}-{{month}}-{{day}}</span>
       <span class="c-pointtext">{{json.prefecture}}{{json.port}}</span>
      </div>
      <div class="p-detaileSun">
        日:{{json.tide.chart[year + '-' + month + '-' + day].sun.rise}} - {{json.tide.chart[year + '-' + month + '-' + day].sun.set}}
      </div>
      <div class="p-detaileMoon">
        月:{{json.tide.chart[year + '-' + month + '-' + day].moon.rise}} - {{json.tide.chart[year + '-' + month + '-' + day].moon.set}}
      </div>
      <div class="p-detaileFlood">
        満潮: 
        <span v-for="flood in json.tide.chart[year + '-' + month + '-' + day].flood">
          {{flood.time}} {{flood.cm}}cm
        </span>
      </div>
      <div class="p-detaileEdd">
        干潮: 
        <span v-for="flood in json.tide.chart[year + '-' + month + '-' + day].edd">
          {{flood.time}} {{flood.cm}}cm
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
.l-chart {
  width: 100%;
  height: 520px;
  overflow-x: scroll;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 50, .5);
  border-radius: 10px;
  box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
}
.c-chart {
  width: 500px;
  height: 500px;
}
.c-datetext {

}
.c-pointtext {
  margin-left: 10px;
}
.p-detaileDate {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
}
.p-detaileSun, 
.p-detaileMoon, 
.p-detaileFlood,
.p-detaileEdd {
  margin-left: 20px;
}
</style>