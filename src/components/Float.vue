<template>
  <div id="float" v-show="isShow" >
    <span id="close" @click="$emit('toggle', false)">X</span>
    <table>
      <tr>
        <td colspan="2">{{ current.date }} {{ current.day }}</td>
      </tr>
      <tr>
        <td class="label">上午</td>
        <td>{{ current.morning }}</td>
      </tr>
      <tr>
        <td class="label">下午</td>
        <td>{{ current.afternoon }}</td>
      </tr>
      <tr>
        <td class="label">晚上</td>
        <td>{{ current.evening || "-" }}</td>
      </tr>
      <tr>
        <td class="label">工作量(h)</td>
        <td>{{ current.hworktime }}</td>
      </tr>
      <tr>
        <td class="label">总结</td>
        <td>{{ current.summary }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['current', 'show'],
  computed: {
    isShow () {
      if(this.show){
        return true;
      }else {
        return false;
      }
    }
  }
}
</script>

<style scoped>
#float {
  width: 400px;
  height: 500px;
  position: absolute;
  margin: auto;
  left: 720px;
  top: 198px;
  border: 1px solid black;
  background-color: white;
}

#float tr {
  height: 50px;
}

#close {
  position: absolute;
  right: 5px;
  cursor: pointer;
}
</style>
