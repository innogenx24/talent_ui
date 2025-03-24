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
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../../../api/Api_url";

const EditExperienceForm = () => {
  const [experienceRange, setExperienceRange] = useState("");
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch existing experience range data based on ID
  useEffect(() => {
    const fetchExperienceRange = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/experience-range/${id}`);
        if (!response.ok) throw new Error("Failed to fetch experience range details");
        const data = await response.json();

        setExperienceRange(data.experience_range || "");
        setDescription(data.description || "");
        setActiveStatus(data.active_status || false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchExperienceRange();
  }, [id]);

  // Handle updating experience range details
  const handleSaveExperience = async () => {
    const updatedExperience = {
      experience_range: experienceRange,
      description: description,
      active_status: activeStatus,
    };

    try {
      const response = await fetch(`${API_URL}/experience-range/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExperience),
      });

      if (!response.ok) {
        throw new Error("Failed to update experience range");
      }
      navigate("/dashboard/settings/experience-range");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to update experience range. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "100%", md: "80%" } }}>
      <Typography variant="h5" textAlign="center" mb={2}>
        Edit Experience Range
      </Typography>

      {loading && <Typography align="center">Loading...</Typography>}
      {error && <Typography color="error" align="center">{error}</Typography>}

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
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </Box>
    </Box>
  );
};

export default EditExperienceForm;