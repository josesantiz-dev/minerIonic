import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import React from "react";
import { useParams, useHistory } from "react-router";
import Dashboard from "../components/Dashboard";
import Workers from "../components/Workers";
import Miners from "../components/Miners";

import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        { showPane(name) };
        {/* <ExploreContainer name={name} /> */}

{/*         <IonButton
          onClick={async () => {
            await logOut();
            history.replace("/login");
          }}
        >
          LOGOUT
        </IonButton> */}
      </IonContent>
    </IonPage>
  );
};
function showPane(name:string) {   
   if(name == 'Dashboard'){
       return(
           <Dashboard/>
       )
   }if(name == 'Workers'){
     return(
      <Workers/>
     )
   }if(name == 'Miners'){
    return(
        <Miners/>
       )
   }
}  

export default Page;
