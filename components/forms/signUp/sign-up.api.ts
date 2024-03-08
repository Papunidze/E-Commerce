import { rest } from "@/lib/request";
import * as t from "io-ts";

export const TSignUp = t.type({
  status: t.string,
});

export type signUpInputs = {
  email: string;
  password: string;
  name: string;
  passwordConfirm: string;
};

export const signUp = ({
  email,
  password,
  name,
  passwordConfirm,
}: signUpInputs) =>
  rest
    .post("/api/auth/signup", {
      email,
      password,
      name,
      passwordConfirm,
    })
    .decode(TSignUp);
