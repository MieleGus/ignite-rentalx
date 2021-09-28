import { CategoriesRepository } from "../../repositores/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

console.log("index creatxxxzzzzzzzxdaxxxxs");
// testar assim porem com network mde
export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository();

    const createCategoryUseCase = new CreateCategoryUseCase(
        categoriesRepository
    );

    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );

    return createCategoryController;
};
