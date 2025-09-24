import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import type { Project } from '../../../services/projectService/projectService.types';

interface Props {
  onSubmit: (project: Project, imageFile?: File) => void;
  initialData?: Project;
}

const projectTypes = ['Frontend', 'Backend', 'Fullstack'] as const;

const ProjectForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Project>({
    title: '',
    description: '',
    linkRepo: '',
    linkDeploy: '',
    imageUrl: '',
    type: 'Fullstack',
  });

  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (initialData) {
      const { title, description, linkRepo, linkDeploy, imageUrl, type } = initialData;
      setForm({ title, description, linkRepo, linkDeploy, imageUrl, type });
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
    return data.imageUrl;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadedImageUrl = await handleImageUpload();
    onSubmit({ ...form, imageUrl: uploadedImageUrl }, imageFile);
    setForm({
      title: '',
      description: '',
      linkRepo: '',
      linkDeploy: '',
      imageUrl: '',
      type: 'Fullstack',
    });
    setImageFile(undefined);
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
          label="Link do Repositório"
          value={form.linkRepo}
          onChange={(e) => handleChange('linkRepo', e.target.value)}
          fullWidth
        />
        <TextField
          label="Link de Deploy"
          value={form.linkDeploy}
          onChange={(e) => handleChange('linkDeploy', e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Tipo do Projeto</InputLabel>
          <Select
            value={form.type}
            label="Tipo do Projeto"
            onChange={(e) => handleChange('type', e.target.value)}
          >
            {projectTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
