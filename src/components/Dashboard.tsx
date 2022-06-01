import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonList, IonRow, IonCol, IonGrid, IonText } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { Line, Bar, Pie , Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { render } from 'react-dom';
import  './Dashboard.css';
import { useQuery, useMutation, queryCache } from "react-query";
import { useParams } from "react-router";
import * as API from "../helpers/api";
import { KeyObject } from 'crypto';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'chartjs-plugin-zoom';
import zoomPlugin from "chartjs-plugin-zoom";
import dataMinerHashRate from "./dataMinerHastRate";
import dataMinerHashRateTotal from "./dataMinerHastRateTotal";
import dataPCBTemperature from "./dataMinerPCBTemperature";
import dataChipTemperature from "./dataMinerChipTemperature";
Chart.register(CategoryScale);
Chart.register(zoomPlugin); // REGISTER PLUGIN

const Dashboard: React.FC = () =>  {
    const { data, status } = useQuery("users", API.getAllMiners);
    const dataDashboard = useQuery("dashbaord", API.getDashboard);
    const minerHashRate = useQuery("has_rate",API.getMinerHashRate);
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
          },
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
            <IonCol sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='4' sizeXl='4'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.totalMiners:0}</h1>
                        <p>TOTAL MINERS</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='4' sizeXl='4'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.totalCount:0}</h1>
                        <p>TOTAL ACCOUNT</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='4' sizeXl='4'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.exchangeRate:0}</h1>
                        <p>EXCHANGE RATE</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='4' sizeXl='4'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.powerUsage:0}</h1>
                        <p>POWER USAGE</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='4' sizeXl='4'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.profitPerMonth:0}</h1>
                        <p>PROFITE PER MONTH</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='4' sizeXl='4'>
                <IonCard className='cards'>
                    <IonCardContent id="card-tittle">
                    <h1>{(dataDashboard.status==='success')?dataDashboard.data.profitPerDay:0}</h1>
                        <p>PROFITE PER DAY</p>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
        <IonRow>
{/*             <IonCol size='8' className='columna'>
                <IonCard style={{textAlign:'center',padding:'3'}}>
                    <h4 style={{color:'black'}}>Miners Hash Rate</h4>
                    <Line data={dataLine} options={{scales:{XAxis:{ticks:{autoSkip:true,maxTicksLimit:10}},YAxis:{ticks:{callback:function(label,index,labels){
                        return index.toFixed(2) + " Th/s";
                    }}}}}}/>
                </IonCard>
            </IonCol> */}
{/*             <IonCol size='4' className='columna'>
                <IonCard style={{textAlign:'center', padding:'3'}}>
                    <h4 style={{color:'black'}}>Tank 1 AC state</h4>
                    <Line data={dataLine} options={{scales:{XAxis:{ticks:{autoSkip:true,maxTicksLimit:10}},YAxis:{ticks:{callback:function(label,index,labels){
                        return index.toFixed(2) + " Th/s";
                    }}}}}}/>
                </IonCard>
            </IonCol> */}
        </IonRow>
        <IonRow>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='6' sizeLg='6' sizeXl='6' className='columna'>
                <IonCard style={{textAlign:'center' , padding:'3'}}>
                    <h4 style={{color:'black'}}>Miners Hash Rate</h4>
                    <Line data={dataMinerHashRate} options={{
                        scales:{
                            XAxis:{
                                ticks:{
                                    autoSkip:true,
                                    maxTicksLimit:10
                                }
                            },
                            YAxis:{
                                ticks:{
                                    callback:function(label,index,labels){
                                        return label + " Th/s";
                                    }
                                }
                            }
                        },
                        plugins:{
                            zoom:{
                                pan:{
                                    enabled:true,
                                    mode:'x',
                                    
                                },
                                zoom: {
                                    wheel:{
                                        enabled:true
                                    },
                                    mode:'xy',
                                    
                                }
                                
                            }
                        }
                    }}/>
                </IonCard>
            </IonCol>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='6' sizeLg='6' sizeXl='6' className='columna'>
                <IonCard style={{textAlign:'center', padding:'3'}}>
                    <h4 style={{color:'black'}}>Miners Hash Rate Total</h4>
                    <Line data={dataMinerHashRateTotal} options={{
                        scales:{
                            XAxis:{
                                ticks:{
                                    autoSkip:true,
                                    maxTicksLimit:10
                                }
                            },
                            YAxis:{
                                ticks:{
                                    callback:function(label,index,labels){
                                        return label + " Th/s";
                                    }
                                }
                            }
                        },
                        plugins:{
                            zoom:{
                                pan:{
                                    enabled:true,
                                    mode:'x',
                                    
                                },
                                zoom: {
                                    wheel:{
                                        enabled:true
                                    },
                                    mode:'xy',
                                    
                                }
                                
                            }
                        }
                    }}/>
                </IonCard>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol sizeXs='12' sizeSm='12' sizeMd='6' sizeLg='6' sizeXl='6' className='columna'>
                <IonCard style={{textAlign:'center', padding:'3'}}> 
                    <h4 style={{color:'black'}}>Miners PCB Temperature Average</h4>
                    <Line data={dataPCBTemperature} options={{scales:{XAxis:{ticks:{autoSkip:true,maxTicksLimit:10}},YAxis:{ticks:{callback:function(label,index,labels){
                        return label + " ºC";
                    }}}}}}/>
                </IonCard>
            </IonCol>     
            <IonCol sizeXs='12' sizeSm='12' sizeMd='6' sizeLg='6' sizeXl='6' className='columna'>
                <IonCard style={{textAlign:'center', padding:'3'}}> 
                    <h4 style={{color:'black'}}>Miners Chip Temperature Average</h4>
                    <Line data={dataChipTemperature} options={{scales:{XAxis:{ticks:{autoSkip:true,maxTicksLimit:10}},YAxis:{ticks:{callback:function(label,index,labels){
                        return label + " ºC";
                    }}}}}}/>
                </IonCard>
            </IonCol>         
        </IonRow>
        <IonRow>
{/*             <IonCol sizeMd='6' sizeXs='12' className='columna'>
                <IonCard>
                    <Bar data={barChartData}
                        options={{ maintainAspectRatio: true}}   />
                </IonCard>
            </IonCol> */}
{/*             <IonCol sizeMd='6' sizeXs='12' className='columna'>
                <IonCard>
                    <Doughnut data={doughnutChartData}
                        options={{ maintainAspectRatio: false,responsive: true,}}/>
                </IonCard>
            </IonCol> */}
{/*             <IonCol sizeMd='6' sizeXs='12'>
                <IonCard>
                    <Pie data={doughnutChartData}
                        options={{ maintainAspectRatio: false}}   />
                </IonCard>
            </IonCol> */}
{/*             <IonCol>
                <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} pagingTop searchTop searchBottom={false} barReverse/>
            </IonCol> */}
        </IonRow>
    </IonGrid>
    
  );
}
export default Dashboard;