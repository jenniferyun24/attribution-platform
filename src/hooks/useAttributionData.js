import { useState, useEffect } from 'react';
import {
  generateCompleteDataset,
  simulateRealTimeData
} from '../utils/dataGenerator';

export const useAttributionData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [realTimeMetrics, setRealTimeMetrics] = useState(null);

  // Initial data loading
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const completeDataset = generateCompleteDataset();
        setData(completeDataset);
        setRealTimeMetrics(simulateRealTimeData());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Real-time data simulation
  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      setRealTimeMetrics(simulateRealTimeData());
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return {
    data,
    loading,
    error,
    realTimeMetrics
  };
}; 