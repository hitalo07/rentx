import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-momory/CarsRepositoryInMemory"
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"


let listAvailableCarsUseCase: ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory)
  })

  it("should be able to list all available cars", async () => {

    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro description",
      daily_rate: 110.00,
      license_plate: "EDF - 1234",
      brand: "Car_brand",
      fine_amount: 40,
      category_id: "category_id"
    })

    const cars = await listAvailableCarsUseCase.execute({})

    console.log(cars)
    
    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro description",
      daily_rate: 110.00,
      license_plate: "EDF - 1234",
      brand: "Car_brand_test",
      fine_amount: 40,
      category_id: "category_id"
    })

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_test'
    })
    
    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Carro description",
      daily_rate: 110.00,
      license_plate: "EDF - 12345",
      brand: "Car_brand_test",
      fine_amount: 40,
      category_id: "category_id"
    })

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car3'
    })
    
    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Carro description",
      daily_rate: 110.00,
      license_plate: "EDF - 123456",
      brand: "Car_brand_test",
      fine_amount: 40,
      category_id: "12345"
    })

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345'
    })
    
    expect(cars).toEqual([car])
  })
})