import React from "react"
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  useTheme,
  CardMedia,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import Button from "../../Common/Button/Button"
import { motion } from "framer-motion"

interface ProjectProps {
  title: string
  description: string
  technologies?: string[]
  linkRepo: string
  linkDeploy: string
  imageUrl?: string
  type: "frontend" | "backend" | "fullstack"
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies = [],
  linkRepo,
  linkDeploy,
  imageUrl,
  type,
  index,
}) => {
  const theme = useTheme()

  const typeColor =
    type === "frontend"
      ? "primary"
      : type === "backend"
      ? "secondary"
      : "success"

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
          },
        }}
      >
        {imageUrl && (
          <CardMedia
            component="img"
            height="180"
            image={imageUrl}
            alt={`Imagem do projeto ${title}`}
          />
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {title}
          </Typography>
          <Chip
            label={type}
            color={typeColor}
            size="small"
            sx={{ mb: 2, fontWeight: 500 }}
          />
          <Typography
            variant="body2"
            sx={{ mb: 3, color: theme.palette.text.secondary }}
          >
            {description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            {technologies.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Box sx={{ mr: 1 }}>
            <Button
              variant="secondary"
              size="small"
              onClick={() => window.open(linkRepo, "_blank")}
            >
              <GitHubIcon sx={{ mr: 1, fontSize: "1rem" }} />
              Código
            </Button>
          </Box>
          <Button
            variant="primary"
            size="small"
            onClick={() => window.open(linkDeploy, "_blank")}
          >
            <LaunchIcon sx={{ mr: 1, fontSize: "1rem" }} />
            Demo
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
