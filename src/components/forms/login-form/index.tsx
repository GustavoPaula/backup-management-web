'use client';

import { FormEventHandler, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { User, Key, LogIn } from 'lucide-react';

import { ROUTES } from '../../../app/paths/routes';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { Checkbox } from '../../ui/checkbox';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

export function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const { signIn } = useAuth();
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
      await signIn({
        username,
        password,
      });
    },
    [signIn],
  );

  const handleRememberMe = useCallback(
    (checked: boolean) => setRememberMe(checked),
    [],
  );

  return (
    <Card className="w-full max-w-md overflow-hidden shadow-2xl">
      <div className="bg-linear-to-br bg-blue-600 px-8 py-4 text-center text-white">
        <div className="mx-auto mb-4 flex h-41 w-41 items-center justify-center rounded-full bg-white shadow-lg">
          <img
            src="/src/public/images/logo-wt.jpeg"
            alt="WT Solucoes em Tecnologia"
            width={96}
            height={96}
            className="h-30 w-30 rounded-lg object-contain"
          />
        </div>
        <h1 className="mb-2 text-3xl font-bold">Sistema de Backup</h1>
        <p className="text-sm text-purple-100">Faca login para continuar</p>
      </div>

      <CardContent className="p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Usuario
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Digite seu usuario"
                className="h-12 pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Senha
            </Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="h-12 pl-10"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={handleRememberMe}
              />
              <Label
                htmlFor="remember"
                className="cursor-pointer text-sm text-gray-600"
              >
                Lembrar-me
              </Label>
            </div>
            <Link
              to={ROUTES.public.forgotPassword}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Esqueceu a senha?
            </Link>
          </div>

          <Button
            type="submit"
            className="h-12 w-full bg-linear-to-br from-blue-500 to-blue-600 font-medium text-white shadow-lg"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
