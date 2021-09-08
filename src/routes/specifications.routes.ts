import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

// specificationsRoutes.get("/", (request, response) => {
//     const specifications = specificationRepository.list();
//     return response.status(201).json(specifications);
// });

export { specificationsRoutes };
