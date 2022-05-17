import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonImg,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { heartOutline, apps, pricetagOutline, serverOutline,rocketOutline,heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp} from 'ionicons/icons';
import './Menu.css';
import { url } from 'inspector';

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
    iosIcon: rocketOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Workers',
    url: '/page/Workers',
    iosIcon: serverOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Alerts & Triggers',
    url: '/Alerts',
    iosIcon: pricetagOutline,
    mdIcon: heartSharp
  },
  
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay" style={{maxWidth:"300px"}}>
      <IonContent color="primary important">
        <IonList id="inbox-list">
          <div><img src="assets/icon/logo.png"/></div>
          <div><p>Jose Santiz Ruiz</p></div>
          {/* <IonListHeader>Miner Monitoring</IonListHeader>
          <IonNote>contact@minermonitoring.com</IonNote> */}
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false} color="primary">
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel id='lbl_title'>{appPage.title}</IonLabel>
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
