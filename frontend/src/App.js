import React, { useState } from 'react';

function App() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Скоро тут будет сценарный коуч!" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([
                ...messages,
                { sender: "user", text: input },
                { sender: "bot", text: "Скоро тут будет сценарный коуч!" }
            ]);
            setInput("");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.chatHeader}>
                <h1>Сценарный Коуч</h1>
            </div>
            <div style={styles.chatBody}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            ...(msg.sender === "user" ? styles.userMessage : styles.botMessage),
                        }}
                    >
                        <div style={styles.sender}>{msg.sender === "user" ? "Вы" : "Бот"}</div>
                        <div>{msg.text}</div>
                    </div>
                ))}
            </div>
            <div style={styles.chatFooter}>
                <input
                    style={styles.input}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Введите сообщение..."
                />
                <button style={styles.button} onClick={sendMessage}>
                    Отправить
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        margin: 0,
    },
    chatHeader: {
        backgroundColor: '#007BFF',
        color: 'white',
        width: '100%',
        padding: '10px 20px',
        textAlign: 'center',
        borderRadius: '10px 10px 0 0',
    },
    chatBody: {
        width: '100%',
        maxWidth: '600px',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: '10px',
        overflowY: 'scroll',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    message: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '10px',
        maxWidth: '80%',
        wordWrap: 'break-word',
    },
    userMessage: {
        backgroundColor: '#007BFF',
        color: 'white',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: '#e9e9eb',
        color: '#333',
        alignSelf: 'flex-start',
    },
    sender: {
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#555',
    },
    chatFooter: {
        display: 'flex',
        width: '100%',
        maxWidth: '600px',
        marginTop: '10px',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
    },
};

export default App;
