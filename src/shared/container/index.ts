import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositores/ICategoriesRepository";

import { CategoriesRepository } from "../../modules/cars/repositores/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
