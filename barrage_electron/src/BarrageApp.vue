<template>
  <div id="app" ref="app">
    <vue-baberrage 
    :isShow="isShowBarrage" 
    :barrageList="barrageList" 
    :loop="barrageLoop"
    :messageHeight="150"
    :boxHight="200"
    :boxWidth="width"
    ></vue-baberrage>
    <button @click="addToList">test</button>
  </div>
</template>

<script>
  export default {
    name: 'BarrageApp',
    methods: {},
    data() {
      return {
        barrageList: [],
        isShowBarrage: true,
        barrageLoop: false,
        currentId: 0,
        width:this.$refs.app.boxWidth
      }

    },
    methods: {
      addToList() {
        this.barrageList.push({
            id: ++this.currentId,
            msg: '666',
            time: 5,
          })

      }
    },
    mounted() {
      this.addToList()
      
    },
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100vh;
    background-color: #a80e0e00;
    overflow: hidden;
  }
</style>