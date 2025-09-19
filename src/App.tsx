import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import ThemeProvider, { useTheme } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FeedbackProvider } from './contexts/FeedbackContext';

import PublicLayout from './components/Common/Layout/PublicLayout/PublicLayout';
import DashboardLayout from './components/Components_Dashboard/DashboardLayout/DashboardLayout';

import HomeSection from './pages/Home/Home';
import AboutSection from './pages/About/About';
import ProjectsSection from './pages/Projects/Projects';
import SkillsSection from './pages/Skills/Skills';
import ContactSection from './pages/Contact/Contact';
import LoginPage from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProjectsDashboard from './pages/Dashboard/ProjectsDashboard';
import SkillsDashboard from './pages/Dashboard/SkillsDashboard';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';

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
      <AuthProvider>
        <FeedbackProvider>
          <Router>
            <ThemeWrapper>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicLayout>
                      <div id="home"><HomeSection /></div>
                      <div id="about"><AboutSection /></div>
                      <div id="projects"><ProjectsSection /></div>
                      <div id="skills"><SkillsSection /></div>
                      <div id="contact"><ContactSection /></div>
                    </PublicLayout>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout>
                        <Dashboard />
                      </DashboardLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/projetos"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout>
                        <ProjectsDashboard />
                      </DashboardLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/habilidades"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout>
                        <SkillsDashboard />
                      </DashboardLayout>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </ThemeWrapper>
          </Router>
        </FeedbackProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
