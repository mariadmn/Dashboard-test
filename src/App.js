import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./components/topbar";
import YearTable from "./components/year/yearTable";
import YearChart from "./components/year/yearChart";
import CategoryChart from "./components/category/categoryChart";
import EventChart from "./components/event/eventChart";
import EventChart2 from "./components/eventChart2";
import ContextTable from "./components/context/contextTable";
import { useState } from "react";
import CategoryTable from "./components/category/categoryTable";
import ContextChart from "./components/context/contextChart";
import TechniqueChart from "./components/technique/techniqueChart";

function App() {
  const [theme, colorMode] = useMode();
  const [isYearChart, setmyIsYearChart] = useState(true);
  const [isCategoryChart, setmyIsCategoryChart] = useState(true);
  const [isContextChart, setmyIsContextChart] = useState(true);

  function toggleYearChart() {
    setmyIsYearChart(!isYearChart)
  }
  function toggleCategoryChart() {
    setmyIsCategoryChart(!isCategoryChart)
  }
  function toggleContextChart() {
    setmyIsContextChart(!isContextChart)
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
              {isContextChart ? <ContextChart  toggleBool={toggleContextChart} /> : <ContextTable  toggleBool={toggleContextChart} />} 
              <TechniqueChart />
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
