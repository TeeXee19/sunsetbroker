import type { AxiosInstance } from "axios";

export interface ContactInput {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    demo_date: string;
    description: string;
}
interface ContactResponse {
    body: string;
    message: string;
    code: number;
}

export interface ContactServiceInterface {
    contact(input: ContactInput): Promise<ContactResponse>
}

export class ContactService implements ContactServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async contact(input: ContactInput): Promise<ContactResponse> {
        try {
            const response = await this.client.post('/create/contact', input) 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
}