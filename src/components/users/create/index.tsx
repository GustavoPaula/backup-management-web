'use client';

import type React from 'react';
import { useState } from 'react';

import { RadioGroup } from '@radix-ui/react-radio-group';
import { Eye, EyeOff, UserPlus } from 'lucide-react';

import { Button } from '../../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { RadioGroupItem } from '../../ui/radio-group';

export default function UserRegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    role: 'member',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica de submissão do formulário
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Informações do Usuário</CardTitle>
            <CardDescription>Preencha os dados do novo usuário</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username">Nome de Usuário</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="seu_usuario"
                    value={formData.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                    required
                  />
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />

                  {/* Password */}
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      required
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={
                        showPassword ? 'Ocultar senha' : 'Mostrar senha'
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Role Selection */}
                <div className="space-y-4">
                  <Label>Permissão</Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value) => handleChange('role', value)}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div>
                      <RadioGroupItem
                        value="member"
                        id="member"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="member"
                        className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-zinc-100 cursor-pointer transition-all"
                      >
                        <span className="font-semibold">Membro</span>
                        <span className="text-xs text-muted-foreground text-center text-balance">
                          Acesso padrão ao sistema
                        </span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="admin"
                        id="admin"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="admin"
                        className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-zinc-100 cursor-pointer transition-all"
                      >
                        <span className="font-semibold">Admin</span>
                        <span className="text-xs text-muted-foreground text-center text-balance">
                          Acesso administrativo completo
                        </span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end items-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="gap-2 bg-blue-700 hover:bg-blue-800"
                >
                  <UserPlus className="w-4 h-4" />
                  Cadastrar Usuário
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
