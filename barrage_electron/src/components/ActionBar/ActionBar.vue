<template>
  <div class="browserAction" >
    <div class="action" @click="smallBrowser">
      <img src="../../static/image/缩小.png" alt="">
    </div>
    <div class="action" @click="largeBrowser">
      <img src="../../static/image/窗口-窗口化_line.png" alt="">
    </div>
    <div class="action" @click="closeBrowser">
      <img src="../../static/image/关闭.png" alt="">
    </div>
  </div>
</template>

<script>
  import {
    remote,
  } from 'electron'
  export default {
    name: 'ActionBar',
    data() {
      return {
      }
    },
    methods: {

      smallBrowser() {
        remote.getCurrentWindow().minimize()
      },
      largeBrowser() {

        if(remote.getCurrentWindow().isMaximized()){
          
          // remote.getCurrentWindow().setContentSize(1000,600)
          remote.getCurrentWindow().setContentSize(1300,600)
          remote.getCurrentWindow().center()
        }else{
          remote.getCurrentWindow().maximize()
        }
      },
      closeBrowser() {
        remote.getCurrentWindow().close()
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
  }

  .browserAction .action img {

    width: 80%;
    height: 80%;
    cursor: pointer;
  }

  .browserAction .action:hover {
    background-color: #5252523d;
  }
</style>