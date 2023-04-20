import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { eventChartData, eventChartYears, events } from "../data/chartData";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../themes";
import Header from "./header";
import { Box } from "@mui/material";

export default function EventChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const chartColors = [colors.blueAccent[400], colors.blueAccent[500], colors.blueAccent[600], colors.blueAccent[700], colors.blueAccent[800]];
    return (
        <Box m="5px" border={1} p={1} color={colors.grey[600]}>
            <Header title="Artigos por Evento" 
             subtitle="Gráfico dos artigos publicados em cada evento nos anos de 2019, 2020, 2021 e 2022" />
            <BarChart
                width={900}
                height={500}
                data={eventChartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="evento"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="2019" dataKey="anos.2019" stackId="a" fill={colors.redAccent[500]} />
                <Bar name="2020" dataKey="anos.2020" stackId="a" fill={colors.greenAccent[500]} /> 
                <Bar name="2021" dataKey="anos.2021" stackId="a" fill={colors.blueAccent[500]}/>
                <Bar name="2022" dataKey="anos.2022" stackId="a" fill={colors.orangeAccent[500]} />
            
            </BarChart>
        </Box>
    );
}
