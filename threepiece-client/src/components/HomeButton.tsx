import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledImage = styled("img")({
  width: "40px",
  height: "40px",
  marginRight: "8px",
  borderRadius: "50%",
});

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
});

interface HomeButtonProps {
  style?: React.CSSProperties;
}

const HomeButton: React.FC<HomeButtonProps> = ({ style }) => {
  return (
    <Link to="/login" style={{ textDecoration: "none" }}>
      <Container style={style}>
        <StyledImage src={"../src/assets/homeIcon.jpg"} alt="Home" />
        <Typography
          variant="h6"
          component="div"
          style={{
            fontFamily: '"VT323", monospace',
            fontSize: "36px",
            color: "#FFFFFF",
            lineHeight: "1.5",
          }}
        >
          Three Piece
        </Typography>
      </Container>
    </Link>
  );
};

export default HomeButton;
