import { 
    put, 
    fork, 
    takeEvery, 
    take, 
    all,
    call,
} from 'redux-saga/effects';
import { type } from '../../constants';
import { getChannels,getSelectChannel } from '../../services/apis';
import { addChannels, selectChannel, selectAudioClip, selectListaClips, AddListSeries } from '../actions';


function* requestCallChannels(){
    yield put({type:type.LOADING});
    let res = yield call(getChannels);

    yield put(addChannels(res.channels));
    yield put({type:type.SUCCESS});

    console.log('sagas res',res)
}
function* requestCallChannelSelect(){
    yield put({type:type.LOADING});

    let { id } = yield take(type.ADD_ID_CHANEL);
    console.log('id',id);
    
    let res = yield call(getSelectChannel,id);
    yield all([
        put(selectChannel(res.channel)),
        put(selectListaClips(res.audioClips)),
        put(AddListSeries(res.series)),
        put({type:type.SUCCESS}),
    ]);
    console.log('channel = ',res);
}

function* callChannelSelect(){
    while (true) {
        yield take(type.ADD_ID_CHANEL);
        yield fork(requestCallChannelSelect);
    }
}
function* channelSelect(){
    //yield fork(callChannelSelect);
    yield takeEvery(type.ADD_ID_CHANEL,requestCallChannelSelect)
    yield fork(requestCallChannelSelect,type.ADD_ID_CHANEL);
}

export default function* root() {
    yield fork(requestCallChannels);
    yield fork(channelSelect);
    
}

