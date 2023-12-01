import React from 'react';
import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';

type Item = {
  name: string;
  href: string;
  icon: string;
}

interface ContainerProps {
  items: Item[];
}

const ItemList: React.FC<ContainerProps> = ({ items }) => {
    const colors = [
      '#3880ff',
      '#0cd1e8',
      '#7044ff',
      '#ffce00',
      '#ff4a4a',
      '#50d2a0',
      '#5f5f5f',
      '#f4f5f8',
      '#e4e5e8',
      '#bdc3c7',
      '#95a5a6',
      '#7f8c8d',
      '#34495e',
      '#2ecc71',
      '#1abc9c',
      '#9b59b6',
      '#3498db',
      '#16a085',
      '#27ae60',
      '#2980b9',
      '#8e44ad',
      '#2c3e50',
      '#f1c40f',
      '#e67e22',
      '#e74c3c',
      '#ecf0f1',
      '#95a5a6',
      '#f39c12',
      '#d35400',
      '#c0392b',
      '#bdc3c7',
      '#7f8c8d',
    ];
  return (
    <>
        <IonList inset={true}
          style={{
            borderRadius: '0px',
            boxShadow: 'none',
          }}
        >
          {items.map((item, index) => (
            <IonItem 
              button={true} 
              detail={true} 
              style={{
                borderLeft: `5px solid ${colors[index]}`,
                marginTop: '15px',
                marginBottom: '15px',
                
              }}
              href={item.href}>
              <IonIcon 
                slot="start" 
                icon={item.icon} 
                color='primary'
                />
              <IonLabel>
                <strong>{item.name}</strong>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
    </>
  );
};

export default ItemList;