import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import type { Payload } from '../types/jwt.payload'
import { envs } from '../helper/envs'

export const authToken = (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.token
    if(!token){
        return res.status(400).json({message:"no token", success:false})
    }
    
    try {
        const verify = jwt.verify(token, envs.jwt_secret) as Payload

        req.user = verify

        next()
    } catch (error) {
        return res.status(400).json({message:"token no valido"})
    }
}