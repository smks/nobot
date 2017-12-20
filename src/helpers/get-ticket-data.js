import axios from 'axios';
import { endpoint } from './../../config/';

const getTicketData = ticketId => axios.get(endpoint.replace('{ticketId}', ticketId));

export default getApiData;