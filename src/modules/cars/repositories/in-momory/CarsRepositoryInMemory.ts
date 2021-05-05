import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO"
import { Car } from "@modules/cars/infra/typeorm/entities/Car"
import { ICarsRepository } from "../ICarsRepository"


class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  async create({
    name,
    description,
    category_id,
    brand,
    daily_rate,
    fine_amount,
    license_plate
  }: ICreateCarsDTO): Promise<Car> {
    const car = new  Car()

    Object.assign(car, {
      name,
      description,
      category_id,
      brand,
      daily_rate,
      fine_amount,
      license_plate
    })

    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate)
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const cars = this.cars
    .filter(car => {
      if(
        car.available === true ||
        ((brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (category_id && car.name === name))
        ) {
          return car
        }
        return false
      })

    return cars
  }
}

export { CarsRepositoryInMemory }