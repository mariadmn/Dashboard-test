import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { yearChartData } from "../../data/chartData";
import { Box } from "@mui/material";
import Header from "../header";
import { tokens } from "../../themes";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import TableViewIcon from '@mui/icons-material/TableView';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { CSVLink } from "react-csv";

export default function YearChart(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainer>
      <Box>
        <Header title="Ano de Publicação" 
        subtitle="Gráfico com os anos de publicação dos artigos e quantos desse artigos estavam na temática pesquisada" />

        <IconButton onClick={props.toggleBool} sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
          <TableViewIcon/><h5> Ver tabela</h5>
        </IconButton>
        <CSVLink filename={"yearChart.csv"} data={yearChartData}>
          <IconButton sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
            <FileDownloadIcon /><h5>CSV</h5>
          </IconButton>
        </CSVLink>
        
        <AreaChart
          data={yearChartData}
          width={900}
          height={500}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" name="Total de publicações" dataKey="totalPublicacoes" stackId="1" stroke={colors.greenAccent[500]} fill={colors.greenAccent[500]}/>
          <Area type="monotone" name="Total de publicações na temática" dataKey="totalPublicacoesTematica" stroke={colors.orangeAccent[600]} fill={colors.orangeAccent[600]}/>
        </AreaChart>
      </Box>
    </ResponsiveContainer>
  );
}
