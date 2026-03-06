import { Box, Container, Grid, /*GridLegacy, */Typography } from "@mui/material";
import Avatar1 from "../../../../assets/images/avatar1.jpg";
import { StyledHero, StyledImg } from "./styles";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/PDFs/Open.pdf"


const HeroSection = () => {

  const handleDownload = () => {
    console.log("Download Currículo");

    // cria um elemento de link
    const link = document.createElement('a');
    link.href = CV
    link.download = 'curriculoDevFlavio.pdf'; // Define o atributo de download para especificar o nome do arquivo.
    // Adicione o link ao corpo do texto
    document.body.appendChild(link);
    // Acionar o evento de clique
    link.click();
    // Remover o link do corpo
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = 'f.rodrigues0996@hotmail.com';
    const subject = 'Portifolio';
    const body = 'Olá Flavio! Analisamos seu portifólio ....';

    const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailToLink);
  };
    
  return (
    <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box position="relative">
                  <Box position="absolute" width={"150%"} top={-100} right={0}>
                    <AnimatedBackground />
                  </Box>
                  <Box position="relative" textAlign="center">
                    <StyledImg src={Avatar1} />
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Flavio Rodrigues</Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm Dev FullStack</Typography>
                <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <StyledButton onClick={() => handleDownload()}>
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <StyledButton onClick={() => handleEmail()}>
                      <MailOutlineIcon />
                      <Typography>Contact Me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>              
            </Grid>
          </Container>
        </StyledHero>
    </>
  )
}

export default HeroSection
