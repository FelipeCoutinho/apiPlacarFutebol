import { Request, Response } from 'express'

export interface CrudHttp{
    // index: Listar todos registros
    index(req: Response, res: Request): JSON
    // show: Exibir um registro

    // store: Criar novo registro

    // update: Alterar um registro

    // destroy: Remover um registro
}