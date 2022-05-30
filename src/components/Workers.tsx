import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import  './Workers.css';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const Page: React.FC = () => {
    const [datatable, setDatatable] = React.useState({
        columns: [
          {
            label: 'Worker Name',
            field: 'workerName',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Active Miners',
            field: 'activeMiners',
            width: 270,
          },
          {
            label: 'Configured Miners',
            field: 'configuredMiners',
            width: 200,
          },
          {
            label: 'Worker Hash Rate',
            field: 'workerHashRate',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Miner Hast Rate',
            field: 'minerHashRate',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Options',
            field: 'options',
            sort: 'disabled',
            width: 100,
          }
        ],
        rows: [
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },,
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          },
          {
            workerName: 'miningdemo.0000fbd2eb3b',
            activeMiners: '1/1',
            configuredMiners: '1',
            workerHashRate: '114.21 THs',
            minerHashRate: '114.21 THs',
            options: 'options'
          }
        ],
      });

    return(
       <IonGrid>
            <IonRow>
                <IonCol sizeXs="4">
                    <IonCard className="cards">
                        <IonCardContent id="card-tittle">
                            <h1>1</h1>
                            <p>WORKER ACCOUNTS</p>
                        </IonCardContent>
                    </IonCard>
               </IonCol>
               <IonCol sizeXs="4">
                    <IonCard className="cards">
                        <IonCardContent id="card-tittle">
                            <h1>6906 / 6906</h1>
                            <p>ACTIVE WORKER NAMES</p>
                        </IonCardContent>
                    </IonCard>
               </IonCol>
               <IonCol sizeXs="4">
                    <IonCard className="cards">
                        <IonCardContent id="card-tittle">
                            <h1>996</h1>
                            <p>WORKER ACCOUNTS</p>
                        </IonCardContent>
                    </IonCard>
               </IonCol>
           </IonRow>
           <IonRow>
               <IonCol>
                    <IonCard style={{padding:10}}>
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} pagingTop searchTop searchBottom={false} barReverse/>
                    </IonCard>
               </IonCol>
           </IonRow>
       </IonGrid>
    )
}
export default Page;