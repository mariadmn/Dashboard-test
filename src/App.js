import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./components/topbar";
import YearTable from "./components/year/yearTable";
import YearChart from "./components/year/yearChart";
import CategoryChart from "./components/category/categoryChart";
import CategoryTable from "./components/category/categoryTable";
import EventChart from "./components/event/eventChart";
import EventTable from "./components/event/eventTable";
import EventChart2 from "./components/eventChart2";
import EventTable2 from "./components/eventTable2";
import { useState } from "react";
import ContextTable from "./components/context/contextTable";
import ContextChart from "./components/context/contextChart";
import TechniqueChart from "./components/technique/techniqueChart";
import TechniqueTable from "./components/technique/techniqueTable";
import { tokens } from "./themes";
import { useTheme } from "@mui/material/styles";

function App() {
  const [mode, colorMode] = useMode();
  const [isYearChart, setmyIsYearChart] = useState(true);
  const [isCategoryChart, setmyIsCategoryChart] = useState(true);
  const [isContextChart, setmyIsContextChart] = useState(true);
  const [isTechniqueChart, setmyIsTechniqueChart] = useState(true);
  const [isEventChart, setmyIsEventChart] = useState(true);
  const [isEvent2Chart, setmyIsEvent2Chart] = useState(true);

  function toggleYearChart() {
    setmyIsYearChart(!isYearChart)
  }
  function toggleCategoryChart() {
    setmyIsCategoryChart(!isCategoryChart)
  }
  function toggleContextChart() {
    setmyIsContextChart(!isContextChart)
  }
  function toggleTechniqueChart() {
    setmyIsTechniqueChart(!isTechniqueChart)
  }
  function toggleEventChart() {
    setmyIsEventChart(!isEventChart)
  }
  function toggleEvent2Chart() {
    setmyIsEvent2Chart(!isEvent2Chart)
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* Topbar */}
            <Box display="flex" justifyContent="space-between" flexDirection="column" style={{ width: "100%", height: "100%" }} >
              <Topbar style={{ width: "100%", height: "10%" }}/>

              {/* Graficos */}

              {/* Primeira Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row" paddingBottom={1} >
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "60%", height: 800 }}> 
                  {isYearChart ? <YearChart toggleBool={toggleYearChart} /> : <YearTable  toggleBool={toggleYearChart} />} 
                </Box>
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "39%", height: 800 }}>
                  {isCategoryChart ? <CategoryChart  toggleBool={toggleCategoryChart} /> : <CategoryTable  toggleBool={toggleCategoryChart} />} 
                </Box>
              </Box>

              {/* Segunda Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row" paddingBottom={1} >
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "50%", height: 800  }}>
                {isEvent2Chart ? <EventChart2  toggleBool={toggleEvent2Chart} /> : <EventTable2  toggleBool={toggleEvent2Chart} />} 
                </Box>
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "49%", height: 800  }}>
                {isEventChart ? <EventChart  toggleBool={toggleEventChart} /> : <EventTable  toggleBool={toggleEventChart} />} 
                </Box>
              </Box>

              {/* Terceira Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row" paddingBottom={1} >
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "59%", height: 800  }}>
                  {isContextChart ? <ContextChart  toggleBool={toggleContextChart} /> : <ContextTable  toggleBool={toggleContextChart} />} 
                </Box>
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "40%", height: 800  }}>
                  {isTechniqueChart ? <TechniqueChart  toggleBool={toggleTechniqueChart} /> : <TechniqueTable  toggleBool={toggleTechniqueChart} />} 
                </Box>
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
