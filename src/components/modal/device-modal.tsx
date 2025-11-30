'use client';

import type React from 'react';
import { useState } from 'react';

import { Link, User } from 'lucide-react';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface DeviceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeviceModal({ open, onOpenChange }: DeviceModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    customers: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement user registration logic
    console.log('Registering user:', formData);
    // Reset form and close modal
    setFormData({
      fullName: '',
      customers: '',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Cadastrar Novo Dispositivo
          </DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para adicionar um novo dispositivo ao
            sistema.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Nome
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="fullName"
                  placeholder="Digite o nome"
                  className="pl-9"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Clientes */}
            <div className="space-y-2">
              <Label htmlFor="customers" className="text-sm font-medium">
                Cliente
              </Label>
              <Select
                value={formData.customers}
                onValueChange={(value) =>
                  setFormData({ ...formData, customers: value })
                }
                required
              >
                <SelectTrigger id="customers" className="w-full">
                  <div className="flex items-center gap-2">
                    <Link className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Selecione o cliente" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cliente_a">Cliente A</SelectItem>
                  <SelectItem value="cliente_b">Cliente B</SelectItem>
                  <SelectItem value="cliente_c">Cliente C</SelectItem>
                  <SelectItem value="cliente_d">Cliente D</SelectItem>
                  <SelectItem value="cliente_e">Cliente E</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Cadastrar Dispositivo
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
