import {RepositoryInterface} from "../RepositoryInterface";
import {CustomerInterface} from "../../../../domain/CustomerInterface";

export class Repository implements RepositoryInterface {
    private customers: CustomerInterface[] = [];
    private static instance: Repository;

    constructor() {
        this.customers = [];
    }

    static getInstance(): Repository {
        if(!Repository.instance) {
            Repository.instance = new Repository();
        }

        return Repository.instance;
    }

    async create(customer: CustomerInterface): Promise<RepositoryInterface> {
        this.customers.push(customer);

        return this;
    }

    async delete(id: string): Promise<boolean> {
        const customer = this.customers.filter(customer => customer.id !== id);

        this.customers = customer;

        return !this.customers.find(customer => customer.id === id);
    }

    async get(): Promise<CustomerInterface[]> {
        return this.customers;
    }

    async getById(id: string): Promise<CustomerInterface|undefined> {
        return this.customers.find(customer => customer.id === id);
    }
}