import pool from "../config/database";
import { ITravel } from "./travel.type";
import { ITravelDTO } from "./travel.type";

// Get all travel
export const findAll = async (): Promise<ITravel[]> => {
    const {rows} = await pool.query("SELECT * FROM travel ORDER BY id");
    return rows;
};

// Get one travel
export const findOne = async (id:number): Promise<ITravel[]> => {
    const {rows} = await pool.query("SELECT * FROM travel WHERE id = $1", [id]);
    return rows[0];
};

// Create a travel
export const create = async (travelDTO:ITravelDTO):Promise<ITravel[]> => {
    const {rows} =  await pool.query("INSERT INTO travel (name, description,image,city,country) VALUES ($1,$2,$3,$4,$5) ",
        [travelDTO.name,travelDTO.description,travelDTO.image,travelDTO.city,travelDTO.country]);
    return rows ;
}

// Update a travel
export const update = async (id:number,travelDTO:ITravelDTO):Promise<ITravel[]> => {
    const {rows} =  await pool.query("UPDATE travel SET name = COALESCE ($2, name), description = COALESCE ($3, description), image = COALESCE ($4, image), city = COALESCE ($5, city),country = COALESCE ($6, country) WHERE id = $1 ",
        [id,travelDTO.name,travelDTO.description,travelDTO.image,travelDTO.city,travelDTO.country]);
    return findOne(id);
}

// Delete a travel
export const remove = async(id:number):Promise<ITravel[]> => {
    const {rows} = await pool.query("DELETE FROM travel WHERE id = $1", [id]);
    return rows;
}
