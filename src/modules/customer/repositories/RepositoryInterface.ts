import {CustomerInterface} from "../../../domain/CustomerInterface";

export interface RepositoryInterface {
    create: (customer: CustomerInterface) => Promise<RepositoryInterface>;

    getById: (id: string) => Promise<CustomerInterface|undefined>;

    get: () => Promise<CustomerInterface[]>

    delete: (id: string) => Promise<boolean>
}