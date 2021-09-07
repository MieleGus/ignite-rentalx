import { ICreateSpecificationsRepository } from "../repositores/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(
        private createSpecificationRepository: ICreateSpecificationsRepository
    ) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.createSpecificationRepository.findByName(
            name
        );

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists");
        }

        this.createSpecificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
