 
export const type =({
   ADD_ID_CHANEL    : 'ADD_ID_CHANEL',
   ADD_ID_AUDIO     : 'ADD_ID_AUDIO',
   ADD_CHANNEL      : 'ADD_CHANEL',
   REMOVE_CHANNEL   : 'REMOVE_CHANNEL', 
   SELECT_AUDIO     : 'SELECT_AUDIO',
   QUIT_AUDIO       : 'QUIT_AUDIO',
   CHANNELS         : 'CHANNELS',
   REMOVE_CHANNELS  : 'CHANNELS',
   CLIPS            : 'CLIPS',
   QUIT_CLIP        : 'QUIT_CLIP',
   CHILDS           : 'CHILDS',
   REMOVE_CHILDS    : 'REMOVE_CHILDS',
   LOADING          : 'LOADING',
   SUCCESS          : 'SUCCESS',
   ERROR            : 'ERROR',
   PLAYING          : 'PLAYING',
   STOP             : 'STOP',
});

export const defaultStore =({
    idChannel       : -1,
    idAudio         : -1,
    selectChannel   : {},
    audioClip       : {},
    listaChannels   : [],
    listaClips      : [],
    childsChannels  : [],
    loading         : false,
    playing         : false,
});

