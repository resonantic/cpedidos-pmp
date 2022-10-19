export type OrderType = 'SE' | 'RM' | 'MEMORANDO' | 'OUTRO';

export interface Order {
  id: string | null;
  number: string;
  type: OrderType;
  arrivalDate: string;
  secretary: string;
  project: string;
  description: string;
  sendDate: string;
  returnDate: string;
  situation: string;
  notes: string;
}
