import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './contexts/ThemeContext'; 
import { useTheme } from './contexts/ThemeContextValue'; 
import Navbar from './components/Common/Navbar/Navbar';
import HomeSection from './pages/Home';
import AboutSection from './pages/About';
import ProjectsSection from './pages/Projects';
import SkillsSection from './pages/Skills';
import ContactSection from './pages/Contact';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === 'dark' ? '#6366f1' : '#4f46e5',
      },
      secondary: {
        main: theme === 'dark' ? '#8b5cf6' : '#7c3aed',
      },
      background: {
        default: theme === 'dark' ? '#0f0f23' : '#fafafa',
        paper: theme === 'dark' ? '#1a1a2e' : '#ffffff',
      },
      text: {
        primary: theme === 'dark' ? '#ffffff' : '#1a1a1a',
        secondary: theme === 'dark' ? '#a1a1aa' : '#6b7280',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3rem',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 600,
        letterSpacing: '-0.025em',
      },
      h3: {
        fontSize: '1.875rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: 1.75,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 8,
            padding: '8px 16px',
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Navbar />
        <div id="home">
          <HomeSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default App;
