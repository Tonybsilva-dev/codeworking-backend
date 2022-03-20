import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";


export class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    async store(request: Request, response: Response) {
        
            const { name, email, password } = request.body;

            const createUserUsecase = new CreateUserUseCase;

            const result = await createUserUsecase.execute({ name, email, password });

            return response.json(result);
    }

}