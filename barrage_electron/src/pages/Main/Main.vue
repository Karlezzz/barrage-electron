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
            <div class="functionItem" style="margin-top: 5px;" @click="selectFunction(1)">
              <div class="icon">
                <img src="./image/在线人数.png" alt="">
              </div>
              <div class="functionName">
                在线成员
              </div>
            </div>
            <div class="functionItem" @click="selectFunction(2)">
              <div class="icon">
                <img src="./image/投票.png" alt="">
              </div>
              <div class="functionName">
                发起投票
              </div>
            </div>
            <div class="functionItem" @click="selectFunction(3)">
              <div class="icon">
                <img src="./image/投屏.png" alt="">
              </div>
              <div class="functionName">
                投屏
              </div>
            </div>
            <div class="functionItem" @click="selectFunction(4)">
              <div class="icon">
                <img src="./image/share.png" alt="">
              </div>
              <div class="functionName">
                分享房间
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
        <div class="barrage">
          <div class="chatArea">
            <div class="message">
              <div v-for="(item,index) in messageList" :key="index"
                :class="{'leftMessage':item.name!=myName,'rightMessage':item.name==myName}">
                <div class="messageAuthor">{{ item.name }}</div>
                <div class="messageWord">{{ item.content }}</div>
              </div>
            </div>
            <div class="input">
              <input type="text" v-model="newMessage" @keyup.enter="sendMessage">
              <div class="emoji">
                <img src="./image/emoji.png" alt="">
              </div>
              <div class="send" @click="sendMessage">
                <img src="./image/Send.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="functionDetail">
          <div class="member" v-if="functionStatusList.isShowMember">
            <div class="member_head">
              <p>在线成员</p>
              <p><img src="./image/在线人数green.png" alt=""> 99人</p>
            </div>
            <div class="member_body">
              <div class="memberItem">
                <div class="memberName">Karle</div>
                <div class="memberId">1234567</div>
              </div>
              <div class="memberItem">
                <div class="memberName">Karle</div>
                <div class="memberId">1234567</div>
              </div>
              <div class="memberItem">
                <div class="memberName">Karle</div>
                <div class="memberId">1234567</div>
              </div>
              <div class="memberItem">
                <div class="memberName">Karle</div>
                <div class="memberId">1234567</div>
              </div>
              <div class="memberItem">
                <div class="memberName">Karle</div>
                <div class="memberId">1234567</div>
              </div>
              <div class="memberItem">
                <div class="memberName">Karle</div>
                <div class="memberId">1234567</div>
              </div>
            </div>
          </div>
          <div class="vote">
            <div class="vote_head">
              <div class="twoVoteSelect">发起投票</div>
              <div class="twoVoteSelect">历史投票</div>
            </div>
            <div class="vote_body">
              <div class="createVoteCard">
                <div class="topic">
                  <input type="text" placeholder="输入投票问题">
                </div>
                <div class="select">
                  <input type="text" placeholder="选项一">
                  <input type="text" placeholder="选项一">
                  <input type="text" placeholder="选项一">
                  <input type="text" placeholder="选项一">
                  <button>增加选项</button>
                </div>
                <div class="time">
                  <div class="input">
                    <input type="text" placeholder="选择投票时限">
                    <img src="../Enter/image/下拉.png" alt="">
                  </div>
                  <div class="timeList">
                    <div class="timeListItem">一分钟</div>
                    <div class="timeListItem">十分钟</div>
                    <div class="timeListItem">十五分钟</div>
                    <div class="timeListItem">三十分钟</div>
                    <div class="timeListItem">一小时</div>
                  </div>
                </div>
                <div class="sendVote">
                  <button>发起投票</button>
                </div>
              </div>
              <div class="historyVoteCard">

              </div>

            </div>
          </div>
          <div class="screen"></div>
          <div class="shareRoom"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        myName: 'Mr.Li',
        newMessage: '',
        messageList: [{
            name: 'Karle',
            content: 'hello'
          },
          {
            name: 'Amy',
            content: 'hi'
          },
          {
            name: 'Mike',
            content: 'nice to meet you'
          },
          {
            name: 'Kris',
            content: 'nice to meet you too'
          },
          {
            name: 'Mr.Li',
            content: 'welcome'
          },
        ],
        functionStatusList: {
          isShowMember: false,
          isShowVote: false,
          isShowScreen: false,
          isShowShareRoom: false
        }
      }
    },
    methods: {
      back() {
        this.$router.push('/enter')
      },
      sendMessage() {
        const newMs = {
          name: this.myName,
          content: this.newMessage
        }
        this.messageList.push(newMs)
        this.newMessage = ''
      },
      selectFunction(index) {
        //1.member 2.vote 3.screen 4.share
        for (let i in this.functionStatusList) {
          this.functionStatusList[i] = false
        }
        if (index == 1) this.functionStatusList.isShowMember = true
      }
    },
    mounted() {


      let div = document.querySelector(".message");
      div.scrollTop = div.scrollHeight;
    },
    watch: {
      // 屏幕滚动始终在最后一条
      messageList() {
        this.$nextTick(() => {
          let div = document.querySelector(".message");
          div.scrollTop = div.scrollHeight;
        });
      },
    },
  }
</script>

<style scoped>
  .box {
    /* height: 100%; */
    height: 100vh;
    width: 100%;
    border-radius: 50px;
  }

  .main {
    position: relative;
    width: 100%;
    height: 100%;
    /* min-height: 100vh; */
    background-color: #1d1d1f;
    overflow: hidden;
    border-radius: 50px;
  }

  .head {
    width: 100%;
    /* height: 90px; */
    height: 15%;
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
    /* height: 90px; */
    height: 100%;

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
    /* height: 510px; */
    height: 90%;
  }

  .body .function {
    width: 20%;
    height: 90%;
    overflow: hidden;
    margin-left: 10px;
    float: left;
  }

  .body .function .personInfo {
    margin-top: 10px;
    margin-left: 3%;
    width: 94%;
    /* height: 20%; */
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
    position: absolute;
    left: 17%;
    top: 19%;
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
    margin-top: 35px;
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
    height: 100%;
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
    font-size: 15px;
  }

  .body .function .functionList .functionItem:hover {
    background-color: #303032;
  }

  .body .function .functionList .openBarrage {
    /* background-color: #303032; */
    background-color: #526af0;
    /* width: 98%; */
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .body .function .openBarrage .icon {
    float: left;
    width: 25px;
    height: 25px;
    margin-top: 13px;
    margin-left: 15px;
  }

  .body .function .openBarrage .icon img {
    width: 100%;
    height: 100%;
  }

  .body .function .openBarrage .word {
    float: left;
    width: 100px;
    height: 30px;
    color: #e1e1e3;
    letter-spacing: 1px;
    margin-top: 14px;
    margin-left: 40px;
    font-size: 15px;
  }

  .body .barrage {
    float: left;
    width: 55%;
    height: 90%;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body .barrage .chatArea {
    width: 98%;
    height: 98%;
    background-color: #222325;
    border-radius: 10px;
  }

  .body .barrage .chatArea .message {
    width: 98%;
    margin-left: 1%;
    height: 88%;
    overflow: scroll;
  }

  .body .barrage .chatArea .message .leftMessage {
    width: 50%;
    margin: 5px 0 10px 10px;
    word-break: break-all;
    white-space: pre-line;
    margin-top: 10px;
  }

  .body .barrage .chatArea .message .leftMessage .messageAuthor {
    font-size: 100%;
    color: #e1e1e3;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .body .barrage .chatArea .message .leftMessage .messageWord {
    margin-top: 5px;
    background-color: #494b4f;
    border-radius: 20px;
    padding: 10px 15px 10px 15px;
    color: #e1e1e3;
    font-size: 100%;
    /* border: 1px solid rgba(152, 152, 152, 0.092); */
    display: inline-block;
  }

  .body .barrage .chatArea .message .rightMessage {
    width: 50%;
    text-align: right;
    margin: 0 10px 5px auto;
    word-break: break-all;
    white-space: pre-line;
  }

  .body .barrage .chatArea .message .rightMessage .messageAuthor {
    text-align: right;
    margin-right: 5px;
    font-size: 100%;
    color: #e1e1e3;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .body .barrage .chatArea .message .rightMessage .messageWord {
    margin-top: 10px;
    background-color: #ea7724;
    border-radius: 20px;
    padding: 10px 15px 10px 15px;
    color: #e1e1e3;
    font-size: 100%;
    text-align: left;
    /* border: 1px solid rgba(152, 152, 152, 0.092); */
    display: inline-block;
  }

  .body .barrage .chatArea .input {
    width: 98%;
    height: 9%;
    display: flex;
    align-items: center;
    margin-left: 1%;
    margin-top: 2%;
  }

  .body .barrage .chatArea .input input {
    width: 80%;
    height: 80%;
    margin-left: 2%;
    border: none;
    border-bottom: 1px solid #ea7724;
    background-color: #ffffff00;
    color: #e1e1e3;
    font-size: 17px;
    letter-spacing: 1px;
    padding-left: 20px;
  }

  .body .barrage .chatArea .input input:focus {
    border-bottom: 2px solid #ea7724;
  }

  .body .barrage .chatArea .emoji {
    margin-left: 1%;
    width: 8%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #323337;
    border-radius: 10px;
  }

  .body .barrage .chatArea .emoji img {
    width: 30px;
    height: 30px;
  }

  .body .barrage .chatArea .send {
    width: 8%;
    height: 80%;
    margin-left: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #323337;
    border-radius: 10px;
  }

  .body .barrage .chatArea .send img {
    width: 30px;
    height: 30px;
  }

  .body .functionDetail {
    float: left;
    width: 23%;
    height: 88%;
    margin-top: 0.5%;
    background-color: #323337;
    border-radius: 10px;

  }

  .body .functionDetail .member {
    width: 96%;
    height: 96%;
    /* background-color: skyblue; */
    margin-top: 2%;
    margin-left: 2%;
    overflow: hidden;
  }

  .body .functionDetail .member .member_head {
    /* background-color: lightcoral; */
    width: 98%;
    height: 15%;
    margin: 2% 0 0 1%;
    border-bottom: 1px solid #fff;
  }

  .body .functionDetail .member .member_head p:nth-child(1) {
    font-size: 20px;
    letter-spacing: 2px;
    color: #e1e1e3;
    padding-top: 15px;
    padding-left: 5px;
  }

  .body .functionDetail .member .member_head p:nth-child(2) {
    font-size: 15px;
    letter-spacing: 2px;
    color: #e1e1e3;
    padding-left: 130px;

  }

  .body .functionDetail .member .member_head p:nth-child(2) img {
    width: 20px;
    height: 20px;
  }

  .body .functionDetail .member .member_body {
    width: 98%;
    height: 90%;
    margin-left: 1%;
    margin-top: 2%;
    overflow: scroll;
  }

  .body .functionDetail .member .member_body .memberItem {
    width: 98%;
    height: 60px;
    max-height: 20%;
    margin-left: 1%;
    border-radius: 10px;
    margin-top: 3px;
    cursor: pointer;
  }

  .body .functionDetail .member .member_body .memberItem:hover {
    background-color: #46474a;
  }

  .body .functionDetail .member .member_body .memberItem .memberName {
    width: 50%;
    height: 45%;
    margin-left: 5%;
    color: #ea7724;
    letter-spacing: 1px;
    padding-top: 10px;
    font-size: 15px;
  }

  .body .functionDetail .member .member_body .memberItem .memberId {
    width: 90%;
    height: 45%;
    margin-left: 5%;
    color: #e1e1e3;
    letter-spacing: 1px;
    padding-top: 2px;
    font-size: 15px;
  }

  .body .functionDetail .vote {
    width: 96%;
    height: 96%;
    margin-top: 2%;
    margin-left: 2%;
    overflow: hidden;

  }

  .body .functionDetail .vote .vote_head {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #e1e1e3;
  }

  .body .functionDetail .vote .vote_head .twoVoteSelect {
    float: left;
    width: 100px;
    height: 50px;
    color: #e1e1e3;
    background-color: #526af0;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  }

  .body .functionDetail .vote .vote_head .twoVoteSelect:nth-child(2) {
    background-color: #232227;
  }

  .body .functionDetail .vote .vote_body {
    width: 98%;
    height: 90%;
    margin-left: 1%;
    margin-top: 1%;
  }

  .body .functionDetail .vote .createVoteCard {
    width: 100%;
    height: 100%;
  }

  .body .functionDetail .vote .createVoteCard .topic {
    width: 100%;
    height: 10%;
  }

  .body .functionDetail .vote .createVoteCard .topic input {
    height: 80%;
    width: 80%;
    border: none;
    border-bottom: 1px solid #ea7724;
    background-color: #ffffff00;
    margin-top: 1%;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 16px;
    color: #e1e1e3;
  }

  .body .functionDetail .vote .createVoteCard .select {
    width: 100%;
    /* height: 40%; */
    max-height: 40%;
    margin-top: 10px;
  }

  .body .functionDetail .vote .createVoteCard .select input {
    height: 25px;
    width: 80%;
    border: 1px solid #ea7724;
    background-color: #ffffff00;
    margin-top: 1%;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 16px;
    color: #e1e1e3;
    border-radius: 10px;
  }

  .body .functionDetail .vote .createVoteCard .select button {
    height: 30px;
    width: 80px;
    background-color: #ffffff00;
    border: 1px solid #ea7724;
    border-radius: 10px;
    color: #e1e1e3;
    margin: 10px 0 10px 10px;
    font-size: 16px;
  }

  .body .functionDetail .vote .createVoteCard .time {
    width: 100%;
    height: 30%;
    margin-top: 10px;
  }

  .body .functionDetail .vote .createVoteCard .time .input{
    margin-left: 10%;
    width: 80%;
    height: 30px;
    background-color: #ccc;
    border: 1px solid #ea7724;
    background-color: #ffffff00;
    margin-top: 1%;
    padding-left: 10px;
    font-size: 16px;
    color: #e1e1e3;
    border-radius: 10px;
  }
  .body .functionDetail .vote .createVoteCard .time .input input {
    float: left;
    height: 20px;
    margin-top: 5px;
    width: 85%;
    border: none;
    background-color: #ffffff00;
  }
  .body .functionDetail .vote .createVoteCard .time .input img{
    float: left;
    height: 20px;
    width: 20px;
    margin-top: 5px;
    cursor: pointer;
  }
  .body .functionDetail .vote .createVoteCard .time .timeList{
    width: 72%;
    height: 81px;
    margin-left: 14%;
    overflow: scroll;
    border: 1px solid #ea7724;
    border-top: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .body .functionDetail .vote .createVoteCard .time .timeList .timeListItem{
    width: 100%;
    height: 20px;
    border-bottom: #ea7724 1px solid;
    color: #e1e1e3;
    text-align: center;
    font-size: 15px;
  }

  .body .functionDetail .vote .createVoteCard .sendVote{
    width: 90%;
    margin-left: 5%;
    text-align: center;
  }
  .body .functionDetail .vote .createVoteCard .sendVote button{
    width: 180px;
    height: 40px;
    border: none;
    color: #e1e1e3;
    font-size: 17px;
    text-align: center;
    background-color: #526af0;
    border-radius: 15px;
  }
</style>