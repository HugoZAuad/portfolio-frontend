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
import type { Project, ProjectType } from '../../../services/projectService/projectService.types';

interface Props {
  onSubmit: (project: Project, imageFile?: File) => void;
  initialData?: Project;
}

const projectTypes: ProjectType[] = ['Frontend', 'Backend', 'Fullstack'];

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await onSubmit({ ...form }, imageFile);
      
      // Reset do formulário após sucesso
      setForm({
        title: '',
        description: '',
        linkRepo: '',
        linkDeploy: '',
        imageUrl: '',
        type: 'Fullstack',
      });
      setImageFile(undefined);
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      // Adicione tratamento de erro visual aqui se necessário
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          label="Título"
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Descrição"
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          multiline
          rows={3}
          fullWidth
          required
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
        <FormControl fullWidth required>
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
        <Button variant="outlined" component="label" fullWidth>
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
        <Button type="submit" variant="contained" fullWidth>
          {initialData ? 'Atualizar Projeto' : 'Criar Projeto'}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectForm;
