import express from 'express'; 
import Note from '../models/note.js';

const createNotes = async (req, res) => {

    const {title, content} = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }     
    try {
        const newNote =  new Note({ title, content });
        await newNote.save()
        return res.status(201).json(newNote);
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }      
}

const getAll = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

const getById = async (req, res)=>{
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        return res.status(200).json(note);
        
    } catch (error) {
        console.error("error is:", error);
        return res.status(500).json({ message: 'Server error' });
    }
}

const updateById = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        return res.status(200).json(note);
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

const deleteById = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        return res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

export default {
    createNotes, getAll, getById, updateById, deleteById
};