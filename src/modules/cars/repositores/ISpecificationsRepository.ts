import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    description: string;
    name: string;
}

interface ICreateSpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    list(): Specification[];
    findByName(name: string): Specification;
}
export { ICreateSpecificationDTO, ICreateSpecificationsRepository };
