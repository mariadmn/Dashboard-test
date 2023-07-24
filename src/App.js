import { ColorModeContext, useMode, tokens } from "./themes";
import { CssBaseline, ThemeProvider, Box, IconButton } from "@mui/material";
import YearTable from "./components/year/yearTable";
import YearChart from "./components/year/yearChart";
import CategoryChart from "./components/category/categoryChart";
import CategoryTable from "./components/category/categoryTable";
import EventChart from "./components/event/eventChart";
import EventTable from "./components/event/eventTable";
import EventYearChart from "./components/eventYear/eventYearChart";
import EventYearTable from "./components/eventYear/eventYearTable";
import { useState } from "react";
import ContextTable from "./components/context/contextTable";
import ContextChart from "./components/context/contextChart";
import TechniqueChart from "./components/technique/techniqueChart";
import TechniqueTable from "./components/technique/techniqueTable";
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { WorldChart } from "./components/geoCharts/Wolrd/worldChart";
import { WorldTable } from "./components/geoCharts/Wolrd/worldTable";
import { BrazilChart } from "./components/geoCharts/Brazil/brazilChart";
import { BrazilTable } from "./components/geoCharts/Brazil/brazilTable";

function App() {
  const [theme, colorMode] = useMode();
  const [isYearChart, setmyIsYearChart] = useState(true);
  const [isCategoryChart, setmyIsCategoryChart] = useState(true);
  const [isContextChart, setmyIsContextChart] = useState(true);
  const [isTechniqueChart, setmyIsTechniqueChart] = useState(true);
  const [isEventChart, setmyIsEventChart] = useState(true);
  const [isEvent2Chart, setmyIsEvent2Chart] = useState(true);
  const [isDark, setmyIsDark] = useState(true);
  const [isWorldChart, setmyIsWorldChart] = useState(true);
  const [isBrazilChart, setmyIsBrazilChart] = useState(true);

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
  function toggleIsDark() {
    colorMode.toggleColorMode()
    setmyIsDark(!isDark)
  }
  function toggleWorldChart() {
    setmyIsWorldChart(!isWorldChart)
  }
  function toggleBrazilChart() {
    setmyIsBrazilChart(!isBrazilChart)
  }


  const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* Topbar */}
            <Box display="flex" justifyContent="space-between" flexDirection="column" style={{ width: "100%", height: "100%" }} >
              <Box display="flex" justifyContent="space-between" p={1} borderBottom={1} color={colors.grey[200]} style={{width:'100%'}}>
                <Box display="flex" color={colors.primary[100]}><h1>Bem-Vindo!</h1></Box>
                <Box display="flex" alignItems="center">
                  <IconButton onClick={toggleIsDark}>
                      {isDark ? <LightModeOutlinedIcon /> :  <NightlightOutlinedIcon />}
                  </IconButton>
                </Box>
              </Box>
              
              {/* Graficos */}
              <div className="dashboard">
                <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={0.5}>
                  <Box m="5px" flexGrow={1}  className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}> 
                    {isYearChart ? <YearChart toggleBool={toggleYearChart} /> : <YearTable  toggleBool={toggleYearChart} />} 
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}>
                    {isCategoryChart ? <CategoryChart  toggleBool={toggleCategoryChart} /> : <CategoryTable  toggleBool={toggleCategoryChart} />} 
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800}}>
                    {isEvent2Chart ? <EventYearChart toggleBool={toggleEvent2Chart} /> : <EventYearTable  toggleBool={toggleEvent2Chart} />} 
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}>
                    {isEventChart ? <EventChart  toggleBool={toggleEventChart} /> : <EventTable  toggleBool={toggleEventChart} />} 
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}>
                    {isContextChart ? <ContextChart  toggleBool={toggleContextChart} /> : <ContextTable  toggleBool={toggleContextChart} />} 
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}>
                    {isTechniqueChart ? <TechniqueChart  toggleBool={toggleTechniqueChart} /> : <TechniqueTable  toggleBool={toggleTechniqueChart} />} 
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}>
                    {isWorldChart ? <WorldChart  toggleBool={toggleWorldChart} /> : <WorldTable  toggleBool={toggleWorldChart} />}
                  </Box>
                  <Box m="5px" flexGrow={1} className="graph-component" border={1} p={1} color={colors.grey[200]} style={{ height: 800 }}>
                    {isBrazilChart ? <BrazilChart  toggleBool={toggleBrazilChart} /> : <BrazilTable  toggleBool={toggleBrazilChart} />}
                  </Box>
                </Box>

              </div>

            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
