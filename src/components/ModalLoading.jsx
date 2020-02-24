import React from 'react'
import { IonModal, IonLoading } from '@ionic/react';
import { connect } from 'react-redux';

const ModalLoading =({isOpen})=>{

    return(<IonLoading isOpen={isOpen}>

    </IonLoading>);
}

const mapStateToProps = state =>({
    isOpen:state.loading
});

export default connect(mapStateToProps)(ModalLoading);