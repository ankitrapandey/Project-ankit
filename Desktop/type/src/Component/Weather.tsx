import React, { Component } from 'react';
import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

interface WeatherState {
  location: string;
  weatherData: any;
  loading: boolean;
  error: string | null;
}

class Weather extends Component<{}, WeatherState> {
  state: WeatherState = {
    location: '',
    weatherData: null,
    loading: false,
    error: null,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ location: event.target.value });
  };

  fetchWeatherData = async () => {
    const { location } = this.state;
    const API_KEY = 'c2a623add98448cfa4272716240806';
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

    this.setState({ loading: true, error: null });

    try {
      const response = await axios.get(url);
      this.setState({ weatherData: response.data, loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to fetch weather data', loading: false });
    }
  };

  render() {
    const { location, weatherData, loading, error } = this.state;

    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Weather App
        </Typography>
        <TextField
          label="Enter Location"
          variant="outlined"
          value={location}
          onChange={this.handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.fetchWeatherData} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Get Weather'}
        </Button>
        {error && <Typography color="error">{error}</Typography>}
        {weatherData && (
          <div>
            <Typography variant="h6">Location: {weatherData.location.name}</Typography>
            <Typography variant="body1">Temperature: {weatherData.current.temp_c}°C</Typography>
            <Typography variant="body1">Condition: {weatherData.current.condition.text}</Typography>
          </div>
        )}
      </Container>
    );
  }
}

export default Weather;
