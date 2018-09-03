<template>
    <div>
        <h2 id="title">2018年8月工作量</h2>
        <div class="display_mode">
            <span class="list fa fa-list" @click="$emit('toggle', 'List')"></span>
            <span class="grid fa fa-th" @click="$emit('toggle', 'Grid')"></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2#title {
  text-align: center;
  margin: 10px auto;
  width: 500px;
  user-select: none;
}

.display_mode {
  position: absolute;
  right: 66px;
  top: 19px;
  color: black;
  font-size: 18px;
}

.grid,
.list {
  cursor: pointer;
}

.display_mode {
  user-select: none;
}
</style>
