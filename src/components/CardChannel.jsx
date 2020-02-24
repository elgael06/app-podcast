import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

const CardChannel =({
    title,
    descripcion,
    urlImagen,
})=>{

    return(<IonCard style={{maxWidth:'400px',minWidth:'300px',display:'inline-block',overflow:'auto'}}>
       {!urlImagen || <img src={urlImagen} style={{width:'100%'}} /> }
        <IonCardHeader>
            <IonCardTitle>
                {title}
            </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {descripcion}
        </IonCardContent>
    </IonCard>);
}

export default CardChannel;

