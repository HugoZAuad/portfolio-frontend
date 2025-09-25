import React, { useState, useEffect } from "react"
import {
  Box,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material"
import type {
  Skill,
  SkillLevel,
  SkillCategory,
} from "../../../services/skillService/skillsService.types"

interface Props {
  onSubmit: (skill: Skill) => void
  initialData?: Skill
}

const skillLevelOptions: SkillLevel[] = [
  "BASICO",
  "INTERMEDIARIO",
  "AVANCADO",
  "EXPERIENTE",
]

const skillCategoryOptions: SkillCategory[] = [
  "FRONTEND",
  "BACKEND",
  "SOFTSKILLS",
  "DEVOPS",
  "BANCO_DE_DADOS",
]

const formatLevelForDisplay = (level: SkillLevel): string => {
  if (level === "AVANCADO") return "Avançado"
  if (level === "BASICO") return "Básico"
  if (level === "EXPERIENTE") return "Especialista"
  return level.charAt(0) + level.slice(1).toLowerCase()
}

const formatCategoryForDisplay = (category: SkillCategory): string => {
  return category
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ")
}

const getInitialFormState = (data?: Skill): Skill =>
  ({
    id: data?.id || "",
    name: data?.name || "",
    level: data?.level || skillLevelOptions[0],
    category: data?.category || skillCategoryOptions[0],
  } as Skill)

const SkillForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Skill>(getInitialFormState(initialData))
  const [errors, setErrors] = useState({ name: "" })

  useEffect(() => {
    setForm(getInitialFormState(initialData))
    setErrors({ name: "" })
  }, [initialData])

  const handleChange = (
    field: keyof Skill,
    value: string | SkillLevel | SkillCategory
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (field === "name" && value) {
      setErrors((prev) => ({ ...prev, name: "" }))
    }
  }

  const validate = () => {
    let isValid = true
    const newErrors = { name: "" }

    if (!form.name.trim()) {
      newErrors.name = "O nome da habilidade não pode estar vazio."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    onSubmit(form)

    if (!initialData) {
      setForm(getInitialFormState())
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          fullWidth
          required
          error={!!errors.name}
          helperText={errors.name}
        />

        <FormControl fullWidth required>
          <InputLabel id="skill-category-label">Categoria</InputLabel>
          <Select
            labelId="skill-category-label"
            label="Categoria"
            value={form.category}
            onChange={(e) =>
              handleChange("category", e.target.value as SkillCategory)
            }
            fullWidth
          >
            {skillCategoryOptions.map((category) => (
              <MenuItem key={category} value={category}>
                {formatCategoryForDisplay(category)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth required>
          <InputLabel id="skill-level-label">Nível</InputLabel>
          <Select
            labelId="skill-level-label"
            label="Nível"
            value={form.level}
            onChange={(e) =>
              handleChange("level", e.target.value as SkillLevel)
            }
            fullWidth
          >
            {skillLevelOptions.map((level) => (
              <MenuItem key={level} value={level}>
                {formatLevelForDisplay(level)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained">
          {initialData ? "Atualizar Habilidade" : "Criar Habilidade"}
        </Button>
      </Stack>
    </Box>
  )
}

export default SkillForm
