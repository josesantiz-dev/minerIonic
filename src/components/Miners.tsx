import { IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonSelect, IonItemOption, IonSelectOption } from "@ionic/react";
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import React, { useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { alertController } from "@ionic/core";
import { useTable } from "react-table";


const Page: React.FC = () => {
    const [datatable, setDatatable] = React.useState({
        columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Client',
            field: 'client',
            width: 270,
          },
          {
            label: 'Status',
            field: 'status',
            width: 200,
          },
          {
            label: 'Hash Rate',
            field: 'hashRate',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Max Temp',
            field: 'maxTemp',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Max Fan',
            field: 'maxFan',
            sort: 'disabled',
            width: 100,
          },
          {
            label: 'Last Update',
            field: 'lastUpdate',
            sort: 'disabled',
            width: 100,
          },
          {
            label: 'Uptime',
            field: 'uptime',
            sort: 'disabled',
            width: 100,
          },
          {
            label: 'Filter',
            field: 'filter',
            sort: 'disabled',
            width: 100,
          },
        ],
        rows: [
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          },
          {
            name: '10.1.1.11 / 50:c3:8f:75:3c:fa',
            client: 'Demo client',
            status: 'Okay',
            hashRate: '101.83 THs',
            maxTemp: '101',
            maxFan: '9150 RPM',
            lastUpdate: '2022-05-26 01:56',
            uptime: '321d 23h 15m',
            filter: 'sksokso'
          }
        ],
      });
      const [myModal, setMyModal] = useState(false);
      const [myUser, setMyUser] = useState({name:""});
      const [modalResp, setModalResp] = useState<{cancelled:boolean, data: any} | null>(null);
      const onModalClose = (response:any) => {setMyModal(false);
        setModalResp(response);
        if(!response.calcelled){
            setMyUser({name:response.data.name})
        }
    };
    return(
        <IonGrid>
            <IonRow>
                <IonCol size="12" style={{padding:20}}>
                    <div style={{textAlign:'right'}}>
                        <div className="col-md-6">
                                {myModal && (<MyModal
                                    isOpen={myModal} 
                                    initialData = {{...myUser}}
                                    onClose={onModalClose}/>
                                )}
                                {/* <div>
                                    <h2>DATA FROM MODAL</h2>
                                    <IonItem>
                                        {myUser.name}
                                    </IonItem>
                                    <div><pre>
                                        {modalResp && JSON.stringify(modalResp,null,2)}
                                    </pre></div>
                                </div> */}    
                                {
                                    console.log(modalResp)
                                }
                            <IonButton onClick={()=>{
                                setMyModal(true)}} slot="end" color="tertiary" expand="block">Add minner</IonButton>
                        </div>
                    </div><br></br>
                    <IonCard style={{padding:10}}>
                        <MDBDataTableV5 scrollX hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} pagingTop searchTop searchBottom={false} barReverse/>
                    </IonCard>
                    
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}
export default Page;

const MyModal:React.FunctionComponent<{initialData : any, isOpen: boolean, onClose: Function}> = ({initialData, isOpen, onClose}) => {
    const [minerName, setDataName] = useState<string | null | undefined>(initialData.name);
    const [pickaxe, setDataPickaxe] = useState<string | null | undefined>(initialData.name);
    const [plattform, setDataPlattform] = useState<string | null | undefined>(initialData.name);
    const [miner, setDataMiner] = useState<string | null | undefined>(initialData.name);
    const [minerIp, setDataIP] = useState<string | null | undefined>(initialData.name);
    const [minerPort, setDataPort] = useState<string | null | undefined>(initialData.name);
    const [webUsername, setDataWebUsername] = useState<string | null | undefined>(initialData.name);
    const [webPassword, setDataWebPassword] = useState<string | null | undefined>(initialData.name);
    return( <IonModal isOpen={isOpen}>
        <IonHeader>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add miner</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonHeader>
        <IonContent className="ion-padding" color="light">
            <IonItem style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
                <IonInput placeholder="Miner name" value={minerName} onIonChange={(e=>setDataName(e.detail.value))}></IonInput>
            </IonItem><br/>
            <IonSelect placeholder="Select a pickaxe" okText="Select" value = {pickaxe} onIonChange={e => setDataPickaxe(e.detail.value)}  cancelText="Cancel" style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
              <IonSelectOption value="1">Site A</IonSelectOption>
            </IonSelect><br/>
            <IonSelect placeholder="Select a platform" okText="Select" value = {plattform} onIonChange={e => setDataPlattform(e.detail.value)} cancelText="Cancel" style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
              <IonSelectOption value="1">ASIC</IonSelectOption>
              <IonSelectOption value="2">ethOS</IonSelectOption>
              <IonSelectOption value="3">HiveOS</IonSelectOption>
              <IonSelectOption value="4">Linux</IonSelectOption>
              <IonSelectOption value="5">nvOC</IonSelectOption>
              <IonSelectOption value="6">Windows</IonSelectOption>
            </IonSelect><br/>
            <IonSelect placeholder="Select a miner" okText="Select" value = {miner} onIonChange={e => setDataMiner(e.detail.value)} cancelText="Cancel" style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
              <IonSelectOption value="1">Aixin A1</IonSelectOption>
              <IonSelectOption value="2">Aladdin L2</IonSelectOption>
              <IonSelectOption value="3">Antminer A3</IonSelectOption>
              <IonSelectOption value="4">Antminer B3</IonSelectOption>
              <IonSelectOption value="5">Antminer B7</IonSelectOption>
              <IonSelectOption value="6">Antminer D3</IonSelectOption>
            </IonSelect><br/>
            <IonItem style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
                <IonInput placeholder="Miner IP" value={minerIp} onIonChange={(e=>setDataIP(e.detail.value))}></IonInput>
            </IonItem><br/>
            <IonItem style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
                <IonInput placeholder="Port" value={minerPort} onIonChange={(e=>setDataPort(e.detail.value))}></IonInput>
            </IonItem><br/>
            <IonItem style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
                <IonInput placeholder="Web Username(will default to root)" value={webUsername} onIonChange={(e=>setDataWebUsername(e.detail.value))}></IonInput>
            </IonItem><br/>
            <IonItem style={{border:'solid rgba(0,0,0,0.2) 1px', borderRadius: '10px'}}>
                <IonInput type="password" placeholder="Web password(will default to root)" value={webPassword} onIonChange={(e=>setDataWebPassword(e.detail.value))}></IonInput>
            </IonItem><br/>
        </IonContent>
        <IonFooter style={{backgroundColor:'white'}}>
            <div style={{textAlign:'right',margin:'10px'}}>
                <IonButton color="tertiary" onClick={() =>{
                            onClose({calcelled:false,data:{name:minerName,pickaxe:pickaxe,platform:plattform,miner:miner, ip:minerIp,port:minerPort,webUsername:webUsername,webPassword:webPassword}});
                            setDataName(null)
                        }}>       
                    ADD MINNER  </IonButton>
                <IonButton color="danger" onClick={() =>{onClose({calcelled:true,data:null});
                    setDataName(null)}}>Cancel</IonButton>
            </div>
        </IonFooter>
    </IonModal>
    )
}