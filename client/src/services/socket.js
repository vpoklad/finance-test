import { io } from 'socket.io-client';
const ENDPOINT = process.env.REACT_APP_SOCKET_ENPOINT || 'wss://localhost:4000';
const socket = io(ENDPOINT);

export default socket;
