import React from 'react';

const Header = ({ onNavigate, currentPage }) => (
    <header className="p-6 md:p-8 fixed w-full z-20 bg-dark/80 backdrop-blur-md border-b border-subtle">
        <nav className="container mx-auto flex justify-between items-center">
            <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-accent">biiak.sbs</button>
            <div className="hidden md:flex space-x-8 items-center font-semibold text-heading">
                <button onClick={() => onNavigate('home')} className={`hover:text-accent transition-all-smooth ${currentPage === 'home' ? 'text-accent' : ''}`}>Home</button>
                <button onClick={() => onNavigate('karya')} className={`hover:text-accent transition-all-smooth ${currentPage === 'karya' ? 'text-accent' : ''}`}>Karya</button>
                <button onClick={() => onNavigate('tentang')} className={`hover:text-accent transition-all-smooth ${currentPage === 'tentang' ? 'text-accent' : ''}`}>Tentang Saya</button>
                <button onClick={() => onNavigate('kontak')} className={`bg-accent text-bg-dark px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all-smooth`}>Kontak</button>
            </div>
            <div className="md:hidden">
                <button className="text-3xl text-white">☰</button>
            </div>
        </nav>
    </header>
);

export default Header;
