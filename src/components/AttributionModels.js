import React from 'react';
import { Card, Typography, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { generateCompleteDataset } from '../utils/dataGenerator';

const AttributionModels = () => {
  const data = generateCompleteDataset();
  const { attributionResults } = data;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Attribution Models
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Position-Based Attribution
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Channel</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(attributionResults.positionBased)
                    .sort(([, a], [, b]) => b - a)
                    .map(([channel, revenue]) => (
                      <TableRow key={channel}>
                        <TableCell>{channel}</TableCell>
                        <TableCell align="right">${Math.round(revenue)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Time Decay Attribution
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Channel</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(attributionResults.timeDecay)
                    .sort(([, a], [, b]) => b - a)
                    .map(([channel, revenue]) => (
                      <TableRow key={channel}>
                        <TableCell>{channel}</TableCell>
                        <TableCell align="right">${Math.round(revenue)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Data-Driven Attribution
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Channel</TableCell>
                    <TableCell align="right">Contribution</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(attributionResults.dataDriven)
                    .sort(([, a], [, b]) => b - a)
                    .map(([channel, contribution]) => (
                      <TableRow key={channel}>
                        <TableCell>{channel}</TableCell>
                        <TableCell align="right">${Math.round(contribution)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AttributionModels; 