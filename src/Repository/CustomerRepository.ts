import { DataSource, Repository } from "typeorm";

import CreateCustomerRequest from "../Contract/Requests/CreateCustomerRequest";
import UpdateCustomerRequest from "../Contract/Requests/UpdateCustomerRequest";
import Customer from "../Domain/Customer";
import ICustomerRepository from "./ICustomerRepository";

export default class CustomerRepository implements ICustomerRepository {
    private _repository: Repository<Customer>;

    // get the data source from the connection factory
    constructor(dataSource: DataSource) {
        this._repository = dataSource.getRepository(Customer);
    }

    async Delete(id: number): Promise<void> {
        const result = await this._repository.findOne({
            where: { Id: id },
        });

        if (result) {
            await this._repository.delete(result);
        }
    }

    async Update(customer: UpdateCustomerRequest): Promise<Customer | null> {
        const result = await this._repository.findOne({
            where: { Id: customer.Id },
        });

        if (result) {
            result.FullName = customer.FullName;
            result.Email = customer.Email;
            result.DateOfBirth = customer.DateOfBirth;

            await this._repository.save(result);
        }

        return result;
    }

    async GetAll(): Promise<Customer[]> {
        const result = await this._repository.find();
        return result;
    }

    async Get(id: number): Promise<Customer | null> {
        const result = await this._repository.findOne({ where: { Id: id } });
        return result;
    }

    async Create(customer: CreateCustomerRequest): Promise<Customer> {
        const result = await this._repository.save(customer);
        return result;
    }
}
