import { StyledExperience } from "./styles";
import { Grid, Typography, Box, Container } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [{
    title: "Em Breve",
    subtitle: "ainda não possuo projetos pessoais",
    srcImg: "https://cdn.awsli.com.br/600x450/173/173680/produto/5595924/2feffcfa80.jpg",
    description: "Em breve disponibilizo alguns projetos pessoais para visualização",
    technologies: "",
    websiteURL: "",
    codeURL: "",
  }]

  return (
    <>
      <StyledExperience>
        <Container maxWidth="lg">
          <Box id="projects" pt={5} pb={3}>
            <Typography variant="h2" textAlign="center" color="primary.contrastText">
              Projects
            </Typography>
          </Box>
          <Grid container spacing={5} pb={3}>
            {projects.map((project: ProjectCardProps, index: number) => (
              <Grid size={{ md: 6  }} key={index}>
                <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                  <ProjectCard
                    title={project.title}
                    subtitle={project.subtitle}
                    srcImg={project.srcImg}
                    description={project.description}
                    technologies={project.technologies}
                    websiteURL={project.websiteURL}
                    codeURL={project.codeURL}
                  />
                </AnimationComponent>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledExperience>
    </>
  )
}

export default ProjectsSection
