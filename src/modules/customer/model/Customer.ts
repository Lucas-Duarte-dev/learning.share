import {CustomerInterface} from "../../../domain/CustomerInterface";
import {Column, PrimaryColumn} from "typeorm";
import {v4 as uuidV4} from "uuid"

class Customer implements CustomerInterface {
    @PrimaryColumn()
    id?: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    updated_at: Date;

    @Column()
    created_at: Date;

    constructor() {
        if (this.id) {
            this.id = uuidV4();
        }
    }

}