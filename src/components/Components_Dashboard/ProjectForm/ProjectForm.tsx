import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import type { Project } from '../../../services/projectService/projectService';

interface Props {
  onSubmit: (project: Project) => void;
  initialData?: Project;
}

const ProjectForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Project>({
    title: '',
    description: '',
    githubUrl: '',
    liveUrl: '',
  });

  useEffect(() => {
    if (initialData) {
      const { title, description, githubUrl, liveUrl } = initialData;
      setForm({ title, description, githubUrl, liveUrl });
    }
  }, [initialData]);

  const handleChange = (field: keyof Project, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      title: '',
      description: '',
      githubUrl: '',
      liveUrl: '',
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          label="Título"
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
          fullWidth
        />
        <TextField
          label="Descrição"
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          multiline
          rows={3}
          fullWidth
        />
        <TextField
          label="GitHub URL"
          value={form.githubUrl}
          onChange={(e) => handleChange('githubUrl', e.target.value)}
          fullWidth
        />
        <TextField
          label="Live URL"
          value={form.liveUrl}
          onChange={(e) => handleChange('liveUrl', e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained">
          {initialData ? 'Atualizar Projeto' : 'Criar Projeto'}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectForm;
