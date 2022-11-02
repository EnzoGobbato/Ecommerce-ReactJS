import { useState, createContext } from "react"
import React from 'react'

const Notification = ({ message, severity }) => {
    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 10,
        height: "auto",
        width: "auto",
        backgroundColor: severity === "success" ? "green" : "red",
        color: "black",
        padding: "20px 20px 20px 20px",
    }

if (message === '') return

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message, time = 2) => {
        setSeverity(severity) 
        setMessage(message) 
        setTimeout(() => {
            setMessage('')
        }, time * 1000); 
    }

        return (
            <NotificationContext.Provider value={{setNotification}}>
                <Notification severity={severity} message={message} />
                {children}
            </NotificationContext.Provider>
        )

    }

export default NotificationContext