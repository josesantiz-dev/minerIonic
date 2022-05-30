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
                                    <IonCol size="6">
                                        <h1>Triggers</h1>
                                    </IonCol>
                                    <IonCol size="6">
                                        <div style={{float:"right"}}><IonButton slot="end" color="tertiary" expand="block">Setup Raw Metrics Triggers</IonButton></div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Global Healt"/>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <div className="col-12">
                                            <div className="12 text-center">
                                                <h2>Miners to Ckeck</h2>
                                            </div>
                                            <div className="row col-12 p-0">
                                                <div className="col-6">
                                                    <label>When</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Any</option>
                                                    <option value="1">All</option>
                                                    <option value="2">A Count of</option>
                                                    <option value="3">A Percent of</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
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
                                        <div className="col-12">
                                            <div className="12 text-center">
                                                <h2>What to Check For</h2>
                                            </div>
                                            <div className="row col-12 p-0">
                                                <div className="col-4">
                                                    <label>Trips a(n)</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Miner Health Trigger</option>
                                                    </select>
                                                </div>
                                                <div className="col-4">
                                                    <label>Trips a(n)</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Failure</option>
                                                    </select>
                                                </div>
                                                <div className="col-4">
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
                                        <div className="col-12">
                                            <div className="12 text-center">
                                                <h2>What to Do</h2>
                                            </div>
                                            <div className="row col-12 p-0">
                                                <div className="col-4">
                                                    <label>Perfom  a</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Send Alert</option>
                                                    </select>
                                                </div>
                                                <div className="col-4">
                                                    <label>Perfom  a</label>
                                                    <select className="browser-default custom-select">
                                                    <option value="0" selected>Alñl Emails</option>
                                                    </select>
                                                </div>
                                                <div className="col-4">
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
                                    <IonCol>
                                        <div style={{float:"left"}}><IonButton slot="end" color="primary" expand="block">Add Trigger</IonButton></div>
                                    </IonCol>
                                    <IonCol>
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