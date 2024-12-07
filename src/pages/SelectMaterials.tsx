import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText, Box, Typography, Paper } from "@mui/material";
import * as Layouts from "components/layouts/Index"
import { Material } from "models/Types";


const materials: Material[] = [
  { id: 1, title: "JavaScript", pdfUrl: "/materials/js.pdf" },
  { id: 2, title: "2", pdfUrl: "/usa/usa_syun_te.png" },
  { id: 3, title: "3", pdfUrl: "/usa/usa_niko_te.png" },
];

const SelectMaterials: React.FC = () => {
  const navigate = useNavigate();

  const handleMaterialClick = (material: Material) => {
    navigate(`/material/${material.id}`, { state: material }); 
  };

  return (
    <div>
      <Layouts.Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          教材リスト
        </Typography>

        <Paper elevation={3} sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
          <List>
            {materials.map((material) => (
              <ListItem key={material.id} disablePadding>
                <ListItemButton onClick={() => handleMaterialClick(material)}>
                  <ListItemText primary={material.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </div>
  );
};

export default SelectMaterials;
