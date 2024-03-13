import { rest } from "@/lib/request";

import * as t from "io-ts";
export const TUpdateUser = t.type({
  status: t.string,
});

export const TUpdatePassword = t.type({
  status: t.string,
  message: t.string,
});

export type SettingsInput = {
  avatar: string;
  name: string;
  userId: string;
};

export type PasswordsInput = {
  userId: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export const updateUser = ({ avatar, name, userId }: SettingsInput) =>
  rest
    .put("/api/user/details", {
      avatar,
      name,
      userId,
    })
    .decode(TUpdateUser);

export const updatePassword = ({
  password,
  newPassword,
  newPasswordConfirm,
  userId,
}: PasswordsInput) =>
  rest
    .put("/api/user/security", {
      password,
      newPassword,
      newPasswordConfirm,
      userId,
    })
    .decode(TUpdateUser);
