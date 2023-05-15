import React from "react";
import { Box } from "@mui/material";
import Header from "../../header";
import { worldTableData, worldTableColumns } from "../../../data/chartData";
import BarChartIcon from '@mui/icons-material/BarChart';
import { ResponsiveContainer } from "recharts";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../themes";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


export function WorldTable(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveContainer>
            <Box>
                <Header title="Artigos por Região do Brasil" 
                subtitle="Tabela com a quantidade de artigos divididos pelas regiões do Brasil da onde são originários" />
                
                <IconButton  onClick={props.toggleBool} sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
                    <BarChartIcon/><h5> Ver gráfico</h5>
                </IconButton>
                
                <Box display="flex" height="500px" width="100%"
                    sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                    }}>
                    <DataGrid 
                        rows={worldTableData}
                        columns={worldTableColumns}
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </ResponsiveContainer>
    );
};