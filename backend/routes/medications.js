const express = require("express");
const router = express.Router();
const pool = require("../db");
  
// create medication
router.post("/", async (req, res) => {
    try {
        const { name, dosage_units, dosage, notes, user_id } = req.body;
        const newMedication = await pool.query(
            "INSERT INTO medications (name, dosage_units, dosage, notes, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, dosage_units, dosage, notes, user_id]
        );
        res.json(newMedication.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all medications
router.get("/", async (req, res) => {
    try {
        const { user_id } = req.query;
        const allMedications = await pool.query("SELECT * FROM medications WHERE user_id = $1", [user_id]);
        res.json(allMedications.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get one medication
router.get("/:id", async (req, res) => {
    try {
        const { id, user_id } = req.params;
        const oneMedication = await pool.query("SELECT * FROM medications WHERE id = $1 AND user_id = $2", [
            id,
            user_id
        ]);
        res.json(oneMedication.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update medication
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, dosage_units, dosage, notes, user_id } = req.body;
        const updateMedication = await pool.query(
            "UPDATE medications SET name = $1, dosage_units = $2, dosage = $3, notes = $4, user_id = $5 WHERE id = $6 RETURNING *",
            [name, dosage_units, dosage, notes, user_id, id]
        );
        res.json(updateMedication.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// delete medication
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM medications WHERE id = $1", [id]);
        res.json("Medication was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;