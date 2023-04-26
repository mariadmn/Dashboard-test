import React from "react";
import { Box } from "@mui/material";
import Header from "../header";
import { techniqueColumns, techniqueData } from "../../data/chartData";
import BarChartIcon from '@mui/icons-material/BarChart';
import { ResponsiveContainer } from "recharts";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


export default function TechniqueTable(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveContainer>
            <Box>
                <Header title="Técnica do Artigo" 
                subtitle="Tabela com a quantidade de artigos divididos pelos seus contextos" />
                
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
                        rows={techniqueData}
                        columns={techniqueColumns}
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </ResponsiveContainer>
    );
}