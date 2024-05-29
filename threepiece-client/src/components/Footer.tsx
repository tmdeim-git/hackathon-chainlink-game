import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#333",
  color: "white",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
}));

const TeamMembers = styled(Box)(({ }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "nowrap", // Ensures items do not wrap
  overflowX: "auto", // Allows scrolling if content overflows
  fontSize: "0.875em",
}));

const TeamMember = styled(Box)(({ }) => ({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap", // Prevents text from wrapping
  "&:not(:last-child)::after": {
    content: '""',
    margin: "0 5px",
  },
}));

const GitHubLink = styled(Link)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: "white",
  display: "flex",
  alignItems: "center",
}));

const Footer: React.FC = () => {
  const teamMembers = [
    { name: "Mohamed Amine Elarabi", github: "https://github.com/TheVortex8" },
    { name: "Mohammed Larbi Turki", github: "https://github.com/tmdeim-git" },
    { name: "Raul Andrei Sima", github: "https://github.com/RaulSima" },
    { name: "Jason Brutus", github: "https://github.com/BlastChaos" },
    { name: "Abdul Rahman Zahid", github: "https://github.com/LLAbdul" },
  ];

  return (
    <FooterContainer>
      <Box flex={1}>
        <TeamMembers>
          {teamMembers.map((member) => (
            <TeamMember key={member.name}>
              <Typography variant="body1">{member.name}</Typography>
              <GitHubLink href={member.github} target="_blank" rel="noopener">
                <IconButton aria-label={`${member.name}'s GitHub`} size="small">
                  <GitHub />
                </IconButton>
              </GitHubLink>
            </TeamMember>
          ))}
        </TeamMembers>
      </Box>
      <Box flex={1}>
        <Typography variant="body1">About the Project</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
          convallis velit, eu auctor lacus vehicula sit amet.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
