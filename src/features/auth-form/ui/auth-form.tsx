"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/Button";

const loginSchema = z.object({
  login: z.string().min(1, "Логин обязателен"),
  password: z
    .string()
    .min(1, "Пароль обязателен")
    .refine((value) => value.length >= 6, { message: "минимум 6 символов" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface AuthFormProps {
  isLoading: boolean;
  error?: string;
  onSubmit: (data: LoginFormData) => void;
}

export const AuthForm: FC<AuthFormProps> = ({ isLoading, error, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Логин</label>
        <input
          type="text"
          {...register("login")}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {errors.login && (
          <p className="text-red-500 text-sm">{errors.login.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Пароль</label>
        <input
          type="password"
          {...register("password")}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {error && <div className="text-red-700 ml-1 text-[14px]">{error}</div>}

      <Button
        type="submit"
        isLoading={isSubmitting || isLoading}
        className="bg-blue-600 text-white rounded px-4 py-2 w-full hover:bg-blue-700 transition"
      >
        Войти
      </Button>
    </form>
  );
};
