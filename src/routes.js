const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/tasks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const { title } = req.body;
    const [result] = await pool.query('INSERT INTO tasks (title) VALUES (?)', [title]);
    const [task] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
    res.status(201).json(task[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    await pool.query('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    const [task] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    res.json(task[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
