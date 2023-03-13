import {nanoid} from 'nanoid'
const state={
    messageList:[]
}
const mutations={
    PUTMESSAGE(state,data){
        state.messageList.push(data) 
    }
}
const actions={
    saveMessage({commit},data){
        console.log(data);
        commit('PUTMESSAGE',data)
        
    }
}
export default{
    state,mutations,actions
}