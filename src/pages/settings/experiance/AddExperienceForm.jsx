import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Switch,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";


const AddExperienceForm = () => {
  const [experienceRange, setExperienceRange] = useState("");
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const navigate = useNavigate();
  const handleSaveExperience = async () => {
    setLoading(true);
    setError(null);

    const experienceData = {
      experience_range: experienceRange,
      description: description,
      active_status: activeStatus,
    };

    try {
      const response = await fetch("http://localhost:5000/api/experience-range/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceData),
      });

      if (!response.ok) {
        throw new Error("Failed to create experience range");
      }

      setExperienceRange("");
      setDescription("");
      setActiveStatus(true);
      navigate("/dashboard/settings/experience-range");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to save experience range. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "100%", md: "80%" } }}>
      <Typography variant="h5" textAlign="center" mb={2}>
        Add Experience Range
      </Typography>

      {error && <Typography color="error" align="center">{error}</Typography>}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Left Section - Create Experience Range */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "50%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Experience Range Details:
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

        {/* Right Section - Control */}
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

      {/* Save Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          onClick={handleSaveExperience}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Experience Range"}
        </Button>
      </Box>
    </Box>
  );
};

export default AddExperienceForm;
