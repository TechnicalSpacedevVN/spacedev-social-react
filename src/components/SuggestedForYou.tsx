import { useQuery } from "@tanstack/react-query";
import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { IconAddFriend } from "./Icon/IconAddFriend";
import { SUGGESED_USER } from "../constants/queryKey";
import { friendService } from "../services/friend";

export const SuggestedForYou = () => {
  const { data } = useQuery({
    queryKey: [SUGGESED_USER],
    queryFn: friendService.suggesedFriend,
  });
  return (
    <Card
      title="Suggested For You"
      action={
        <a href="#" className="text-gray-400 font-semibold text-xs">
          See all
        </a>
      }
    >
      <div className="mt-4 flex flex-col gap-4">
        {data?.map((e) => (
          <div key={e._id} className="flex gap-2 items-center">
            <Avatar src={e.avatar} />
            <div className="flex-1 ">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                {e.name}
              </h4>
              <p className="text-xs text-gray-500">
                Khoảng cách {Math.round(e.distance || 0)}m
              </p>
            </div>
            <IconAddFriend disabled />
          </div>
        ))}
      </div>
    </Card>
  );
};
