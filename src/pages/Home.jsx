import React from 'react';

const Home = () => (
    <>
        <section className="bg-dark relative min-h-screen flex items-center justify-center text-center px-4 pt-24">
            <div className="z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase text-heading">Karya</h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase text-heading">
                    <span className="gradient-text-accent">Biak Sambas</span>
                </h1>
                <p className="max-w-3xl mx-auto mb-10 text-main text-lg">
                    Berakar di Sambas, berkarya untuk dunia. Setiap proyek adalah perpanjangan dari cerita <strong className="text-heading">'biak' Sambas</strong> yang menuangkan identitas dan pengalaman ke dalam karya digital.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#filosofi" className="bg-accent text-bg-dark px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20">Tentang Nama Ini</a>
                </div>
            </div>
        </section>

        <section id="filosofi" className="py-20 md:py-32 bg-medium">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">Filosofi <span className="gradient-text-accent">biiak.sbs</span></h2>
                    <p className="text-lg text-main mb-4">
                        "Biak" dalam bahasa daerah Sambas berarti "anak" atau "orang". Domain ini bukan sekadar alamat web, melainkan sebuah pernyataan identitas.
                    </p>
                    <p className="text-lg text-main">
                        Ini adalah pengingat bahwa di mana pun saya berada, karya yang saya hasilkan selalu membawa akar, nilai, dan semangat dari tempat saya berasal.
                    </p>
                </div>
                <div>
                     <div className="bg-dark p-8 rounded-xl border border-subtle space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">01.</span>
                            <div>
                                <h3 className="text-xl font-bold text-heading mb-1">Kenapa "Biak" ?</h3>
                                <p className="text-main">Untuk mengingatkan bahwa saya merupakan biak (orang) Sambas.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">02.</span>
                            <div>
                                <h3 className="text-xl font-bold text-heading mb-1">Akar dari Sambas</h3>
                                <p className="text-main">Filosofi ini terinspirasi dari nilai ketulusan dan kerja keras yang saya pelajari di tanah kelahiran saya, Sambas.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <span className="text-accent font-bold text-xl mt-1">03.</span>
                            <div>
                                <h3 className="text-xl font-bold text-heading mb-1">Portofolio yang Bercerita</h3>
                                <p className="text-main">Website ini bukan hanya galeri, tapi panggung untuk setiap karya saya untuk menunjukkan cerita dan nilainya.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    </>
);

export default Home;