import { Category } from "../model/Category";
import { Specification } from "../model/Specification";
import {
    ICreateSpecificationDTO,
    ICreateSpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ICreateSpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (item) => item.name === name
        );

        return specification;
    }
}

export { SpecificationsRepository };
