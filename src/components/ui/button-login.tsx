'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { Button } from './button';
import Loading from './loading';

const ButtonLogin = () => {
  const { status } = useSession();

  const handleSigIn = async () => {
    await signIn();
  };

  return (
    <div>
      {status == 'unauthenticated' && (
        <Button
          onClick={handleSigIn}
          className="gap-2"
          size={'lg'}
        >
          {' '}
          <FiGithub size={20} /> Login com GitHub
        </Button>
      )}

      {status == 'loading' && (
        <Button
          className="gap-2"
          size={'lg'}
        >
          {' '}
          <Loading /> Carregando
        </Button>
      )}

      {status == 'authenticated' && (
        <Link href={'/profile'}>
          <Button
            className="gap-2"
            size={'lg'}
          >
            {' '}
            Ver detalhes
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ButtonLogin;
