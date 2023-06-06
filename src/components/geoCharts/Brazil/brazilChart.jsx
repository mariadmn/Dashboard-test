import React from "react";
import { Chart } from "react-google-charts";
import { ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../themes";
import { CSVLink } from "react-csv";
import { IconButton } from "@mui/material";
import TableViewIcon from '@mui/icons-material/TableView';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Header from "../../header";
import { brazilChartData } from "../../../data/chartData";



export function BrazilChart(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <div style={{ width: "100%", height: 500 }}  >
        <Box>
          <Header title="Artigos por Região do Brasil" 
          subtitle="Gráfico com a quantidade de artigos divididos pelas regiões do Brasil da onde são originários" />
          
          <IconButton onClick={props.toggleBool} sx={ { color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
              <TableViewIcon/><h5> Ver tabela</h5>
          </IconButton>
          <CSVLink filename={"brazilChart.csv"} data={brazilChartData}>
              <IconButton sx={ { color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}} >
                  <FileDownloadIcon /><h5>Exportar</h5>
              </IconButton>
          </CSVLink>
        </Box>
        <ResponsiveContainer>
            <Chart
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = brazilChartData[selection[0].row + 1];
                    console.log("Selected : " + region);
                },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="500px"
            options = {{
            region : "BR",
            resolution: 'provinces',
            colorAxis: { colors: [colors.grey[500], colors.blueAccent[500], colors.greenAccent[500], colors.orangeAccent[500]] },
            datalessRegionColor: colors.grey[600],
            backgroundColor: { fill:'transparent'},
            }}
            data={brazilChartData}
            />
        </ResponsiveContainer>
    </div>
  );
}
