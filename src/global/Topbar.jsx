import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import {InputBase} from '@mui/material';
import {DarkMode, LightMode, Notifications, Person, Search, Settings} from "@mui/icons-material";
// import 

function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            <Box display='flex' backgroundColor={colors.primary[400]}  borderRadius='3px'>
                <InputBase sx={{ml:2, flex: 1}} />
                <IconButton type='button' sx={{p:1}}>
                    <Search />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display='flex' backgroundColor={colors.primary[400]}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <LightMode />
                    ) : ( 
                        <DarkMode />
                    )}
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton>
                    <Person />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;