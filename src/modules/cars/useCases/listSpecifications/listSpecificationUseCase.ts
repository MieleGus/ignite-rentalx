import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ISpecificationsRepository } from "../../repositores/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) {}

    async execute(): Promise<Category[]> {
        const specifications = await this.specificationsRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
