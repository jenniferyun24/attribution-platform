import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import TechnicalOverview from './TechnicalOverview';
import AttributionModels from './AttributionModels';
import AIInsights from './AIInsights';
import CustomerJourney from './CustomerJourney';

const AttributionPlatform = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Attribution Platform
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Technical Overview
            </Button>
            <Button color="inherit" component={Link} to="/attribution-models">
              Attribution Models
            </Button>
            <Button color="inherit" component={Link} to="/ai-insights">
              AI Insights
            </Button>
            <Button color="inherit" component={Link} to="/customer-journey">
              Customer Journey
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Box sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<TechnicalOverview />} />
              <Route path="/attribution-models" element={<AttributionModels />} />
              <Route path="/ai-insights" element={<AIInsights />} />
              <Route path="/customer-journey" element={<CustomerJourney />} />
            </Routes>
          </Box>
        </Container>
      </Box>
    </Router>
  );
};

export default AttributionPlatform; 