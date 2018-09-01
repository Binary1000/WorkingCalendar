<template>
    <div class="table-content">
        <table class="table table-hover table-striped">
            <template v-for="(item, index) in workingList">
                <ListWorkInfo :key="index" :item="item"></ListWorkInfo>
                <ListSummary :key="index + 100" :item="item"></ListSummary>
            </template>
        </table>
    </div>
</template>

<script>
import ListWorkInfo from './ListWorkInfo'
import ListSummary from './ListSummary'

export default {
  components: {
    ListWorkInfo,
    ListSummary
  },
  props: {
    workingList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.table-content {
	height: calc(100vh - 162px);
	overflow: auto;
}

.summary {
  font-weight: 600;
  background-color: rgb(219, 220, 219);
}

table.table{
  margin-bottom: 0;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

tr.work-info {
  box-shadow: 5px 3px 5px #e8e5d538;
}

td.my-col-1{
  width: 10%;
}

td.my-col-2, td.my-col-3, td.my-col-4 {
  width: 16%;
}

td.my-col-5, td.my-col-6, td.my-col-7, td.my-col-8 {
  width: 8%;
}
</style>
