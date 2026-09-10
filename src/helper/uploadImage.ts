import type { UploadApiResponse } from 'cloudinary'
import v2 from './cloudinary.config'

export const uploadImage = (image: Buffer): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
        const stream = v2.uploader.upload_stream({resource_type: "image"},
            (error, result) => {
                if (error) {
                    reject(error)
                    return
                }

                if (!result) {
                    reject(new Error("no result"))
                    return
                }

                resolve(result)
            })
        stream.end(image)
    })
}