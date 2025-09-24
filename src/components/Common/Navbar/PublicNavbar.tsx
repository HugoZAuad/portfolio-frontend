import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useScrollTrigger,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import CinematicName from "../CinematicName/CinematicName"; // ajuste o caminho conforme sua estrutura

const Navbar: React.FC = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre Mim" },
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton
            onClick={() => scrollToSection(item.id)}
            sx={{
              backgroundColor:
                activeSection === item.id
                  ? theme.palette.primary.main
                  : "transparent",
              color:
                activeSection === item.id
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger
            ? theme.palette.background.paper
            : "transparent",
          backdropFilter: trigger ? "blur(10px)" : "none",
          borderBottom: trigger ? `1px solid ${theme.palette.divider}` : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <Box onClick={() => scrollToSection("sobre-mim")} sx={{ flexGrow: 1 }}>
            <CinematicName />
          </Box>

          {/* Desktop Navigation — escondido se menu lateral estiver aberto */}
          <Box
            sx={{
              display: { xs: "none", md: mobileOpen ? "none" : "flex" },
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color:
                    activeSection === item.id
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  fontWeight: activeSection === item.id ? 600 : 500,
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  minWidth: "auto",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <ThemeToggle />

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
