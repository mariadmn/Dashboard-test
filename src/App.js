import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./components/topbar";
import YearTable from "./components/yearTable";
import YearChart from "./components/yearChart";
import CategoryChart from "./components/categoryChart";
import EventChart from "./components/eventChart";

function App() {
  const [theme, colorMode] = useMode();

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
                <YearChart />
                <YearTable />
              </Box>
              {/* Segunda Linha */}
              <Box display="flex" justifyContent="space-between" flexDirection="row">
                <CategoryChart />
                <EventChart />
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
