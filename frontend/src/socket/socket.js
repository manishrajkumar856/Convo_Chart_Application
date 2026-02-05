import { io } from "socket.io-client";

const SOCKET_URL = "https://convo-chart-application-1.onrender.com/";

export const socket = io(SOCKET_URL, {
    autoConnect: false,
    transports: ["websocket"],
})
