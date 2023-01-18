import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Header from "./header";

import ThumbnailImage from '../assetsMock/thumbnail.webp';
import ProfileImage from '../assetsMock/profile.jpg';

const MockData: ThumbnailData = {
  thumbnailImg: ThumbnailImage,
  profileImg: ProfileImage,
  title: 'The Biggest AI Problem !',
  author: 'Anastasia',
  stats: '31 k views',
  date: '2 weeks ago',
  videoId: '1321312',
}

interface ThumbnailData {
  thumbnailImg: StaticImageData | string
  profileImg: StaticImageData | string
  title: string
  author: string
  stats: string
  date: string
  videoId: string
}

interface ThumbnailProps {
  data: ThumbnailData
}

function Thumbnail(props: ThumbnailProps): JSX.Element {
  return (
    <Link href={`/watch/${props.data.videoId}`}>
      <div className="w-72 h-60 flex flex-col gap-1 hover:bg-slate-700 hover:rounded-xl hover:cursor-pointer">
        <Image className="rounded-xl select-none" draggable={false} src={props.data.thumbnailImg} alt='' />
        <div className="flex gap-2 p-2">
          <div className="w-8">
            <Image height={52} width={52} className='rounded-full select-none' draggable={false} src={props.data.profileImg} alt='' />
          </div>
          <div className="flex flex-col justify-center text-slate-300">
            <h1 className="text-base">{props.data.title}</h1>
            <Link href={`/channel/${props.data.author.toLowerCase()}`} className="text-sm select-none mb-0 hover:text-slate-100">
              {props.data.author}
            </Link>
            <div className="inline-flex">
              <span className="text-xs select-none">{props.data.stats}&nbsp;-&nbsp;</span>
              <span className="text-xs select-none">{props.data.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className="w-full max-w-[120rem] mx-auto flex flex-wrap gap-4 mt-24 items-center justify-center">
        {[...Array(120)].map((e, i) => <Thumbnail key={i} data={MockData} />)}
      </main>
    </>
  )
}