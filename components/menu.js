import Link from 'next/link';
export default function Menu() { return (
<div>
<h5>Menu</h5>
<ul>
<li>
<Link href="/"><a>Home</a></Link>
</li>

<li>    
<Link href="/arti"><a>APA ITU TI</a></Link>
</li>

<li>
<Link href="/fungsi"><a>Fungsi TI</a></Link>
</li>

<li>
<Link href="/tujuan"><a>Tujuan TI</a></Link>
</li>

<li>
<Link href="/tentang"><a>Tentang Kami</a></Link>
</li>
</ul>
</div>
);
}
