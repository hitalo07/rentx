import { inject, injectable } from "tsyringe"
import { AppError } from "@shared/errors/AppError"
import { ISpecificationsRepository } from "@modules/cars/repositories/iSpecificationsRepository"

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor (
    @inject("SpecificationsRepository")
    private especificationsRepository: ISpecificationsRepository
  ) {}

  async execute ({ name, description } : IRequest): Promise<void> {
    const specificationAlreadyExists = await this.especificationsRepository.findByName(name)

    if(specificationAlreadyExists) {
      throw new AppError("Specification already exists!")
      
    }

    await this.especificationsRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase }