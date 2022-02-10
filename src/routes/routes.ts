import { Router } from 'express'

import controllerApi from '../controller/controllerApi'

const Routes = Router()

Routes.get('/', controllerApi.get)

export default Routes
