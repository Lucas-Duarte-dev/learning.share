import {CustomerInterface} from "../../../domain/CustomerInterface";

export interface RepositoryInterface {
    getById: (id: string) => Promise<CustomerInterface|undefined>
}