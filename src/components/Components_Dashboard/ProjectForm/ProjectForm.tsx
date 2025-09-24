import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import type { Project } from '../../../services/projectService/projectService.types';

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
    imageUrl: '',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (initialData) {
      const { title, description, githubUrl, liveUrl, imageUrl } = initialData;
      setForm({ title, description, githubUrl, liveUrl, imageUrl });
    }
  }, [initialData]);

  const handleChange = (field: keyof Project, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (): Promise<string> => {
    if (!imageFile) return form.imageUrl || '';
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('https://portfolio-backend-dqxo.onrender.com/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data.imageUrl; // deve ser retornado pela API
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadedImageUrl = await handleImageUpload();
    onSubmit({ ...form, imageUrl: uploadedImageUrl });
    setForm({
      title: '',
      description: '',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
    });
    setImageFile(null);
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
        <Button variant="outlined" component="label">
          Selecionar Imagem
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImageFile(e.target.files[0]);
              }
            }}
          />
        </Button>
        {imageFile && <span>{imageFile.name}</span>}
        <Button type="submit" variant="contained">
          {initialData ? 'Atualizar Projeto' : 'Criar Projeto'}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectForm;
