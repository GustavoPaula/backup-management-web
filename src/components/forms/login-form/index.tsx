'use client';

import { FormEventHandler, useCallback, useState } from 'react';

import { Lock, User, Key, LogIn } from 'lucide-react';

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
      await signIn({
        username: 'admin',
        password: 'Admin@25',
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
      <div className="bg-linear-to-br from-indigo-600 via-purple-600 to-purple-700 text-white px-8 py-12 text-center">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Lock className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta</h1>
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
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Esqueceu a senha?
            </a>
          </div>

          {/* Login button */}
          <Button
            type="submit"
            className="w-full h-12 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium shadow-lg"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
