import React from 'react';
import { Card, Typography, Grid, Box } from '@mui/material';
import { generateCompleteDataset } from '../utils/dataGenerator';

const TechnicalOverview = () => {
  const data = generateCompleteDataset();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Technical Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              System Architecture
            </Typography>
            <Typography variant="body1">
              • React-based Single Page Application
              • Material-UI for component library
              • Data generation and ML models in JavaScript
              • Real-time data simulation
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Data Processing
            </Typography>
            <Typography variant="body1">
              • Customer journey tracking
              • Multi-channel attribution
              • Real-time analytics
              • ML-powered insights
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              System Statistics
            </Typography>
            <Typography variant="body1">
              • Total Customers: {data.summary.totalCustomers}
              • Conversion Rate: {data.summary.conversionRate}
              • Average Customer Value: ${data.summary.avgCustomerValue}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TechnicalOverview; 