<template>
    <div class="table-footer">
        <table class="table">
            <tr>
                <td><span>工作量汇总</span></td>
                <td><span>{{ workingList.length }}d</span></td>
                <td><span>{{ workHours }}h</span></td>
                <td><span>{{ workHours / 8 }}d</span></td>
                <td><span><span class="fa fa-cny"></span>{{ sum }}</span></td>
            </tr>
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
  },
  computed: {
    workHours() {
      let sum = 0;
      let arr = this.workingList;
      for (let i = 0; i < arr.length; ++i) {
        sum += arr[i].hworktime;
      }
      return sum;
    },
    sum() {
      let sum = 0;
      let arr = this.workingList;
      for (let i = 0; i < arr.length; ++i) {
        sum += arr[i].hworktime / 8 * arr[i].price;
      }
      return sum;
    }
  }
};
</script>

<style scoped>
  div.table-footer {
    background-color: rgb(183, 183, 183);
    font-weight: 600;
    font-size: 18px;
  }
</style>
