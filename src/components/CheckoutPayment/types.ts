export interface FormValues {
  creditCard: string;
  name: string;
  cardNumber: string;
  expiresIn: string;
  cvv: number;
}

export interface ICardProps {
  name: string;
  cardNumber: string;
  expiresIn: string;
  cvv: number;
}

export interface ICardDataProps {
  content: ICardProps[];
}