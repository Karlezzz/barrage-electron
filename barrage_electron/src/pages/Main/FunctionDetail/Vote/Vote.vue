<template>
    <div class="vote" v-if="isShowVote">
        <div class="vote_head">
            <div class="twoVoteSelect">发起投票</div>
            <div class="twoVoteSelect">历史投票</div>
        </div>
        <div class="vote_body">
            <CreateVote></CreateVote>
            <HistoryVote></HistoryVote>
        </div>
    </div>
</template>

<script>
    import CreateVote from './CreateVote/CreateVote.vue'
    import HistoryVote from './HistoryVote/HistoryVote.vue'
    export default {
        name: 'Vote',
        props: ['isShowVote'],
        components: {
            CreateVote,
            HistoryVote
        },
    }
</script>

<style scoped>
    .vote {
        width: 96%;
        height: 96%;
        margin-top: 2%;
        margin-left: 2%;
        overflow: hidden;

    }

    .vote .vote_head {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #e1e1e3;
    }

    .vote .vote_head .twoVoteSelect {
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

    .vote .vote_head .twoVoteSelect:nth-child(2) {
        background-color: #232227;
    }

    .vote .vote_body {
        width: 98%;
        height: 90%;
        margin-left: 1%;
        margin-top: 3%;
    }
</style>