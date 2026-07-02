
export const metadata = { title: "Artist Directory" };


export default function Page() {
  return (
    <>

<div className="flex flex-col gap-4 mb-6">


<div className="grid grid-cols-2 md:flex md:flex-row gap-2">

<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant rounded-lg py-2 px-3 pr-8 font-label-sm text-[12px] text-on-surface focus:outline-none">
<option>Service</option>
<option>Makeup</option>
<option>Hairstyle</option>
<option>Saree Drape</option>
<option>Nail</option>
<option>Models</option>
<option>Photographer</option>
<option>Mehendi Artist</option></select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">expand_more</span>
</div>

<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant rounded-lg py-2 px-3 pr-8 font-label-sm text-[12px] text-on-surface focus:outline-none">
<option selected>Bangalore</option>
<option>Hyderabad</option>
<option>Chennai</option>
<option>Delhi</option>
<option>Mumbai</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">expand_more</span>
</div>

<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant rounded-lg py-2 px-3 pr-8 font-label-sm text-[12px] text-on-surface focus:outline-none">
<option>Area</option>
<option>Jayanagar</option>
<option>Indiranagar</option>
<option>JP Nagar</option>
<option>Koramangala</option>
<option>Whitefield</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">expand_more</span>
</div>

<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant rounded-lg py-2 px-3 pr-8 font-label-sm text-[12px] text-on-surface focus:outline-none">
<option>Price</option>
<option>Under ₹5,000</option>
<option>₹5,000 - ₹10,000</option>
<option>Above ₹10,000</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">expand_more</span>
</div>
<div className="relative md:ml-auto">
<select className="w-full appearance-none bg-surface-container-low border border-outline-variant rounded-lg py-2 px-3 pr-8 font-label-sm text-[12px] text-on-surface focus:outline-none">
<option disabled selected>Sort</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">swap_vert</span>
</div></div><div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">Reception</span>
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">HD</span>
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">Airbrush</span>
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">Photoshoot</span>
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">Engagement</span>
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">Sangeeth</span>
<span className="px-3 py-1 border border-outline-variant rounded-full font-label-sm text-[11px] text-on-surface-variant whitespace-nowrap">Haldi</span>
</div>
</div>



<div className="grid grid-cols-2 md:grid-cols-5 gap-3">

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Priya" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc_NPLv80xcU7ZCF7KGvQslqyyxcCrTgRxyFMUP5qWF6sGbzuZ8m-GpIdJuo4g73aujUeenm1OQvfthHNJsnGnFZkT8JortmtJJYbjdM1lkCGUjbwwtkyHzUeBoaCufwVmM7XKF4bGsqtZB8XhkfZ-MkYBgIkL6qYCEOoDt-BK9F8GvJyLWjb0kvBUnxjEQ93jStr8J15DZKPdeLQfw5CQlY-cvHvV8u-MbdXtI0XT8kGQwe61yUDMLz1bVswi1mO1Ji-XDU_gD8ok" />
<div className="absolute top-2 right-2 bg-champagne-gold text-white rounded-full p-0.5 flex items-center justify-center">
<span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: '"FILL" 1'}}>stars</span>
</div>
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Priya Makeup Studio</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.9</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹2,500</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">alternate_email</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Anjali" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPs-569wF-54EF342-IUaUomGfOVyN_KmGxdsORwS8Cb-aZZ56lp7Kn3IEJ1YImofPsN7IADqpIsTlf0rloN7hNhRCv2m8YNPTzLjf544XNLoNxrXagUleA5tPIgdurOoYPlLBkJaTK6d5f1z4Gxj-hNllQTCgUS7cmJi7zAA2QY8OzrW3IWUWrXAJ0CNQxdGB7__4woA8YLAdOTGCwKBksDYnH-LVkRlyT6hwzCNX8C-2DueHFuOK66M3Q1nv-VjkOiRYL1YYzU79" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Anjali Artistry</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">5.0</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹4,200</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Bangalore Glow" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCahi7dVmKePBKP4sf-GvkeiSmmS_-w3D50eatAdQ4YOc1ce2jHAzXFI0rRemZRAUhPmA6lzW441mE8nZkn9tMuYVxkIM1dlANtQ82r0wjsXThUTbt6dwGsOw3UnzuH-XC_t1nf74IyEstKm3_x5tv7U6dvP3oTpW-uAE8NjjeO0jGEEbulsRu9eFMt7lOVNRap2mzckWD35Iy6VHKntErgf1CgvF_F6XIHGG1rMq403Q0fPPbFRoQZ8AWn8eKpEZnknlXzFKLWo8yG" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Bangalore Glow</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.8</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹3,800</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">alternate_email</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Sahana" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjHPHdEc-dRH7XigwlMKXFHGKpGaR8DHA3b2dRWYpyNVuABvuZsCRt9ACde8CIoc6uHwjzSx5OpQZIFvdk9wX7fvJnRyHcQ2KdNdX0IKPTrRE4B59ao7WdYD5J-P5sjlrVdhqZHsrolLKaTiVVw-NLV_BCHZPQBRm-wxNXKjtUsF98AUqsuTpOAoahm8q8w5P219wMgjKx5NV-h9HqsUwzkXtQt1Z6nakpmrR5TSOFQWJVvf9nP7X-oHPS3CLWD6xRHmgVj-_dHX4P" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Sahana Pro Hair</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.7</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹5,500</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Studio" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuw5Y9v0mN6Hhw105SZlgMvUSfLYoVWtTfNjkyQ621NEGgpoJQ0fhBih0wICx8-FDSRsPU12wRksiGfyp0OZgod5zMM9yo4DZX7pMjeRZWuMP36_CWVxiG9Wr0FX7CZnebWryIdHbCNT36aMALpnxV2P8WdCNsvoYuBV2W30gycFuIILJD_T4lik4yhWmHsoCImCR6JeIuduRTTqT5IwRWsnbvYVwcT9iEPnudc2GAHdjAMcY2IZ9ui9DYA1Qe4jJIDcQN45_P6wuJ" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">The Bridal Canvas</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.9</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹7,000</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">alternate_email</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Shruti" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd-w2cj0WyiPoCrX3eRcnyNeYxkvDfH_e0E3zWDdPehZCl_BCIKxjdb0kfUgBDS2p-6Hg37r1Xx_iEcNS6spIJocCMmgEfiYJAWWThoCeagPFq28yGxYP2KrEb7mHxol0gwxaFJZJf7zC_PLsVD0Q-DaMIlVKWcWyABuF1SplgTNS0CpAbsbMm5CSq-WmP34dKKgae9fMrdzeoK4UxdQ-q_1C5JyhX_6wNmWD4WyNeFDX5S0R-vT70DBdC1OEOTzcSyDdNUNqxOauM" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Glamour by Shruti</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.8</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹3,500</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Vivid" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41QDXRHkmXXiq700Tzzgonp1kv-UUpE5C4FKD2QO4hYx3eAygz38F0dcRgtmHMk5709-vniqR-PDr7gUF3EsmUBJTZ9n2PeSQZVOTEi0dYZ_K5OCmmPZNF9MbcRmhwfOszj6W0qtQcLunoLifdTpqVQfSw1B6j67sDs7k6l9YMJQKgkhvYcI2WYHskt5q67nWcS491mEbYbhR9rv4AMDCtgsdcBrF41KHUDtFqJK6pcAj_v1jPi3ZBN_rXHGwmULc1pT4KTKcSXkm" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Vivid Artistry</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.6</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹2,800</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">alternate_email</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Royal" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnxLAHBOiz4OW8CI3nqmsUGPm5YrDavZk3GnSmNijZZ15gVPPukm6j7vV4FfgpG0-g9vBzlIQ4FQR_f2Rm9aJSXGfGSa0WrgTqvkYSz8xDBl14tU4lCO_5XNOqz1x-XJnfUyvBQ7ky7YfyAilGPWgoRiZ1_ezhsrXzPyn--Ef5WiYN5PrT7MK6rga5ilQo_zgU4DSztCqrgO_jyD_Z2Q2SuQ7OrJxwkqmJhgY8jmeIqr7P4gWlU4R1-FgvbxR1RSbht_fk8nKlsr5B" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">The Royal Glow</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">5.0</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹8,500</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Meera" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs_Aa8UwaJ7yIDLLPJv_dwBw75zBjNEsmYRlN6MJsd9QcNKKkxj-2lVbXd3_-MVf9O8-nN2sgwT9MlnYzq74BWp20a27ZxRiQ7CbW_tiA_aI2Qm-ned3EoB23NR31crV4Vit2h2lKLdtKHUMReu5qSx5CZkzvyFICkCpMOsg8oSgfwIEoI6f1yAv0W3tvQvM6FF8WSGs_YJtGodk7n_Fc77MrtuxWL0gImSYDf6qC6FAeEMdkJojm8Mx4x_lWv0bIsbfmdNVQGTbsu" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Meera&apos;s Makeover</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.7</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹4,000</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">alternate_email</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Luxe" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsmW06W5_KVh5vM2EOj0I4lFnqyFxJVnBdbJm3UMd-ApEYmcEDHBiDcxgyNB5BtaJDhRtj3ud3mO9D25kLngjPPyt9vHy-yqKexM-KAvhERtG6uRza1tDg5JyTQf_fc6f8qqLZOH3IK-dJc7hqWPL7gJFkGr8HhAgIeyVnGz4wSpy7C6H4K3eZQbet67m_fCmlfnnQc8gDd0-UD2RTGavqyUAjvFwizMsdzgk3BhbaTggfCnGVs36Wj-mNuwXr-WARN_kt6BDGEJhb" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Luxe Brush Studio</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.9</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹6,200</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span></a>
<a className="text-primary/70" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[16px]">chat</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Artist" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc_NPLv80xcU7ZCF7KGvQslqyyxcCrTgRxyFMUP5qWF6sGbzuZ8m-GpIdJuo4g73aujUeenm1OQvfthHNJsnGnFZkT8JortmtJJYbjdM1lkCGUjbwwtkyHzUeBoaCufwVmM7XKF4bGsqtZB8XhkfZ-MkYBgIkL6qYCEOoDt-BK9F8GvJyLWjb0kvBUnxjEQ93jStr8J15DZKPdeLQfw5CQlY-cvHvV8u-MbdXtI0XT8kGQwe61yUDMLz1bVswi1mO1Ji-XDU_gD8ok" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Kavya Artistry</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.9</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹3,200</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<span className="material-symbols-outlined text-[18px] text-primary/70">photo_camera</span>
<span className="material-symbols-outlined text-[18px] text-primary/70">public</span>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">chat</span></button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-2.5 flex flex-col gap-2 artist-card-shadow border border-primary/5">
<div className="relative w-full aspect-square">
<img alt="Artist" className="w-full h-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPs-569wF-54EF342-IUaUomGfOVyN_KmGxdsORwS8Cb-aZZ56lp7Kn3IEJ1YImofPsN7IADqpIsTlf0rloN7hNhRCv2m8YNPTzLjf544XNLoNxrXagUleA5tPIgdurOoYPlLBkJaTK6d5f1z4Gxj-hNllQTCgUS7cmJi7zAA2QY8OzrW3IWUWrXAJ0CNQxdGB7__4woA8YLAdOTGCwKBksDYnH-LVkRlyT6hwzCNX8C-2DueHFuOK66M3Q1nv-VjkOiRYL1YYzU79" />
</div>
<div className="flex flex-col flex-grow">
<div className="flex justify-between items-start gap-1">
<h2 className="font-label-md text-label-md text-on-surface line-clamp-1">Divya Studio</h2>
<span className="text-champagne-gold font-label-sm text-[11px] whitespace-nowrap">4.8</span>
</div>
<p className="text-on-surface-variant/80 font-label-sm text-[12px]">From ₹4,500</p>
<div className="flex items-center justify-between mt-auto pt-2">
<div className="flex gap-2">
<span className="material-symbols-outlined text-[18px] text-primary/70">photo_camera</span>
<span className="material-symbols-outlined text-[18px] text-primary/70">alternate_email</span>
</div>
<button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">chat</span></button>
</div>
</div>
</div></div>

<div className="mt-8 text-center"><div className="flex items-center justify-center gap-2">
<button className="w-10 h-10 rounded-lg bg-primary text-white font-label-md">1</button>
<button className="w-10 h-10 rounded-lg border border-outline-variant text-on-surface-variant font-label-md">2</button>
<button className="w-10 h-10 rounded-lg border border-outline-variant text-on-surface-variant font-label-md">3</button>
<button className="w-10 h-10 rounded-lg border border-outline-variant text-on-surface-variant font-label-md">4</button>
<span className="px-2">...</span>
<button className="px-4 h-10 rounded-lg border border-outline-variant text-on-surface-variant font-label-md flex items-center gap-1">Next <span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div></div>

    </>
  );
}
