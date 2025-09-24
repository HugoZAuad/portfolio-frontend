import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import type { Skill } from '../../../services/skillService/skillService';

interface Props {
  onSubmit: (skill: Skill) => void;
  initialData?: Skill;
}

const SkillForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Skill>({
    name: '',
    level: 0,
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (field: keyof Skill, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', level: 0 });
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
        <TextField
          label="Nível (%)"
          type="number"
          value={form.level}
          onChange={(e) => handleChange('level', Number(e.target.value))}
          fullWidth
        />
        <Button type="submit" variant="contained">
          {initialData ? 'Atualizar Habilidade' : 'Criar Habilidade'}
        </Button>
      </Stack>
    </Box>
  );
};

export default SkillForm;
