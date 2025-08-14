import React, {  useState,useEffect } from 'react'
import Navbar from '../component/navbar.jsx'
import RateLimitedUI from "../component/RateLimitedUI.jsx";
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../component/NoteCard.jsx';
import NotesNotFound from '../component/NoteNotFound.jsx';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);

  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/notes");
        setNotes(res.data);
        toast.success("Notes fetched successfully!");
        console.log("Notes fetched successfully:", res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      }finally {
          setLoading(false);}
    }
    fetchNotes();}, []);

  return (
    <div>
      <Navbar />

      {isRateLimited && <RateLimitedUI />  }
    <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

      {notes.length === 0 && !isRateLimited && <NotesNotFound />}

      {notes.length > 0 && !isRateLimited && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {notes.map((note) => (
      <NoteCard key={note._id} note={note} setNotes={setNotes}/>))}
      </div>)}
    </div>

    </div>
  )
}

export default HomePage