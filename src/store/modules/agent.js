import Api from '../../api';
export const FETCH_AGENTS = "FETCH_AGENTS";
export const TOGGLE_EDIT_DIALOG = 'TOGGLE_EDIT_DIALOG';
export const OPEN_EDIT_DIALOG = 'OPEN_EDIT_DIALOG';
export const CLOSE_EDIT_DIALOG = 'CLOSE_EDIT_DIALOG';

const state = {
    agents:[],
    openEditDialog: false,
    listRefreshing: false,
    listLoading:false,
    editedAgent: {
        Name: '',
        Id: ''
    },
    createLoading: [],
    updateLoading: [],
    listError: '',
    createError: '',
    updateError: ''
}

const getters = {

}

const actions = {
    [FETCH_AGENTS]: async ({commit }, isRefreshing = true) => {
        commit('clearListOperations');
        if(isRefreshing)
            commit('setListRefreshing' ,true)    
        else
            commit('setListLoading' , true);   

        try{
            let list = await Api.listAgents();
            list = list.map( (item) => {
                item.Status = item.Status == "2" ? 'Connected' : 'Disconnected' 
                return item;
            }).reverse();
            commit('setAgents', list);
        }catch(err){
            commit('setListError' , err.response.data.reason);
        }

        if(isRefreshing)
            commit('setListRefreshing' ,false)    
        else
            commit('setListLoading' , false);    
    },
    
    [OPEN_EDIT_DIALOG]: ({commit} ,agent) => {
        commit('openEditDialog' , agent);
    },

    [CLOSE_EDIT_DIALOG]: ({commit}) => {
        commit('closeEditDialog')
    }
}

const mutations = {
    setAgents: (state,agents) => state.agents = agents,
    setListRefreshing: (state , status) => state.listRefreshing = status,
    setListLoading: (state, status) => state.listLoading = status,
    setListError: (state , error) => state.listError =  error,
    clearListOperations: (state ) => { state.listError = ''; state.listLoading = false},
    openEditDialog: (state , agent) =>  { state.openEditDialog = true; state.editedAgent = {...agent}},
    closeEditDialog: (state) => {state.openEditDialog = false; state.editedAgent =  {Name: '',Id:''}}
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}