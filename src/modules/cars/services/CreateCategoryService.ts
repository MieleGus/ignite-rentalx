import { ICategoriesRepository } from "../repositores/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
// camada de domínio não precisa conhecer da camada de infra
class CreatedCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(
            name
        );

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreatedCategoryService };
