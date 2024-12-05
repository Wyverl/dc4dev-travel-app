import pool from "../config/database";
import { IUser } from "./user.type";
import { IUserDTO } from "./user.type";

// Get all user
export const findAll = async ():Promise<IUser[]> => {
    const {rows} = await pool.query("SELECT * FROM users ORDER BY id");
    return rows;
}

// Get one user
export const findOne = async(id:number):Promise<IUser[]> => {
    const {rows} = await pool.query("SELECT * FROM users WHERE id = $1",[id])
    return rows[0];
}

// Create a user
export const create = async(userDTO:IUserDTO):Promise<IUser[]> => {
    const {rows} = await pool.query("INSERT INTO users (username,password) VALUES ($1,$2)",
        [userDTO.username,userDTO.password]);
    return rows;
}

//Update a user
export const update = async(id:number,userDTO:IUserDTO):Promise<IUser[]> => {
    const {rows} = await pool.query("UPDATE users SET username = COALESCE ($2 , username), password = COALESCE ( $3,password) WHERE id = $1",
        [id,userDTO.username,userDTO.password]);
    return rows;
}

// Delete a user
export const remove = async(id:number):Promise<IUser[]> => {
    const {rows} = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return rows;
}