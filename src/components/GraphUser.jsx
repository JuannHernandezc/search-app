import React, { useMemo } from "react";

//Imports about Graph bookstore
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";


const GraphUser = ({ followers, following, repositories }) => {

  const scores = [followers, repositories,following ];
  const labels = ['Seguidores', 'Repositorios', 'Seguidos'];
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const data = useMemo(() => {
    return {
        datasets:[
            {
                label: 'Cantidad',
                data: scores,
                tension: 0.3,
                borderColor: "rgb(75,192,192)",
                backgroundColor: "rgba(75, 192, 192, 0.3)"
            }
        ],
        labels
    }
  },[scores,labels]);

  const options = {
      responsive: true,
      fill: true,
  }
  return(
      <>
        <Bar data={data} options={options} />
      </>
  )
};
export default GraphUser;
