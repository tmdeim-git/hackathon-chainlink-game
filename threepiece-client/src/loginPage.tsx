import { useEffect } from "react";
import "./loginPage.css";
import { useNavigate } from 'react-router-dom';
import { useActiveWallet } from "thirdweb/react";

let didRedirect = false;

export function LoginPage() {
    const connected = useActiveWallet() != null;
    const navigate = useNavigate();

    useEffect(() => {
        if (connected && !didRedirect) {
            navigate("/game")
            didRedirect = true;
        }
    }, [connected])

    // go to game
    const handleNavigateToGame = () => {
        if (connected) {
            navigate('/game');
        } else {
            alert("Please connect first");
        }
    }

    return (
        <div className="login-page">
            <h1 className="title">Three Piece</h1>
            <button hidden={!connected} onClick={handleNavigateToGame} style={{ marginTop: '100px' }}>
                Aller au jeu
            </button>
        </div >
    );
}
