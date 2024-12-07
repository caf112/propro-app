import React, { useState } from "react";
import { AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText, Box, Paper } from "@mui/material";
import * as Layouts from "components/layouts/Index";

type Material = {
  id: number;
  title: string;
  pdfUrl: string;
};

const materials: Material[] = [
  { id: 1, title: "JavaScript", pdfUrl: "/materials/js.pdf" },
  { id: 2, title: "Material 2", pdfUrl: "/materials/material2.pdf" },
  { id: 3, title: "Material 3", pdfUrl: "/materials/material3.pdf" },
];

const LearnMaterials: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  return (
    <Box>
      {/* ヘッダー */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            教材ページ
          </Typography>
        </Toolbar>
      </AppBar>

      {/* メインコンテンツ */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          教材リスト
        </Typography>

        {/* 教材リスト */}
        <Paper elevation={3} sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
          <List>
            {materials.map((material) => (
              <ListItem key={material.id} disablePadding>
                <ListItemButton onClick={() => setSelectedMaterial(material)}>
                  <ListItemText primary={material.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* 選択された教材 */}
        {selectedMaterial && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              選択された教材: {selectedMaterial.title}
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <iframe
                src={selectedMaterial.pdfUrl}
                style={{ width: "100%", height: "800px" }}
                title={selectedMaterial.title}
              />
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LearnMaterials;
