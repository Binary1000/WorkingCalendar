<template>
  <div>
    <ListHeader></ListHeader>
    <ListContent :workingList="workingList"></ListContent>
    <ListFooter :workingList="workingList"></ListFooter>
  </div>
</template>

<script>
import ListHeader from './ListHeader'
import ListContent from './ListContent'
import ListFooter from './ListFooter'

export default {
  components: {
    ListHeader,
    ListContent,
    ListFooter
  },
  data () {
    return {
      workingList: []
    }
  },
  created () {
    fetch("http://192.168.0.135:8000/workingList")
      .then(res => res.json())
      .then(data => (this.workingList = data));
  }
};
</script>

<style scoped>


.fa {
  margin-right: 5px;
}

</style>