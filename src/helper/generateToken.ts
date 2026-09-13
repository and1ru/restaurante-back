import jwt from 'jsonwebtoken'
import type { Payload } from '../types/jwt.payload'
import { envs } from './envs'

export const generateToken = (payload:Payload) => {
    return jwt.sign(
        payload, 
        envs.jwt_secret,
        {
            expiresIn: "1h",
        }
    )
}