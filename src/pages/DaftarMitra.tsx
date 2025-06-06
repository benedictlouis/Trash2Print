
import { Users, DollarSign, Recycle, Globe, ExternalLink, CheckCircle, Star, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DaftarMitra = () => {
  const benefits = [
    {
      icon: <DollarSign className="text-trash2print-green-primary" size={48} />,
      title: "Penghasilan Tambahan",
      description: "Dapatkan penghasilan dari sampah plastik yang Anda kumpulkan dengan sistem harga yang transparan dan menguntungkan"
    },
    {
      icon: <Globe className="text-trash2print-green-primary" size={48} />,
      title: "Dampak Lingkungan",
      description: "Berkontribusi langsung dalam mengurangi sampah plastik dan menciptakan lingkungan yang lebih bersih"
    },
    {
      icon: <Users className="text-trash2print-green-primary" size={48} />,
      title: "Komunitas Peduli",
      description: "Bergabung dengan jaringan mitra yang peduli lingkungan dan saling mendukung"
    }
  ];

  const requirements = [
    "Berusia minimal 18 tahun",
    "Memiliki akses ke area pengumpulan sampah plastik",
    "Komitmen untuk konsistensi pengumpulan",
    "Memiliki tempat penyimpanan sementara",
    "Dapat mengakses titik drop-off terdekat"
  ];

  const steps = [
    {
      number: "01",
      title: "Daftar Online",
      description: "Isi formulir pendaftaran melalui Google Form yang telah kami sediakan"
    },
    {
      number: "02",
      title: "Verifikasi Data",
      description: "Tim kami akan memverifikasi data dan menghubungi Anda dalam 1-2 hari kerja"
    },
    {
      number: "03",
      title: "Pelatihan Singkat",
      description: "Ikuti pelatihan online tentang cara pengumpulan dan sortir sampah plastik"
    },
    {
      number: "04",
      title: "Mulai Mengumpulkan",
      description: "Mulai kumpulkan sampah plastik dan kirim ke titik drop-off terdekat"
    }
  ];

  const handleRegisterClick = () => {
    window.open('https://forms.gle/BB5xGp6ukw1H1f6r8', '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-trash2print-green-light via-trash2print-green-primary to-trash2print-green-dark py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/15 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center text-white">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Star className="text-yellow-300 animate-pulse" size={24} />
                <span className="text-yellow-300 font-semibold text-lg">Bergabung dengan 1000+ Mitra</span>
                <Star className="text-yellow-300 animate-pulse" size={24} />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Jadilah Mitra
                <span className="block text-yellow-300 animate-glow">Trash2Print</span>
              </h1>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Bergabunglah dengan gerakan daur ulang plastik dan dapatkan penghasilan tambahan 
              sambil berkontribusi untuk lingkungan yang lebih bersih
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center space-x-1">
                <TrendingUp className="text-yellow-300" size={20} />
                <span className="text-white font-semibold">Penghasilan Hingga 2jt/bulan</span>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={handleRegisterClick}
              className="bg-white text-trash2print-green-primary hover:bg-gray-100 hover:scale-110 transform transition-all duration-300 font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl animate-pulse-glow"
              style={{animationDelay: '0.7s'}}
            >
              Daftar Sekarang
              <ExternalLink className="ml-2 animate-bounce" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-trash2print-green-light/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-trash2print-green-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Keuntungan Menjadi Mitra</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan berbagai keuntungan menarik dengan menjadi mitra pengumpul sampah plastik Trash2Print
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:animate-float">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-trash2print-green-primary transition-colors duration-300">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Requirements Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-trash2print-green-light/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Syarat Menjadi Mitra</h2>
              <p className="text-lg text-gray-600 mb-8">
                Persyaratan yang mudah dan fleksibel untuk memulai kemitraan dengan Trash2Print
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="text-trash2print-green-primary flex-shrink-0 animate-pulse" size={20} />
                    <span className="text-gray-700 hover:text-trash2print-green-primary transition-colors duration-300">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-trash2print-green-light to-trash2print-green-primary p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="bg-white p-6 rounded-2xl text-center group-hover:bg-gray-50 transition-colors duration-300">
                  <Recycle className="text-trash2print-green-primary mx-auto mb-4 group-hover:animate-float" size={64} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-trash2print-green-primary transition-colors duration-300">Mulai Dari Sekarang</h3>
                  <p className="text-gray-600 mb-4">
                    Tidak ada biaya pendaftaran. Mulai kumpulkan sampah plastik dan dapatkan penghasilan langsung!
                  </p>
                  <Button 
                    onClick={handleRegisterClick}
                    className="bg-trash2print-green-primary hover:bg-trash2print-green-dark hover:scale-105 transform transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                  >
                    Daftar Mitra
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Steps Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-trash2print-green-light/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Langkah Mudah Menjadi Mitra</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pendaftaran yang simple dan cepat, dalam 4 langkah mudah
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-trash2print-green-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-trash2print-green-dark group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-trash2print-green-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20 bg-gradient-to-r from-trash2print-green-primary via-trash2print-green-dark to-trash2print-green-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%, rgba(255,255,255,0.1), transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%, rgba(255,255,255,0.1), transparent)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Siap Memulai Perjalanan Hijau Anda?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Bergabunglah dengan lebih dari 1000+ mitra di seluruh Indonesia yang telah 
            merasakan manfaat menjadi bagian dari gerakan daur ulang
          </p>
          <Button 
            size="lg" 
            onClick={handleRegisterClick}
            className="bg-white text-trash2print-green-primary hover:bg-gray-100 hover:scale-110 transform transition-all duration-300 font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl animate-glow"
          >
            Daftar Mitra Sekarang
            <ExternalLink className="ml-2 animate-bounce" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DaftarMitra;
