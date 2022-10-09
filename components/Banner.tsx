import Link from '@/components/Link';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { memo, useEffect, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import IHonmeInfoData from '../lib/model/IHonmeInfoData';
import HomeDataService from '../lib/services/home_services';

interface BannerProps {
  frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): React.ReactElement {
  const [tutorials, setTutorials] = useState<IHonmeInfoData>();

  useEffect(() => {
    retrieveTutorials();
  }, []);
  async function retrieveTutorials() {
    await HomeDataService.getAll()
      .then((response: any) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  const { frontMatter } = props;
  const [aboutColor, contactColor] = useRandomColorPair();

  return { tutorials } ? (
    <div className='fade-in banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
      {tutorials?.title}
      </h1>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl'>
        {tutorials?.subtitle}
      </p>
      <p className='font-light lg:text-xl'>
        Read more
        <Link className='ml-2 mr-2 font-normal text-black' href='/about'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={aboutColor}
          >
            about me
          </RoughNotation>
        </Link>
        or
        <Link className='ml-2 font-normal text-black' href='/contact'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={contactColor}
          >
            contact me
          </RoughNotation>
        </Link>
      </p>
    </div>
  ) : (
    <div></div>
  );
}

export default memo(Banner);
