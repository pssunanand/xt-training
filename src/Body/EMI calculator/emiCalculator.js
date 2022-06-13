import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import InputSlider from "../../Slider";
import { Chart } from "primereact/chart";
import { Card } from "primereact/card";

import { InputNumber } from "primereact/inputnumber";

function DoughnutChart(props) {
  const [chartData, setChartData] = useState({
    labels: props.label,
    datasets: [
      {
        data: props.data, //[300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  });

  React.useEffect(() => {
    setChartData({
      labels: props.label,
      datasets: [
        {
          data: props.data, //[300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
  }, [props]);

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div className="card flex justify-content-center">
      <Chart
        type="doughnut"
        data={chartData}
        options={lightOptions}
        style={{ width: "15rem", marginBottom: "1em" }}
      />
    </div>
  );
}

function EMICalculator() {
  const [loanAmount, setloanAmount] = useState(3000000);
  const [loanRate, setloanRate] = useState(9);
  const [LoanTerm, setLoanTerm] = useState(25);
  const [emi, setEmi] = useState(0);
  const [extraloanRate, setExtraloanRate] = useState(0);
  const [data, setData] = useState([loanAmount, loanRate, LoanTerm]);

  React.useEffect(() => {
    let loanRate1 = loanRate / 1200;
    let term = LoanTerm * 12;
    let top = Math.pow(1 + loanRate1, term);
    let bottom = top - 1;
    let ratio = top / bottom;
    let EMI = loanAmount * loanRate1 * ratio;
    let Total = EMI * term;
    setEmi(EMI.toFixed(0));
    setExtraloanRate(Total.toFixed(0) - loanAmount);
    const newData = [loanAmount, Total.toFixed(0) - loanAmount];
    setData(newData);
  }, [loanRate, loanAmount, LoanTerm]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <Card
        title="Emi Calculator"
        style={{ width: "70rem", marginBottom: "1em" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "40rem",
            }}
          >
            <div style={{ marginTop: "5px" }}>
              <div
                aria-label="loan Amount"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>loan Amount</p>
                <InputNumber
                  tabIndex={0}
                  value={loanAmount}
                  onValueChange={(e) => setloanAmount(e.value)}
                  mode="currency"
                  currency="INR"
                  locale="en-IN"
                  min={0}
                  max={50000000}
                  minFractionDigits={0}
                />
              </div>
              <InputSlider
                tabIndex={1}
                setValue={setloanAmount}
                vlaue={loanAmount}
                min={0}
                max={50000000}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <div
                aria-label="loan Rate"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>loan Rate</p>
                <InputNumber
                  tabIndex={0}
                  value={loanRate}
                  onValueChange={(e) => setloanRate(e.value)}
                  min={0}
                  max={15}
                  minFractionDigits={0}
                  suffix={"%"}
                />
              </div>
              <InputSlider
                tabIndex={1}
                setValue={setloanRate}
                vlaue={loanRate}
                max={15}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <div
                aria-label="LOAN TERM (Years)"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>LOAN TERM (Years)</p>
                <InputNumber
                  tabIndex={0}
                  value={LoanTerm}
                  onValueChange={(e) => setLoanTerm(e.value)}
                  min={0}
                  max={30}
                  minFractionDigits={0}
                  suffix={" Years"}
                />
              </div>
              <InputSlider
                tabIndex={1}
                setValue={setLoanTerm}
                vlaue={LoanTerm}
                min={0}
                max={30}
              />
            </div>
          </div>
          <div
            style={{
              width: "20rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper elevation={2}>
              <DoughnutChart
                data={data}
                label={["Principle", "Interest Payable"]}
              ></DoughnutChart>
            </Paper>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                aria-label="Monthly EMI"
                style={{
                  border: "1px solid black",
                  borderRadius: 10,
                  padding: "1.5px",
                  margin: "3px",
                  fontSize: "15px",
                }}
              >
                <p>Monthly EMI</p>
                <p>{emi.toLocaleString("EN-IN")}/Month</p>
              </div>
              <div
                aria-label="Principle"
                style={{
                  border: "1px solid black",
                  borderRadius: 10,
                  padding: "1.5px",
                  margin: "3px",
                  fontSize: "15px",
                }}
              >
                <p>Principle</p>
                <p>{loanAmount.toLocaleString("EN-IN")}</p>
              </div>
              <div
                aria-label="loanRate Payable"
                style={{
                  border: "1px solid black",
                  borderRadius: 10,
                  padding: "1.5px",
                  margin: "3px",
                  fontSize: "15px",
                }}
              >
                <p>loanRate Payable</p>
                <p>{extraloanRate.toLocaleString("EN-IN")}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EMICalculator;
