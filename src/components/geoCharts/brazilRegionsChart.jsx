import React from "react";
import { Chart } from "react-google-charts";
import { ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";


export const data = [
  ["EStado", "Popularity"],
  ["BR-RJ", 200],
  ["BR-ES", 300],
  ["BR-SP", 400],
  ["BR-AM", 500],
  ["BR-MT", 600],
  ["BR-MS", 700],
];


export function BrazilRegionsChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <div style={{ width: "100%", height: 500 }}>
        <Box></Box>
        <ResponsiveContainer>
            <Chart
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            options = {{
            region : "BR",
            resolution: 'provinces',
            colorAxis: { colors: [colors.blueAccent[500], colors.primary[500], colors.greenAccent[500]] },
            vAxis: { textStyle: { color: colors.primary[100] } },
            datalessRegionColor: colors.grey[500],
            backgroundColor: { fill:'transparent' },
            }}
            data={data}
            />
        </ResponsiveContainer>
    </div>
  );
}
