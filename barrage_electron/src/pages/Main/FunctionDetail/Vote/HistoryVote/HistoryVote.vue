<template>
    <div class="historyVoteCard" style="width: 100%;height: 100%;">
        <div class="itemArea" v-if="isShow">
            <div class="historyVoteItem" v-for="(item,index) in historyVoteList" :key="index" @click="showHistoryVoteDetail(item)">
                <a href="#" :title=item.content>{{ item.content }}</a>
            </div>
        </div>
        <HistoryVoteDetail :isShowDetail="isShowDetail" :detailInfo="detailInfo" @getBackDetail="getBackDetail"></HistoryVoteDetail>
    </div>
</template>


<script>
    import HistoryVoteDetail from './HistoryVoteDetail/HistVoteDetail.vue'
    export default {
        name: 'HistoryVote',
        props: ['isShowHistoryVote'],
        components: {
            HistoryVoteDetail
        },
        data() {
            return {
                historyVoteList: [{
                        id: 1,
                        content: '今晚吃什么'
                    },
                    {
                        id: 2,
                        content: '几点下课'
                    },
                    {
                        id: 3,
                        content: '有没有作业'
                    }
                ],
                isShowDetail:false,
                detailInfo:''
            }
        },
        methods: {
            showHistoryVoteDetail(item){
                this.isShowDetail=true
                //将id发请求，得到回应数据绑定给detailInfo,detailInfo传入子组件进行展示
            },
            getBackDetail(value){
                this.isShowDetail=false
            }
        },
        computed:{
            isShow(){
                if(this.isShowHistoryVote==true){
                    if(this.isShowDetail==true) return false
                    else if(this.isShowDetail==false) return true
                }else if(this.isShowHistoryVote==false)return false
            }
        }
    }
</script>

<style scoped>
    .historyVoteCard {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .historyVoteCard .historyVoteItem {
        margin-top: 15px;
        width: 90%;
        margin-left: 5%;
        height: 50px;
        border-radius: 20px;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: #494b4f;
    }

    .historyVoteCard .historyVoteItem:hover {
        background-color: #606367;
    }

    .historyVoteCard .historyVoteItem a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #e1e1e3;
        /* color: #ea7724; */
        text-decoration: none;
        font-size: 18px;
    }
</style>