import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // React Routerを使用

const IconArray = () => {
  const navigate = useNavigate();

  // ページ遷移用関数
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        position: 'absolute', // デスクトップ画面の左上に固定配置
        top: 10,
        left: 10,
        display: 'flex',
        flexDirection: 'column', // 縦方向に並べる
        alignItems: 'flex-start', // 左揃え
        gap: 2, // アイコン間のスペース (theme.spacing)
      }}
    >
      <Box
        component="img"
        src="/desktop/gomibako_icon.png" // publicからの相対パス
        alt="マイページ"
        sx={{
          width: 64, // デスクトップアイコンのサイズ感
          height: 64,
          cursor: 'pointer',
        }}
        onClick={() => handleNavigation('/MyPage')} // ページ遷移
      />
      <Box
        component="img"
        src="/desktop/file_icon.png"
        alt="新規登録"
        sx={{
          width: 64,
          height: 64,
          cursor: 'pointer',
        }}
        onClick={() => handleNavigation('/Register')}
      />
      <Box
        component="img"
        src="/desktop/editor_icon.png"
        alt="ゲーム"
        sx={{
          width: 64,
          height: 64,
          cursor: 'pointer',
        }}
        onClick={() => handleNavigation('/ModeSelect')}
      />
    </Box>
  );
};

export default IconArray;
