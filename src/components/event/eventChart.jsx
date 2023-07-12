import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { eventChartData } from "../../data";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import Header from "../header";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TableViewIcon from '@mui/icons-material/TableView';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { CSVLink } from "react-csv";

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Ano', key: 'ano' },
    // Add headers for evento properties
    { label: 'CB', key: 'evento.CB' },
    { label: 'EDUCOMP', key: 'evento.EDUCOMP' },
    { label: 'LATINOWARE', key: 'evento.LATINOWARE' },
    { label: 'SBES', key: 'evento.SBES' },
    { label: 'SBGAMES', key: 'evento.SBGAMES' },
    { label: 'SBIE', key: 'evento.SBIE' },
    { label: 'SBSI', key: 'evento.SBSI' },
    { label: 'SEMIEDU', key: 'evento.SEMIEDU' },
    { label: 'WEI', key: 'evento.WEI' },
    { label: 'WIE', key: 'evento.WIE' },
    { label: 'WIT', key: 'evento.WIT' },
    { label: 'RBIE', key: 'evento.RBIE' },
    { label: 'Total', key: 'total' },
  ];

export default function EventChart(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div style={{ width: "100%", height: 500 }} >
            <Box >
                <Header title="Artigos na Temática por Evento" 
                subtitle="Gráfico do total de artigos dentro da temática publicados por evento" />
                <IconButton onClick={props.toggleBool} sx={ { color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
                    <TableViewIcon/><h5> Ver tabela</h5>
                </IconButton>
                <CSVLink filename={"Artigos na Temática por Evento.csv"} data={eventChartData} headers={headers}>
                    <IconButton sx={ { color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}} >
                        <FileDownloadIcon /><h5>Exportar</h5>
                    </IconButton>
                </CSVLink>
            </Box>
            <ResponsiveContainer>
                <BarChart
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
                    <XAxis dataKey="ano"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar name="CB" dataKey="evento.CB" stackId="a" fill={colors.blueAccent[500]}/>
                    <Bar name="EDUCOMP" dataKey="evento.EDUCOMP" stackId="a" fill={colors.orangeAccent[500]} />
                    <Bar name="LATINOWARE" dataKey="evento.LATINOWARE" stackId="a" fill={colors.redAccent[500]} />
                    <Bar name="SBES" dataKey="evento.SBES" stackId="a" fill={colors.greenAccent[500]} />
                    <Bar name="SBGAMES" dataKey="evento.SBGAMES" stackId="a" fill={colors.orangeAccent[400]} />
                    <Bar name="SBIE" dataKey="evento.SBIE" stackId="a" fill={colors.redAccent[400]} />
                    <Bar name="SBSI" dataKey="evento.SBSI" stackId="a" fill={colors.greenAccent[400]} />
                    <Bar name="SEMIEDU" dataKey="evento.SEMIEDU" stackId="a" fill={colors.blueAccent[400]}/>
                    <Bar name="WEI" dataKey="evento.WEI" stackId="a" fill={colors.greenAccent[600]} /> 
                    <Bar name="WIE" dataKey="evento.WIE" stackId="a" fill={colors.blueAccent[600]}/>
                    <Bar name="WIT" dataKey="evento.WIT" stackId="a" fill={colors.redAccent[600]} />
                    <Bar name="RBIE" dataKey="evento.RBIE" stackId="a" fill={colors.orangeAccent[600]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
