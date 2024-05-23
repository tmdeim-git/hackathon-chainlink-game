import "../style/loginPage.css";
import { useNavigate } from "react-router-dom";
import { useActiveWallet } from "thirdweb/react";

export function LoginPage() {
  const navigate = useNavigate();
  const wallet = useActiveWallet();

  return (
    <div className="login-page">
      <h1 className="title">Three Piece</h1>

      {wallet && (
        <button
          onClick={() => navigate("/game")}
          style={{ marginTop: "100px" }}
        >
          Aller au jeu
        </button>
      )}
    </div>
  );
}
