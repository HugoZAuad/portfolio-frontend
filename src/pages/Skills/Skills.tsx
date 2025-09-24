import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../../components/Components_Skills/SectionHeader/SectionHeader';
import SkillList from '../../components/Components_Skills/SkillList/SkillList';
import { getSkills } from '../../services/skillService/skillService';
import type { Skill } from '../../services/skillService/skillsService.types';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '80px 20px 60px',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data: Skill[] = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error('Erro ao carregar habilidades:', error);
      }
    };

    loadSkills();
  }, []);

  return (
    <SectionContainer id="skills">
      <Container maxWidth="md">
        <SectionHeader />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <SkillList title="Minhas Habilidades" skills={skills} />
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default SkillsSection;
