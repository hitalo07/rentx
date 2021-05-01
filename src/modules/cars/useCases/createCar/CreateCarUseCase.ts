import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface iRequest {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  category_id: string
}

// @injectable()
class CreateCarUseCase {

  constructor (
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}
  
  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: iRequest): Promise<Car> {

    const carsAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate)

    if(carsAlreadyExists) {
      throw new AppError("Cars already exists")
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    })

    return car
  }
}

export { CreateCarUseCase }