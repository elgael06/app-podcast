import React, { useEffect } from 'react';
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent, 
    IonModal
} from '@ionic/react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { addIdChannel } from '../redux/actions';
import CardChannel from '../components/CardChannel';
import GridAudios from '../components/GridAudios';
import GridPodcast from '../components/GridPodcast';

const Channel =({channel,listaClips,childsChannels,getIdChannel,onPlay})=>{
    const { id } = useParams();
    useEffect(() => {
      console.log('canal : ',id);
       setTimeout(()=>{
            getIdChannel(id);
        },800);
    }, []);
    
    return (<IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>CANAL.</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent style={{textAlign:'center'}}>
            <CardChannel 
                title={channel.title}
                descripcion={channel.description}
                urlImagen={channel?.urls?.logo_image?.original}
            />
            <CardChannel 
                title={'Podcast'}
                descripcion={<GridAudios
                    items={listaClips} 
                    onClick={onPlay}
                />  }
            />
            {
            childsChannels.length===0 ||
                <CardChannel 
                    title={'Series'}
                    descripcion={
                    <div style={{maxHeight:240,overflow:'auto'}}>
                        <GridPodcast items={childsChannels} /> 
                    </div> }
                />
            }
        </IonContent>
      
    </IonPage>);
}

const mapStateToProps = state =>({
    channel: state.selectChannel,
    listaClips:state.listaClips,
    childsChannels:state.childsChannels,
});

const mapDispatchToProps = dispatch =>({
    getIdChannel(id){
        console.log(id);
        
        dispatch(addIdChannel(id));
    },
    onPlay(Podcast){
        console.log('Podcast =>',Podcast);
        
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Channel);
