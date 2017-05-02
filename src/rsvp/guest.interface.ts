export interface Guest {
    firstName: string; // required with minimum 5 chracters
    lastName: string; // required with minimum 5 chracters
    phone: number;
    email: string;
    address?: {
        street?: string; // required
        postcode?: string;
    }
}
