import React from 'react';
import { Card, Typography, Grid, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { generateCompleteDataset } from '../utils/dataGenerator';

const CustomerJourney = () => {
  const data = generateCompleteDataset();
  const { journeys } = data;

  // Get a sample journey for display
  const sampleJourney = journeys[0];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Customer Journey Analysis
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Journey Overview
            </Typography>
            <Typography variant="body1" gutterBottom>
              Customer ID: {sampleJourney.customerId}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Start Date: {new Date(sampleJourney.startDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Converted: {sampleJourney.converted ? 'Yes' : 'No'}
            </Typography>
            {sampleJourney.converted && (
              <>
                <Typography variant="body1" gutterBottom>
                  Revenue: ${sampleJourney.revenue}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Purchase Date: {new Date(sampleJourney.purchaseDate).toLocaleDateString()}
                </Typography>
              </>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Touchpoints
            </Typography>
            <Timeline>
              {sampleJourney.touchpoints.map((touchpoint, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color={touchpoint.interaction === 'click' ? 'primary' : 'grey'} />
                    {index < sampleJourney.touchpoints.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="subtitle2">
                      {touchpoint.channel}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(touchpoint.timestamp).toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {touchpoint.interaction} • {touchpoint.duration}s • {touchpoint.deviceType}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerJourney; 