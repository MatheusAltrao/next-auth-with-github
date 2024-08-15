'use client';

interface ProfileItemProps {
  title: string;
  amount: any;
  link: string;
}

const ProfileItem = ({ title, amount, link }: ProfileItemProps) => {
  const convertAmoutToString = String(amount);

  return (
    <div className="flex items-center justify-between py-5  border-b  ">
      <span className="text-lg  transition-colors">
        {title} ({convertAmoutToString})
      </span>
    </div>
  );
};

export default ProfileItem;
