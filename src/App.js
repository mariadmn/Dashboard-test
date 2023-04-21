import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./components/topbar";
import YearTable from "./components/yearTable";
import YearChart from "./components/yearChart";
import CategoryChart from "./components/categoryChart";
import EventChart from "./components/eventChart";
import EventChart2 from "./components/eventChart2";
import ContextTable from "./components/contextTable";
import { useState } from "react";
import CategoryTable from "./components/categoryTable";

function App() {
  const [theme, colorMode] = useMode();
  const [isYearChart, setmyIsYearChart] = useState(true);
  const [isCategoryChart, setmyIsCategoryChart] = useState(true);

  function toggleYearChart() {
    setmyIsYearChart(!isYearChart)
  }
  function toggleCategoryChart() {
    setmyIsCategoryChart(!isCategoryChart)
  }


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* Topbar */}
            <Box display="flex" justifyContent="space-between" flexDirection="column" >
              <Topbar />
              {/* Graficos */}
              {/* Primeira Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row">
                {isYearChart ? <YearChart toggleBool={toggleYearChart} /> : <YearTable  toggleBool={toggleYearChart} />} 
                {isCategoryChart ? <CategoryChart  toggleBool={toggleCategoryChart} /> : <CategoryTable  toggleBool={toggleCategoryChart} />} 
              </Box>
              {/* Segunda Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row">
                
              </Box>
              {/* Terceira Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row">
                <EventChart2 />
                <EventChart />
              </Box>
              {/* Quarta Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row">
                <ContextTable />
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
