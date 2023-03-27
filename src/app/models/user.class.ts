export class User {
    fullName: string;
    birthDate: number;
    street: string;
    city: string;

    constructor(obj?:any) {
        this.fullName = obj ? obj.fullName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.city = obj ? obj.city : '';
    }
}