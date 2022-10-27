import * as Yup from "yup";

const ERROR = {
  REQUIRED: "Campo Obrigatório",
};

export const schemaCheckoutStep2 = Yup.object().shape({
  creditCard: Yup.string().required(ERROR.REQUIRED).nullable(),
  name: Yup.string().required(ERROR.REQUIRED).nullable(),
  cardNumber: Yup.string().required(ERROR.REQUIRED).nullable(),
  expiresIn: Yup.string().required(ERROR.REQUIRED).nullable(),
  cvv: Yup.number().min(3).required(ERROR.REQUIRED).nullable(),
});
