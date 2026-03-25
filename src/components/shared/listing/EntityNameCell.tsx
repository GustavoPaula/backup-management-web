import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

interface EntityNameCellProps {
  name: string;
  avatar: string;
}

export function EntityNameCell({ name, avatar }: EntityNameCellProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={avatar || '/placeholder.svg'} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}
