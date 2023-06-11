import Customer from "../../Domain/Customer";

export default class CustomerDto {
    Id: number;
    Username: string;
    FullName: string;
    Email: string;
    DateOfBirth: Date;

    constructor(customer: Customer) {
        this.Id = customer.Id;
        this.FullName = customer.FullName;
        this.Email = customer.Email;
        this.Username = customer.Username;
        this.DateOfBirth = customer.DateOfBirth;
    }
}
