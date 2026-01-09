'use client';

import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

const ApiStatus = styled.span<{ $connected: boolean }>`
  color: ${(props) => (props.$connected ? '#4caf50' : '#f44336')};
  font-weight: bold;
`;

interface HealthResponse {
  status: string;
  timestamp: string;
}

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'disconnected'>('loading');
  const [apiMessage, setApiMessage] = useState<string>('');

  const checkApiHealth = async () => {
    setApiStatus('loading');
    try {
      const response = await fetch('/api/health');
      if (response.ok) {
        const data: HealthResponse = await response.json();
        setApiStatus('connected');
        setApiMessage(`API is ${data.status} - ${data.timestamp}`);
      } else {
        setApiStatus('disconnected');
        setApiMessage('API returned an error');
      }
    } catch {
      setApiStatus('disconnected');
      setApiMessage('Could not connect to API. Make sure the backend is running.');
    }
  };

  useEffect(() => {
    checkApiHealth();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Interview Practice Template
        </Typography>

        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Next.js + Nest.js Full-Stack Starter
        </Typography>

        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom>
            Backend Status
          </Typography>

          {apiStatus === 'loading' ? (
            <CircularProgress size={24} />
          ) : (
            <>
              <Typography variant="body1" gutterBottom>
                API: <ApiStatus $connected={apiStatus === 'connected'}>
                  {apiStatus === 'connected' ? 'Connected' : 'Disconnected'}
                </ApiStatus>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {apiMessage}
              </Typography>
            </>
          )}

          <Button variant="contained" onClick={checkApiHealth}>
            Check Connection
          </Button>
        </StyledPaper>

        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom>
            Getting Started
          </Typography>
          <Typography variant="body1" paragraph align="left">
            This template is ready for your interview practice. Here are some ideas:
          </Typography>
          <Box component="ul" sx={{ textAlign: 'left', pl: 2 }}>
            <li>Build a todo app with CRUD operations</li>
            <li>Create a user authentication system</li>
            <li>Implement real-time features with WebSockets</li>
            <li>Build a data visualization dashboard</li>
            <li>Create a file upload system</li>
          </Box>
        </StyledPaper>
      </Box>
    </Container>
  );
}
