import * as React from "react";
import { yearChartData, columnsYearChart } from "../../data";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import Header from "../header";
import IconButton from "@mui/material/IconButton";
import { ResponsiveContainer } from "recharts";
import BarChartIcon from '@mui/icons-material/BarChart';

export default function YearTable(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainer>
      <Box>
        <Header title="Ano de Publicação" 
        subtitle="Tabela com os anos de publicação dos artigos e quantos desse artigos estavam na temática pesquisada" />

        <IconButton onClick={props.toggleBool} sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
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
          <Box width="100%" maxWidth="100%">
            <DataGrid 
              rows={yearChartData}
              columns={columnsYearChart}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}
