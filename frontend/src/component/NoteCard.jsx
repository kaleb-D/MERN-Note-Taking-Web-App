import { Trash2Icon, PercentSquareIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/utils.jsx'
import api from '../lib/axios.jsx' // <-- Make sure this is correct
import toast from 'react-hot-toast'

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };
  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 rounded-lg hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
      <div className="card-body">
        <h2 className="card-title text-base-content">{note.title}</h2>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p> 
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">{formatDate(new Date(note.createdAt))}</span>   
          <div className="flex items-center gap-4">
            <PercentSquareIcon className="size-4" />
            <button className="btn btn-xs btn-ghost text-error"  onClick={(e) => handleDelete(e, note._id)}><Trash2Icon className='size-4' /></button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard