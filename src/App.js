import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './global/Topbar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Team/scenes/dashboard';
import Alerts from './Head/scenes/alerts';
import Discussion from './Head/scenes/discussion';
import Solved from './Head/scenes/solved';
import Team from './Head/scenes/team';
import Upcoming from './Head/scenes/upcoming';
import Sidebar from './global/Sidebar';



function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/alerts" element={<Alerts />}></Route>
              <Route path="/discussion" element={<Discussion />}></Route>
              <Route path="/solved" element={<Solved />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/upcoming" element={<Upcoming />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
