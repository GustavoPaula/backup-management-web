'use client';

import type React from 'react';
import { useState } from 'react';

import { Link, User } from 'lucide-react';

import { Button } from '../../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

interface DeviceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeviceModal({ open, onOpenChange }: DeviceModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    customers: '',
  });

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData((current) => ({
      ...current,
      [id]: value,
    }));
  };

  const handleCustomersChange = (value: string) => {
    setFormData((current) => ({ ...current, customers: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData({
      fullName: '',
      customers: '',
    });
    handleClose();
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
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customers" className="text-sm font-medium">
                Cliente
              </Label>
              <Select
                value={formData.customers}
                onValueChange={handleCustomersChange}
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
            <Button type="button" variant="outline" onClick={handleClose}>
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
