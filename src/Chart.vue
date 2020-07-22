<script>
import { Bar } from 'vue-chartjs';
import json from './assets/respons';

const arraySum  = (arr) => {
    return arr.reduce((prev, current, i, arr) => {
        return prev + current;
    });
}
const arrayAverage = (arr, fn) => {
  return arraySum(arr, fn)/arr.length;
}
const nowTime = () => {
  const date = new Date();
  return date.getHours();
}

const getNow = () => {
  let list = [];
  const now = nowTime();
  console.log(now);
  for(let i = 0 ; i < 24; i++) {
    if(i == now) {
      list[i] = 150;
    } else {
      list[i] = 0;
    }
  }
  console.log(list);
  return list;
}
const getTideAverage = () => {
  const level = json.tide.port.level;
  let list = [];
  for(let i = 0 ; i < 24; i++){
    list[i] = level;
  }
  return list;
} 
const getTides = (day) => {
  let list = [];
  const tides = json.tide.chart[day].tide;
  for(let i in tides){
    let tide = tides[i];
    switch(tide.time) {
      case '00:00':
        list[0] = tide.cm;
        break
      case '01:00':
        list[1] = tide.cm;
        break
      case '02:00':
        list[2] = tide.cm;
        break
      case '03:00':
        list[3] = tide.cm;
        break
      case '04:00':
        list[4] = tide.cm;
        break
      case '05:00':
        list[5] = tide.cm;
        break
      case '06:00':
        list[6] = tide.cm;
        break
      case '07:00':
        list[7] = tide.cm;
        break
      case '08:00':
        list[8] = tide.cm;
        break
      case '09:00':
        list[9] = tide.cm;
        break
      case '10:00':
        list[10] = tide.cm;
        break
      case '11:00':
        list[11] = tide.cm;
        break
      case '12:00':
        list[12] = tide.cm;
        break
      case '13:00':
        list[13] = tide.cm;
        break
      case '14:00':
        list[14] = tide.cm;
        break
      case '15:00':
        list[15] = tide.cm;
        break
      case '16:00':
        list[16] = tide.cm;
        break
      case '17:00':
        list[17] = tide.cm;
        break
      case '18:00':
        list[18] = tide.cm;
        break
      case '19:00':
        list[19] = tide.cm;
        break
      case '20:00':
        list[20] = tide.cm;
        break
      case '21:00':
        list[21] = tide.cm;
        break
      case '22:00':
        list[22] = tide.cm;
        break
      case '23:00':
        list[23] = tide.cm;
        break
    }
  }
  return list;
}

export default {
  extends: Bar,
  name: 'chart',
  data () {
    return {
      data: {
        labels: [
          '0時','1時','2時','3時','4時','5時','6時','7時','8時','9時','10時','11時',
          '12時','13時','14時','15時','16時','17時','18時','19時','20時','21時','22時','23時'
        ],
        datasets: [
          {
            label: '潮の高さ',
            data: getTides('2020-02-12'),
            borderColor: '#ccf',
            backgroundColor: '#eef',
            type: 'line',
            lineTension: 0.3,
          },
          {
            label: '潮平均値',
            data: getTideAverage('2020-02-12'),
            borderColor: '#ffcccc',
            fill: false,
            type: 'line',
          },
          {
            label: '現在時刻',
            data: getNow(),
            backgroundColor: '#aaf',
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: '時刻'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'cm',
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>