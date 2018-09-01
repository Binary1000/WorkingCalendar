<template>
  <tr class="work-info">
    <td class="my-col-1">{{ item.date }} {{ item.day}}</td>
    <td class="my-col-2 morning">{{ item.morning || "-"}}</td>
    <td class="my-col-3 afternoon">{{ item.afternoon || "-" }}</td>
    <td class="my-col-4 evening">{{ item.evening || "-" }}</td>
    <td class="my-col-5">{{ item.hworktime }}</td>
    <td class="my-col-6">{{ item.hworktime / 8 }}</td>
    <td class="my-col-7"><span class="fa fa-cny"></span>{{ item.price }}</td>
    <td class="my-col-8"><span class="fa fa-cny"></span>{{ item.hworktime / 8 * item.price }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>
