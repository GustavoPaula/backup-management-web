'use client';

import type React from 'react';
import { useState } from 'react';

import { User } from 'lucide-react';

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

interface CustomerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CustomerModal({ open, onOpenChange }: CustomerModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData({
      fullName: '',
    });
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Cadastrar Novo Cliente
          </DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para adicionar um novo cliente ao sistema.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Nome
              </Label>
              <div className="relative">
                <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
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
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Cadastrar Cliente
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
