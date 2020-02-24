import { defaultStore, type } from "../../constants";
import { combineReducers } from "redux";

const selectChannel = (
    state=defaultStore.selectChannel, actions
)=>{
    switch(actions.type){
        case type.ADD_CHANNEL:return actions.channel;
        case type.REMOVE_CHANNEL:return {};
        default:return state;
    }
}

const idChannel = (state=defaultStore.idChannel,actions) => {
    switch(actions.type){
        case type.ADD_ID_CHANEL:
            return actions.id;
        default: return state;
    }
}

const audioClip =( state=defaultStore.audioClip, actions)=>{
    switch(actions.type){
        case type.SELECT_AUDIO:return actions.audio;
        case type.QUIT_AUDIO:return {};
        default:return state;
    }
}
const listaChannels =( state=defaultStore.listaChannels, actions)=>{
    switch(actions.type){
        case type.CHANNELS:return actions.channels;
        case type.REMOVE_CHANNELS: return [];
        default:return state;
    }
}
const listaClips =( state=defaultStore.listaClips, actions)=>{
    switch(actions.type){
        case type.CLIPS: return actions.childs;
        case type.QUIT_CLIP: return [];
        default:return state;
    }
}
const childsChannels =( state=defaultStore.childsChannels, actions)=>{
    switch(actions.type){
        case type.CHILDS:return actions.childs;
        case type.REMOVE_CHILDS: return [];
        default:return state;
    }
}
const loading =( state=defaultStore.loading, actions)=>{
    switch(actions.type){
        case type.LOADING:return true;
        case type.SUCCESS:return false;
        default:return state;
    }
}
const playing =( state=defaultStore.playing, actions)=>{
    switch(actions.type){
        case type.PLAYING: return true;
        case type.STOP: return false;
        default:return state;
    }
}

const idAudio =(state=defaultStore.idAudio,actions)=>{
    switch(actions.type){
        case type.ADD_ID_AUDIO:
            return actions.id;
        default: return state;
    }
}

const reducers=({
    idChannel,
    idAudio,
    selectChannel,
    audioClip,
    listaChannels,
    listaClips,
    childsChannels,
    loading,
    playing,
});

export default combineReducers(reducers);



