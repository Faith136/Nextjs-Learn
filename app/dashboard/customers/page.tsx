import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
   metadataBase: new URL('https://nextjs-learn-pi-lime.vercel.app/'),
};

export default function Page() {
  return <p>Customers Page</p>;
}