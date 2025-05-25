"use client";

import { FC, PropsWithChildren, useState } from "react";

import { AuthForm } from "@/features/auth-form/ui/auth-form";
import { selectIsAuthorized, setUser } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { mapLoginDtoToUserEntity, useLoginMutation } from "@/shared/api/auth";

export const WithAuthForm: FC<PropsWithChildren> = ({ children }) => {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  const [error, setError] = useState();

  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data: { login: string; password: string }) => {
    try {
      const response = await login(data).unwrap();
      const user = mapLoginDtoToUserEntity(response);
      dispatch(setUser(user));
    } catch (e) {
      const message =
        (e as { data?: { error?: string } }).data?.error ||
        "Ошибка авторизации";
      console.log("message: ", message);
      if (message) {
        setError(message);
      }
    }
  };

  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold mb-4">Вход в личный кабинет</h1>
          <AuthForm
            isLoading={isLoading}
            onSubmit={handleLogin}
            error={error}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
