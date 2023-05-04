import React from "react";
import { Chart } from "react-google-charts";
import { ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import { CSVLink } from "react-csv";
import { Typography } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Header from "../header";


export const categoryChartData = [
  ["Categoria","total","porcentagem"],
  ["Fora do Escopo",20,18.52],
  ["Analise de Dados",44,40.74],
  ["Projeto",39,36.11],
  ["Programa",15,13.89],
  ["Ferramenta",10,9.26],
];


export function PizzaChart(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <div style={{ width: "100%", height: 500 }}>
        <Box >
        <Header title="Categoria de Publicação" 
          subtitle="Gráfico das categorias dos artigos" />
    
        <Typography variant="h5" color={colors.primary[100]} justifySelf="center" marginTop={10}>
          Total de artigos: {128}
        </Typography>
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
          <Chart
          chartType="PieChart"
          width="100%"
          height="500px"
          data={categoryChartData}
          options={{
            pieHole: 0.4,
            is3D: false,
            legend: { position: 'top', textStyle: {color: colors.primary[100]}},
            backgroundColor: { fill:'transparent' },
            colors: [colors.blueAccent[500], colors.greenAccent[500], colors.redAccent[500], colors.blueAccent[700], colors.orangeAccent[500]],
          }}
          />
        </ResponsiveContainer>
    </div>
  );
}
