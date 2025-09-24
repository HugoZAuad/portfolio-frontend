import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../components/Components_Dashboard/SectionHeader/SectionHeader';
import SkillForm from '../../components/Components_Dashboard/SkillForm/SkillForm';
import SkillTable from '../../components/Components_Dashboard/SkillTable/SkillTable';
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../../services/skillService/skillService';
import type { Skill } from '../../services/skillService/skillsService.types';

const SkillsDashboard: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | undefined>(undefined);

  const loadSkills = useCallback(async (): Promise<void> => {
    try {
      const response = await getSkills();
      setSkills(response);
    } catch (error) {
      console.error('Erro ao carregar habilidades:', error);
    }
  }, []);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  const handleCreateOrUpdate = async (skill: Skill, imageFile?: File): Promise<void> => {
    try {
      if (editingSkill && editingSkill._id) {
        await updateSkill(editingSkill._id, skill);
      } else {
        await createSkill(skill, imageFile); // ✅ envia imagem junto, se houver
      }
      setEditingSkill(undefined);
      await loadSkills();
    } catch (error) {
      console.error('Erro ao salvar habilidade:', error);
    }
  };

  const handleEdit = (skill: Skill): void => {
    setEditingSkill(skill);
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteSkill(id);
      await loadSkills();
    } catch (error) {
      console.error('Erro ao excluir habilidade:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader title="Gerenciar Habilidades" />
      <SkillForm onSubmit={handleCreateOrUpdate} initialData={editingSkill} />
      <SkillTable skills={skills} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default SkillsDashboard;
