// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Establecer conexión con el servidor

const ChatSocket = () => {
    // const [userId, setUserId] = useState(null);
    // const [messages, setMessages] = useState([]);
    // const [messageText, setMessageText] = useState('');
    // const [adminMessages, setAdminMessages] = useState([]);
    // const [adminMessageText, setAdminMessageText] = useState('');

    // useEffect(() => {
    //     // Simular autenticación del usuario (puedes reemplazarlo con tu lógica de autenticación real

    //     const userData = {
    //         id: 'user123',
    //         email: 'user@example.com',
    //         role: 'user'
    //     };
    //     socket.emit('authenticate', userData);
    //     setUserId(userData.id);

    //     // Escuchar mensajes del servidor
    //     socket.on('message', (newMessage) => {
    //         if (newMessage.sender.id === 'admin') {
    //             setAdminMessages(prevMessages => [...prevMessages, newMessage]);
    //         } else {
    //             setMessages(prevMessages => [...prevMessages, newMessage]);
    //         }
    //     });

    //     return () => {
    //         // Limpiar el evento de escucha al desmontar el componente
    //         socket.off('message');
    //     };
    // }, []);

    // const sendMessage = () => {
    //     // Lógica para enviar un mensaje al servidor
    //     socket.emit('privateMessage', { recipientId: 'admin', message: messageText });
    //     setMessageText('');
    // };

    // const sendAdminMessage = () => {
    //     // Lógica para enviar un mensaje de administrador al servidor
    //     socket.emit('adminMessage', { message: adminMessageText });
    //     setAdminMessageText('');
    // };

    // const socket = io('/chat')

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages([...messages, message])
        socket.emit('message', message)
    }

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message])
        })
    }, [])

    const receiveMessage = message => setMessages(state => [...state, message])

    return (
        <div>
            <form on onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Write your message'
                    onChange={(e) = setMessage(e.target.value)}
                />
                <button>Send</button>
            </form>
            <ul>
                {
                    messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))
                }
            </ul>






            <h1>Chat</h1>
            <div>
                <h2>Usuario: {userId}</h2>
                <div>
                    {messages.map((message, index) => (
                        <div key={index}>
                            <p>{message.sender.id}: {message.message}</p>
                        </div>
                    ))}
                </div>
                <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatSocket