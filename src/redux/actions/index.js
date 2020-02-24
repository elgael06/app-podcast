import { type } from "../../constants";


export const addChannels = channels =>({
    type:type.CHANNELS,
    channels
});

export const addIdChannel = id =>({
    type:type.ADD_ID_CHANEL,
    id
});

export const selectChannel = channel=>({
    type:type.ADD_CHANNEL,
    channel
});

export const selectListaClips = childs =>({
    type:type.CLIPS,
    childs
});

export const selectAudioClip = audio =>({
    type:type.SELECT_AUDIO,
    audio
});

export const AddListSeries = childs =>({
    type:type.CHILDS,
    childs
});

