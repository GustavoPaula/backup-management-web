'use client';

import { FormEventHandler, useCallback, useState } from 'react';

import { User, Key, LogIn } from 'lucide-react';

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
    <Card className="w-full max-w-md shadow-2xl overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-linear-to-br bg-blue-600 text-white px-8 py-4 text-center">
        <div className="bg-white w-41 h-41 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <img
            src="/src/public/images/logo-wt.jpeg"
            alt="WT Soluções em Tecnologia"
            width={96}
            height={96}
            className="h-30 w-30 object-contain rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Sistema de Backup</h1>
        <p className="text-purple-100 text-sm">Faça login para continuar</p>
      </div>

      <CardContent className="p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Usuário
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Digite seu usuário"
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Senha
            </Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Remember me and forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={handleRememberMe}
              />
              <Label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Lembrar-me
              </Label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Esqueceu a senha?
            </a>
          </div>

          {/* Login button */}
          <Button
            type="submit"
            className="w-full h-12 bg-linear-to-br from-blue-500 to-blue-600 text-white font-medium shadow-lg"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
