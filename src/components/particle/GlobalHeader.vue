<template>
  <div class="l-gheader" v-if="mode === 'input'">
    <div class="l-gheader__inner">
      <h1 class="l-gheader__title">{{ viewTitle }}</h1>
      <h2 class="l-gheader__name">入力</h2>
    </div>
    <router-link :to="{ name: 'history' }" class="l-gheader__icon"
      ><img src="@/assets/img/Icon_Time.png"
    /></router-link>
  </div>
  <div class="l-gheader l-gheader--lefty" v-else-if="mode === 'history'">
    <router-link :to="{ name: 'input' }" class="l-gheader__icon"
      ><img src="@/assets/img/Icon_ArrowLeft_Small.png"
    /></router-link>
    <div class="l-gheader__inner">
      <h1 class="l-gheader__title">{{ viewTitle }}</h1>
      <h2 class="l-gheader__name">履歴</h2>
    </div>
  </div>
  <div class="l-gheader" v-else-if="mode === 'detail'">
    <div class="l-gheader__inner">
      <h1 class="l-gheader__title">{{ viewTitle }}</h1>
      <h2 class="l-gheader__name">{{ title }}</h2>
    </div>
    <router-link :to="{ name: 'input' }" class="l-gheader__icon"
      ><img src="@/assets/img/Icon_Close.png"
    /></router-link>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: ["mode", "title"],
  data: function() {
    return {
      viewTitle: this.titleSelect()
    };
  },
  methods: {
    titleSelect() {
      switch (this.mode) {
        case "detail":
          return "潮汐詳細";
        default:
          return "潮汐情報";
      }
    }
  }
};
</script>

<style lang="scss"></style>>
