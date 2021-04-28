import { inject, injectable } from "tsyringe"
import { ISpecificationsRepository } from "../../repositories/implementations/iSpecificationsRepository"

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

  execute ({ name, description } : IRequest): void {
    const specificationAlreadyExists = this.especificationsRepository.findByName(name)

    if(specificationAlreadyExists) {
      throw new Error("Specification already exists!")
      
    }

    this.especificationsRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase }