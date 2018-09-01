<template>
    <tr class="summary">
        <td><span class="fa fa-edit"></span>总结</td>
        <td class="summary-td" colspan="7">{{ item.summary }}</td>
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
