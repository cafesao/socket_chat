import { Request, Response } from 'express'

const controllerApi = {
  get(req: Request, res: Response) {
    res.send('OK').status(200)
  },
}

export default controllerApi
