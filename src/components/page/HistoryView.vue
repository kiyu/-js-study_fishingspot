<template>
  <div class="l-inputview">
    <GlobalHeader 
      :mode="mode"
      :title="title"
    />
    <p class="c-message">最新10件の履歴を表示しています</p>
    <HistoryCard 
      :storageDatas="storageDatas"
    />
  </div>
</template>

<script>
import GlobalHeader from '@/components/particle/GlobalHeader';
import HistoryCard from '@/components/particle/HistoryCard';

export default {
  name: "InputView",
  components: {
    GlobalHeader,
    HistoryCard,
  },
  data() {
    return {
      mode: 'history',
      title: '履歴',
      storageDatas: {},
    }
  },
  beforeMount() {
    const storageIndex = 'TW-index';
    let nowIndex =　this.$localStorage.get(storageIndex);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    if (nowIndex != null) {
      const indexList = nowIndex.split(',');
      for(let i = 0; i < indexList.length; i++){
        let storageKey = indexList[i];
        const indexes = storageKey.replace('TWK-','').split('_');
        const dayDate = new Date(indexes[0], parseInt(indexes[1],10) - 1,indexes[2], 0,0,0);
        let storageValue =　JSON.parse(this.$localStorage.get(storageKey));
        let storageData = {
          'key': storageKey,
          'value': storageValue
        };
        if(today <= dayDate) {
          this.storageDatas[storageKey] = storageValue;
        }
      }
    }
  }
};
</script>
<style lang="scss">
.c-message {
  font-size: 12px;
  color: #707F89;
  margin: 20px 17px;
}
</style>