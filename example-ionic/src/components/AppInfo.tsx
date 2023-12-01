import React, { useState } from 'react';
import { IonCardHeader, IonImg } from '@ionic/react';

interface ContainerProps {
  title?: string;
}

const AppInfo: React.FC<ContainerProps> = ({ title }) => {
  return (
    <>
        <IonCardHeader>Version: Plummy 2023.45 Build 4038</IonCardHeader>
        <IonImg src="plummy_logo.png" style={{ height: '50px', margin: 'auto' }} />
        <IonCardHeader>© Copyright 2023 American Business Software.</IonCardHeader>
        <IonCardHeader>All rights reserved.</IonCardHeader>
        
    </>
  );
};

export default AppInfo;