<template>
  <div class="HistoryVoteDetailBG" v-show="isShowDetail" style="width: 100%;height: 100%;">
    <div class="showArea" id="cartsArea"></div>
    <div class="getBack">
      <button @click="getBack">返回</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HistoryVoteDetail',
    props: [
      'detailInfo', 'isShowDetail'
    ],
    methods: {
      getBack() {
        this.$emit('getBackDetail', false)
      },
      charts() {
        let np = new Promise((resolve, reject) => {
          resolve()
        })
        np.then(() => {
          this.myEcharts = this.echarts.init(document.getElementById('cartsArea'))
          let option = {
            title: {
              show: true,
              x: '10%',
              y: '10%',
              text: 'TestTestTestTestTest',
              textStyle: {
                fontSize: '15px',
                color: '#e1e1e3',

              }
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'horizontal',
              x: 'right',
              y: 'bottom',
              selectedMode: false,
              type: 'scroll',
              textStyle:{
                color:'#e1e1e3',
                // fontSize:14
              },
              
              
            },
            series: [{
              name: 'Test',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['40', '80'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              data: [{
                  value: 1048,
                  name: '吃饭'
                },
                {
                  value: 735,
                  name: '睡觉'
                },
                {
                  value: 580,
                  name: '上课'
                },
                {
                  value: 484,
                  name: '健身'
                },
                {
                  value: 300,
                  name: '约会'
                },
                {
                  value: 100,
                  name: '洗澡'
                },
                {
                  value: 300,
                  name: '做作业'
                }


              ]
            }]
          };
          this.myEcharts.setOption(option);
        })

      },
    },
    mounted() {

      //请求数据，then(this.charts),延时生成防止图表压缩
      setTimeout(() => {
        this.charts()
      }, 1000);
      
      this.resizefun = () => {
        this.echarts.init(document.getElementById('cartsArea')).resize();
      };
      window.addEventListener('resize', this.resizefun);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizefun);
      this.resizefun = null
    }

  }
</script>

<style scoped>
  .HistoryVoteDetailBG {
    width: 100%;
    height: 100%;
  }

  .showArea {
    margin-left: 1%;
    width: 98%;
    height: 72%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .getBack {
    margin-left: 1%;
    width: 98%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .getBack button{
    width: 70%;
    height: 50px;
    border:none;
    border-radius: 15px;
    background-color: #526af0;
    font-size: 18px;
    color: #e1e1e3;
    letter-spacing: 1px;
    cursor: pointer;
  }
</style>