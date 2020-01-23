export const FETCH_TASKS = 'FETCH_TASKS'
export const OPEN_CREATE_TASK_DIALOG = 'OPEN_CREATE_TASK_DIALOG'
export const CLOSE_CREATE_TASK_DIALOG = 'CLOSE_CREATE_TASK_DIALOG'
export const CREATE_TASK = 'CREATE_TASK'

import Api from '../../api';
import { FETCH_SCRIPTS } from './script';
import { FETCH_AGENTS } from './agent';

function mutator(name){
    return function(){
        arguments[0][name] =  arguments[1];
    }
}

const state = {
    tasks: [],
    isRefreshing:false ,
    isLoading:false,
    fetchError: '',
    createLoading: false,
    createError: '',
    createSuccess: false,
    createDialog: false
}

const getters = {

}

const mutations = {
    setTasks: mutator('tasks'),
    setFetching: (state, { status, isRefreshing } ) => {
        if(isRefreshing){
            state.isRefreshing = status
        }else{
            state.isLoading = status
        }
    }, 
    setFetchError: mutator('fetchError'),
    setCreateLoading: mutator('createLoading'),
    setCreateError: mutator('createError'),
    setCreateSuccess: mutator('createSuccess'),
    setCreateDialog: mutator('createDialog'),
    clearCreateDialog: (state) => {
        state.createLoading=  false;
        state.createError = ''
        state.createSuccess = false
    }
}

const actions = {
    [FETCH_TASKS]: async ({commit} , isRefreshing = true) => {
        commit('setFetching',  { status:true , isRefreshing});
        let tasks = await Api.listTasks();
        commit('setTasks', tasks);
        commit('setFetching', {status: false, isRefreshing});
    },
    [CREATE_TASK]: async ({commit , dispatch}, task) => {
        commit('setCreateLoading', true);
        try{
            await Api.createTask(task);
            commit('setCreateLoading',false);
            commit('setCreateSuccess',true);
            dispatch(FETCH_TASKS);
        }catch(e){
            commit('setCreateError', e.response.data.reason);
        }
        commit('setCreateLoading',false);
    },
    [OPEN_CREATE_TASK_DIALOG]: async ({commit , dispatch}) => {
        commit('clearCreateDialog');
        dispatch('script/'+FETCH_SCRIPTS, false , {root: true});
        dispatch('agent/'+FETCH_AGENTS, false , {root: true});
        commit('setCreateDialog' , true);
    },
    [CLOSE_CREATE_TASK_DIALOG]: async ({commit}) => {
        commit('setCreateDialog' , false);
    }
}

export default  {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}