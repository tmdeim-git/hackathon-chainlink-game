import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Connect from './thirdweb/auth/Connect';

export function Navbar() {

    return (
        <AppBar position="static" style={{ backgroundColor: '#333', padding: '0 1rem' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Typography variant="h6" component="div">
                            Three Piece
                        </Typography>
                    </Link>
                </Box>
                <Connect />
            </Toolbar>
        </AppBar>
    );
}