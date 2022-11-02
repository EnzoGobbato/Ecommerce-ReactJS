import { useState, useContext } from "react";
import { Form } from "react-router-dom";
import { useContext } from "../../CartContext/CartContext.js";
import { NotificationContext } from '../Services/NotificationService/NotificationService.js'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'