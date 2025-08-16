'use client';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
export default function RadarChart(){
  const data = { labels: ['Python','SQL','ML/DL','MLOps','Data Eng','Visualization','Cloud'], datasets: [{ label:'Proficiency', data:[9,8,8,8,8,7,9], fill:true }] };
  const options = { responsive:true, scales:{ r:{ suggestedMin:0, suggestedMax:10 } }, plugins:{ legend:{ display:false } } };
  return <Radar data={data} options={options} />;
}
