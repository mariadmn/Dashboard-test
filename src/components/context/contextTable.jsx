
import { contextData, contextColumns } from "../../data/chartData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import Header from "../header";
import IconButton from "@mui/material/IconButton";
import PieChartIcon from '@mui/icons-material/PieChart';


export default function ContextTable(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="5px" border={1} p={1} color={colors.grey[600]}>
      <Header title="Contexto do Artigo" 
      subtitle="Tabela com a quantidade de artigos divididos pelos seus contextos" />
      
      <IconButton  onClick={props.toggleBool} sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
        <PieChartIcon/><h5> Ver gráfico</h5>
      </IconButton>
      
      <Box display="flex" height="500px" width="900px"
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
          rows={contextData}
          columns={contextColumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};
