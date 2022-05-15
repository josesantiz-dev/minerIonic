import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { heartOutline, apps, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/page/Dashboard',
    iosIcon: apps,
    mdIcon: mailSharp
  },
  {
    title: 'Miners',
    url: '/page/Miners',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Workers',
    url: '/page/Workers',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Alerts & Triggers',
    url: '/Alerts',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay" style={{maxWidth:"300px"}}>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Miner Monitoring</IonListHeader>
          <IonNote>contact@minermonitoring.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
