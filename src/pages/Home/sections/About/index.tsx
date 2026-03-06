import { Box, Container, Grid, Typography } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { WorkspacePremium } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import { StyledCard } from "./styles";

const AboutSection: React.FC = () => {
  const skillsSet = [
    "Javascript", "Typescript", "React", "C#", ".Net"
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">About me</Typography>
        </Box>
        <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
              <Grid size={{ xs: 9, md: 2.5 }}>
                <AnimationComponent moveDirection="right">
                  <StyledCard variant="outlined">
                    <WorkspacePremium />
                    <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                    <Typography textAlign="center">4+ years</Typography>
                    <Typography textAlign="center">Fullstack Development</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>
              <Grid size={{ xs: 9, md: 2.5 }}>
                <AnimationComponent moveDirection="left">
                  <StyledCard variant="outlined">
                    <SchoolIcon />
                    <Typography textAlign="center" fontWeight={600}>Education</Typography>
                    <Typography textAlign="center">Bachelors</Typography>
                    <Typography textAlign="center">Computer Science</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
				Sou Bacharel em Ciência da Computação, e atualmente trabalho como Fullstack em uma empresa na cidade vizinha da minha\n
			Atualmente desenvolvo em .net com o backend em C#, mas estou aprimorando minhas técnicas em outras bibliotecas como:
			"Javascript", "React", "React Native", "Next.js", "Typescript", todas as quais eu já tenho conhecimentos intermediarios.
				Comecei a me interessar pela carreira de desenvolvedor por "acidente", quando me matriculei no curso Técnico, \n
			foi onde vi pela primeira vez esta àrea, e logo já me interessei, e assim que finalizei já dei inicio na Faculdade, \n
			na qual hoje sou formado. Sempre atuei como Técnico em Informática ou Suporte In-Loco voltado pra area de manutenção.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map(( skill, index ) => (
              <Grid key={index} size={{ xs: 9, md: 2.5, lg: 2 }}>
                <StyledCard variant="outlined">
                  {skill}
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default AboutSection
