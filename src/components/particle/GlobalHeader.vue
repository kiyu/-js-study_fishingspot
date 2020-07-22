<template>
  <div 
    class="l-gheader"
    v-if="mode === 'input'"
  >
    <div class="l-gheader__inner">
      <h1 class="l-gheader__title">{{viewTitle}}</h1>
      <h2 class="l-gheader__name">入力</h2>
    </div>
    <router-link :to="{ name: 'history' }" class="l-gheader__icon"><img src="@/static/img/Icon_Time.png" ></router-link>
  </div>
  <div 
    class="l-gheader l-gheader--lefty"
    v-else-if="mode === 'history'"
  >
    <router-link :to="{ name: 'input' }" class="l-gheader__icon"><img src="@/static/img/Icon_ArrowLeft_Small.png" ></router-link>
    <div class="l-gheader__inner">
      <h1 class="l-gheader__title">{{viewTitle}}</h1>
      <h2 class="l-gheader__name">履歴</h2>
    </div>
  </div>
  <div 
    class="l-gheader"
    v-else-if="mode === 'detail'"
  >
    <div class="l-gheader__inner">
      <h1 class="l-gheader__title">{{viewTitle}}</h1>
      <h2 class="l-gheader__name">{{title}}</h2>
    </div>
    <router-link :to="{ name: 'input' }" class="l-gheader__icon"><img src="@/static/img/Icon_Close.png" ></router-link>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: ['mode','title'],
  data: function () {
    return {
      viewTitle: this.titleSelect(),
    }
  },
  methods: {
    titleSelect(){
      switch (this.mode) {
        case 'detail':
          return '潮汐詳細';
          break;
        default:
          return'潮汐情報';
          break;
      }
    },
  }
};
</script>

<style lang="scss">
.l-gheader {
  background: #80CCD6;
  color: #fff;
  padding: 10px;;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  &--lefty {
    justify-content: left;
  }
  &__inner {
    display: flex;
    align-items: center; 
  }
  &__title {
    font-size: 1rem;
  }
  &__name {
    font-size: 1rem;
    display: flex;
    align-items: center;
    &::before {
      display: block;
      height: 0;
      padding-left: 5px;
      margin: auto 5px;
      border-top: 2px solid;
      content: "";
    }
  }
  &__icon {
    font-size: 0.5rem;
    width: 20px;
  }
}
</style>>