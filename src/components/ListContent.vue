<template>
    <div class="table-content">
        <table class="table table-hover table-striped">
            <template v-for="(item, index) in workingList">
                <tr class="work-info" v-bind:key="index">
                    <td class="my-col-1">{{ item.date }} {{ item.day}}</td>
                    <td class="my-col-2 morning">{{ item.morning || "-"}}</td>
                    <td class="my-col-3 afternoon">{{ item.afternoon || "-" }}</td>
                    <td class="my-col-4 evening">{{ item.evening || "-" }}</td>
                    <td class="my-col-5">{{ item.hworktime }}</td>
                    <td class="my-col-6">{{ item.hworktime / 8 }}</td>
                    <td class="my-col-7"><span class="fa fa-cny"></span>{{ item.price }}</td>
                    <td class="my-col-8"><span class="fa fa-cny"></span>{{ item.hworktime / 8 * item.price }}</td>
                </tr>
                <tr class="summary" v-bind:key="index + 1000">
                    <td><span class="fa fa-edit"></span></td>
                    <td class="summary-td" colspan="7">{{ item.summary }}</td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
export default {
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
