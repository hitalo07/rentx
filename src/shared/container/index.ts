import { container } from 'tsyringe'

import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository'

import { ISpecificationsRepository } from '../../modules/cars/repositories/implementations/iSpecificationsRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository'

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

// ICategoriesRepository
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)