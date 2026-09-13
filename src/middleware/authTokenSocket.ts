import { Server } from "socket.io";
import { CustomError } from "../helper/cutomError";
import { parseCookie } from "cookie";
import jwt from "jsonwebtoken";
import { envs } from "../helper/envs";
import type { Payload } from "../types/jwt.payload";

export const AuthTokenSocket = (io: Server) => {
  io.use((socket, next) => {
    const cookies = parseCookie(
      socket.handshake.headers.cookie ?? ""
    );

    const token = cookies.token;

    if (!token) {
      return next(new CustomError(401, "no token"));
    }

    try {
      const payload = jwt.verify(
        token,
        envs.jwt_secret
      ) as Payload;

      socket.data.user = payload;

      next();
    } catch {
      next(new CustomError(401, "token no valido"));
    }
  });
};