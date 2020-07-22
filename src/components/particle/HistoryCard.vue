<template>
  <div class="p-historyCards">
    <span class="p-historyCard" v-for="(data, index) in storageDatas" v-on:click="routing(data, index)">
      <span class="p-date c-mintext">{{data.date}}</span>
      <span class="p-pointdata">
        <span class="p-port c-titletext">{{ data.port }}</span>
        <span class="p-prefecture c-titletext">({{ data.prefecture }})</span>
      </span>
      <span class="p-ckydata">
        <span class="p-sun c-mintext">{{ data.tide.chart[data.date].sun.rise }} &gt; {{ data.tide.chart[data.date].sun.set }}</span>
        <span class="p-moon c-mintext">{{ data.tide.chart[data.date].moon.rise }} &gt; {{ data.tide.chart[data.date].moon.rise }}</span>
      </span>
      <span class="p-historyCard__icon"><img src="@/static/img/Icon_ArrowRight_Small.png" ></span>
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
.c-mintext {
  font-size: 14px;
}
.c-titletext {
  font-weight: bold;
}
.p-historyCards {
  margin: 0 17px;
}
.p-historyCard {
  display: block;
  padding: 8px 40px 8px 13px;
  margin: 0 0 20px 0;
  background: #EEEEEE;
  position:relative;
  &__icon{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    background: #80CCD6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.p-pointdata {
  display: block;
}
.p-port {
  font-size: 20px;
}
.p-prefecture {
  font-size: 14px;
}

.p-ckydata {
  display: block;
}

</style>