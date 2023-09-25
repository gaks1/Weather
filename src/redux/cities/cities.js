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

export const fetchFlights = () => {
  return async (dispatch) => {
    dispatch(getFlightsRequest());

    const token = "YOUR_ACCESS_TOKEN_HERE"; // Retrieve this dynamically

    try {
      const response = await fetch('https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      dispatch(getFlightsSuccess(data.data));

    } catch (error) {
      dispatch(getFlightsFailure(error.message));
    }
  };
};
