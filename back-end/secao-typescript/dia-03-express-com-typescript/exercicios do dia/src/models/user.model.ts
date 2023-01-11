import { ResultSetHeader, RowDataPacket} from 'mysql2/promise';
import {User, IUser} from '../interfaces';
import connection from './connection';

export async function getUserById(id: number): Promise<User | null> {
  const [data] = await connection.execute('SELECT * FROM Users WHERE id=?', [id]);
  const [result] = data as User[];
  return result || null
}

export async function getUsers(): Promise<User[]> {
  const [result] = await connection.execute<RowDataPacket[] & User[]>('SELECT * FROM Users');
  return result;
}

export async function postUser(user: IUser): Promise<User> {
  const { name, email, password } = user;
  const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id} = result;

  return { id, name, email };
}