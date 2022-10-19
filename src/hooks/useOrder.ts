import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Order, OrderType } from '../models/order';

const ordersRef = collection(db, 'orders') as CollectionReference<Order>;

function emptyOrder(): Order {
  return {
    id: null,
    number: '',
    type: 'SE',
    arrivalDate: '',
    secretary: '',
    project: '',
    description: '',
    sendDate: '',
    returnDate: '',
    situation: '',
    notes: '',
  };
}

async function getOrder(
  number: string,
  type: OrderType
): Promise<Order | null> {
  if (!number || !type) return null;

  const id = `${type}:${number}`;
  const docRef = doc(ordersRef, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return docSnap.data();
}

async function saveOrder(order: Order): Promise<Order | null> {
  if (!order.number || !order.type) return null;

  const id = order.id ?? `${order.type}:${order.number}`;
  const docRef = doc(ordersRef, id);

  await setDoc(docRef, { ...order, id });

  return order;
}

async function deleteOrder(number: string, type: OrderType): Promise<boolean> {
  if (!number || !type) return false;

  const id = `${type}:${number}`;
  const docRef = doc(ordersRef, id);

  await deleteDoc(docRef);

  return true;
}

export function useOrder() {
  return { emptyOrder, getOrder, saveOrder, deleteOrder };
}
