import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./components/topbar";
import YearTable from "./components/yearTable";
import YearChart from "./components/yearChart";

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
              <Box display="flex" justifyContent="space-between" flexDirection="row" height="100%" width="100%" p={1}>
                <YearChart />
                <YearTable />
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
