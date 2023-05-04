import { ColorModeContext, useMode, tokens } from "./themes";
import { CssBaseline, ThemeProvider, Box, IconButton } from "@mui/material";
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
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { WorldChart } from "./components/geoCharts/worldChart";
import { BrazilChart } from "./components/geoCharts/brazilChart";
import { BrazilRegionsChart } from "./components/geoCharts/brazilRegionsChart";
import { PizzaChart } from "./components/category/pieChartExample";
// import { useTheme } from "@mui/material/styles";

function App() {
  const [theme, colorMode] = useMode();
  const [isYearChart, setmyIsYearChart] = useState(true);
  const [isCategoryChart, setmyIsCategoryChart] = useState(true);
  const [isContextChart, setmyIsContextChart] = useState(true);
  const [isTechniqueChart, setmyIsTechniqueChart] = useState(true);
  const [isEventChart, setmyIsEventChart] = useState(true);
  const [isEvent2Chart, setmyIsEvent2Chart] = useState(true);
  const [isDark, setmyIsDark] = useState(true);

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

  
  // const mode = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* Topbar */}
            <Box display="flex" justifyContent="space-between" flexDirection="column" style={{ width: "100%", height: "100%" }} >
              <Box display="flex" justifyContent="space-between" p={1} borderBottom={1} color={colors.grey[200]}>
                <Box display="flex" color={colors.primary[100]}><h1>Bem-Vindo!</h1></Box>
                <Box display="flex" alignItems="center">
                  <IconButton onClick={toggleIsDark}>
                      {isDark ? <LightModeOutlinedIcon /> :  <NightlightOutlinedIcon />}
                  </IconButton>
                </Box>
              </Box>
              

              {/* Graficos */}

              {/* Primeira Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row" paddingBottom={1} >
                <Box m="5px" p={1}  style={{ width: "60%", height: 800 }}> 
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

              {/* Quarta Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row" paddingBottom={1} >
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "54%", height: 800  }}>
                  <WorldChart/> 
                </Box>
                <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{ width: "45%", height: 800  }}>
                  <BrazilChart/> 
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
