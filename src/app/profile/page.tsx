import ButtonLogout from '@/components/ui/button-logout';
import ProfileItem from '@/components/ui/profile-item';
import { authOptions } from '@/lib/auth';
import { format } from 'date-fns';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Squares from '../../assets/squares.svg';

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/');
  }

  const repoCount =
    session.user.githubProfile.public_repos + (session.user.githubProfile.total_private_repos ?? 0);
  const reposUrl = session.user.githubProfile.repos_url;

  const followingCount = session.user.githubProfile.following;
  const followingUrl = session.user.githubProfile.following_url;

  const followersCount = session.user.githubProfile.followers;
  const followersUrl = session.user.githubProfile.followers_url;

  const createdAt = format(session.user.githubProfile.created_at, 'dd/MM/yyyy');
  const bio = session.user.githubProfile.bio;
  const location = session.user.githubProfile.location;

  return (
    <div className="min-h-screen  flex items-center justify-center flex-col gap-8 lg:gap-14 p-4 relative ">
      <header className="space-y-4 flex items-center justify-center text-center flex-col">
        {session.user.email && (
          <Image
            src={session.user.image!}
            className="rounded-full"
            alt=""
            width={120}
            height={120}
          />
        )}

        <div className="text-2xl md:hidden flex flex-col items-center justify-center">
          <span> Boas vindas,</span>
          <span className="font-bold">{session.user.name}</span>
        </div>

        <div className="text-4xl hidden md:block">
          <span> Boas vindas,</span>
          <span className="font-bold">{session.user.name}</span>
        </div>

        <p className="md:text-xl font-light text-zinc-500"> {bio}</p>
      </header>

      <div className="flex items-center justify-center gap-32 w-full ">
        <div className="w-full max-w-[620px] space-y-12 ">
          <div className="w-full ">
            <ProfileItem
              amount={repoCount}
              link={reposUrl}
              title="Meus Repositórios"
            />

            <ProfileItem
              amount={followingCount}
              link={followingUrl}
              title="Seguindo"
            />

            <ProfileItem
              amount={followersCount}
              link={followersUrl}
              title="Seguidores"
            />

            <ProfileItem
              amount={createdAt}
              link={''}
              title="Criado em"
            />

            <ProfileItem
              amount={location}
              link={''}
              title="Localização"
            />
          </div>

          <ButtonLogout />
        </div>

        <div className="hidden md:block">
          <Image
            src={Squares}
            alt="squares"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
