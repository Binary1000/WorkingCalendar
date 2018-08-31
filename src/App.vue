<template>
	<div id="app">
		<Header @toggle="toggle"></Header>
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
	</div>
</template>


<script>
import Header from './components/Header'
import List from './components/List'
import Grid from './components/Grid'

export default {
  components: {
    Header,
    List,
    Grid
  },
  data() {
    return {
      currentComponent: "List"
    };
  },
  methods: {
    toggle (type) {
      this.currentComponent = type;
    }
  }
};
</script>



<style>
html,
body {
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  text-align: center;
}
</style>