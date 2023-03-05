<template>
    <div class="functionDetail">
        <Member :isShowMember="functionStatusList.isShowMember"></Member>
        <Vote :isShowVote="functionStatusList.isShowVote"></Vote>
        <ShareRoom :isShowShareRoom="functionStatusList.isShowShareRoom"></ShareRoom>
        <Screen :isShowScreen="functionStatusList.isShowScreen"></Screen>
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
                functionStatusList: {
                    isShowMember: true,
                    isShowVote: false,
                    isShowScreen: false,
                    isShowShareRoom: false
                },
            }
        },
        methods: {
            showTimeList() {
                this.isShowTimeList = !this.isShowTimeList
            }
        },
        mounted() {
            this.$bus.$on('getFunctionStatusList', (value) => {
                this.functionStatusList=value
            })
        }
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