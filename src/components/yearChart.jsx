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
import { yearChartData } from "../data/chartData";
import { Box } from "@mui/material";
import Header from "./header";
import { tokens } from "../themes";
import { useTheme } from "@mui/material/styles";


export default function YearChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="5px" border={1} p={1} color={colors.grey[600]}> 
      <Header title="Ano de Publicação" 
      subtitle="Gráfico com os anos de publicação dos artigos e quantos desse artigos estavam na temática pesquisada" />
      <BarChart
        width={600}
        height={500}
        data={yearChartData}
        margin={{
          top: 5,
          right: 30,
          left: 10,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano" color={colors.redAccent[900]}/>
        <YAxis color={colors.primary[100]}/>
        <Tooltip />
        <Legend color={colors.primary[100]}/>
        <Bar name="Total de publicações" dataKey="totalPublicacoes" fill={colors.greenAccent[500]} />
        <Bar name="Total de publicações na temática" dataKey="totalPublicacoesTematica" fill={colors.blueAccent[500]} />
      </BarChart>
    </Box>
  );
}
