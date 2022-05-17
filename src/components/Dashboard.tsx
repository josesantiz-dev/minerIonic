import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonList, IonRow, IonCol, IonGrid, IonText } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { Line, Bar, Pie , Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { render } from 'react-dom';

import  './Dashboard.css';
Chart.register(CategoryScale);


const Dashboard: React.FC = () =>  {
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
        };
        
        //Set Data for Doughnut Chart. In Realtime you may bing this using the data coming from API or service. 
        const doughnutChartData = {
        labels: ['Billable', 'Non Billable'],
        datasets: [
          {
            label: 'Billable Vs. Non Billable',
            backgroundColor: ['#36a2eb', 'rgba(255,99,132,0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59]
          }
        ]
        };
  return (
      
    <IonGrid>
        <IonRow>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>725.26 PHs</h1>
                        <p>DAILY SHA-256 AVERAGE</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>29,982.00 USD</h1>
                        <p>BITCOIN</p>
                        <IonCardSubtitle>
                            <p>↓ -2.49% DECREASE 24H AGO</p>
                        </IonCardSubtitle>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>6886 / 6907</h1>
                        <p>ASICs Hashing</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>89,120.73</h1>
                        <p>USD / Day</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id='card-tittle'>
                        <h1>725.13 PHs</h1>
                        <p>DAILY SHA-256 MIN</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>2.97755660 BTC</h1>
                        <p>BTC / Day</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>22.282 MW</h1>
                        <p>TOTAL POWER DRAW</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='3' sizeXs='12'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>26,738.91 USD</h1>
                        <p>POWER COST (24 HOURS)</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol sizeMd='6' sizeXs='12' className='columna'>
                <IonCard>
                    <Bar data={barChartData}
                        options={{ maintainAspectRatio: true}}   />
                </IonCard>
            </IonCol>
            <IonCol sizeMd='6' sizeXs='12' className='columna'>
                <IonCard>
                    <Doughnut data={doughnutChartData}
                        options={{ maintainAspectRatio: false,responsive: true,}}/>
                </IonCard>
            </IonCol>
            <IonCol sizeMd='6' sizeXs='12'>
                <IonCard>
                    <Pie data={doughnutChartData}
                        options={{ maintainAspectRatio: false}}   />
                </IonCard>
            </IonCol>
        </IonRow>
    </IonGrid>
  );
}

export default Dashboard;