import {Request, Response} from 'express'
import * as userService from '../services/user.service';


export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const { status, error, result } = await userService.getUserById(Number(id));

  return error ? res.status(status).json(error) : res.status(status).json(result);
}

export async function getUsers(req: Request, res: Response) {
  const {status, result} = await userService.getUsers();
  return res.status(status).json(result)
}

export async function postUser(req: Request, res: Response) {
  const body = req.body;
  const { status, result } = await userService.postUser(body);
  return res.status(status).json(result); 
}