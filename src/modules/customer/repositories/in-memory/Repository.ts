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

    async getById(id: string): Promise<CustomerInterface|undefined> {
        return this.customers.find(customer => customer.id === id);
    }
}