<template>
  <div class="p-historyCards">
    <span class="p-historyCard" v-for="(data, index) in storageDatas" v-on:click="routing(data, index)">
      <span class="p-date c-text__min">{{data.date}}</span>
      <span class="c-block">
        <span class="c-text__max c-text__title">{{ data.port }}</span>
        <span class="c-text__min c-text__title">({{ data.prefecture }})</span>
      </span>
      <span class="c-block">
        <span class="p-sun c-text__min">{{ data.tide.chart[data.date].sun.rise }} &gt; {{ data.tide.chart[data.date].sun.set }}</span>
        <span class="p-moon c-text__min">{{ data.tide.chart[data.date].moon.rise }} &gt; {{ data.tide.chart[data.date].moon.rise }}</span>
      </span>
      <span class="p-historyCard__icon"><img src="@/assets/img/Icon_ArrowRight_Small.png" ></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['storageDatas'],
  data: function () {
    return {
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: ''
    }
  },
  methods: {
    routing(data, index) {
      const indexes = index.replace('TWK-','').split('_');
      this.$router.push({ path : '/detail/'+ indexes[0] +'/'+ indexes[1] +'/'+ indexes[2] +'/' +indexes[3] +'/'+ indexes[4] });
    },
  },
  watch: {
    year(value) {
      immediate: true,
      this.year = value;
      console.log('watch/year',value);
    },
    month(value) {
      immediate: true,
      this.month = value;
    },
    day(value) {
      immediate: true,
      this.day = value;
    },
    prefecture(value) {
      immediate: true,
      this.prefecture = value;
    },
    port(value) {
      immediate: true,
      this.port = value;
    },
  }
};
</script>

<style lang="scss">
</style>