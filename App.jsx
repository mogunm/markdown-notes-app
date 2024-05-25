import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import {  onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    
    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    React.useEffect(() => {
        // receives a snapshot of the data at the time that the function was called 
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            // Sync up our local notes array with the snapshot (the most updated version of our notes collection from the database)
            //we are rearanging the shape that the objects from the snapshot are in to make sense for our application
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }))
            setNotes(notesArr)
        })
        //onSnapshot returns a function that we can use to essentially unsubscribe from the event listener for the db when the component unmounts
        return unsubscribe
    }, [])

    React.useEffect(() => {
        if(!currentNoteId){
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now()
        }
        //"addDoc" pushes the the newNote to the collection that we provided in the first arguement it then returns a promise which also returns a reference to the new document that was created. 
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        // we use this to update the notes in the doc and then instead of overwriting rverything in the doc we use "merge: true" to just merge in the body. 
        await setDoc(docRef, { body: text, updatedAt: Date.now() }, {merge: true})
    }


    async function deleteNote(noteId) {
        //"doc" is a reference to the document that we are trying to delete 
       const docRef = doc(db, "notes", noteId)
       // returns a promise so we would need to use async await 
       await deleteDoc(docRef)
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        <Editor
                            currentNote={currentNote}
                            updateNote={updateNote}
                        />
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}
