<template>
  <div class="createVoteCard">
                <div class="topic">
                    <input type="text" placeholder="输入投票问题">
                </div>
                <div class="select">
                    <div class="selectItem">
                        <span>选项一</span>
                        <input type="text">
                    </div>
                    <div class="selectItem">
                        <span>选项一</span>
                        <input type="text">
                    </div>
                    <div class="selectItem">
                        <span>选项一</span>
                        <input type="text">
                    </div>
                    <div class="selectItem">
                        <span>选项一</span>
                        <input type="text">
                    </div>
                    <div class="selectItem">
                        <span>选项一</span>
                        <input type="text">
                    </div>

                    <button>+</button>
                </div>
                <div class="time">
                    <div class="input">
                        <input type="text" placeholder="选择投票时限">
                        <img src="@/pages/Enter/image/下拉.png" alt="" @click="showTimeList">
                    </div>
                    <div class="timeList" v-if="isShowTimeList">
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
</template>

<script>
export default {
    name:'CreateVote',
    data() {
            return {
                isShowTimeList: false
            }
        },
        methods: {
            showTimeList() {
                this.isShowTimeList = !this.isShowTimeList
            }
        },
}
</script>

<style scoped>
   .createVoteCard {
        width: 100%;
        height: 100%;
    }

       .createVoteCard .topic {
        width: 100%;
        height: 10%;
    }

       .createVoteCard .topic input {
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

       .createVoteCard .select {
        width: 100%;
        /* height: 40%; */
        max-height: 30%;
        margin-top: 10px;
        overflow: scroll;
    }

       .createVoteCard .selectItem {
        width: 90%;
        height: 30px;
    }

       .createVoteCard .selectItem input {
        display: none;
        /* display: block; */
        height: 25px;
        width: 60%;
        border: none;
        border-bottom: 1px solid #ea7724;
        background-color: #ffffff00;
        margin-top: 1%;
        margin-left: 10px;
        padding-left: 10px;
        font-size: 16px;
        color: #e1e1e3;
    }

       .createVoteCard .select span {
        display: block;
        height: 25px;
        width: 60%;
        border-bottom: 1px solid #ea7724;
        background-color: #ffffff00;
        margin-top: 1%;
        margin-left: 10px;
        padding-left: 10px;
        font-size: 16px;
        color: #e1e1e3;
        /* border-radius: 10px; */
    }

       .createVoteCard .select button {
        height: 25px;
        width: 50px;
        background-color: #ffffff00;
        border: 1px solid #ea7724;
        border-radius: 10px;
        color: #e1e1e3;
        margin: 10px 0 10px 10px;
        font-size: 16px;
    }

       .createVoteCard .time {
        width: 100%;
        height: 30%;
        margin-top: 10px;
        /* margin-left: -10px; */
    }

       .createVoteCard .time .input {
        margin-left: 10px;
        width: 80%;
        height: 30px;
        background-color: #ccc;
        border: none;
        border-bottom: 1px solid #ea7724;
        background-color: #ffffff00;
        margin-top: 1%;
        padding-left: 10px;
        font-size: 16px;
        color: #e1e1e3;

    }

       .createVoteCard .time .input input {
        float: left;
        height: 20px;
        margin-top: 5px;
        width: 85%;
        border: none;
        background-color: #ffffff00;
    }

       .createVoteCard .time .input img {
        float: left;
        height: 20px;
        width: 20px;
        margin-top: 5px;
        cursor: pointer;
    }

       .createVoteCard .time .timeList {
        width: 80%;
        height: 81px;
        margin-left: 10px;
        overflow: scroll;
        /* border: 1px solid #ea7724; */
        border-top: none;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

       .createVoteCard .time .timeList .timeListItem {
        width: 100%;
        height: 20px;
        /* border-bottom: #ea7724 1px solid; */
        color: #e1e1e3;
        text-align: center;
        font-size: 15px;
    }

       .createVoteCard .time .timeList .timeListItem:nth-child(4) {
        border-bottom: none;
    }

       .createVoteCard .sendVote {
        width: 90%;
        margin-left: 5%;
        text-align: center;
    }

       .createVoteCard .sendVote button {
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