import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper, Link } from "@mui/material";
import { styled } from "@mui/system";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify-icons/simple-icons/react";
import solidityIcon from "@iconify-icons/simple-icons/solidity";
import { GitHub } from "@mui/icons-material";
import tsIcon from "@iconify-icons/simple-icons/typescript";
import { Chainlink, Polygon } from "@thirdweb-dev/chain-icons";
import "../style/loginPage.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#333333",
  color: "white",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  maxWidth: "1000px",
  margin: "20px auto",
}));

const GitHubLink = styled(Link)(({}) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
}));

export function LoginPage() {
  return (
    <div className="login-page">
      <StyledPaper elevation={3}>
        <Typography variant="h2" component="h2" gutterBottom fontSize={45}>
          ThreePiece 🏝️
        </Typography>
        <Typography variant="body1" component="p" fontSize={30}>
          Welcome to ThreePiece, a world of lands full of mysteries! 🌍
        </Typography>
        <Accordion
          sx={{
            backgroundColor: "grey",
            color: "white",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              variant="body1"
              component="p"
              align="left"
              fontSize={20}
              color="white"
            >
              ABOUT THE GAME 🎮
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="ul" align="left" fontSize={16}>
              <li>🗺️ Explore and acquire lands. </li>
              <li>🪵 Exploit resources. </li>
              <li>🪓 Craft valuable items.</li>
              <li>🛒 Trade your assets in the marketplace.</li>
              <li>🎁 Claim loot boxes.</li>
              <li>🗡️ ATTACK LANDS!</li>
              <li>
                🌧️ Watch out, some random global events may affect your lands!
              </li>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "grey",
            color: "white",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              variant="body1"
              component="p"
              align="left"
              fontSize={20}
            >
              HACKATHON DETAILS 💻
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="ul" align="left" fontSize={16}>
              <li>
                {" "}
                <Polygon
                  style={{ width: "1em", height: "1em", marginRight: "7px" }}
                />{" "}
                Sponsor: Best MVP of Polygon Cardona (fully deployed on "Polygon
                zkEVM Cardona Testnet").{" "}
              </li>
              <li>
                {" "}
                <Chainlink
                  style={{
                    width: "1em",
                    height: "1em",
                    marginRight: "7px",
                  }}
                />{" "}
                Chainlink usage:
              </li>
              <Typography component="ul" align="left" fontSize={16}>
                <li>
                  {" "}
                  🎲 Chainlink VRF: Random numbers generated onchain using a
                  smart contract subscribed to Chainlink VRF.
                </li>
                <li>
                  {" "}
                  🤖 Chainlink Automation: Attached to our Chainlink VRF smart
                  contract to generate random events (ex: raining).
                </li>
              </Typography>
              <li>
                ⌨️ Tech stack: React | TypeScript | Solidity{" "}
                <Icon icon={reactIcon} /> <Icon icon={tsIcon} />{" "}
                <Icon icon={solidityIcon} />{" "}
              </li>
              <li>
                <GitHubLink
                  style={{ display: "inline-block" }}
                  href="https://github.com/tmdeim-git/hackathon-chainlink-game/tree/main"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHub
                    style={{
                      marginRight: "5px",
                      position: "relative",
                      bottom: "-5px",
                    }}
                  />
                  <u>Source code</u>
                </GitHubLink>
              </li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "grey",
            color: "white",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography
              variant="body1"
              component="p"
              align="left"
              fontSize={20}
            >
              WEB3 DETAILS 🔗
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="ul" align="left" fontSize={16}>
              <li>
                📔 Base contracts modified: "NFT Drops" for Land, Player, Wood,
                Wood Sword and "MarketplaceV3" (all by Thirdweb).{" "}
              </li>
              <li>📝 New contracts: RNG with VRF. </li>
              <li>
                🎩 Admin: Special view for administrator to reset NFTs and
                update metadata (single or in batch).{" "}
              </li>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="footer-section">
          <Typography
            variant="body1"
            component="p"
            align="left"
            fontSize={14}
            className="footer-text"
          >
            SPECIAL THANKS 👍: Chainlink/QuickNode docs | Polygon/Thirdweb
            Support Teams
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="left"
            fontSize={14}
            className="footer-text"
          >
            LIBRARIES 📚: Thirdweb SDK, Material UI, React Konva, Jotai
          </Typography>
        </div>
      </StyledPaper>
    </div>
  );
}
