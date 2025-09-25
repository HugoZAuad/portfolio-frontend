import React, { useEffect, useState, useCallback } from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../../components/Components_Skills/SectionHeader/SectionHeader';
import SkillsList from '../../components/Components_Skills/SkillList/SkillList';
import FeedbackAlert from '../../components/Common/FeedbackAlert/FeedbackAlert';
import { useSkillService } from '../../services/skillService/skillService';
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
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSeverity, setFeedbackSeverity] = useState<'success' | 'error'>('error');

  const { getSkills } = useSkillService();

  const showFeedback = (message: string, severity: 'success' | 'error') => {
    setFeedbackMessage(message);
    setFeedbackSeverity(severity);
    setFeedbackOpen(true);
  };

  const loadSkills = useCallback(async () => {
    try {
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      console.error(error);
      showFeedback('Erro ao carregar habilidades.', 'error');
    }
  }, [getSkills]);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  return (
    <SectionContainer id="skills">
      <Container maxWidth="md">
        <SectionHeader />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <SkillsList skills={skills} />
        </Box>
        <FeedbackAlert
          open={feedbackOpen}
          message={feedbackMessage}
          severity={feedbackSeverity}
          onClose={() => setFeedbackOpen(false)}
        />
      </Container>
    </SectionContainer>
  );
};

export default SkillsSection;