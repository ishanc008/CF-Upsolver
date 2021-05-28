import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Switch } from "@material-ui/core";

const Rating = (props) => {
  const [ACprobs, setACprobs] = useState(props.AcProbs);
  const [ChartData, setChartData] = useState(null);
  const [type, setType] = useState(true);
  const [label, setLabel] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    getRatings();
  }, []);

  const handleToggle = () => {
    setType((prev) => !prev);
  };

  const getRatings = async () => {
    let ratings = new Map();

    let userRatingsArray = [];

    for (let i = 0; i < ACprobs.length; i++) {
      let rating = ACprobs[i].problem.rating;
      userRatingsArray.push(rating);
    }

    userRatingsArray.sort(function (a, b) {
      return a - b;
    });

    console.log(userRatingsArray);

    for (let i = 0; i < userRatingsArray.length; i++) {
      let rating = userRatingsArray[i];
      if (ratings.has(rating)) {
        let count = ratings.get(rating);
        ratings.set(rating, count + 1);
      } else {
        ratings.set(rating, 1);
      }
    }

    let labels = [];
    let values = [];
    for (const [rating, value] of ratings.entries()) {
      if (value >= 10) {
        labels.push(rating);
        values.push(value);
      }
    }

    setLabel(labels);
    setValue(values);

    const forChart = {
      chartData: {
        labels: label,
        datasets: [
          {
            label: "Rating Distribution",
            data: values,
          },
        ],
      },
    };

    if (!ChartData) {
      setChartData(forChart);
    }
    console.log(ratings);
    console.log(label);
    console.log(values);
  };

  return (
    <div style={{ width: "50%" }}>
      <h1
        style={{
          fontSize: "2vw",
          fontFamily: "'Ubuntu', sans-serif",
          color: "#FF6037",
          borderBottom: "2px solid #FF6037",
          display: "inline-block",
        }}
      >
        On the basis of problem rating :
      </h1>
      <div>
        {ChartData && type ? (
          <Bar
            data={{
              labels: label,
              datasets: [
                {
                  label: "Solved",
                  data: value,
                  backgroundColor: [
                    "#FF6633",
                    "#FFB399",
                    "#FF33FF",
                    "#FFFF99",
                    "#00B3E6",
                    "#E6B333",
                    "#3366E6",
                    "#999966",
                    "#99FF99",
                    "#B34D4D",
                    "#80B300",
                    "#809900",
                    "#E6B3B3",
                    "#6680B3",
                    "red",
                    "#FF99E6",
                    "#CCFF1A",
                    "#FF1A66",
                    "#E6331A",
                    "#33FFCC",
                    "#66994D",
                    "#B366CC",
                    "#4D8000",
                    "#B33300",
                    "#CC80CC",
                    "#66664D",
                    "#991AFF",
                    "#E666FF",
                    "#4DB3FF",
                    "#1AB399",
                    "#E666B3",
                    "#33991A",
                    "#CC9999",
                    "#B3B31A",
                  ],
                  hoverBorderColor: "green",
                  hoverBorderWidth: 3,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        ) : (
          <Pie
            data={{
              labels: label,
              datasets: [
                {
                  data: value,
                  backgroundColor: [
                    "#FF6633",
                    "#FFB399",
                    "#FF33FF",
                    "#FFFF99",
                    "#00B3E6",
                    "#E6B333",
                    "#3366E6",
                    "#999966",
                    "#99FF99",
                    "#B34D4D",
                    "#80B300",
                    "#809900",
                    "#E6B3B3",
                    "#6680B3",
                    "red",
                    "#FF99E6",
                    "#CCFF1A",
                    "#FF1A66",
                    "#E6331A",
                    "#33FFCC",
                    "#66994D",
                    "#B366CC",
                    "#4D8000",
                    "#B33300",
                    "#CC80CC",
                    "#66664D",
                    "#991AFF",
                    "#E666FF",
                    "#4DB3FF",
                    "#1AB399",
                    "#E666B3",
                    "#33991A",
                    "#CC9999",
                    "#B3B31A",
                  ],
                  hoverBorderColor: "green",
                  hoverBorderWidth: 3,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 15,
                      family: "'Ubuntu', sans-serif",
                    },
                    color: "gray",
                  },
                  position: "bottom",
                },
              },
            }}
          />
        )}
      </div>
      <span style={{ marginLeft: "50%" }}>
        <Switch onChange={handleToggle} />
        <h1
          style={{
            fontSize: "1vw",
            fontFamily: "'Ubuntu', sans-serif",
            color: "#FF6037",
            display: "inline",
          }}
        >
          Pie Chart
        </h1>
      </span>
    </div>
  );
};

export default Rating;
