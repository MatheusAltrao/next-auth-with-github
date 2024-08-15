import ButtonLogin from '@/components/ui/button-login';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import LineMobile from '../assets/line-mobile.svg';
import Lines from '../assets/lines.svg';
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="h-screen pt-12 px-4  max-w-[1000px] md:flex items-center justify-center flex-col space-y-16 text-center mx-auto relative ">
      <div className="absolute hidden md:block md:-left-[50px] bottom-0">
        <Image
          src={Lines}
          alt="line"
        />
      </div>

      <div className="absolute md:hidden left-0 right-0 bottom-0 flex items-center justify-center">
        <Image
          src={LineMobile}
          alt="line"
        />
      </div>
      <div className="space-y-8">
        <h1 className="text-zinc-900 md:text-7xl text-3xl">
          Desbloqueie o poder da <span className="text-zinc-950 font-bold">Análise do GitHub</span>
        </h1>
        <p className="text-zinc-500  md:text-xl ">
          Eleve o desenvolvimento de software com análises automáticas do GitHub, revelando métricas
          e KPIs inestimáveis para aprimorar a entrega e a qualidade do software.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ButtonLogin />
      </div>
    </main>
  );
}
