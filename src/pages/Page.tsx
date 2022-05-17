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

import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        { showPahe(name) };
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
function showPahe(name:string) {   
   if(name == 'Dashboard'){
       return(
           <Dashboard/>
       )
   }if(name == 'Workers'){

   }if(name == 'Miners'){

   }
}  

export default Page;
