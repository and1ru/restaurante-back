import type { Server } from "socket.io";

let io: Server;

export const initSocket = (server: Server) => {
    io = server;
};

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.IO has not been initialized");
    }

    return io;
};