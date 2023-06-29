import { pool } from '../db.js';

export const getCars = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cars')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message:'Something went wrong'})
    }
};

export const getCar = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cars WHERE id = ?',[req.params.id])
        if (rows.length <= 0) return res.status(404).json({message: 'car not found'})
        res.json(rows[0])
    } catch (error){
        return res.status(500).json({message:'Something went wrong'})
    }
};

export const createCar = async (req, res) => {
    const {make, model, year} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO cars (make, model, year) VALUES (?, ?, ?)', [make, model, year])
        res.send({
            id: rows.insertId,
            make,
            model,
            year
        })
    } catch (error){
        return res.status(500).json({message:'Something went wrong'})
    }
};

export const deleteCar = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM cars WHERE id = ?', [req.params.id])
    
        if (result.affectedRows === 0) return res.status(404).json({message:'car not found'})
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:'Something went wrong'})
    }
};
export const updateCar = async (req, res) => {
    const id = req.params.id
    const {make, model, year} = req.body
    try {
        const [result] = await pool.query('UPDATE cars SET make = IFNULL(?, make), model = IFNULL(?, model), year = IFNULL(?, year) WHERE id = ?', [make, model, year, id])

        if (result.affectedRows === 0) return res.status(404).json({message:'car not found'})

        const [rows] = await pool.query('SELECT * FROM cars WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message:'Something went wrong'})
    }
};