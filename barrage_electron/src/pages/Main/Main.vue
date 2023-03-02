<template>
  <div class="box">
    <div class="main">
      <div class="head">
        <div class="logo">
          <img src="../../assets/dgut2.png" alt="">
        </div>
        <div class="roomName">
          <div class="name">体育课</div>
          <div class="id">id:12345</div>
        </div>
      </div>
      <div class="body">
        <div class="function">
          <div class="personInfo">
            <img src="../Main/image/头像 (5).png" alt="">
            <div class="adminName">李老师</div>
            <div class="edit">
              <img src="./image/编辑.png" alt="">
            </div>
            <div class="line"></div>
            <div class="createNewRoom">
              Create a new barrage room?
            </div>
          </div>
          <div class="functionList">
            <div class="functionItem" style="margin-top: 5px;">
              <div class="icon">
                <img src="./image/在线人数.png" alt="">
              </div>
              <div class="functionName">
                在线成员
              </div>
            </div>
            <div class="functionItem">
              <div class="icon">
                <img src="./image/投票.png" alt="">
              </div>
              <div class="functionName">
                发起投票
              </div>
            </div>
            <div class="functionItem">
              <div class="icon">
                <img src="./image/投屏.png" alt="">
              </div>
              <div class="functionName">
                投屏
              </div>
            </div>
            <div class="functionItem">
              <div class="icon">
                <img src="./image/share.png" alt="">
              </div>
              <div class="functionName">
                分享房间
              </div>
            </div>
          </div>
          <div class="openBarrage">
            <div class="icon">
              <img src="./image/弹幕数_32.png" alt="">
            </div>
            <div class="word">
              开启弹幕
            </div>
          </div>
        </div>
      </div>
      <div class="show"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Main',
    methods: {
      back() {
        this.$router.push('/enter')
      }
    }
  }
</script>

<style scoped>
  .box {
    height: 100%;
    width: 100%;
    border-radius: 50px;
  }

  .main {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #1d1d1f;
    overflow: hidden;
    border-radius: 50px;
  }

  .head {
    width: 100%;
    height: 90px;
    /* height: 40%; */
    /* background-color: #ff0000; */
  }

  .head .logo {
    width: 200px;
    height: 100%;
    margin-left: 20px;
    /* background-color: red; */
  }

  .head .logo img {
    height: 40px;
    margin-top: 25px;
    margin-left: 20px;
  }

  .head .roomName {
    position: absolute;
    top: 0;
    left: 250px;
    /* width: 150px; */
    height: 90px;

    color: #e1e1e3;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    padding: 0 20px 0 20px;
    line-height: 3;
    font-weight: 700;
  }

  .head .roomName .id {
    position: absolute;
    top: 30px;
    left: 130px;
    /* background-color: red; */
    height: 50px;
    font-size: 14px;
  }

  .body {
    /* background-color: rgb(255, 255, 255); */
    width: 100%;
    height: 510px;
  }

  .body .function {
    width: 250px;
    height: 510px;
    /* background-color: yellow; */
    overflow: hidden;
    margin-left: 10px;
  }

  .body .function .personInfo {
    margin-top: 10px;
    margin-left: 10px;
    width: 94%;
    height: 100px;
    background-color: #323337;
    border-radius: 20px;
  }

  .body .function .personInfo img {
    display: inline-block;
    margin: 10px 0 0 20px;
    width: 50px;
    height: 50px;
    border-radius: 15px;
  }

  .body .function .personInfo .adminName {
    width: 60px;
    height: 20px;
    color: #e1e1e3;
    margin-top: -50px;
    margin-left: 80px;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .body .function .personInfo .edit {
    margin: -15px 0 0 170px;
    width: 30px;
    height: 30px;
  }

  .body .function .personInfo .edit img {
    margin-top: -1px;
    margin-left: -1px;
    width: 100%;
    height: 100%;
  }

  .body .function .personInfo .line {
    width: 96%;
    height: 1px;
    margin-left: 2%;
    margin-top: 20px;
    background-color: #494b4f;
  }

  .body .function .personInfo .createNewRoom {
    width: 90%;
    font-size: 12px;
    margin-left: 5%;
    margin-top: 5px;
    text-align: center;
    color: #e1e1e3;
    cursor: pointer;
  }

  .body .function .functionList {
    margin-top: 10px;
    margin-left: 10px;
    width: 94%;
    height: 280px;
    overflow: hidden;
  }

  .body .function .functionList .functionItem {

    margin-left: 1%;
    margin-top: 5px;
    width: 98%;
    height: 50px;
    border-radius: 10px;
    /* background-color: #fff; */
    overflow: hidden;
    cursor: pointer;
  }

  .body .function .functionList .functionItem .icon {
    float: left;
    width: 25px;
    height: 25px;
    margin-top: 13px;
    margin-left: 15px;
  }

  .body .function .functionList .functionItem .icon img {
    width: 100%;
    height: 100%;
  }

  .body .function .functionList .functionItem .functionName {
    float: left;
    width: 100px;
    height: 30px;
    color: #e1e1e3;
    letter-spacing: 1px;
    margin-top: 13px;
    margin-left: 40px;
  }
  .body .function .functionList .functionItem:hover{
    background-color: #303032;
  }

  .body .function .openBarrage {
    width: 235px;
    height: 60px;
    background-color: #303032;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .body .function .openBarrage .icon{
    float: left;
    width: 30px;
    height: 30px;
    margin-top: 15px;
    margin-left: 15px;
  }
  .body .function .openBarrage .icon img{
    width: 100%;
    height: 100%;
  }
  .body .function .openBarrage .word{
    float: left;
    width: 100px;
    height: 30px;
    color: #e1e1e3;
    letter-spacing: 1px;
    margin-top: 17px;
    margin-left: 40px;
  }
</style>