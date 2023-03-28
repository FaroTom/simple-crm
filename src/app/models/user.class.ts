export class User {
    fullName: string;
    birthDate: number;
    street: string;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.fullName = obj ? obj.fullName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJSON() {
        return {
            fullName: this.fullName,
            birthDate: this.birthDate,
            street: this.street,
            city: this.city,
            email: this.email,
        }
    }
}