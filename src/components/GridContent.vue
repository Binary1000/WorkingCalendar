<template>
  <div id="wrapper">
    <div v-for="(arr, index) in workingList" class="row" :key="index">
      <div v-bind:class="{item : item.summary}" class="col text-center" v-for="(item, index1) in arr" :key="index1" @click="mouseClickHandler(item, $event)">
        <div class="workinfo">
          <span class="date">{{ item.date }}</span>
          <div class="summary">{{ item.summary }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workingList: {
      type: Array
    }
  },
  methods: {
    mouseClickHandler (item, event) {
      if (item.summary) {
        this.$store.commit('setCurrent', item)
        this.$store.commit('toggle', true)
      }
    }
  }
}
</script>

<style scoped>
  #wrapper {
    height: calc(100vh - 154px);
    overflow-y: auto;
    padding: 0 20px;
  }

  .item {
    padding-top: 10px;
    height: 260px;
  }

  .item div.workinfo {
    background-color: #0000001f;
    height: 100%;
  }

  div.item div.summary {
    padding: 10px;
  }

  .item span.date {
    display: block;
    background-color: #5f5f5f29;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
</style>
