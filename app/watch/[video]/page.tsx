export default function Page({
    params,
  }: {
    params: { video: string };
  }) {
    return <h1>My Page {params.video}</h1>;
  }