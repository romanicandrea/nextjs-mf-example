import dynamic from 'next/dynamic';
//import type { GetServerSidePropsContext } from "next";

const RButton = dynamic(
  () => {
    // @ts-ignore
    // eslint-disable-next-line
    return import("remote/RButton");
  },
  { ssr: true }
);

// const Tag = dynamic(
//   () => {
//     // @ts-ignore
//     // eslint-disable-next-line
//     return import("remote/tag");
//   },
//   { ssr: true }
// );

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   // @ts-ignore
//   // eslint-disable-next-line
//   const page = await import("remote/RButton");

//   if (page.getServerSideProps) {
//     return page.getServerSideProps(context);
//   }

//   return {
//     props: {},
//   };
// }

export default function Home() {
  return (
      <><title>Host App</title><RButton></RButton></>
  );
}
