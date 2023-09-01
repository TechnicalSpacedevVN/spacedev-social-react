import { Card } from './atoms/Card';
import { UserItem } from './atoms/UserItem';
import { IconAddFriend } from './Icon/IconAddFriend';

export const SuggestedForYou = () => {
  return (
    <Card title="Những người ở gần">
      <div className="mt-4 flex flex-col gap-4">
        {Array.from(new Array(10)).map((e, i) => (
          <UserItem key={i} sub="3km" action={<IconAddFriend />} />
        ))}
      </div>
    </Card>
  );
};
