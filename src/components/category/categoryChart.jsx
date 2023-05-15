import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import Header from "../header";
import {categoryChartData} from "../../data/chartData";
import { ResponsiveContainer, Legend, BarChart, CartesianGrid, Tooltip, YAxis, XAxis, Bar } from 'recharts';
import React, { useState, useCallback } from 'react';
import { Typography } from '@mui/material';
import TableViewIcon from '@mui/icons-material/TableView';
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { CSVLink } from "react-csv";


export default function CategoryChart(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const chartColors = [colors.blueAccent[500], colors.greenAccent[500], colors.redAccent[500], colors.blueAccent[700], colors.orangeAccent[500]];
  
  return (
    <div style={{ width: "100%", height: 500 }}>
      <Box >
        <Header title="Categoria de Publicação" 
          subtitle="Gráfico das categorias dos artigos" />
    
        {/* <Typography variant="h5" color={colors.primary[100]} justifySelf="center" marginTop={10}>
          Total de artigos: {categoryChartData.reduce((total, item) => total + item.total, 0)}
        </Typography> */}
        <IconButton onClick={props.toggleBool} sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
          <TableViewIcon/><h5> Ver tabela</h5>
        </IconButton>
        <CSVLink filename={"categoryChart.csv"} data={categoryChartData}>
          <IconButton sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
            <FileDownloadIcon /><h5>CSV</h5>
          </IconButton>
        </CSVLink>
      </Box>
      <ResponsiveContainer>
        <BarChart
          width={900}
          height={550}
          data={categoryChartData}
          margin={{
              top: 20,
              right: 30,
              left: 15,
              bottom: 15
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="categoria" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" stackId="a" fill={colors.blueAccent[500]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
