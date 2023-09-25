import { Button } from '@components/atoms/Button';
import { Switch } from '@components/atoms/Switch';

export const MenuSecurity = () => {
  return (
    <div className="py-4 px-10">
      <div className="flex flex-col gap-4">
        <div className="border border-base rounded-lg p-4 w-[400px]">
          <h3 className="font-bold text-md">
            Upgrade for SAML SSO & more admin tools
          </h3>
          <p className="text-sub">
            The Business Plan includes single sign-on to manage employee access
            at scale, private teamspaces to collaborate on sensitive docs, and
            more.
          </p>
          <div className="flex mt-4 gap-4">
            <Button className="flex-1" type="primary">
              Upgrade to Business
            </Button>
            <Button className="flex-1">Learn more</Button>
          </div>
        </div>
        <div className="border border-base rounded-lg p-4 w-[400px]">
          <h3 className="font-bold text-md">
            Upgrade for SAML SSO & more admin tools
          </h3>
          <p className="text-sub">
            The Business Plan includes single sign-on to manage employee access
            at scale, private teamspaces to collaborate on sensitive docs, and
            more.
          </p>
          <div className="flex mt-4 gap-4">
            <Button className="flex-1" type="primary">
              Upgrade to Business
            </Button>
            <Button className="flex-1">Learn more</Button>
          </div>
        </div>
      </div>
      <div className=" flex items-center mt-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Cho phép chia sẻ</h3>
          <p className="text-sub">
            Disable the Share to web option in the Share menu on every page in
            this workspace.
          </p>
        </div>
        <Switch size="small" />
      </div>
      <div className=" flex items-center mt-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">
            Cho phép các thành viên tạo group
          </h3>
          <p className="text-sub">
            Disable the Share to web option in the Share menu on every page in
            this workspace.
          </p>
        </div>
        <Switch size="small" />
      </div>
      <div className=" flex items-center mt-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">
            Cho phép các thành viên tạo group
          </h3>
          <p className="text-sub">
            Disable the Share to web option in the Share menu on every page in
            this workspace.
          </p>
        </div>
        <Switch size="small" />
      </div>
    </div>
  );
};
