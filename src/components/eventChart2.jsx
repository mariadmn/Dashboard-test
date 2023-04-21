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
import { totalEventos } from "../data/chartData";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../themes";
import Header from "./header";
import { Box } from "@mui/material";
import { CSVLink } from "react-csv";
import TableViewIcon from '@mui/icons-material/TableView';


export default function EventChart2() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const chartColors = [colors.blueAccent[400], colors.blueAccent[500], colors.blueAccent[600], colors.blueAccent[700], colors.blueAccent[800]];
    return (
        <Box m="5px" border={1} p={1} color={colors.grey[600]}>
            <Header title="Eventos realizados por Ano" 
             subtitle="Gráfico dos eventos realizados entre 2010 e 2022" />
             {/* <CSVLink data={totalEventos}>Exportar para CSV</CSVLink> */}
            <BarChart
                width={1000}
                height={600}
                data={totalEventos}
                margin={{
                    top: 20,
                    right: 30,
                    left: 5,
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
        </Box>
    );
}
