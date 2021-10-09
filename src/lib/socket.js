import { io } from 'socket.io-client';
export const publicSocket = io(process.env.REACT_APP_BROADCAST_URL, { path: "/public/" });
