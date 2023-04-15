import { yearChartData, colunmsYearChart } from "../data/chartData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../themes";
import Header from "./header";

const YearTable = () =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="5px" border={1} p={1} color={colors.grey[600]}>
      <Header title="Ano de Publicação" 
      subtitle="Tabela com os anos de publicação dos artigos e quantos desse artigos estavam na temática pesquisada" />
      <Box display="flex" height="500px" width="800px"
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
          rows={yearChartData}
          columns={colunmsYearChart}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default YearTable;