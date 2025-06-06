import { useState } from 'react'; // 1. Impor useState
import { ArrowRight, Recycle, Users, ShoppingCart, Play, CheckCircle, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  
  const youtubeVideoUrl = "https://youtube.com/embed/DDnTy_D2OCs?autoplay=1"; // Tambahkan autoplay=1 agar video langsung main

  const features = [
    {
      icon: <Recycle className="text-trash2print-green-primary" size={48} />,
      title: "Daur Ulang Inovatif",
      description: "Mengubah sampah plastik menjadi filament 3D print berkualitas tinggi dengan teknologi terdepan"
    },
    {
      icon: <Users className="text-trash2print-green-primary" size={48} />,
      title: "Kemitraan Berkelanjutan",
      description: "Bergabung dengan jaringan mitra pengumpul sampah dan dapatkan penghasilan tambahan"
    },
    {
      icon: <ShoppingCart className="text-trash2print-green-primary" size={48} />,
      title: "Produk Ramah Lingkungan",
      description: "Filament 3D print berkualitas dari bahan daur ulang untuk kebutuhan printing Anda"
    }
  ];

  const processes = [
    "Pengumpulan sampah plastik dari mitra",
    "Pemilahan dan pembersihan material",
    "Proses daur ulang dengan teknologi canggih",
    "Produksi filament 3D print berkualitas",
    "Distribusi ke konsumen"
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trash2print-green-light via-trash2print-green-primary to-trash2print-green-dark min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="animate-fade-in">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="text-yellow-300 animate-pulse" size={24} />
                  <span className="text-yellow-300 font-semibold">Inovasi Berkelanjutan</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Dari Sampah Menjadi
                  <span className="block text-yellow-300 animate-glow">Inovasi 3D</span>
                </h1>
              </div>
              <p className="text-xl mb-8 text-gray-100 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Trash2Print mengubah sampah plastik menjadi filament 3D print berkualitas tinggi. 
                Bersama kita ciptakan masa depan yang lebih hijau dan berkelanjutan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Link to="/daftar-mitra">
                  <Button size="lg" className="bg-white text-trash2print-green-primary hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 font-semibold px-8 py-4 shadow-lg hover:shadow-xl animate-pulse-glow">
                    Jadi Mitra Sekarang
                    <ArrowRight className="ml-2 animate-bounce" size={20} />
                  </Button>
                </Link>
                <Link to="/buy-filaments">
                  <Button size="lg" className="bg-trash2print-green-dark border-2 border-white text-white hover:bg-white hover:text-trash2print-green-primary hover:scale-105 transform transition-all duration-300 font-semibold px-8 py-4 shadow-lg hover:shadow-xl">
                    Beli Filament
                    <ShoppingCart className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/Render_Trash2Print.png" 
                    alt="Trash2Print Process" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trash2print-green-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-trash2print-green-light/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-trash2print-green-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Mengapa Trash2Print?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menggabungkan teknologi daur ulang terdepan dengan komitmen lingkungan 
              untuk menciptakan solusi berkelanjutan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:animate-float">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-trash2print-green-primary transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-trash2print-green-light/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Proses Daur Ulang Kami</h2>
              <p className="text-lg text-gray-600 mb-8">
                Dengan teknologi terdepan, kami mengubah sampah plastik menjadi filament 3D print 
                berkualitas tinggi melalui proses yang ramah lingkungan.
              </p>
              <div className="space-y-4">
                {processes.map((process, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="text-trash2print-green-primary flex-shrink-0 animate-pulse" size={20} />
                    <span className="text-gray-700 hover:text-trash2print-green-primary transition-colors duration-300">{process}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-trash2print-green-light to-trash2print-green-primary p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div 
                  className="relative p-6 rounded-2xl h-60 flex items-center justify-center cursor-pointer overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url('/lovable-uploads/Tumbnail.png')` }}
                  onClick={() => setVideoModalOpen(true)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="flex justify-center">
                      <Play className="group-hover:scale-110 transition-transform duration-300" size={64} />
                    </div>
                    <p className="mt-4 font-semibold">
                      Video Proses Daur Ulang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trash2print-green-primary via-trash2print-green-dark to-trash2print-green-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%, rgba(255,255,255,0.1), transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%, rgba(255,255,255,0.1), transparent)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Mari Bersama Ciptakan Masa Depan Hijau
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Bergabunglah dengan gerakan daur ulang plastik dan dapatkan filament 3D print 
            berkualitas sambil berkontribusi untuk lingkungan
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounce-in">
            <Link to="/daftar-mitra">
              <Button size="lg" className="bg-white text-trash2print-green-primary hover:bg-gray-100 hover:scale-110 transform transition-all duration-300 font-semibold px-10 py-4 shadow-xl hover:shadow-2xl animate-glow">
                Daftar Mitra
                <Users className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/buy-filaments">
              <Button size="lg" className="bg-yellow-400 text-trash2print-green-dark hover:bg-yellow-300 hover:scale-110 transform transition-all duration-300 font-semibold px-10 py-4 shadow-xl hover:shadow-2xl border-2 border-yellow-300">
                Beli Filament
                <ShoppingCart className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* 4. Tambahkan JSX untuk Modal Video di sini */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setVideoModalOpen(false)} // Menutup modal saat klik di luar video
        >
          <div 
            className="relative bg-black p-2 rounded-lg w-full max-w-4xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik di dalam video
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-200 transition-all"
            >
              <X size={20} />
            </button>
            {/* Container untuk menjaga aspect ratio 16:9 */}
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={youtubeVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;