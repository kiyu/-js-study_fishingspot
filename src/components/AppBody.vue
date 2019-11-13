<template>
  <div class="l-main">

    <div class="l-header">
      <div class="c-logo"><img src=""></div>
      <h1 class="c-appname">釣場情報App(仮)</h1>
    </div>

    <div class="c-flexwrap">

      <div class="p-inputArea">
        
        <div class="p-inputHeader">
          <h2 class="c-heading">Inputs</h2>
        </div>

        <div class="p-inputer">
          <label class="c-label">調べたい釣場</label>
          <select>
            <option value="">選択してください</option>
            <option value="1">テスト</option>
          </select>
        </div>

        <div class="p-inputer">
          <label class="c-label">調べたい日時</label>
          <input type="date" name="calendar" max="2030-12-31" value="2019-11-13">
        </div>

        <div class="p-inputer">
          <span class="c-button">調べる</span>
        </div>

      </div>
      <!-- //.p-inputArea -->

      <div class="p-outputArea">

        <div class="p-outputHeader">
          <h2 class="c-heading">Outputs</h2>
        </div>

        <div class="p-outputer">
          <div class="c-weather">晴れ</div>
          <div class="c-tide">潮情報</div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AppBody",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.l-main {
  padding: 20px;
}
.l-header {
  border-bottom: 2px solid #ccc;
  margin: 0 0 5px;
  padding: 0 0 5px;
  width: 100%;
  display: flex;
}
.c-logo {
  width: 100px;
}
.c-appname {
  flex: 1;
}

.c-flexwrap {
  display: flex;
}
.p-inputArea {
  width: 50%;
}
.p-outputArea {
  width: 50%;
}
</style>
