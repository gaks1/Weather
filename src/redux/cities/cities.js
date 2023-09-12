// actions/flightActions.js

export const GET_FLIGHTS_REQUEST = 'GET_FLIGHTS_REQUEST';
export const GET_FLIGHTS_SUCCESS = 'GET_FLIGHTS_SUCCESS';
export const GET_FLIGHTS_FAILURE = 'GET_FLIGHTS_FAILURE';

export const getFlightsRequest = () => ({
  type: GET_FLIGHTS_REQUEST
});

export const getFlightsSuccess = (flights) => ({
  type: GET_FLIGHTS_SUCCESS,
  payload: flights
});

export const getFlightsFailure = (error) => ({
  type: GET_FLIGHTS_FAILURE,
  payload: error
});

