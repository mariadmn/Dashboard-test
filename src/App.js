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
import { WorldChart } from "./components/geoCharts/Wolrd/worldChart";
import { WorldTable } from "./components/geoCharts/Wolrd/worldTable";
import { BrazilChart } from "./components/geoCharts/Brazil/brazilChart";
import { BrazilTable } from "./components/geoCharts/Brazil/brazilTable";
import PieExample from "./components/category/pieChartExample";

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


  
  // const mode = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = window.innerWidth < 600;
  function setWidth(){
    if(isSmallScreen){
      return ("50%")
    }else{
      return ("100%")
    }
  }
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
              

              <Box display="flex" flexWrap="wrap">
                {/* Graficos */}

              {/* Primeira Linha */}
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800  }}> 
                {isYearChart ? <YearChart toggleBool={toggleYearChart} /> : <YearTable  toggleBool={toggleYearChart} />} 
              </Box>
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800   }}>
                {isCategoryChart ? <CategoryChart  toggleBool={toggleCategoryChart} /> : <CategoryTable  toggleBool={toggleCategoryChart} />} 
              </Box>

              {/* Segunda Linha */}
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800   }}>
                {isEvent2Chart ? <EventChart2  toggleBool={toggleEvent2Chart} /> : <EventTable2  toggleBool={toggleEvent2Chart} />} 
              </Box>
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800  }}>
                {isEventChart ? <EventChart  toggleBool={toggleEventChart} /> : <EventTable  toggleBool={toggleEventChart} />} 
              </Box>


              {/* Terceira Linha */}
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800   }}>
                {isContextChart ? <ContextChart  toggleBool={toggleContextChart} /> : <ContextTable  toggleBool={toggleContextChart} />} 
              </Box>
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800   }}>
                {isTechniqueChart ? <TechniqueChart  toggleBool={toggleTechniqueChart} /> : <TechniqueTable  toggleBool={toggleTechniqueChart} />} 
              </Box>


              {/* Quarta Linha */}
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800   }}>
                {isWorldChart ? <WorldChart  toggleBool={toggleWorldChart} /> : <WorldTable  toggleBool={toggleWorldChart} />}
              </Box>
              <Box m="5px" border={1} p={1} color={colors.grey[200]} style={{width:{ setWidth }, height: 800   }}>
                {isBrazilChart ? <BrazilChart  toggleBool={toggleBrazilChart} /> : <BrazilTable  toggleBool={toggleBrazilChart} />}
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
