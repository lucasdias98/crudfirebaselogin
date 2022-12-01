import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, onSnapshot } from "firebase/firestore";
const Home = () => {
    const [listaObjetos, setListaObjetos] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'posts'))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                texto: doc.data().texto,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    }, []);
};

export default Home;