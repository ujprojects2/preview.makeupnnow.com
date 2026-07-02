
export const metadata = { title: "Home" };


export default function Page() {
  return (
    <>


<section className="relative min-h-[751px] flex items-center justify-center px-container-margin-mobile hero-gradient overflow-hidden">
<div className="absolute inset-0 z-0 opacity-40">
<div className="absolute top-10 left-10 w-64 h-64 bg-soft-rose/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-champagne-gold/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 max-w-4xl w-full text-center">
<span className="inline-block px-4 py-1 rounded-full border border-soft-rose/30 text-primary font-label-sm uppercase tracking-widest mb-6 animate-fade-in">
                    Expert Artistry at Your Fingertips
                </span>
<h2 className="font-headline-display text-headline-display md:text-6xl text-on-surface mb-8 leading-tight">
                    Find Professional <br /> <span className="italic text-primary">Makeup Artists</span> Near You
                </h2>

<div className="bg-surface-container-lowest/90 glass-effect p-2 rounded-2xl md:rounded-full soft-glow flex flex-col md:flex-row gap-2 max-w-2xl mx-auto border border-white/50"><div className="flex-1 relative group">
<button className="w-full flex items-center justify-between px-6 py-3 gap-3 text-left hover:bg-primary/5 transition-colors rounded-full">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">search</span>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-outline-variant font-bold">Service</span>
<span className="font-body-md text-on-surface">Select Service</span>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant">expand_more</span>
</button>
<div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-soft-rose/20 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
<a className="block px-6 py-2 hover:bg-primary/5 text-on-surface font-body-md" href="#">Makeup Artist</a>
<a className="block px-6 py-2 hover:bg-primary/5 text-on-surface font-body-md" href="#">Hairstyle</a>
<a className="block px-6 py-2 hover:bg-primary/5 text-on-surface font-body-md" href="#">Saree Draper</a>
<a className="block px-6 py-2 hover:bg-primary/5 text-on-surface font-body-md" href="#">Nail Artist</a>
<a className="block px-6 py-2 hover:bg-primary/5 text-on-surface font-body-md" href="#">Masterclass</a>
<a className="block px-6 py-2 hover:bg-primary/5 text-on-surface font-body-md" href="#">Full Makeup Course</a>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-outline-variant/30 self-center"></div>
<div className="flex-1 relative">
<div className="w-full flex items-center px-6 py-3 gap-3 bg-transparent rounded-full">
<span className="material-symbols-outlined text-primary">near_me</span>
<div className="flex flex-col flex-1">
<label className="text-[10px] uppercase tracking-widest text-outline-variant font-bold">Location</label>
<input className="bg-transparent border-none p-0 focus:ring-0 font-body-md text-on-surface placeholder:text-on-surface-variant/70 w-full" placeholder="Any Location" type="text" />
</div>
</div>
</div>
<button className="bg-primary text-white px-10 py-4 rounded-xl md:rounded-full font-label-md uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-primary/20">
    Search
</button></div>
<div className="mt-12 flex flex-wrap justify-center gap-4 text-outline font-label-sm">
<span className="">POPULAR:</span>
<a className="underline hover:text-primary transition-colors" href="#">South Indian Bridal</a>
<a className="underline hover:text-primary transition-colors" href="#">HD Party Makeup</a>
<a className="underline hover:text-primary transition-colors" href="#">Saree Draping</a>
</div>
</div>
</section>

<section className="py-section-gap-lg px-container-margin-mobile md:px-container-margin-desktop bg-surface">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-left">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Top Makeup artists in Bangalore</h3>
<p className="text-on-surface-variant font-body-md">Hand-picked artists known for their signature styles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
<div className="md:col-span-6 md:row-span-2 group relative overflow-hidden rounded-2xl bg-surface-container-high">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" data-alt="A professional makeup artist carefully applying a bold red lipstick to a model. The artist is a person of style, dressed in a clean black linen shirt. The setting is a bright, sun-drenched studio with minimalist white walls and a large vanity mirror with warm lights. The mood is focused and artistic, captured in a premium lifestyle photography style." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMtQR--SmhVbxAfKZzbZxgK43RDPK10dj9FJb64QgwgiZMeEK2W3dO60U91OBzipRsp9W2HQ_np_yMt0sh1h4AaHdGqyGFH6BLUxjeaUn1-OpSzYInLKw4MhIt22BzNvO-ePreOfZLmTxvjyPr3nb6OFmVFQuESWSDQqghlDbHrHtmzQo6pFGf0JCsuEInwmkVIEJHl2bGtgpxUjIgfbqf5fkAyvcd7V48uEFxLGE_5_xvc3d8qKWPgh3dkv4tk8VrcLKUCayYpZfG")'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-8 left-8">
<div className="flex items-center gap-2 mb-4">
<span className="bg-champagne-gold px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase">Elite Artist</span>
</div>
<h4 className="text-white font-headline-lg text-3xl mb-1">Riya Sharma Studio</h4>
<div className="flex items-center gap-4 text-white/90 font-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm fill-current">star</span> 4.9 (124 reviews)</span>
<span className="">|</span>
<span className="">Indiranagar</span>
</div>
</div>
</div>
<div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-surface-container-high">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" data-alt="A close-up high-fashion editorial makeup look featuring holographic eyeshadow and dew-kissed skin. The lighting is sharp and cool, emphasizing the avant-garde artistry. The aesthetic is modern and high-end, utilizing a palette of silver, soft-rose, and pristine white. The photo feels intentional and professional." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1JwhUMzZza4KmjTPgH_Thdgpv8umlcrJRmmAvgMwZz4L5YAvKd_FRkLVRoKdf2BGGC6Gv3zQp3-OWkxprLWJrp3mK--8rqWGRtGOyukwv2x246Sqvl3YmQcl8WEyDe8kiNql7KHuk73-aZX-n0Q8lZuVNW-xwnwGEwfpvkfZ_9b3T9pmmCnHY_VxaZRebsfEWBqSUUZAt0AcWJhzoF-KWqDsN9xJYshPbNAxPX1LZVNAF__U2eeJuqXLWj5AvWujAIxcq9xXnpeb1")'}}></div>
<div className="absolute bottom-4 left-4">
<h5 className="text-white font-headline-md text-lg">Priya Makeup Lab</h5>
<p className="text-white/80 text-xs font-label-sm uppercase tracking-widest">Editorial Specialist</p>
</div>
</div>
<div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-surface-container-high">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" data-alt="A stunning South Indian bride in a traditional silk saree with heavy gold jewelry and a flawless HD makeup look. Her hair is tied in a long braid with fresh flowers. The lighting is warm and rich, creating a heritage feel. The background is a traditional wooden door with intricate carvings. The style is luxury ethnic wedding photography." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPMHYSVG4rnYdzgZRyDlflO18uOrPWLbX0D21pT1HMsqjRzUME_ednvL_JiWJ7XEDoxQwWiTn6FCVyfTRaAicXRCdl6HU65vPstVJNaZGU0F-M3BNZ5FenA-vxi5Ba5RWvshGUJVCUZxyhzdd8zkFhV_wbW4omqyl7o4RbGz4txuXLnFkN8IAeVzc0ZsEQVg4NnnysQgv-ILYzaz8E4dqrtDoPT_RXtwc8jsuV0Q_FpYCag2rn6n70lZs6xyvI78WMwaOpNpdiN5FU")'}}></div>
<div className="absolute bottom-4 left-4">
<h5 className="text-white font-headline-md text-lg">Kavya Bridal Arts</h5>
<p className="text-white/80 text-xs font-label-sm uppercase tracking-widest">Traditional Bridal</p>
</div>
</div>
<div className="md:col-span-6 group relative overflow-hidden rounded-2xl bg-surface-container-high">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" data-alt="An artistic workspace of a makeup artist featuring a collection of high-end perfume bottles and luxury cosmetics arranged on a glass tray. A subtle backdrop blur reveals a professional vanity mirror with soft-focus lights. The colors are muted and sophisticated, focusing on soft-rose and white tones." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzNqy40ZMKLCmQpSzhx9D1X9zu4AnGMT2gVOpbwDuDFjNv37KVONlsTjQ1WUCGQQUeyNmdvuSEOxcKExfPx68yxI43q63ZVOxT4VcT3Y07uSkEGXWbTBiEn3T2qRhvzM8HlxsnODvLreP27smHkAFeu838fHDjNTGO172R4rDhYxRggfq5NRmYiWvVuE4ujgYSQ7u_l34olFr_ZB0dVXsGMrZWZ3bMN621WieSAI2i2sUdMAnfXg_UHCILdDQd5ASLzzr-UDutpoO2")'}}></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white/90 backdrop-blur text-primary px-6 py-2 rounded-full font-label-md uppercase tracking-widest">Explore Portfolio</button>
</div>
<div className="absolute bottom-4 left-4">
<h5 className="text-white font-headline-md text-lg">Anjali&apos;s Vanity</h5>
<p className="text-white/80 text-xs font-label-sm uppercase tracking-widest">Celebrity Stylist</p>
</div>
</div>
</div>
</div>
</section><section className="py-section-gap-lg px-container-margin-mobile md:px-container-margin-desktop bg-surface-blush">
<div className="max-w-7xl mx-auto"><div className="mb-12 text-left">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Masterclasses in Bangalore</h3>
<p className="text-on-surface-variant font-body-md">Learn industry secrets from top celebrity artists.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-soft-rose/20 transition-transform hover:scale-[1.02]">
<div className="relative h-64 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEnqtquw5Gs8jpgHhixeebWa7amFCGhajtyiSRVauNoO6WytdTh2pVi9dldBtfBATVIRX4KDf0oPyCetI-j_sApxaSiT-2tLuJ6nGd2MRJzA04mC6w9Zj3bOXdfqb80XEc7Ds6FoSfheqEDY6_r91C3bTsIUahh2cert0hfzpNIkDsGC3T4AJmiKqjSXktQmUiDuDyVC_hy4Jw2sjX6nkAL-MmKkoll7JwY4p_5xLXl0bLITT2plToVt9LqimM8j-VjwqU-_NGQKM_")'}}></div>
<div className="absolute top-4 left-4">
<span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Makeup</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="font-headline-md text-xl text-on-surface mb-4">Makeup Masterclass by Elena</h4>
<p className="text-on-surface-variant text-sm mb-6 flex-1">Master the art of high-end glam and editorial looks in this intensive workshop.</p>
<button className="w-full bg-primary text-white py-3 rounded-xl font-label-md uppercase tracking-widest active:scale-95 transition-all hover:opacity-90">Book your slot now</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-soft-rose/20 transition-transform hover:scale-[1.02]">
<div className="relative h-64 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqBChMzp9wp8s8FZ-0rIc7Sx4Fwgr8s7S4oSE-kipePcZeo5SnHX5ScqvUp1imekdFIcMiLmEcKGrr2rkyl0YWRWafDpxqwPdc9vZ_5Lbox7YUUk9A5Vha9dHa1APLNaTvwapZAYauHF8aHRZqFpQI7E6FxJ-zPIEfBqps8pRoXGOHpF3BdwkDU-jaDcUJf6SPMeS0lavvvxUSTp666ag47mA0WIblw0D3B3hhHG4XBvFEx7Y9VnrQJDb6gUx1lwJP402PTLQrLQky")'}}></div>
<div className="absolute top-4 left-4">
<span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Hairstyling</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="font-headline-md text-xl text-on-surface mb-4">Bridal Hair by Meera</h4>
<p className="text-on-surface-variant text-sm mb-6 flex-1">Learn intricate traditional Indian bridal buns and contemporary floral styling.</p>
<button className="w-full bg-primary text-white py-3 rounded-xl font-label-md uppercase tracking-widest active:scale-95 transition-all hover:opacity-90">Book your slot now</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-soft-rose/20 transition-transform hover:scale-[1.02]">
<div className="relative h-64 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCb9fY66vEJIwNIqwVr1JDjq0huHAGJWth0uvCyy1Wz2UEUgJweKgxyh2A_ny7kbwR-DNK0nwhK-tkaVHxbWPj4uYXW1dSQtctOSDizW_ZJUD8tt0_X7Ruee-CvFR8hIaSMoNamcGAiwxAAZsZItm_9CyuYfRHwJWkl158dJ_5lRdaKzXDSMvByHXiS2xZ7etqWqXUmgB_6_jaUDTpcGtk3C2aRTedmlHJMlo670B4tH7xlcxnWwWt__lZOjZ7lWsFkYILKzYbtsB5s")'}}></div>
<div className="absolute top-4 left-4">
<span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Draping</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="font-headline-md text-xl text-on-surface mb-4">Saree Artistry by Radha</h4>
<p className="text-on-surface-variant text-sm mb-6 flex-1">Perfect the &apos;Lehenga style&apos; and traditional drapes for a flawless silhouette.</p>
<button className="w-full bg-primary text-white py-3 rounded-xl font-label-md uppercase tracking-widest active:scale-95 transition-all hover:opacity-90">Book your slot now</button>
</div>
</div>
</div></div>
</section><section className="py-section-gap-lg px-container-margin-mobile md:px-container-margin-desktop bg-surface relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="max-w-xl">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Book your services now&nbsp;</h3>
<p className="text-on-surface-variant font-body-md">From your big day to an editorial shoot, our vetted network of artists delivers excellence across every beauty discipline.</p>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scroll-smooth no-scrollbar">

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A high-end professional makeup kit with soft brushes, shimmering eyeshadow palettes, and luxury foundation bottles arranged elegantly on a white marble surface. Soft sunlight illuminates the scene, highlighting the textures of the powders and creams. The aesthetic is clean, sophisticated, and premium, using a palette of soft rose and champagne gold." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqOs_7YsnSgNzdcQiuBXP5Za7LpTEPMK4dusdJ3rPapKpodYdNnlb3i2HyogpKlaBdLJQ6V7ZIPebIlmRtDtv0obnr9AIrj5tnvz4lB6WSCgoi-hsE_r1ZKco5gnm9hTc1Y6Td_LgKvJVjf1NzjS5HSlg08kHR7hjLlHpqB0GYHvSYvq7amV5iuvUOd9lmDzLvJyTCHQuI9ZQh5IDrZxtuj6IAQMdGa8J-bm64JowS8i6P9_7p79_3Cd6IfdwFdIn-2v1v80eZp1qA")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Essential Artistry</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Makeup</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bridal, HD, Airbrush, and Party looks tailored to your unique features.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A close-up shot of an intricate bridal hairstyle featuring soft waves and elegant braids adorned with delicate gold hair accessories and small white jasmine flowers. The lighting is ethereal and warm, creating a dreamy, high-fashion editorial feel. The background is a soft-focus bridal studio with warm wooden accents and soft rose-colored fabrics." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjXLDHIkwxnL4qpQ4iSoyWRuEB8ZJoRyToXl-cIZUUBFMrSoRZItq6s8LF5_oTf4VICefgLCww5iBkiXVqO1QVM-11CrH0da_LaQj1Et7Oio2lUuJ9vxHx9sdX6b0UNglfD0bAADZOTo2sTls_UKwLGN9iKwGeGHNyaexssyMrT6AE5qD7TGmC8WgvjukPNqmMG8iMOF7OnWPhupY06l8isXpsyBqWRHH8KSLIUMreo6dTxTk64hM4ePFwP-dS_ErVuJKjLJRi87ao")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Crowning Glory</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Hairstyle</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">From classic buns to contemporary waves for any occasion.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A macro shot of impeccably manicured nails with a sophisticated soft-rose ombre effect and subtle gold leaf accents. The hands are posed gracefully against a minimalist, high-key white background. The image reflects professional nail artistry with a focus on precision, luxury, and modern beauty trends." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOrs8KSdDx2w0R7ryB-jT-SkZyB5aU0Xc6QCnrCsfoKqSb6K4Qxtsgmr9sRLB42ToxYd6aTT0oC7MO0fhFrEu9jHq9AtCGzqiEpRIzqH3tGFyZwclfuPt1Abv2y8WBhVBn1WPhglTwJkBIxn0i5nGOkrvLAiaVeDIBwW8nZDAZ1PJGoPEaFui2TVlbh7GSWDfKVx51IHB-vo1tGFc9ZZhWSQVRzAWV7XUeS7CgC4xcTWuGFYdfil2CHMqhCLs3M-cy5UHnxpfcFcLk")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Polished Details</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Nails</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manicures, pedicures, and custom nail art designs.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A detailed view of a traditional silk saree being pleated with extreme precision by an artist. The silk has a rich texture in a deep burgundy and gold color palette. The lighting is focused and professional, highlighting the graceful folds and the artist's skilled hands. The atmosphere is traditional yet sophisticated and premium." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlIJfbFYAZT_rNFgSuKHvIRtF7o3x0WISAoK5CaxDErgdt6hMvzk6QvFJNXQxalpkAFe7mLwLwo2_R3Fw6rXLRtXDobpCfRH_qiAPtwrwqpK308J3Kc5wR9jpENa-myo72rvcazNUJJfZiuM7yUsR2EYFCEvL5HSViq0rJZBQ04E-rry2XGLNydj1P4PKBqVgzSyhfz_V2OvH6SwLYd__0q1HnvDimSAOII275FoGVwFe0EFzR__5pvzLgiPvKXWqSv1m6lBOuSHUb")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Heritage Elegance</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Saree Draping</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Perfect pleats and traditional drapes for a flawless silhouette.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBE3azzsRV-6Hg-AoCftwinELpk8GvPU3MeXu21HYnMBJAUR6MtEC478i4YSincHAAxY0-XAgrc5gNLxPH1UfVtaW2yz23zFsZ_Pw6KaUqES8bFLMVj5RKXB0PdYKq6FvrzIHPw8qZ2jOWQdUEoeIKvAlzPiMcUrsPG9vwrjC-uuQWMpDXft12YvgiDhZuQENswJVB7NpKIwhlaDOpB6X9NiQwFvpZTy_lO01zOIGvqqlbe6vI9_QqSpJ7dV5DjaJm1PbQLcWpn_PU2")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Traditional Art</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Mehendi Artists</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Intricate bridal and festive henna designs for every celebration.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD0bzs7lf0fBmb37OGw_olQxMBNDYSJRZsYLrewHduxCPfezOYq_Y1gzekdg18utd1bY1ben2tKgLzDwkkI3lgj5xS9mXmeSnjQ7pcOHjlTs1jCZcjNv7XkLldOQRdNsNMUdXvxsh8EkruU-6X0US_akx3laqUeaZjMMwIe3FqJ3HJpgHAlTL5vu-qraBHIQWCqyKmWq_0FKSaAm4kUNnKhO-zMpgZHqX-GsnXNwVpz_b94tNNN0_TaElBW1wystXUWa1XS7rhDpJj")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Visual Storytelling</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Photographers</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Capturing your most beautiful moments with professional precision.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2GkR_P3M2pBMSdBH6bVS2iNhSFGHD32lJsPlXBckekjKkOdNX0JGxhjPG-DrEewO9xg2bkMvn205UInE9VlzsBvFcG7ylJkH00aNL0ZWFLrUWDgeX_gGFLgP8G7ukslCBvihraE2_gul7jL-uD0hNFqkQJQ-1Vw2BPFEdKUCPwQ_l_QDpi7ReDlWssZqxdrg5kpsDvLVgzxrG4uzkWfL2cHaGSKzGFBVlak1ZxcHQ2n72HVVjttmmOVFXuR2mzqblybDnS3qVMvLf")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Flawless Finish</span>
<h4 className="text-white font-headline-md text-2xl mb-2">HD Makeup</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">High-definition makeup for a camera-ready, radiant glow.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0dnkYZq6gu4kgZlrngvN9i3fft93IeN6q_UutL35GwSyfXy65K4xdqoVtRk_JtmSsPbBLVoh3QW7YLbVrLb8_RKwss4wIWP4fVwyEmbnHuKY9ypY8UY7byCXgtrtEvEGDrUQmk6DglZIoWkthziH--TQY91ovJkW-sbLYpu3kV1ss-ig4wMKNkD2v5y1xTT2pNlcWdO05WmdgIqm9PRjFy2C0yiEDd9lGrE8SIoTApv5iFyR97Ko2ZgLG3VwacPkHcptIwq7cwE2v")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Glamorous Waves</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Reception Hairstyle</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Elegant and modern hair styling for your grand evening.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBywf-zrBtMj-iRvJzctKKBhU6HgCavVVgGsLNB-G1XcXvBpNrTatxAu_8SHsYVBGCZMsT5H7ewh0KpMJwj02XkipYGllSwdR8vN8wmEHEDTbYVWhorYDIrcK2_2Hf8NVjF5p6-6y8Pi2URCTHq_NfX5snuYNkNWDq33SLb47s2zZo3cxWQstlWF5nwPLpH1AUpjI7isWuVZlwFS6Zoyn86_CCD5yPtE0KxxZplNZPgWUAn_rEO2g2ShNWPBjXWCQITX1MyQkld6ohe")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Grooming &amp; Style</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Men&apos;s Makeup</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Natural grooming and clean looks for the modern man.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMQhyxcBkpDCID1UKm4sGBkFGtIl7xyaiHCrMtb4cUTI3y3UevAFzzS3TD2lp06XT1FxaVclGVErBSmdlMNFHGepze5xPCdXC1N_I-pAo7s9sXB2URWlHdA_L2SDZW01YRXHADtOxFDklH6ZXGrceJwILbGLKT-RpRqKUNGJO8tOkHqazDgyTeDwPJ2SCZ5o8w_WEmPVwZEjxkFVuXop_QHK4bms7vspNbqXK_RIiG7Z3neDdHNO7_Q004f671J7Q_Y02VSjEtzGKf")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">South Indian Bridal</span>
<h4 className="text-white font-headline-md text-2xl mb-2">South Indian Bridal</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Traditional South Indian bridal makeup with rich silk and gold accents.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCwmgfV-0xaWPMv5ZfhhgC1XVmxzDnic0TPaMI3-YivuyCYmsCAWpL64rWZUbxg1DguE8FHH19gg1Y5zkY5qcBNB8a3BDozp6NFM-0IPNWEbxawqFda2ZbFrDdLsNjnRWX_O_y1a92evfGBKwt4drru57Yr6LLgqjIMThcPDv8XQBwzoj18I7GRrhUPMJbL960ToRyb700HoZkl59HG0XyoZNH2DUYTd1kPY4WYEAa7CGZ1faeIWnloaitsVAVrmZcf1ak0NOc6p85")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Fusion Elegance</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Lehenga Style Saree</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Modern fusion drapes combining the grace of a saree with lehenga flair.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMjWtYYrBohCBAYBuc10E0Ak4eptF65a994FX9U-Umm2cwPFwjMtOaLkSPDiDXD9wyKPFddeQ7eY_EWxRaYCHLFVeRKyq4jjRMjz_fiZX9R_TXjaqtfc9J66XPRplYemnjYu8N_4bV3rZsEA3xiGJpkLUddyly3uohixsbvGlukC3GFAW_7NOHzHk1-Loa797QTmULBzt-5E7gO86Hc-hcobIky9OLfpXGlKM0a17CSUyu0QRmZvSHsSn0c2wicCM1yQC_PeXX_0pF")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Cultural Tradition</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Maharashtrian Saree</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Authentic Nauvari draping for a traditional and regal Maharashtrian look.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_Jg3ywg2gxBnkuiYwLQbHy_Jzp-Ff5ybLMaNlA_4hG8CD9bxZggK7fx8MRbHR3ClIwFDxbviIec49_mBnAD_KLPIPoATBBCp3V5y1tl-I7Q71re9QCOABURaoNZT7RmO0qeGhBv6mNFGV1AUoPzmZxbjEodh2I6lOTAIYcbNNmhB9Jop_1DZGkjf0ktFBTpDUrSgXERWHQS7C6-1iUxYY7SCw9aDOjgqckGRDWE_VYBUzAljAXwc7wEbxeOk0H-cj8-w4QOh0Nv-h")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Crowning Glory</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Traditional Hairstyle</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Intricate braids and gold ornaments for a timeless bridal aesthetic.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high w-72 shrink-0 snap-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd6UKiZx1lcZLlX5F7lDZwE2ymWslHPlP9qMutuyyjfFTNcynel3nqY740nkW3YxJmMhgrwx-M4FASgWCzyL2JmRFzHLP7Xw7ogMIbyGRob9Zf53ydy92CN0JiqWeR5gsVVT9NmiFXAD7IecpXsiin7TBLOekBCJq1mIUgUuRl_nHgyM-o5LbtX-6ZXDJkQi7Hbeqz-0SUCInFMxqEIgYNFixQAoN0VRpZ9U6zKV2vcJ1JwXJDTAzIaqCagmGyuPQigZqJfXqmH-ac")'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/70 font-label-sm uppercase tracking-tighter mb-1 block">Floral Artistry</span>
<h4 className="text-white font-headline-md text-2xl mb-2">Flower Garlands</h4>
<p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">Fresh, vibrant jasmine and rose arrangements for sacred ceremonies.</p>
</div>
</div><div className="shrink-0 flex items-center sticky right-0 z-10"><button className="bg-white/90 backdrop-blur shadow-lg rounded-full p-3 text-primary border border-soft-rose/20 active:scale-90 transition-transform md:flex hidden items-center justify-center ml-2"><span className="material-symbols-outlined">arrow_forward_ios</span></button></div></div>
<div className="relative"></div></div>
</section>

<section className="py-section-gap-lg px-container-margin-mobile md:px-container-margin-desktop bg-surface-blush">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
<div className="md:w-1/3">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">Artists in Your Neighborhood</h3>
<p className="text-on-surface-variant font-body-md mb-8">Quickly find and book top-rated artists situated in the most popular hubs across Bangalore. Save travel time and book with local experts.</p>
<div className="grid grid-cols-1 gap-4">
<button className="flex items-center justify-between p-4 bg-white rounded-xl border border-soft-rose/20 hover:border-primary transition-colors group">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">explore</span>
</span>
<span className="font-title-lg text-on-surface">Bangalore</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</button>
<button className="flex items-center justify-between p-4 bg-white rounded-xl border border-soft-rose/20 hover:border-primary transition-colors group">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">explore</span>
</span>
<span className="font-title-lg text-on-surface">Hyderabad</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</button>
<button className="flex items-center justify-between p-4 bg-white rounded-xl border border-soft-rose/20 hover:border-primary transition-colors group">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">explore</span>
</span>
<span className="font-title-lg text-on-surface">Chennai</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</button>
<button className="flex items-center justify-between p-4 bg-white rounded-xl border border-soft-rose/20 hover:border-primary transition-colors group">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">explore</span>
</span>
<span className="font-title-lg text-on-surface">Mumbai</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</button>
</div>
</div>
<div className="md:w-2/3">
<div className="relative w-full h-[500px] rounded-3xl overflow-hidden soft-glow bg-surface-container-high border-4 border-white">
<img className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" data-location="Bangalore" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJmuyYHMdQPxvm9TWDSsAsNX5UE01_wNaGIuNw5XQAUnRe1CYN2KohB1_rTIlNdz94BzA17LsuFQbPLxgzsXHi8bmxvvhEGz05Tb7iR7O3bHKt2cXUe_AykButVfjk7L32JFWNTSOiBCKxPMOePx69GvMK1HD_p5d0bUbxYepfiW3xeCPyFqodOnUzsUf3MPec9uZQOYdY-dMM6kA5Hi1Y_irJ_RXxoPkphl3KBfSvRqaLlZsV2o3LGAqXoWqFXa6-N3Nk9N4RksAY"  alt="Makeup artistry" />
<div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

<div className="absolute top-1/4 left-1/3 group cursor-pointer">
<div className="bg-white px-3 py-1 rounded-full shadow-lg border border-soft-rose text-xs font-label-md text-primary flex items-center gap-2 animate-bounce">
<span className="material-symbols-outlined text-sm">location_on</span>Bangalore</div>
</div>
<div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
<div className="bg-white px-3 py-1 rounded-full shadow-lg border border-soft-rose text-xs font-label-md text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-sm">location_on</span>Hyderabad (38)
                            </div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
