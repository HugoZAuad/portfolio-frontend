import React from 'react';
import { Typography, Grid } from '@mui/material';
import SkillCard from '../../Components_Skills/SkillCard/SkillCard'; 
import type { Skill, SkillLevel, SkillCategory } from '../../../services/skillService/skillsService.types';

interface Props {
    skills: Skill[];
}

const LEVEL_MAP: Record<SkillLevel, number> = {
    'BASICO': 25,
    'INTERMEDIARIO': 50,
    'AVANCADO': 75,
    'EXPERIENTE': 100,
};

const formatLevelForDisplay = (level: SkillLevel): string => {
    if (level === 'AVANCADO') return 'Avançado';
    if (level === 'BASICO') return 'Básico';
    if (level === 'EXPERIENTE') return 'Especialista';
    
    return level.charAt(0) + level.slice(1).toLowerCase();
};

const formatCategoryForDisplay = (category: SkillCategory): string => {
    return category.split('_').map(word => 
        word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ');
};

const SkillsList: React.FC<Props> = ({ skills }) => {
    
    const groupedSkills = skills.reduce<Record<SkillCategory, Skill[]>>(
        (acc, skill) => {
            const category = skill.category;
            
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(skill);
            return acc;
        },
        {} as Record<SkillCategory, Skill[]>
    );

    const categoryOrder: SkillCategory[] = ['FRONTEND', 'BACKEND', 'DEVOPS', 'BANCO_DE_DADOS', 'SOFTSKILLS'];
    
    return (
        <Grid container spacing={4}>
            {categoryOrder.map((category) => {
                const skillsInCategory = groupedSkills[category];
                if (!skillsInCategory || skillsInCategory.length === 0) return null;

                return (
                    <Grid size={{xs:12, md:6}} key={category}> 
                        <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 1 }}>
                            {formatCategoryForDisplay(category)}
                        </Typography>
                        <Grid container spacing={2}>
                            {skillsInCategory.map((skill) => (
                                <Grid size={{xs:12, sm:6, md:6}} key={skill.id}>
                                    <SkillCard 
                                        name={skill.name}
                                        level={formatLevelForDisplay(skill.level)}
                                        value={LEVEL_MAP[skill.level]}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default SkillsList;