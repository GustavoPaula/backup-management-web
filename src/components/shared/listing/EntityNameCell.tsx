import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

import { getEntityInitials } from './listing.utils';

interface EntityNameCellProps {
  name: string;
  avatar: string;
}

export function EntityNameCell({ name, avatar }: EntityNameCellProps) {
  const initials = getEntityInitials(name);

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
