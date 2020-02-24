
export const URL = 'https://api.audioboom.com/';


export const getChannels = async () =>{
    let respuesta = await fetch(`${URL}channels/recommended`);
    let {body:channels} = await respuesta.json();
    return {channels};
}

export const getSelectChannel = async id =>{
    const [reqChannel,reqClips,reqSeries] = await Promise.all([
        fetch(`${URL}channels/${id}`),
        fetch(`${URL}channels/${id}/audio_clips`),
        fetch(`${URL}channels/${id}/child_channels`),
    ]); 

    let {body:{channel}} = await reqChannel.json();

    let clips = await reqClips.json();
    let audioClips = clips.body.audio_clips;

    let childsSeries = await reqSeries.json();
    let series = childsSeries.body.channels;

    return {channel,audioClips,series};
}

export const getClipAudio = async id =>{
    const resp  = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`);
    const {body:{audio_clip}} = await resp.json();
    
    return {audioClip:audio_clip};
}


