import React, { useRef } from 'react';
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
import dataMiner from "./dataMiner";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

Chart.register(CategoryScale);
Chart.register(zoomPlugin); // REGISTER PLUGIN


const Dashboard: React.FC = () =>  {
    //const { data, status } = useQuery("users", API.getAllMiners);
    const dataDashboard = useQuery("dashbaord", API.getDashboard);
    //const minerHashRate = useQuery("has_rate",API.getMinerHashRate);
    //const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

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
    <IonContent>
        <div className='col-12 row'>
            <div className='col-md-2' id="cardm">
                <IonCard className='cards1'>
                    <IonCardContent id="card-tittle1">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.totalMiners:0}</h1>
                        <p>TOTAL MINERS</p>
                    </IonCardContent>
                </IonCard>
            </div>
            <div className='col-md-2' id="cardm">
                <IonCard className='cards1'>
                    <IonCardContent id="card-tittle1">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.totalCount:0}</h1>
                        <p>TOTAL ACCOUNT</p>
                    </IonCardContent>
                </IonCard>
            </div>
            <div className='col-md-2' id="cardm">
                <IonCard className='cards1'>
                    <IonCardContent id="card-tittle1">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.exchangeRate:0}</h1>
                        <p>EXCHANGE RATE</p>
                    </IonCardContent>
                </IonCard>
            </div>
            <div className='col-md-2' id="cardm">
                <IonCard className='cards1'>
                    <IonCardContent id="card-tittle1">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.powerUsage:0}</h1>
                        <p>POWER USAGE</p>
                    </IonCardContent>
                </IonCard>
            </div>
            <div className='col-md-2' id="cardm">
                <IonCard className='cards1'>
                    <IonCardContent id="card-tittle1">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.profitPerMonth:0}</h1>
                        <p>PROFITE / MONTH</p>
                    </IonCardContent>
                </IonCard>
            </div>
            <div className='col-md-2' id="cardm">
                <IonCard className='cards1'>
                    <IonCardContent id="card-tittle1">
                        <h1>{(dataDashboard.status==='success')?dataDashboard.data.profitPerDay:0}</h1>
                        <p>PROFITE / DAY</p>
                    </IonCardContent>
                </IonCard>
            </div>
            <div className='col-md-6'>
                <IonCard className='card' style={{textAlign:'center', padding:'9px',height:'510px'}}>
                    <h4 style={{color:'black'}}>Miners Hash Rate</h4>
                    <div>
                        <Line  data={dataMinerHashRate} options={{
                            maintainAspectRatio : false,
                            scales:{
                                XAxis:{
                                    ticks:{
                                        autoSkip:true,
                                        maxTicksLimit:10,
                                        minRotation:2
                                        
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

                    </div>
                </IonCard>
            </div>
            <div className='col-md-6'>
                <IonCard className='card' style={{textAlign:'center', padding:'9px',height:'510px'}}>
                    <h4 style={{color:'black'}}>Miners Hash Rate Total</h4>
                    {/* <div style={{height:'590px'}}> */}
                    <br/>
                    <div>
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
                    </div>
                </IonCard>
            </div>
            <div className='col-md-6'>
                <IonCard className='card' style={{textAlign:'center', padding:'9px'}}>
                    <h4 style={{color:'black'}}>Miners PCB Temperature Average</h4>
                    <div style={{height:'450px'}}>
                        <Line  data={dataPCBTemperature} options={{
                            maintainAspectRatio : false,
                            scales:{
                                XAxis:{
                                    ticks:{
                                        autoSkip:true,
                                        maxTicksLimit:10,
                                        minRotation:2
                                        
                                    }
                                },
                                YAxis:{
                                    ticks:{
                                        callback:function(label,index,labels){
                                            return label + " ºC";
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

                    </div>
                </IonCard>
            </div>
            <div className='col-md-6'>
                <IonCard className='card' style={{textAlign:'center', padding:'9px'}}>
                    <h4 style={{color:'black'}}>Miners Chip Temperature Average</h4>
                    <div style={{height:'450px'}}>
                        <Line  data={dataChipTemperature} options={{
                            maintainAspectRatio : false,
                            scales:{
                                XAxis:{
                                    ticks:{
                                        autoSkip:true,
                                        maxTicksLimit:10,
                                        minRotation:2
                                        
                                    }
                                },
                                YAxis:{
                                    ticks:{
                                        callback:function(label,index,labels){
                                            return label + " ºC";
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

                    </div>
                </IonCard>
            </div>
        </div>
    </IonContent>    
  );
}
export default Dashboard;