<template>
    <!-- Function.vue -->
    <div class="function">
        <div class="personInfo">
            <img src="../image/头像 (5).png" alt="">
            <div class="adminName">李老师</div>
            <div class="edit">
                <img src="../image/编辑.png" alt="">
            </div>
            <div class="line"></div>
            <div class="createNewRoom">
                Create a new barrage room?
            </div>
        </div>
        <div class="functionList">
            <div class="functionItem" style="margin-top: 5px;" @click="selectFunction(1)">
                <div class="icon">
                    <img src="../image/在线人数.png" alt="">
                </div>
                <div class="functionName">
                    在线成员
                </div>
            </div>
            <div class="functionItem" @click="selectFunction(2)">
                <div class="icon">
                    <img src="../image/投票.png" alt="">
                </div>
                <div class="functionName">
                    发起投票
                </div>
            </div>
            <div class="functionItem" @click="selectFunction(3)">
                <div class="icon">
                    <img src="../image/投屏.png" alt="">
                </div>
                <div class="functionName">
                    投屏
                </div>
            </div>
            <div class="functionItem" @click="selectFunction(4)">
                <div class="icon">
                    <img src="../image/share.png" alt="">
                </div>
                <div class="functionName">
                    分享房间
                </div>
            </div>
            <div class="openBarrage" @click="startBarrage">
                <div class="icon">
                    <img src="../image/弹幕数_32.png" alt="">
                </div>
                <div class="word">
                    {{barrageStatus}}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { ipcRenderer } from 'electron'
    export default {
        name: 'Function',
        data() {
            return {
                functionStatusList: {
                    isShowMember: true,
                    isShowVote: false,
                    isShowScreen: false,
                    isShowShareRoom: false
                },
                isOpenBarrage:false,
                barrageStatus:null
            }
        },
        methods: {
            selectFunction(index) {
                //1.member 2.vote 3.screen 4.share
                for (let i in this.functionStatusList) {
                    this.functionStatusList[i] = false
                }
                if (index == 1) this.functionStatusList.isShowMember = true
                if (index == 2) this.functionStatusList.isShowVote = true
                if (index == 3) this.functionStatusList.isShowScreen = true
                if (index == 4) this.functionStatusList.isShowShareRoom = true

                this.$bus.$emit('getFunctionStatusList', this.functionStatusList)
            },
            startBarrage(){
                this.isOpenBarrage=!this.isOpenBarrage
                if(this.isOpenBarrage){
                    ipcRenderer.send('newWindow')

                    this.barrageStatus = '关闭弹幕'
                }
                else if(this.isOpenBarrage==false){
                    
                    ipcRenderer.send('closeNewWindow')
                    this.barrageStatus='开启弹幕'
                }
            },
        },
        mounted(){
            this.barrageStatus = this.isOpenBarrage==false?'开启弹幕':'关闭弹幕'
        }
    }
</script>

<style scoped>
    .function {
        width: 20%;
        height: 90%;
        overflow: hidden;
        margin-left: 10px;
        float: left;
    }

    .function .personInfo {
        margin-top: 10px;
        margin-left: 3%;
        width: 94%;
        /* height: 20%; */
        height: 100px;
        background-color: #323337;
        border-radius: 20px;
    }

    .function .personInfo img {
        display: inline-block;
        margin: 10px 0 0 20px;
        width: 50px;
        height: 50px;
        border-radius: 15px;
    }

    .function .personInfo .adminName {
        width: 60px;
        height: 20px;
        color: #e1e1e3;
        margin-top: -50px;
        margin-left: 80px;
        font-size: 16px;
        letter-spacing: 1px;
    }

    .function .personInfo .edit {
        position: absolute;
        left: 17%;
        top: 19%;
        width: 30px;
        height: 30px;
    }

    .function .personInfo .edit img {
        margin-top: -1px;
        margin-left: -1px;
        width: 100%;
        height: 100%;
    }

    .function .personInfo .line {
        width: 96%;
        height: 1px;
        margin-left: 2%;
        margin-top: 35px;
        background-color: #494b4f;
    }

    .function .personInfo .createNewRoom {
        width: 90%;
        font-size: 12px;
        margin-left: 5%;
        margin-top: 5px;
        text-align: center;
        color: #e1e1e3;
        cursor: pointer;
    }

    .function .functionList {
        margin-top: 10px;
        margin-left: 10px;
        width: 94%;
        height: 80%;
        overflow: hidden;
        position: relative;
    }

    .function .functionList .functionItem {

        margin-left: 1%;
        margin-top: 5px;
        width: 98%;
        height: 50px;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
    }

    .function .functionList .functionItem .icon {
        float: left;
        width: 25px;
        height: 25px;
        margin-top: 13px;
        margin-left: 15px;
    }

    .function .functionList .functionItem .icon img {
        width: 100%;
        height: 100%;
    }

    .function .functionList .functionItem .functionName {
        float: left;
        width: 100px;
        height: 30px;
        color: #e1e1e3;
        letter-spacing: 1px;
        margin-top: 13px;
        margin-left: 40px;
        font-size: 15px;
    }

    .function .functionList .functionItem:hover {
        background-color: #303032;
    }

    .function .functionList .openBarrage {
        /* background-color: #303032; */
        background-color: #526af0;
        width: 98%;
        height: 50px;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        position: absolute;
        bottom: 8%;
        left: 1%;
    }

    .function .openBarrage .icon {
        float: left;
        width: 25px;
        height: 25px;
        margin-top: 13px;
        margin-left: 15px;
    }

    .function .openBarrage .icon img {
        width: 100%;
        height: 100%;
    }

    .function .openBarrage .word {
        float: left;
        width: 100px;
        height: 30px;
        color: #e1e1e3;
        letter-spacing: 1px;
        margin-top: 14px;
        margin-left: 40px;
        font-size: 15px;
    }
</style>