import React from "react";
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar} from "@mui/material";
import './Navbar.css'

function Navbar(){
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{ backgroundColor: 'brown' }}>
                <Toolbar variant="dense">
                    <h3 color="inherit">
                       Liste des arbres de Paris
                    </h3>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar;