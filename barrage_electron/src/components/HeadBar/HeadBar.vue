<template>
  <div class="headBar"></div>
</template>

<script>
export default {
    name:'HeadBar'
}
</script>

<style scoped>
.headBar {
    position: absolute;
    top: 0;
    left: 2%;
    width: 96%;
    height: 40px;
    background-color: #fff;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    -webkit-app-region: drag;
  }
</style>