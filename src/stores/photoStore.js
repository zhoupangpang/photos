export default{
    namespaced : true,
    state : {
        start: "guanxiaotong",
        idx: 1
    },
    mutations : {
        changeStart(state, {start}) {
            state.start = start
        },
        changeIdx(state, {idx}) {
            state.idx = idx
        }
    },
    actions : {
        change({commit}, {start}){
            commit("changeStart", {start});
            commit("changeIdx", {'idx': 1});
        },
        gofor({commit, state}, {pos}){
            //上一张
            if(pos == 1) {
                if(state.idx > 1){
                    commit('changeIdx', {'idx' : state.idx - 1})
                }
                if(state.idx == 1){
                    if(state.start == 'guanxiaotong'){
                         commit('changeStart', {'start' : 'yangmi'})
                    }else if(state.start == 'jindong'){
                        commit('changeStart', {'start' : 'guanxiaotong'})
                   }else if(state.start == 'luhan'){
                        commit('changeStart', {'start' : 'jindong'})
                   } else if(state.start == 'yangmi'){
                        commit('changeStart', {'start' : 'luhan'})
                   }
                }
            }
            //下一张
            else if(pos == 0){
                if(state.idx < 5){
                    commit('changeIdx', {'idx' : state.idx + 1})
                }
                if(state.idx == 5){
                    if(state.start == 'guanxiaotong'){
                         commit('changeStart', {'start' : 'jindong'});
                         commit('changeIdx', {'idx' : 1})
                    }else if(state.start == 'jindong'){
                        commit('changeStart', {'start' : 'luhan'});
                        commit('changeIdx', {'idx' : 1})
                   }else if(state.start == 'luhan'){
                        commit('changeStart', {'start' : 'yangmi'});
                        commit('changeIdx', {'idx' : 1})
                   } else if(state.start == 'yangmi'){
                        commit('changeStart', {'start' : 'guanxiaotong'});
                        commit('changeIdx', {'idx' : 1})
                   }
                }
            }
        }
    }
}