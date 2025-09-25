import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../components/Components_Dashboard/SectionHeader/SectionHeader';
import SkillForm from '../../components/Components_Dashboard/SkillForm/SkillForm';
import SkillTable from '../../components/Components_Dashboard/SkillTable/SkillTable';
import FeedbackAlert from '../../components/Common/FeedbackAlert/FeedbackAlert';
import { useSkillService, type SkillUpdateData } from '../../services/skillService/skillService';
import type { Skill } from '../../services/skillService/skillsService.types';

const SkillsDashboard: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | undefined>(undefined);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('success');

  const { getSkills, createSkill, updateSkill, deleteSkill } = useSkillService();

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const loadSkills = useCallback(async () => {
    try {
      const response = await getSkills();
      setSkills(response);
    } catch (error) {
      console.error(error);
      showFeedback('Erro ao carregar habilidades.', 'error');
    }
  }, [getSkills]);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  const handleCreateSkill = async (skillData: Skill) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...dataToSave } = skillData;
      
      await createSkill(dataToSave as SkillUpdateData);
      
      showFeedback('Habilidade criada com sucesso!', 'success');
      setEditingSkill(undefined);
      await loadSkills();
    } catch (error) {
      console.error('Erro ao criar habilidade:', error);
      showFeedback('Erro ao salvar habilidade.', 'error');
    }
  };
  
  const handleUpdateSkill = async (skillData: Skill) => {
    if (!editingSkill || !editingSkill.id) return; 
    
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...dataToSave } = skillData;
      
      await updateSkill(editingSkill.id, dataToSave as SkillUpdateData);
      
      showFeedback('Habilidade atualizada com sucesso!', 'success');
      setEditingSkill(undefined);
      await loadSkills();
    } catch (error) {
      console.error('Erro ao atualizar habilidade:', error);
      showFeedback('Erro ao salvar habilidade.', 'error');
    }
  };
  
  const handleSubmit = (skillData: Skill) => {
      if (editingSkill && editingSkill.id) {
          handleUpdateSkill(skillData);
      } else {
          handleCreateSkill(skillData);
      }
  };

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSkill(id);
      showFeedback('Habilidade excluída com sucesso!', 'success');
      await loadSkills();
    } catch (error) {
      console.error(error);
      showFeedback('Erro ao excluir habilidade.', 'error');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader title="Gerenciar Habilidades" />
      <SkillForm 
        onSubmit={handleSubmit} 
        initialData={editingSkill} 
      />
      <SkillTable 
        skills={skills} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
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