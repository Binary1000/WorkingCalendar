<template>
	<div class="text-center">
		<div class="row text-center day">
			<div class="col ">日</div>
			<div class="col">一</div>
			<div class="col">二</div>
			<div class="col">三</div>
			<div class="col">四</div>
			<div class="col">五</div>
			<div class="col">六</div>
		</div>
		<div id="wrapper">
			<div  v-for="(arr, index) in workingList" class="row" :key="index">
				<div v-bind:class="{item : item.summary }"  class="col  text-center" v-for="(item, index1) in arr" :key="index1" @click="mouseOverHandler(item)">
					<div class="workinfo">
						<span class="date">{{ item.date }}</span>
						<div class="summary">{{ item.summary }}</div>
					</div>
				</div>
			</div>
		</div>
		<div id="float" style="display: none;">
			<div id="mask">
				
			</div>
			<span id="close" @click="closeFloat">X</span>
			<table>
				<tr>
					<td colspan="2">{{ current.date }} {{ current.day }}</td>
				</tr>
				<tr>
					<td class="label">上午</td><td>{{ current.morning }}</td>
				</tr>
				<tr>
					<td class="label">下午</td><td>{{ current.afternoon }}</td>
				</tr>
				<tr>
					<td class="label">晚上</td><td>{{ current.evening || "-" }}</td>
				</tr>
				<tr>
					<td class="label">工作量(h)</td><td>{{ current.hworktime }}</td>
				</tr>
				<tr>
					<td class="label">总结</td><td>{{ current.summary }}</td>
				</tr>
			</table>
		</div>
      <ListFooter :workingList="data"></ListFooter>
	</div>

</template>

<script>
import ListFooter from './ListFooter'

export default {
  components: {
    ListFooter
  },
  data() {
    return {
      workingList: [],
      data: [],
      current: {},
      float: null
    };
  },
  created() {
    this.float = document.getElementById("float");
    var that = this;
    fetch("http://192.168.0.135:8000/workingList")
      .then(res => res.json())
      .then(function(data) {
        that.data = JSON.parse(JSON.stringify(data));
        for (let i = 0; i < 2; i++) {
          data.unshift({});
        }
        let len = (data.length / 7) << 1;
        let n = 0;
        for (let j = 0; j < len; ++j) {
          let arr = [];
          for (let k = 0; k < 7; ++k) {
            if (!data[n]) {
              arr.push({});
            } else {
              arr.push(data[n]);
            }
            n++;
          }
          that.workingList.push(arr);
        }
      });
  },
  methods: {
    mouseOverHandler(item) {
      this.current = item;
      if (item.summary) {
        float.style.display = "block";
      }
    },
    closeFloat() {
      float.style.display = "none";
    }
  }
};
</script>

<style scoped>
div.day {
  background-color: #0000001f;
  user-select: none;
}

div.col {
  padding-left: 5px;
  padding-right: 5px;
}

#wrapper {
  height: calc(100vh - 154px);
  overflow-y: auto;
  padding: 0 20px;
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

#float tr {
  height: 50px;
}

#close {
  position: absolute;
  right: 5px;
  cursor: pointer;
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
  background: url(../../static/img/logo.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}

.item {
  padding-top: 10px;
  height: 260px;
}

#title {
  display: inline-block;
}

a {
  color: black;
}

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

ul {
  list-style: none;
}
</style>