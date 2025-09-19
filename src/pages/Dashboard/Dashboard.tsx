import React from "react"
import { Typography, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import DashboardCard from "../../components/Components_Dashboard/DashboardCard/DashboardCard"
import DashboardLayout from "../../components/Components_Dashboard/DashboardLayout/DashboardLayout"

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <DashboardLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Painel de Controle
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <DashboardCard
            title="Projetos"
            description="Adicione, edite ou remova seus projetos."
            onClick={() => navigate("/dashboard/projetos")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DashboardCard
            title="Habilidades"
            description="Gerencie suas habilidades técnicas."
            onClick={() => navigate("/dashboard/habilidades")}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard
