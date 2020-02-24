import React from 'react';
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent,
} from '@ionic/react';
import { connect } from 'react-redux';
import GridPodcast from '../components/GridPodcast';

const Home =({podcasts}) => {
    return(<IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Podcast</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <GridPodcast items={podcasts} />
        </IonContent>
    </IonPage>);
}

const mapStateToProps = state =>({
    podcasts:state.listaChannels
});

export default connect(mapStateToProps)( Home );