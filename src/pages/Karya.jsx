import React from 'react';

const Karya = () => (
    <div className="bg-dark pt-32 pb-20 md:pb-32 min-h-screen">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-heading">Proyek <span className="gradient-text-accent">Pilihan</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Desain Grafis', 'Web Development', 'UI/UX Design', 'Branding', 'Fotografi', 'Animasi'].map((kategori, i) => (
                    <div key={i} className="bg-medium rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all-smooth group border border-subtle hover:shadow-2xl hover:border-accent">
                        <img src={`https://placehold.co/600x400/1b263b/57cbcc?text=${kategori.replace(/\s/g, '+')}`} alt={`[Gambar dari ${kategori}]`} className="w-full h-56 object-cover"/>
                        <div className="p-6">
                            <p className="text-sm text-accent mb-1 font-semibold">{kategori}</p>
                            <h3 className="text-2xl font-bold mb-2 text-heading">Nama Proyek {i+1}</h3>
                            <p className="text-main">Deskripsi singkat tentang proyek ini.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Karya;