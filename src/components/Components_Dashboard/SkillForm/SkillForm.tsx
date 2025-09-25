import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import type { Skill, SkillLevel, SkillCategory } from '../../../services/skillService/skillsService.types'; 

interface Props {
  onSubmit: (skill: Skill) => void;
  initialData?: Skill;
}

const skillLevelOptions: SkillLevel[] = ['BASICO', 'INTERMEDIARIO', 'AVANCADO', 'EXPERIENTE'];

const skillCategoryOptions: SkillCategory[] = ['FRONTEND', 'BACKEND', 'SOFTSKILLS', 'DEVOPS', 'BANCO_DE_DADOS'];

const formatLevelForDisplay = (level: SkillLevel): string => {
    if (level === 'AVANCADO') return 'Avançado';
    if (level === 'BASICO') return 'Básico';
    if (level === 'EXPERIENTE') return 'Especialista';
    return level.charAt(0) + level.slice(1).toLowerCase();
};

const formatCategoryForDisplay = (category: SkillCategory): string => {
    return category.split('_').map(word => 
        word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ');
};

const SkillForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Skill>({
    id: '', 
    name: '',
    level: skillLevelOptions[0], 
    category: skillCategoryOptions[0]
  } as Skill); 

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (field: keyof Skill, value: string | SkillLevel | SkillCategory) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form); 
    setForm({ 
        id: '', 
        name: '', 
        level: skillLevelOptions[0],
        category: skillCategoryOptions[0]
    } as Skill); 
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          fullWidth
        />
        
        <FormControl fullWidth>
            <InputLabel id="skill-category-label">Categoria</InputLabel>
            <Select
                labelId="skill-category-label"
                label="Categoria"
                value={form.category}
                onChange={(e) => handleChange('category', e.target.value as SkillCategory)}
                fullWidth
            >
                {skillCategoryOptions.map((category) => (
                    <MenuItem key={category} value={category}>
                        {formatCategoryForDisplay(category)} 
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        
        <FormControl fullWidth>
            <InputLabel id="skill-level-label">Nível</InputLabel>
            <Select
                labelId="skill-level-label"
                label="Nível"
                value={form.level}
                onChange={(e) => handleChange('level', e.target.value as SkillLevel)}
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
          {initialData ? 'Atualizar Habilidade' : 'Criar Habilidade'}
        </Button>
      </Stack>
    </Box>
  );
};

export default SkillForm;