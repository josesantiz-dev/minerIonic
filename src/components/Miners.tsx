import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

const Page: React.FC = () => {
    return(
        <IonGrid>
  <IonRow>
    <IonCol>
      <div>1 of 3</div>
    </IonCol>
    <IonCol>
      <div>2 of 3</div>
    </IonCol>
    <IonCol>
      <div>3 of 3</div>
    </IonCol>
  </IonRow>
</IonGrid>
    )
}
export default Page;