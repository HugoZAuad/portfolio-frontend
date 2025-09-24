import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SkillForm from '../../components/Components_Dashboard/SkillForm/SkillForm';
import SkillTable from '../../components/Components_Dashboard/SkillTable/SkillTable';
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../../services/skillService/skillService';
import type { Skill } from '../../services/skillService/skillService';

const SkillsDashboard: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | undefined>(undefined);

  const loadSkills = async (): Promise<void> => {
    const data = await getSkills();
    setSkills(data);
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const handleCreateOrUpdate = async (skill: Skill): Promise<void> => {
    if (editingSkill && editingSkill._id) {
      await updateSkill(editingSkill._id, skill);
    } else {
      await createSkill(skill);
    }
    setEditingSkill(undefined);
    await loadSkills();
  };

  const handleEdit = (skill: Skill): void => {
    setEditingSkill(skill);
  };

  const handleDelete = async (id: string): Promise<void> => {
    await deleteSkill(id);
    await loadSkills();
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SkillForm onSubmit={handleCreateOrUpdate} initialData={editingSkill} />
        <SkillTable skills={skills} onEdit={handleEdit} onDelete={handleDelete} />
      </Container>
    </>
  );
};

export default SkillsDashboard;
