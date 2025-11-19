import { Shield, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-foreground">
            Sistema de Backup
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <img
              src="/src/public/images/logo-wt.jpeg"
              alt="WT Soluções em Tecnologia"
            />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground hidden sm:inline">
            Admin
          </span>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
