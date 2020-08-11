import {Partida} from '../../entity/partida'
import { getRepository } from 'typeorm'
import { Request, Response } from 'express'

//Listar
export const getPartida = async (req: Request, res: Response)=>{
    const partida = await getRepository(Partida).find
    return res.json({ok:true})
}

//Criar
export const createPartida = async (req: Request, res: Response)=>{
    const partida = getRepository(Partida).save(req.body)
    return res.json(partida)
}

//Deletar
export const deletePartida = async (req: Request, res: Response)=>{
    const {id}  =  req.params
    const partida = getRepository(Partida).delete(id)

    if((await partida).affected){
        return res.json({"msg":"partida removida"})
    }else{
        return res.json({"msg":"partida not found"})
    }
}
