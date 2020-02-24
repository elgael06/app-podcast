import React from 'react';
import { 
    IonList, 
    IonListHeader, 
    IonIcon, 
    IonLabel, 
    IonItem, 
    IonImg 
} from '@ionic/react';
import { playCircle, playBackOutline,musicalNotes } from 'ionicons/icons';

const GridPodcast =({items=[]})=>{

    return(<IonList>
        {
            items.map(podcast=><IonItem key={podcast.id} title={podcast.id} routerLink={`/channel/${podcast.id}`}>
                <IonImg slot='start' src={podcast.urls.logo_image.original} style={{width:30}} />    
                <IonListHeader slot='end'>
                    <IonLabel>{podcast.title}</IonLabel>
                </IonListHeader>
                <IonIcon icon={musicalNotes} slot='end' />
            </IonItem>)
        }
    </IonList>);
}

export default GridPodcast;

