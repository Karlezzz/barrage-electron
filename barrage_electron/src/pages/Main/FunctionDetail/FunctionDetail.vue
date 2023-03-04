<template>
    <div class="functionDetail">
        <Member :isShowMember="isShowMember"></Member>
        <Vote :isShowVote="isShowVote"></Vote>
        <ShareRoom :isShowShareRoom="isShowShareRoom"></ShareRoom>
        <Screen :isShowScreen="isShowScreen"></Screen>
    </div>
</template>

<script>
    import Screen from './Screen/Screen.vue'
    import ShareRoom from './ShareRoom/ShareRoom.vue'
    import Vote from './Vote/Vote.vue'
    import Member from './Member/Member.vue'
    export default {
        name: 'FunctionDetail',
        components: {
            Member,
            Vote,
            ShareRoom,
            Screen
        },
        data() {
            return {
                isShowTimeList: false,
                isShowMember: true,
                isShowVote: false,
                isShowScreen: false,
                isShowShareRoom: false
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
    .functionDetail {
        float: left;
        width: 23%;
        height: 88%;
        margin-top: 0.5%;
        border-radius: 10px;

    }
</style>