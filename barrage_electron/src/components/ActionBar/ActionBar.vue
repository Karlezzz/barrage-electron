<template>
  <div class="browserAction">
      <div class="action" @click="smallBrowser" >
        <img src="../../static/image/缩小.png" alt="" >
      </div>
      <div class="action">
        <img src="../../static/image/窗口-窗口化_line.png" alt="">
      </div>
      <div class="action">
        <img src="../../static/image/关闭.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
    name:'ActionBar',
    methods: {
      smallBrowser(){
        console.log(1);
      }
    },
}
</script>

<style scoped>
    .browserAction {
    position: absolute;
    top: 1%;
    right: 3%;
    z-index: 999;
    width: 140px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .browserAction .action {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .browserAction .action img {
    width: 80%;
    height: 80%;
    cursor: pointer;
  }
</style>