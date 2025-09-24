import React, { useEffect, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../../components/Components_Skills/SectionHeader/SectionHeader';
import SkillCategory from '../../components/Components_Skills/SkillCategory/SkillCategory';
import { fetchSkills } from '../../services/skillService/skillService';
import type { Skill } from '../../services/skillService/skillService';

const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: '120px 20px 80px',
  backgroundColor: theme.palette.background.default,
}));

const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data: Skill[] = await fetchSkills();
        setSkills(data);

        const uniqueCategories = Array.from(new Set(data.map((s) => s.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Erro ao carregar habilidades:', error);
      }
    };

    loadSkills();
  }, []);

  return (
    <SectionContainer id="skills">
      <Container maxWidth="lg">
        <SectionHeader />
        <Grid container spacing={4}>
          {categories.map((category, index) => {
            const filteredSkills = skills.filter((s) => s.category === category);
            return (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <SkillCategory title={category} skills={filteredSkills} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default SkillsSection;
