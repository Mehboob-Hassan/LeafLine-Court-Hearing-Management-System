import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../theme';
import { Link } from 'react-router-dom';
import { AssignmentLate, ContactsOutlined, HomeOutlined, MenuOutlined, Notifications, People, QuestionAnswer, Task } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

function Sidebar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu sx={{ position: 'fixed' }} iconShape='square'>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>Head</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>

                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb='25px' mt='30px'>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                                <img width='70px' height='70px' style={{ borderRadius: '50%', cursor: 'pointer' }} src={require(`../assets/mh.png`)} alt="" />
                            </Box>

                            <Box textAlign='center'>
                                <Typography variant='h4' color={colors.grey[100]} fontWeight='bold' sx={{ mt: '10px' }}>Mehboob Hassan</Typography>
                                <Typography variant='h5' color={colors.greenAccent[500]}>Department Head</Typography>
                            </Box>
                        </Box>
                    )}


                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Notifications'
                            to='/alerts'
                            icon={<Notifications />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Team'
                            to='/team'
                            icon={<People />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Discussion'
                            to='/discussion'
                            icon={<QuestionAnswer />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Solved Cases'
                            to='/solved'
                            icon={<Task />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Upcoming Cases'
                            to='/upcoming'
                            icon={<AssignmentLate />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar