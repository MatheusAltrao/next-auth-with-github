'use client';
import { signOut, useSession } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';
import { Button } from './button';
import Loading from './loading';

const ButtonLogout = () => {
  const { status } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="w-full">
      {status == 'loading' && (
        <Button
          className="gap-2 w-full lg:w-max"
          size={'lg'}
        >
          {' '}
          <Loading /> Carregando
        </Button>
      )}

      {status == 'authenticated' && (
        <Button
          onClick={handleSignOut}
          className="gap-2 w-full lg:w-max"
          size={'lg'}
        >
          {' '}
          <FiLogOut size={20} /> Sair
        </Button>
      )}
    </div>
  );
};

export default ButtonLogout;
