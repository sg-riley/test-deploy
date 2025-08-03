import { notFound } from 'next/navigation';
import DetailContent from '@/components/DetailContent';

export const dynamicParams = true;

const accommodations = [
  {
    id: 'nyanglan',
    name: 'The Great View Villa',
    images: [
      '/images/akomodasi_villa_3.jpg',
      '/images/akomodasi_villa.jpg',
      '/images/akomodasi_villa_2.jpg',
    ],
    location: 'Desa Nyanglan',
    description: `The Great View Villa adalah villa modern dengan konsep eco-friendly yang dikelilingi pemandangan alam yang asri.`,
    facilities: [
      { name: 'Kamar Mandi Dalam' },
      { name: 'WiFi Gratis' },
      { name: 'Sarapan Tradisional' },
      { name: 'View Alam Asri' },
    ],
    contact: '+6283119348852',
  },
];

export type Accommodation = (typeof accommodations)[number];

export async function generateStaticParams() {
  return accommodations.map((a) => ({ id: a.id }));
}

// ✅ Ini versi yang sesuai dokumentasi Next.js terbaru
export default async function DetailAkomodasi(props: { params: { id: string } }) {
  const params = await props.params; // ⬅️ ini penting!

  const data = accommodations.find((a) => a.id === params.id);
  if (!data) return notFound();

  return <DetailContent data={data} />;
}
