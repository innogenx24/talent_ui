import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Switch,
} from "@mui/material";

const dummyData = {
  experienceRange: "3-5 years",
  description: "Experience in frontend development with React and Redux.",
  activeStatus: true,
};

const EditExperienceForm = ({ existingData = dummyData, onSave }) => {
  const [experienceRange, setExperienceRange] = useState("");
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);

  useEffect(() => {
    if (existingData) {
      setExperienceRange(existingData.experienceRange || "");
      setDescription(existingData.description || "");
      setActiveStatus(existingData.activeStatus || false);
    }
  }, [existingData]);

  const handleSaveExperience = () => {
    const updatedExperience = {
      experienceRange,
      description,
      activeStatus,
    };
    onSave(updatedExperience);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "200%", md: "80%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "50%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Edit Experience Range:
            </Typography>

            <TextField
              fullWidth
              label="Experience Range*"
              placeholder="Enter Experience Range"
              value={experienceRange}
              onChange={(e) => setExperienceRange(e.target.value)}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card elevation={0} sx={{ minWidth: { xs: "100%", md: "30%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">Control:</Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch
                checked={activeStatus}
                onChange={(e) => setActiveStatus(e.target.checked)}
                color="success"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          onClick={handleSaveExperience}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditExperienceForm;
