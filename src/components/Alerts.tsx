import React,{ Component } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonRow, IonInput, IonTextarea, } from "@ionic/react";



const Page: React.FC = () =>{
    return(
        <IonGrid>
            <IonRow>
                <IonCol size="12">
                    <IonCard>
                        <IonCardHeader>
                            <IonGrid>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeXl="12" sizeLg="12">
                                        <h1>Triggers</h1>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeXl="12" sizeLg="12">
                                        <div style={{float:"right"}}><IonButton slot="end" color="tertiary" expand="block">Setup Raw Metrics</IonButton></div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <div>
                                            <div>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Global Healt"/>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <div>
                                            <div className="12 text-center">
                                                <h2>Miners to Ckeck</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-xl-6 col-lg-12">
                                                    <label>When</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Any</option>
                                                    <option value="1">All</option>
                                                    <option value="2">A Count of</option>
                                                    <option value="3">A Percent of</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>When</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Miner(s)</option>
                                                    <option value="1">Miner(s) Matching</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <hr></hr>
                                <IonRow>
                                    <IonCol>
                                        <div>
                                            <div className="text-center">
                                                <h2>What to Check For</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>Trips a(n)</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Miner Health Trigger</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>Trips a(n)</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Failure</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>Trips a(n)</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>1</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <hr></hr>
                                <IonRow>
                                    <IonCol>
                                        <div className="">
                                            <div className="12 text-center">
                                                <h2>What to Do</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>Perfom  a</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Send Alert</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>Perfom  a</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Alñl Emails</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-lg-6">
                                                    <label>Perfom  a</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Healty Change</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                        <IonCardSubtitle>
                            <IonGrid>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                        <div style={{float:"left"}}><IonButton slot="end" color="primary" expand="block">Add Trigger</IonButton></div>
                                    </IonCol>
                                    <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" sizeXl="6">
                                        <div style={{float:"right"}}><IonButton slot="end" color="tertiary" expand="block">SAVE</IonButton></div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardSubtitle>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}
export default Page;