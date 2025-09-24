import React from "react"
import { Box, Typography, useTheme } from "@mui/material"

const AboutText: React.FC = () => {
  const theme = useTheme()

  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: theme.palette.text.primary,
          fontSize: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        Sobre Mim
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: theme.palette.text.secondary,
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        Desenvolvedor Full Stack
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: theme.palette.text.secondary,
          lineHeight: 1.8,
          fontSize: "1.1rem",
        }}
      >
        Sou um desenvolvedor movido por transformar ideias em
        soluções digitais inovadoras e memoráveis. Com domínio de tecnologias
        modernas como React, Node.js, TypeScript e sistemas de design, meu foco
        está em criar produtos que não apenas funcionam, mas encantam, resolvem
        problemas reais e geram valor para quem os utiliza.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.secondary,
          lineHeight: 1.8,
          fontSize: "1.1rem",
        }}
      >
        Minha abordagem junta criatividade e precisão técnica, com atenção
        especial à usabilidade, performance e acessibilidade. Estou sempre em
        busca das melhores práticas e das tendências mais promissoras do
        mercado, com o objetivo de entregar experiências digitais que sejam
        intuitivas, eficientes e visualmente impactantes.
      </Typography>
    </Box>
  )
}

export default AboutText
