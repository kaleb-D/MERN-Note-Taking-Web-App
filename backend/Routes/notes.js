import express from 'express';
import notesController from '../controllers/notes.js';
const { createNotes, getAll, getById, updateById, deleteById } = notesController;




const router = express.Router();

// Define routes for notes

router.get('/', getAll);
router.post('/', createNotes);
router.get('/:id',getById);
router.put('/:id',updateById);
router.delete('/:id', deleteById);

export default router;
