import React from "react";
import { Card, CardContent, TextField, Typography, Switch, FormControlLabel, Button, Grid, Box } from "@mui/material";

export const AvailabilityEdit = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Left Form - Edit Availability Status */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Edit Availability Status
              </Typography>
              <TextField
                label="Availability Status*"
                fullWidth
                margin="normal"
                defaultValue="Available"
              />
              <TextField
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                defaultValue="Candidate is available for new opportunities."
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Form - Control */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Control:
              </Typography>
              <FormControlLabel control={<Switch defaultChecked />} label="Active Status*" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button - Centered at Bottom */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ px: 40 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
