import React from "react";
import "./loginPage.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useActiveWallet } from "thirdweb/react";


export function LoginPage() {
    const wallet = useActiveWallet();
    const navigate = useNavigate();
    useEffect(() => {
        if (wallet) {
            navigate('/game');
        }
    }, [wallet]);

    const handleNavigateToGame = () => {
        if (wallet) {
            navigate('/game');
        } else {
            alert("Veuillez vous connecter")
        }
    }

    return (
        <div className="login-page">
            <h1 className="title">Three Piece</h1>
            <button onClick={handleNavigateToGame} style={{ marginTop: '100px' }}>
                Aller au jeu
            </button>
        </div >
    );
}
