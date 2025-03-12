import React from "react";
import { Card, CardContent, TextField, Typography, Switch, FormControlLabel, Button, Grid, Box } from "@mui/material";

export const OverallStatusEdit = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Left Form - Edit Overall Status */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Edit Overall Status
              </Typography>
              <TextField label="Overall Status*" fullWidth margin="normal" defaultValue="Shortlisted" />
              <TextField 
                label="Description" 
                fullWidth 
                margin="normal" 
                multiline 
                rows={3} 
                defaultValue="Candidate has been shortlisted for further process."
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
