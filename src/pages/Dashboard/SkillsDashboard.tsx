import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../components/Components_Dashboard/SectionHeader/SectionHeader';
import SkillForm from '../../components/Components_Dashboard/SkillForm/SkillForm';
import SkillTable from '../../components/Components_Dashboard/SkillTable/SkillTable';
import FeedbackAlert from '../../components/Common/FeedbackAlert/FeedbackAlert';
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

  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('success');

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const loadSkills = useCallback(async (): Promise<void> => {
    try {
      const response = await getSkills();
      setSkills(response);
    } catch (error) {
      console.error('Erro ao carregar habilidades:', error);
      showFeedback('Erro ao carregar habilidades.', 'error');
    }
  }, []);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  const handleCreateOrUpdate = async (skill: Skill, imageFile?: File): Promise<void> => {
    try {
      if (editingSkill && editingSkill._id) {
        await updateSkill(editingSkill._id, skill);
        showFeedback('Habilidade atualizada com sucesso!', 'success');
      } else {
        await createSkill(skill, imageFile);
        showFeedback('Habilidade criada com sucesso!', 'success');
      }
      setEditingSkill(undefined);
      await loadSkills();
    } catch (error) {
      console.error('Erro ao salvar habilidade:', error);
      showFeedback('Erro ao salvar habilidade.', 'error');
    }
  };

  const handleEdit = (skill: Skill): void => {
    setEditingSkill(skill);
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteSkill(id);
      showFeedback('Habilidade excluída com sucesso!', 'success');
      await loadSkills();
    } catch (error) {
      console.error('Erro ao excluir habilidade:', error);
      showFeedback('Erro ao excluir habilidade.', 'error');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader title="Gerenciar Habilidades" />
      <SkillForm onSubmit={handleCreateOrUpdate} initialData={editingSkill} />
      <SkillTable skills={skills} onEdit={handleEdit} onDelete={handleDelete} />
      <FeedbackAlert
        open={feedbackOpen}
        message={feedbackMessage}
        severity={feedbackSeverity}
        onClose={() => setFeedbackOpen(false)}
      />
    </Container>
  );
};

export default SkillsDashboard;
