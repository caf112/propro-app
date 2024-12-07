import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";
import { Material } from "models/Types";
import * as Layouts from "components/layouts/Index"

const LearnMaterial: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const material = location.state as Material; 

  if (!material) {
    return <Typography>教材が選択されていません。</Typography>;
  }

  return (
    <div>
      <Layouts.Header />
      <Box sx={{ p: 2 }}>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          戻る
        </Button>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 2 }}>
          {material.title}
        </Typography>

        <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
          <iframe
            src={material.pdfUrl}
            style={{ width: "100%", height: "800px" }}
            title={material.title}
            />
        </Paper>
      </Box>
    </div>
  );
};

export default LearnMaterial;
