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
     <DetailData
        :year="year"
        :month="month"
        :day="day"
        :json="json"
     />
  </div>
</template>

<script>
import GlobalHeader from '@/components/particle/GlobalHeader';
import Chart from '@/components/particle/Chart';
import DetailData from '@/components/particle/DetailData';
import json from '@/assets/respons';

export default {
  name: "InputView",
  components: {
    GlobalHeader,Chart,DetailData
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