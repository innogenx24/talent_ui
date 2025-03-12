import React from "react";
import { Card, CardContent, TextField, Typography, Switch, FormControlLabel, Button, Grid, Box } from "@mui/material";

export const OffBoardingReasonsEdit = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Left Form - Edit OffBoarding Reason */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Edit OffBoarding Reason
              </Typography>
              <TextField
                label="OffBoarding Reason*"
                placeholder="Enter OffBoarding Reason"
                fullWidth
                margin="normal"
                value="Voluntary Resignation"
              />
              <TextField
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                value="Employee resigned due to personal reasons."
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
