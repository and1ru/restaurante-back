import type { Server } from "socket.io";

// io sera una instancia de server
// inicialmente es de valor undefined 
// pero se espera pasar un valor Server
let io: Server;

// creamos una funcion para poder utilizarla desde cualquier parte de la aplicacion
// esta funcion se llamara al inicio de la ruta de todas los eventos de socket, para que asi este inicializada desde un inicio
export const initSocket = (server: Server) => {
    // sele pasa el valor a la variable io, deja de ser undefined y ahora es de tipo server
    io = server;
};

// esta funcion es para validar el valor de la inicializacion y que se pueda usar en toda la aplicacion
export const getIO = () => {
    // comprueba que el valor no sea undefined
    if (!io) {
        throw new Error("Socket.IO has not been initialized");
    }

    // devuelve la instancia para poder ser usada en cualquier parte de la aplicacion
    return io;
};