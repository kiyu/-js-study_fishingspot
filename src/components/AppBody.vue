<template>
  <div class="l-appbody">
    
    
    <vue-select label="Select" name="select" v-model="form.select" :options="options">
      <template slot-scope="props">
        <option v-for="(option, key) in props.options"
                :key="key"
                :value="option.id"
                :selected="form.select === option.id"
        >{{ option.value }}</option>
      </template>
    </vue-select>

    <div class="l-header">
      <h1 class="c-appname">潮汐情報</h1>
      <div class="c-icon"><img src=""></div>
    </div>

    <div class="p-searchArea">
      <div class="c-inputunit">
        <div class="c-selectunit">
          <select class="c-select" data-inputerSpotPrefecture>
            <option value="" class="c-option c-option__default">都道府県を選択してください</option>
          </select>
        </div>
      </div>

      <div class="c-inputunit">
        <div class="c-selectunit">
          <select class="c-select" data-inputerSpotHarbor>
            <option value="" class="c-option c-option__default">港を選択してください</option>
          </select>
        </div>
      </div>

      <div class="c-inputunit">
        <div class="c-selectunit">
          <input placeholder="日付を選択してください" type="date" name="calendar" max="2030-12-31" value="2019-11-13">
        </div>
      </div>

      <div class="c-submitunit">
        <div class="c-button">検索する</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppBody",
  data:() => {
    return {
      options: [
        { id: 1, value: 'option1' },
        { id: 2, value: 'option2' },
        { id: 3, value: 'option3' },
        { id: 4, value: 'option4' }
      ]
    }
  }
};
/*
const reformatJSON = (json) => {
  let prefectures = [];
  let harbors = [];
  for (let i = 0; i < json.length; i++) {
    if (harbors[json[i]["都道府県コード"]] == undefined){
      harbors[json[i]["都道府県コード"]] = [];
      prefectures[json[i]["都道府県コード"]] = json[i]["都道府県名"];
    }
    harbors[json[i]["都道府県コード"]][json[i]["港コード"]] = json[i]["港名"];
  }
  let re = {
    'prefectures': prefectures,
    'harbors': harbors
  }
  return re;
}
const addSelector = (json) => {
  
  const inputerSpotPrefecture = document.querySelector('[data-inputerSpotPrefecture]');
  const prefectures = json.prefectures;
  for(let i = 0; i < prefectures.length; i++) {
    if(prefectures[i] != undefined) {
      const option = document.createElement('option');
      option.textContent = prefectures[i];
      option.setAttribute('value',i);
      inputerSpotPrefecture.appendChild(option);
    }
  }

  const inputerSpotHarbor = document.querySelector('[data-inputerSpotHarbor]');
  const harbors = json.harbors;
  for(let i = 0; i < harbors.length; i++) {
    if(harbors[i] != undefined) {
      const optgroup = document.createElement('optgroup');
      optgroup.setAttribute('data-parentPrefecture',i);
      optgroup.setAttribute('label',i);
      for(let i2 = 1; i2 < harbors[i].length; i2++) {
        if(harbors[i][i2] != undefined) {
          const option = document.createElement('option');
          option.textContent = harbors[i][i2];
          option.setAttribute('value',i2);
          optgroup.appendChild(option);
        }
      }
      inputerSpotHarbor.appendChild(optgroup);
    }
  }
}

fetch('./json/address.json')
  .then(response => { 
    return response.json(); 
  })
  .then(json => { 
    addSelector(reformatJSON(json));
  })
  .catch(err => { 
    console.log("something went wrong: " + err.message); 
  });
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.l-appbody {
  padding: 0 20px;
}
.l-header {
  margin: 0 -20px;
  padding: 10px 20px;
  box-sizing: border-box;
  background: #80CCD6;
  color: #ffffff; 
  display: flex;
}

.c-appname {
  font-size: 1.42rem;
  font-weight: bold;
}
.c-inputunit {
  margin-bottom: 20px;
}

.c-selectunit {
  overflow: hidden;
	width: 90%;
	margin: 2em auto;
  padding: 5px;
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
}
.c-select {
	width: 100%;
	padding-right: 1em;
  font-size: 1.14rem;
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
.c-option { 
  color: #333333;
  &__default{
    color: #CDD6DD;
  }
}

</style>
