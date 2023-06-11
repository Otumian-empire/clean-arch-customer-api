import CreateCustomerRequest from "../Contract/Requests/CreateCustomerRequest";
import UpdateCustomerRequest from "../Contract/Requests/UpdateCustomerRequest";
import Customer from "../Domain/Customer";

export default interface ICustomerRepository {
    Create(customer: CreateCustomerRequest): Promise<Customer>;
    Get(id: number): Promise<Customer | null>;
    GetAll(): Promise<Customer[]>;
    Update(customer: UpdateCustomerRequest): Promise<Customer | null>;
    Delete(id: number): Promise<void>;
}
