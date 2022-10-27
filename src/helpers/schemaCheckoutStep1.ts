import * as Yup from "yup";

const ERROR = {
  REQUIRED: "Campo Obrigatório",
};

export const schemaCheckoutStep1 = Yup.object().shape({
  address: Yup.string().required(ERROR.REQUIRED).nullable(),
  firstAddress: Yup.string().required(ERROR.REQUIRED).nullable(),
  street: Yup.string().required(ERROR.REQUIRED).nullable(),
  cep: Yup.string().required(ERROR.REQUIRED).nullable(),
  dispatch: Yup.string().required(ERROR.REQUIRED).nullable(),
});
