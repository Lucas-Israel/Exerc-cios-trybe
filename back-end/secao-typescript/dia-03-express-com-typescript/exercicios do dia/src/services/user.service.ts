import * as userModel from '../models/user.model';
import Service from '../interfaces/Service.interface';
import {IUser} from '../interfaces';

export async function getUserById(id: number): Promise<Service> {
  const result = await userModel.getUserById(id);

  if (result === null) return {status: 404, error: { message: 'Não encontrado'}};

  return {status: 200, result};
}

export async function getUsers(): Promise<Service> {
  const result = await userModel.getUsers();

  return {status: 200, result};
}

export async function postUser(user: IUser): Promise<Service> {
  const result = await userModel.postUser(user);

  return {status: 200, result};
}