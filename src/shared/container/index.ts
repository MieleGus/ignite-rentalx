import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositores/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositores/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositores/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositores/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
