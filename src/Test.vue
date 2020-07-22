<template>
  <div class="template">
    
    <div class="l-header">
      <div class="l-flexcontainer">
        <div class="c-flexicon">
          <div class="c-icon-back"></div>
        </div>
        <h1 class="c-apptitle">
          <span class="c-scenename">Tideviewer</span>
        </h1>
        <div class="c-flexicon">
          <div class="c-icon-history"></div>
        </div>
        <div class="c-flexicon">
          <div class="c-icon-close"></div>
        </div>
      </div>
    </div>
    
    <div class="l-main">

      <!-- 入力画面 -->
      <div class="l-scene">
        <div class="p-select">
          <select class="p-select__inner">
            <option value="" class="c-option c-option__default">都道府県を選択してください</option>
            <option value="" class="c-option">OPTION</option>      
          </select>
        </div>

        <div class="p-select">
          <select class="p-select__inner">
            <option value="" class="c-option c-option__default">港を選択してください</option>
            <option value="" class="c-option">OPTION</option>      
          </select>
        </div>

        <div class="p-select">
          <input type="date">
        </div>

        <div class="p-submit">
          <span class="p-submit__inner" value="" v-on:click="tideview">表示</span>
        </div>


      </div>

      <!-- 履歴画面 -->
      <div class="l-scene">
        <p class="c-message">最新10件の履歴を表示しています</p>

        <div class="p-history">
          <div class="p-history__content">
            <span class="c-cardtext">YYYY-MM-DD 中塩</span>
            <h2 class="c-cardtitle">XXXX港</h2>
            <span class="c-cardtext">日00:00〜00:00 / 月00:00〜00:00</span>
          </div>
          <div class="p-history__decoration"></div>
        </div>

        <div class="p-history">
          <div class="p-history__content">
            <span class="c-cardtext">YYYY-MM-DD 中塩</span>
            <h2 class="c-cardtitle">XXXX港</h2>
            <span class="c-cardtext">日00:00〜00:00 / 月00:00〜00:00</span>
          </div>
          <div class="p-history__decoration"></div>
        </div>

        <div class="p-history">
          <div class="p-history__content">
            <span class="c-cardtext">YYYY-MM-DD 中塩</span>
            <h2 class="c-cardtitle">XXXX港</h2>
            <span class="c-cardtext">日00:00〜00:00 / 月00:00〜00:00</span>
          </div>
          <div class="p-history__decoration"></div>
        </div>

      </div>
      
      <!-- 詳細画面 -->
      <div class="l-scene">
        <div class="c-graph">
          <chart></chart>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import Chart from './Chart';

export default {
  name: "test",
  components: {
    Chart,
  },
  methods: {
    tideview: function(event) {
      console.log(selecteddate);
    }
  },
};
</script>

<style lang="scss">
@function rem($value, $base: 16) {
  @return #{$value / $base}rem;
}
* {
  margin: 0;
  padding: 0;
}
html,body {
  margin: 0;
}

.l{
  &-header {
    padding: rem(10) rem(20);
    box-sizing: border-box;
    background: #80CCD6;
    color: #ffffff; 
    display: flex;
  }
  &-flexcontainer {
    display: flex;
  }
  &-main {

  }
  &-scene {
    padding: rem(17);
  }
}

.c {
  &-flexicon {
    width: rem(20);
  }
  &-icon {
    &-back {

    }
    &-history {

    }
    &-close {

    }
  }
  &-option { 
    color: #333333;
    &__default{
      color: #CDD6DD;
    }
  }
  &-message {
    font-size: rem(12);
    color:#707F89;
    margin-bottom: rem(14);
  }
  &-cardtext {
    font-size: rem(14);
    margin: 0;
  }
  &-cardtitle {
    font-size: rem(20);
    font-weight: bold;
    margin: rem(9) 0;
  }
  &-cardsubtitle {
    font-size: rem(14);
  }
}

.p {
  &-select {
    overflow: hidden;
    width: 90%;
    margin: 2em auto;
    padding: rem(5);
    text-align: center;

    position: relative;
    border: 1px solid #CDD6DD;
    border-radius: 2px;
    background: #ffffff;
    box-sizing: border-box;
    &::-ms-expand {
      display: none;
    }
    &::before {
      position: absolute;
      content: '';
      top: 15px;
      right: 15px;
      width: 0;
      height: 0;
      padding: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #98A6B5;
      pointer-events: none;
    }
    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 2.5em;
      bottom: 0;
      width: 1px;
    }
    &__inner {
      width: 100%;
      padding-right: 1em;
      font-size: rem(16);
      cursor: pointer;
      text-indent: 0.01px;
      text-overflow: ellipsis;
      border: none;
      outline: none;
      background: transparent;
      background-image: none;
      box-shadow: none;
      -webkit-appearance: none;
      appearance: none;
      box-sizing: border-box;
      color: #333333;
    }
  }
  &-submit {
    &__inner {
      display: block;
      margin: 0 auto;
      width: 148px;
      height: 48px;
      color: #ffffff;
      background: #3B4043;
      border-radius: 24px;
      text-align: center;
      padding: 10px 0;
      box-sizing: border-box;
      font-size: 16px;
    }
  }
  &-history {
    background: #EEEEEE;
    margin-bottom: rem(14);
    display: flex;
    &__content {
      padding: rem(8) rem(13);
      flex: 1;
    }
    &__decoration {
      width: 40px;
      background: #80CCD6;
    }
  }
}

</style>