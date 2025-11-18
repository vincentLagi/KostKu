import { Calendar, MapPin, Clock } from 'lucide-react';
import Logo from '../public/Logo/Logo KostKu.png'
const NewsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="" className='w-[8vw]' />
                    </div>

                    <div className="flex gap-8">
                        <a href="/" className="text-gray-600 hover:text-[#053445] font-semibold text-lg transition-colors duration-200 relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#053445] group-hover:w-full transition-all duration-200"></span>
                        </a>
                        <a href="/news" className="text-[#053445] font-semibold text-lg relative">
                            News
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#053445]"></span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#053445] via-[#064a5f] to-[#075670] py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Berita Terbaru</h1>
                    <p className="text-blue-100 text-lg">Ikuti perkembangan dan acara terbaru dari KostKu</p>
                </div>
            </section>

            {/* News Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        {/* Featured Image Placeholder */}
                        <div className="bg-gradient-to-br from-[#053445] to-[#075670] h-64 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <Calendar className="w-10 h-10" />
                                </div>
                                <p className="text-xl font-semibold">Grand Opening Event</p>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap gap-4 mb-6">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#053445] rounded-full text-sm font-semibold">
                                    <Calendar className="w-4 h-4" />
                                    28 November 2025
                                </span>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                                    <Clock className="w-4 h-4" />
                                    Acara Mendatang
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#053445] mb-6 leading-tight">
                                Grand Opening KostKu - Demonstrasi Bisnis
                            </h2>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Pada tanggal <strong>28 November 2025</strong>, KostKu akan membuka gerai untuk memperlihatkan demonstrasi dari bisnis kami.
                                    Datanglah dan saksikan bagaimana KostKu dapat mempermudah pengelolaan kos Anda dengan fitur-fitur canggih dan antarmuka yang user-friendly.
                                </p>

                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-[#053445] p-6 rounded-r-lg my-6">
                                    <h3 className="text-xl font-bold text-[#053445] mb-3">Yang Akan Anda Dapatkan:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#053445] mt-1">✓</span>
                                            <span>Demo langsung fitur-fitur unggulan KostKu</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#053445] mt-1">✓</span>
                                            <span>Konsultasi gratis dengan tim ahli kami</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#053445] mt-1">✓</span>
                                            <span>Penawaran spesial untuk pendaftar awal</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Acara ini akan menjadi kesempatan bagi Anda untuk melihat langsung bagaimana KostKu bekerja, bertanya langsung kepada tim kami,
                                    dan mendapatkan wawasan tentang bagaimana aplikasi ini dapat meningkatkan efisiensi operasional kos Anda.
                                </p>

                                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                                    <h3 className="text-xl font-bold text-[#053445] mb-4">Informasi Acara</h3>
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-[#053445]" />
                                            <span><strong>Tanggal:</strong> 28 November 2025</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-[#053445]" />
                                            <span><strong>Waktu:</strong> 09:00 - 17:00 WIB</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-[#053445]" />
                                            <span><strong>Lokasi:</strong> Gerbi 1, Kantin payung</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#053445] to-[#075670] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                    Daftar Sekarang
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Section for Feedback */}
                    <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#053445] mb-8 text-center">
                                Berikan Feedback & Saran Anda
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                {/* QR Code */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                                        <div className="w-48 h-48 bg-gradient-to-br from-[#053445] to-[#075670] rounded-lg flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <p className="text-sm font-semibold mb-2">Scan untuk isi form</p>
                                                <div className="w-32 h-32 bg-white rounded mx-auto flex items-center justify-center">
                                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                                                        <img src="src\assets\QR.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-center text-sm text-gray-600 mt-4 font-semibold">Arahkan kamera ke QR Code</p>
                                    </div>
                                </div>

                                {/* Feedback Form Link & Info */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#053445] mb-3">Kami Ingin Mendengarkan Anda</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Bagikan pengalaman Anda menggunakan KostKu dan berikan saran untuk perbaikan kami.
                                            Feedback Anda sangat berharga untuk mengembangkan layanan kami lebih baik.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-[#053445]">Yang dapat Anda sampaikan:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#053445] mt-1">•</span>
                                                <span>Pengalaman menggunakan aplikasi KostKu</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#053445] mt-1">•</span>
                                                <span>Saran dan rekomendasi fitur baru</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#053445] mt-1">•</span>
                                                <span>Laporan masalah atau bug yang ditemukan</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#053445] mt-1">•</span>
                                                <span>Pertanyaan dan dukungan umum</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSc6bIASWQZMplLbTlMsV5VHUXqBqLOMWlBKhR4M7Uf5WFdKfw/viewform?usp=dialog"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#053445] to-[#075670] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center"
                                        >
                                            Isi Form Feedback Sekarang
                                        </a>
                                    </div>

                                    <p className="text-sm text-gray-600">
                                        Atau akses form langsung melalui: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6bIASWQZMplLbTlMsV5VHUXqBqLOMWlBKhR4M7Uf5WFdKfw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-[#053445] font-semibold hover:underline break-all">forms.google.com/feedback</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsPage;