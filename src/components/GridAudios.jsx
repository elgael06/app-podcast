import React from 'react';
import { IonList, IonItem, IonListHeader, IonLabel, IonIcon } from '@ionic/react';
import { musicalNotesOutline, play } from 'ionicons/icons';


const GridAudios =({items=[],onClick})=>{
    return(
        <IonList style={{maxHeight:240,overflow:'auto'}}>
            {
            items.map(podcast=><IonItem 
                title   = {podcast.description} 
                key     = {podcast.id} 
                title   = {podcast.id}
                onClick = {()=>onClick({
                    id          : podcast.id,
                    title       : podcast.title,
                    description : podcast.description,
                    image       : podcast.urls.image,
                    mp3         : podcast.urls.high_mp3
                })} > 
                <IonIcon
                    icon={musicalNotesOutline} 
                    slot='start' 
                />
                <IonListHeader slot='end'>
                    <IonLabel>{podcast.title}</IonLabel>
                </IonListHeader>
                <IonIcon 
                    icon={play} slot='end' 
                />
            </IonItem>)
            }
        </IonList>
    );
}


export default GridAudios;
