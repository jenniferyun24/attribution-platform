import React from 'react';
import { Card, Typography, Grid, Box, Chip } from '@mui/material';
import { generateCompleteDataset } from '../utils/dataGenerator';

const AIInsights = () => {
  const data = generateCompleteDataset();
  const { aiInsights } = data;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        AI Insights
      </Typography>
      <Grid container spacing={3}>
        {aiInsights.map((insight, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  {insight.title}
                </Typography>
                <Chip 
                  label={insight.priority.toUpperCase()} 
                  color={getPriorityColor(insight.priority)}
                  size="small"
                />
              </Box>
              <Typography variant="body1" gutterBottom>
                {insight.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Impact: {insight.impact}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Action: {insight.action}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Confidence: {insight.confidence}%
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIInsights; 