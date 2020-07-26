import Head from 'next/head'; import Menu from '../components/menu';
export default function Home() { return (
<div>
<Head>
<title>Home</title>
</Head>
<Menu />
<div>
<h1>Selamat Datang Di web Kami</h1>
<p>Web ini berisi tentang sedikit pengetahuan Tentang Teknologi Informasi</p> </div>
</div>
);
}
