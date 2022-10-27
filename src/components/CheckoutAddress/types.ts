export interface FormValues {
  address: string;
  firstAddress: string;
  street: string;
  cep: string;
  dispatch: string;
}

export interface IAddressProps {
  address: string
  cep: string
}

export interface IAddressDataProps {
  content: IAddressProps[];
}

export interface IShippingProps {
  title: string
}

export interface IShippingDataProps {
  content: IShippingProps[];
}


export interface ICheckoutAddress {
  changeStep: () => void;
}