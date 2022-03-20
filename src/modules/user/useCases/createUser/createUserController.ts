import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";


export class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    async store(request: Request, response: Response) {
        
            const { name, email, password } = request.body;

            const createUserService = new CreateUserUseCase;

            const result = await createUserService.execute({ name, email, password });

            return response.json(result);
    }

}