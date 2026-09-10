import { v2 } from "cloudinary";
import { envs } from "./envs";

v2.config({
    cloud_name:envs.cl_cloud_name,
    api_key: envs.cl_api_key,
    api_secret: envs.cl_api_secret,
    secure:true
})

export default v2