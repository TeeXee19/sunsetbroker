import axios from "axios"
import { type ContactServiceInterface, ContactService } from "./ContactService"

export interface ServiceProviderInterface {
    contact: ContactServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const client = axios.create({
        baseURL: 'https://democrm.interranetworks.com/sme/custom/customAPIs/clients/base/api'
    })
    return {
        contact: new ContactService(client),
    }
}