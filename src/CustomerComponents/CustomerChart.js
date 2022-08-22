import Logout from "../AllUserComponents/Logout";
import CustomerTopBar from "./CustomerTopBar";
import ReactApexChart from "react-apexcharts"
import axiosConfig from "./../AllUserComponents/axiosConfig"
import { useEffect, useState } from "react";

const CustomerChart=()=>{
  const [bill,setBill]=useState([]);
  const [day,setday]=useState([]);
  useEffect(()=>{
    axiosConfig.post("customer/chart").then
    ((rsp)=>{
      setBill(rsp.data.bill);
      setday(rsp.data.day);
      debugger
    },(err)=>{
      debugger
    })
  },[])
    const series= [{
        data: bill
      }];
    const options= {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        // colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true
        },
        xaxis: {
          categories: day,
          labels: {
            style: {
            //   colors: colors,
              fontSize: '12px'
            }
          }
        }
      };
    

    return(
        <div>
            <Logout/>
            <br/>
            <h3><CustomerTopBar/></h3>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    )
}

export default CustomerChart;