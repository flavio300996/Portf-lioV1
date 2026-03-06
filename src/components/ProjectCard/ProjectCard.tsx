import { Typography, Grid } from "@mui/material";
import { StyledCard, StyledImg } from "./styles";
import StyledButton from "../StyledButton";


export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL,
}) => {
    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography>
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid size={{ xs: 6 }}>
                    <StyledButton onClick={() => window.open(websiteURL)}>View Project</StyledButton>
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <StyledButton onClick={() => window.open(codeURL)}>View Code</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard