<template>
    <!-- Barrage.vue -->
    <div class="barrage">
        <div class="chatArea">
            <div class="message">
                <div v-for="(item,index) in messageList" :key="index"
                    :class="{'leftMessage':item.name!=myName,'rightMessage':item.name==myName}">
                    <div class="messageAuthor" >{{ item.name }}</div>
                    <div class="messageWord">{{ item.content }}</div>
                </div>
            </div>
            <div class="input">
                <input type="text" v-model="newMessage" @keyup.enter="sendMessage">
                <div class="emoji">
                    <img src="../image/emoji.png" alt="">
                </div>
                <div class="send" @click="sendMessage">
                    <img src="../image/Send.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'Barrage',
        data() {
            return { 
                myName: 'Mr.Li',
                newMessage: '',
                // messageList: [{
                //         name: 'Karle',
                //         content: 'hello'
                //     },
                //     {
                //         name: 'Amy',
                //         content: 'hi'
                //     },
                //     {
                //         name: 'Mike',
                //         content: 'nice to meet you'
                //     },
                //     {
                //         name: 'Kris',
                //         content: 'nice to meet you too'
                //     },
                //     {
                //         name: 'Mr.Li',
                //         content: 'welcome'
                //     },
                // ],
                ws:null,
                messageList:this.$store.state.barrage_chat.messageList
            }
        }, 
        methods: { 
            sendMessage() { 
                this.$store.dispatch('saveMessage',{
                    content:this.newMessage,
                    name:this.myName
                })
                this.newMessage = ''
            },
            initWS(){
                this.ws = new WebSocket('ws://localhost:3000/')
                this.ws.onopen=()=>{
                    this.ws.send('connect success')
                }
                console.log(this.ws);
            } ,
            //????????????????????????????????????????????????????????????????????????????????????
            // checkSameName(index){
            //     if(this.messageList.length>=0&&this.messageList<3){
            //         if(this.messageList.length==1) return true
            //         else {
            //             if(index==0)return true
            //             else {
            //                 if(this.messageList[0].name==this.messageList[1].name)return false
            //                 else return true
            //             }
            //         }
            //     }else if(this.messageList>=3){
            //         if(index==0)return true
            //         else{
            //             if(this.messageList[index].name==this.message[index-1].name)return false
            //             else return true
            //         }
            //     }
            // }
            
        },
        computed:{
           
        },
        mounted() {
            let div = document.querySelector(".message");
            div.scrollTop = div.scrollHeight;

            // this.$store.dispatch('wsChat')
            this.initWS()

        },
        watch: {
            // ?????????????????????????????????
            messageList() {
                this.$nextTick(() => {
                    let div = document.querySelector(".message");
                    div.scrollTop = div.scrollHeight;
                });
            },
        },
        beforeDestroy(){
            this.ws.close()
        }
    }
</script>

<style scoped>
    .barrage {
        float: left;
        width: 55%;
        height: 90%;
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .barrage .chatArea {
        width: 98%;
        height: 98%;
        background-color: #222325;
        border-radius: 10px;
    }

    .barrage .chatArea .message {
        width: 98%;
        margin-left: 1%;
        height: 88%;
        overflow: scroll;
        margin-top: 10px;
    }

    .barrage .chatArea .message .leftMessage {
        width: 50%;
        margin: 5px 0 10px 10px;
        word-break: break-all;
        white-space: pre-line;
        margin-top: 10px;
    }

    .barrage .chatArea .message .leftMessage .messageAuthor {
        font-size: 90%;
        color: #e1e1e3;
        font-weight: 500;
        letter-spacing: 1px;
    }

    .barrage .chatArea .message .leftMessage .messageWord {
        margin-top: 5px;
        background-color: #494b4f;
        border-radius: 20px;
        padding: 10px 15px 10px 15px;
        color: #e1e1e3;
        font-size: 100%;
        /* border: 1px solid rgba(152, 152, 152, 0.092); */
        display: inline-block;
    }

    .barrage .chatArea .message .rightMessage {
        width: 50%;
        text-align: right;
        margin: 0 10px 5px auto;
        word-break: break-all;
        white-space: pre-line;
    }

    .barrage .chatArea .message .rightMessage .messageAuthor {
        text-align: right;
        margin-right: 5px;
        font-size: 90%;
        color: #e1e1e3;
        font-weight: 500;
        letter-spacing: 1px;
    }

    .barrage .chatArea .message .rightMessage .messageWord {
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

    .barrage .chatArea .input {
        width: 98%;
        height: 9%;
        display: flex;
        align-items: center;
        margin-left: 1%;
    }

    .barrage .chatArea .input input {
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

    .barrage .chatArea .input input:focus {
        border-bottom: 2px solid #ea7724;
    }

    .barrage .chatArea .emoji {
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

    .barrage .chatArea .emoji img {
        width: 30px;
        height: 30px;
    }

    .barrage .chatArea .send {
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

    .barrage .chatArea .send img {
        width: 30px;
        height: 30px;
    }
</style>