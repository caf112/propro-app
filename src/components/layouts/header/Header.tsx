import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const HeaderWithToggleMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const navigate = useNavigate();

  const menuItems = [
    { text: 'ホーム', link: '/' },
    { text: 'マイページ', link: '/MyPage' },
    { text: '教材', link: '/SelectMaterials' },
    { text: '設定', link: '/Setting' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
            onClick={() => {
                navigate("/");
            }} 
          >
            <HomeIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRO×PRO
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(!drawerOpen)} 
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right" 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)} 
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              component="button"
              key={index}
              onClick={() => {
                setDrawerOpen(false); 
                navigate(item.link);
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HeaderWithToggleMenu;



// import { Link } from "react-router-dom"

// const Header = () => {
//     return (
//         <div>
//             <Link to="/"><img src="/usa/usa_syun_te.png" alt="header-logo" style={{ width: '100px', height: 'auto' }} /></Link><br></br>{/* iconにする */}
//             <Link to="/" className="button">ホーム画面へ</Link><br></br>{/* CSSでLinkをボタンに変更する */}
//             <Link to="/" className="button">メニュー</Link> {/*ハンバーガーメニューにする*/}
            
//         </div>
//     );
// };

// export default Header;
