import React from "react";
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../themes";
import Header from "./header";
import IconButton from "@mui/material/IconButton";
import PieChartIcon from '@mui/icons-material/PieChart';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {categoryChartData, categoryColumns} from "../data/chartData";


export default function CategoryTable(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box m="5px" border={1} p={1} color={colors.grey[600]}> 
        <Header title="Categoria" 
        subtitle="Tabela com a quantidade de artigos por categoria" />
        <IconButton onClick={props.toggleBool} sx={{ color: colors.primary[100] }}><PieChartIcon/><h5> Ver gráfico</h5></IconButton>
        <Box display="flex" height="400px" width="600px"
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
            rows={categoryChartData}
            columns={categoryColumns}
            components={{ Toolbar: GridToolbar }}
            />
        </Box>
        </Box>
    );
};