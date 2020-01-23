export const OPEN_CREATE_DIALOG = 'OPEN_CREATE_DIALOG'
export const CLOSE_CREATE_DIALOG = 'CLOSE_CREATE_DIALOG'
export const CREATE_SCRIPT = 'CREATE_SCRIPT'
export const FETCH_SCRIPTS = 'FETCH_SCRIPTS'

import Api from '../../api';

const state = {
    scripts: [],
    isLoading: false,
    isRefreshing: false,
    fetchError: '',
    createDialogOpen: false,
    createLoading: false,
    createError: '',
    createSuccess: false,
}

const getters = {

}

const mutations = {
    openCreateDialog(state){
        state.createDialogOpen = true;
    },
    closeCreateDialog(state){
        //alert('here i am')
        state.createDialogOpen = false;
    },
    setScripts(state, scripts){
        state.scripts = scripts;
    },
    setLoading(state , status){
        state.isLoading = status;
    },
    setRefreshing(state, status){
        state.isRefreshing = status
    },
    setFetchError(state , message){
        state.fetchError =message;
    },
    setCreateError(state , message ){
        state.createError = message;
    },
    setCreateLoading(state , status){
        state.createLoading = status;
    },
    setCreateSuccess(state , status){
        state.createSuccess= status;
    },
    clearCreate(state){
        state.createLoading = false;
        state.createSuccess = false;
        state.createError = false;
    }
}

const actions = {
    [OPEN_CREATE_DIALOG]: ({commit}) => {
        commit('clearCreate');
        commit('openCreateDialog');
    },
    
    [CLOSE_CREATE_DIALOG]: ({commit}) => {
        commit('closeCreateDialog');
    },

    [FETCH_SCRIPTS]: async ({commit}, isRefreshing = true) => {
        if(isRefreshing)
            commit('setRefreshing', true)
        else
            commit('setLoading',true)

        try { 
            let scripts = await Api.listScripts();
            commit('setScripts' , scripts);
        }catch(e){
            commit('setFetchError', e)
        }
        
        if(isRefreshing)
            commit('setRefreshing', false)
        else
            commit('setLoading',false)
    },
    [CREATE_SCRIPT]: async ({commit , dispatch}, formData) => {
            
            commit('setCreateLoading' ,true);
            try{
                await Api.createScript(formData);
                commit('setCreateSuccess', true);
            }catch(e){
                commit('setCreateError', e.response.data.reason);
            }
            commit('setCreateLoading',false);
            dispatch(FETCH_SCRIPTS);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}