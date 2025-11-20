import { CheckCircle, Zap, BarChart3, Building, Star } from 'lucide-react';
import Logo from '../public/Logo/Logo KostKu.png'
import DashboardImg from '../public/Product/Dashboard KostKu.png';
import ManageRoomImg from '../public/Product/ManageRoom KostKu.png';
import RentFormImg from '../public/Product/RentForm KostKu.png';
import RentHistoryImg from '../public/Product/RentHistory KostKu.png';
const LandingPage = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white">
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-3">

                        <img src={Logo} className='w-[8vw]' />
                    </div>

                    <div className="flex gap-8">
                        <a href="/" className="text-[#053445] font-semibold text-lg relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#053445]"></span>
                        </a>
                        <a href="/news" className="text-gray-600 hover:text-[#053445] font-semibold text-lg transition-colors duration-200 relative group">
                            News
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#053445] group-hover:w-full transition-all duration-200"></span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-24 px-4 bg-gradient-to-br from-[#053445] via-[#064a5f] to-[#075670] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                            Solusi Modern untuk Pengelolaan Kos
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
                        Kelola Kos Lebih Mudah
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-cyan-50 mb-8">
                        Aplikasi manajemen kos yang praktis. Ganti buku catatan dan spreadsheet Anda dengan satu sistem terpusat yang rapi dan efisien.
                    </p>
            
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#053445] mb-4">Kenapa KostKu?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Teknologi terbaik untuk memudahkan pengelolaan properti kos Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-[#053445] to-[#064a5f] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="mx-auto bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Building className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Satu Tempat</h3>
                            <p className="text-cyan-50 leading-relaxed">Semua data kamar, transaksi, dan riwayat sewa tersimpan rapi dalam satu aplikasi.</p>
                        </div>

                        <div className="mx-auto bg-gradient-to-br from-[#064a5f] to-[#075670] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Hemat Waktu</h3>
                            <p className="text-cyan-50 leading-relaxed">Input transaksi dalam hitungan menit. Tidak perlu buka-tutup banyak file.</p>
                        </div>

                        <div className="mx-auto bg-gradient-to-br from-[#075670] to-[#0a6884] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Dashboard Ringkas</h3>
                            <p className="text-cyan-50 leading-relaxed">Pantau tingkat hunian dan aktivitas sewa dengan mudah lewat dashboard visual.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-[#053445] p-8 rounded-r-2xl shadow-lg">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#053445] text-white p-2 rounded-lg">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <span className="font-bold text-[#053445] text-xl">Segera hadir:</span> Website pelanggan khusus untuk setiap kos, di mana penghuni bisa mengajukan komplain dan membaca pengumuman dari admin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#053445] mb-4">Fitur Unggulan</h2>
                        <p className="text-gray-600 text-lg">Semua fitur tersedia di kedua paket</p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                        <div className="group">
                            <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-[#053445]/10 hover:ring-[#053445]/30 transition-all duration-300">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-80 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <img src={DashboardImg} alt=""  />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-gradient-to-br from-[#053445] to-[#064a5f] text-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-3">Dashboard Ringkas</h3>
                                <p className="text-cyan-50 leading-relaxed">Monitor total kamar, ketersediaan, dan transaksi dalam satu tampilan yang jelas dan informatif.</p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-[#053445]/10 hover:ring-[#053445]/30 transition-all duration-300">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-80 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <img src={ManageRoomImg} alt=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-gradient-to-br from-[#064a5f] to-[#075670] text-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-3">Kelola Kamar</h3>
                                <p className="text-cyan-50 leading-relaxed">Atur informasi kamar, harga, dan status ketersediaan dengan mudah dan cepat.</p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-[#053445]/10 hover:ring-[#053445]/30 transition-all duration-300">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-80 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                       <img src={RentFormImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-gradient-to-br from-[#075670] to-[#0a6884] text-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-3">Formulir Sewa</h3>
                                <p className="text-cyan-50 leading-relaxed">Catat transaksi sewa baru lengkap dengan data penghuni dan pembayaran secara terstruktur.</p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-[#053445]/10 hover:ring-[#053445]/30 transition-all duration-300">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-80 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <img src={RentHistoryImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-gradient-to-br from-[#0a6884] to-[#0c7a9a] text-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-3">Riwayat Sewa</h3>
                                <p className="text-cyan-50 leading-relaxed">Lihat histori lengkap untuk audit dan penanganan komplain internal dengan detail.</p>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Section */}
                    <div className="max-w-5xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#053445] text-center mb-12">Perbedaan Paket</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Basic Package */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-200">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full">
                                        <span className="text-[#053445] font-bold text-xl flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            Basic
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">Semua fitur dasar (Dashboard, Kelola Kamar, Formulir Sewa, Riwayat)</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">Data tersimpan 1 tahun</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">Support via email</p>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Package */}
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-xl p-8 border-2 border-amber-300 relative">
                                <div className="absolute -top-4 right-8 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    Populer
                                </div>

                                <div className="flex items-center justify-center mb-6">
                                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-full border-2 border-amber-300">
                                        <span className="text-[#053445] font-bold text-xl flex items-center gap-2">
                                            <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                                            Premium
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700 font-semibold">Semua fitur Basic + Kustomisasi Fitur </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">Data tersimpan selamanya</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">Priority support 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#053445] via-[#064a5f] to-[#075670] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">K</span>
                            </div>
                            <span className="text-2xl font-bold">KostKu</span>
                        </div>
                        <p className="text-cyan-200 text-lg mb-6">Solusi manajemen kos yang lebih baik</p>
                        <div className="flex gap-8 text-cyan-100">
                            <a href="/" className="hover:text-white transition-colors">Home</a>
                            <a href="/news" className="hover:text-white transition-colors">News</a>
                            <a href="https://www.instagram.com/kostku.idn/" className="hover:text-white transition-colors">Contact</a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/20 text-center text-cyan-200 text-sm">
                            <p>&copy; 2025 KostKu. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;