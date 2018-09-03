<template>
  <div class="text-center">
    <GridHeader></GridHeader>
    <GridContent :workingList="workingList"></GridContent>
    <Float></Float>
    <ListFooter :workingList="data"></ListFooter>
  </div>
</template>

<script>

import ListFooter from './ListFooter'
import GridHeader from './GridHeader'
import GridContent from './GridContent'
import Float from './Float'

export default {
  components: {
    ListFooter, GridHeader, GridContent, Float
  },
  data () {
    return {
      workingList: [],
      data: [],
      current: {}
    }
  },
  created () {
    var that = this
    fetch('http://192.168.0.135:8000/workingList')
      .then(res => res.json())
      .then(function (data) {
        that.data = JSON.parse(JSON.stringify(data))
        for (let i = 0; i < 2; i++) {
          data.unshift({})
        }
        let len = (data.length / 7) << 1
        let n = 0
        for (let j = 0; j < len; ++j) {
          let arr = []
          for (let k = 0; k < 7; ++k) {
            if (!data[n]) {
              arr.push({})
            } else {
              arr.push(data[n])
            }
            n++
          }
          that.workingList.push(arr)
        }
      })
  }
}
</script>

<style scoped>

div.col {
  padding-left: 5px;
  padding-right: 5px;
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

td.label {
  width: 50px;
}

body,
html {
  height: 100%;
}

.day .col {
  font-weight: bold;
  margin: 10px 0;
}

body {
  overflow: hidden;
}

#title {
  display: inline-block;
}

a {
  color: black;
}

ul {
  list-style: none;
}
</style>
