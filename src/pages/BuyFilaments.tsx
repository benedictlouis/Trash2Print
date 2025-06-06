import { ShoppingCart, Star, Award, Truck, ExternalLink, CheckCircle, Package, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BuyFilaments = () => {
  const products = [
    {
      name: "Bottle Filament",
      price: "Rp 5.000",
      originalPrice: "Rp 10.000",
      image: "/lovable-uploads/image2.png",
      description: "Filament PET ramah lingkungan dari daur ulang botol plastik. Kualitas premium untuk hasil printing terbaik.",
      features: ["100% Recycled", "1.75mm diameter", "1kg weight", "Biodegradable"],
      buyLink: "https://tk.tokopedia.com/ZSkhpM1YC/"
    },
    {
      name: "ABS Eco Strong",
      price: "Rp 123.000",
      originalPrice: "Rp 150.000",
      image: "/lovable-uploads/image1.png",
      description: "Filament ABS daur ulang dengan kekuatan tinggi. Ideal untuk prototyping dan aplikasi engineering.",
      features: ["High Strength", "Heat Resistant", "1.75mm diameter", "1kg weight"],
      buyLink: "https://tk.tokopedia.com/ZSkhcbm2s/"
    },
    {
      name: "PETG Eco Clear",
      price: "Rp 148.000",
      originalPrice: "Rp 180.000",
      image: "/lovable-uploads/image.png",
      description: "Filament PETG transparan dari daur ulang. Kombinasi sempurna antara kekuatan dan transparansi.",
      features: ["Crystal Clear", "Chemical Resistant", "1.75mm diameter", "1kg weight"],
      buyLink: "https://tk.tokopedia.com/ZSkhcpXEF/"
    }
  ];

  const advantages = [
    {
      icon: <Award className="text-trash2print-green-primary" size={48} />,
      title: "Kualitas Premium",
      description: "Filament daur ulang dengan standar kualitas setara produk virgin material"
    },
    {
      icon: <CheckCircle className="text-trash2print-green-primary" size={48} />,
      title: "Ramah Lingkungan",
      description: "100% dari bahan daur ulang, membantu mengurangi sampah plastik di lingkungan"
    },
    {
      icon: <Truck className="text-trash2print-green-primary" size={48} />,
      title: "Pengiriman Cepat",
      description: "Gratis ongkir ke seluruh Indonesia dengan jaminan barang sampai dengan aman"
    }
  ];

  const handleBuyClick = async (url: string, productName: string) => {

    try {
      const response = await fetch('http://localhost:3001/api/log-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: productName,
          productLink: url
        }),
      });

      const result = await response.json();
      console.log('Respon dari server log:', result.message);

    } catch (error) {
      console.error('Gagal menghubungi server log:', error);

    }

    window.open(url, '_blank');
  };

  const handleGeneralBuyClick = () => {
    const generalUrl = 'https://tokopedia.com/trash2print-filaments';
    handleBuyClick(generalUrl, 'General CTA Button');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-trash2print-green-light via-trash2print-green-primary to-trash2print-green-dark py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-36 h-36 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-yellow-300/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center text-white">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Package className="text-yellow-300 animate-pulse" size={24} />
                <span className="text-yellow-300 font-semibold text-lg">Kualitas Premium, Harga Terjangkau</span>
                <Package className="text-yellow-300 animate-pulse" size={24} />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Filament 3D Print
                <span className="block text-yellow-300 animate-glow">Ramah Lingkungan</span>
              </h1>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Dapatkan filament 3D print berkualitas premium dari bahan daur ulang. 
              Printing berkualitas sambil mendukung lingkungan yang lebih hijau.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-yellow-300 fill-current animate-pulse" size={24} style={{animationDelay: `${star * 0.1}s`}} />
              ))}
              <span className="text-white ml-2 text-lg font-semibold">4.9/5 dari 500+ review</span>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center space-x-1">
                <Zap className="text-yellow-300" size={20} />
                <span className="text-white font-semibold">Flash Sale 30% OFF!</span>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={handleGeneralBuyClick}
              className="bg-yellow-400 text-trash2print-green-dark hover:bg-yellow-300 hover:scale-110 transform transition-all duration-300 font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl animate-pulse-glow border-2 border-yellow-300"
              style={{animationDelay: '0.8s'}}
            >
              Belanja Sekarang
              <ExternalLink className="ml-2 animate-bounce" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-trash2print-green-light/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-trash2print-green-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Produk Filament Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan lengkap filament 3D print dari bahan daur ulang dengan berbagai jenis dan warna
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    SALE 30%
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-trash2print-green-primary transition-colors duration-300">{product.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-trash2print-green-primary">{product.price}</span>
                    <span className="text-gray-500 line-through">{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">30% OFF</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 group-hover:text-gray-700">
                    {product.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <CheckCircle className="text-trash2print-green-primary animate-pulse" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleBuyClick(product.buyLink, product.name)}
                    className="w-full bg-trash2print-green-primary hover:bg-trash2print-green-dark hover:scale-105 transform transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                  >
                    Beli Sekarang
                    <ShoppingCart className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Advantages Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-trash2print-green-light/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Mengapa Pilih Filament Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kualitas terjamin dengan dampak positif untuk lingkungan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-gray-50/80 backdrop-blur-sm hover:bg-white hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:animate-float">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-trash2print-green-primary transition-colors duration-300">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-trash2print-green-light/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Dari Sampah Menjadi Karya</h2>
              <p className="text-lg text-gray-600 mb-6">
                Setiap roll filament yang Anda beli adalah hasil dari proses daur ulang sampah plastik 
                yang dikumpulkan oleh mitra-mitra kami di seluruh Indonesia.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl font-bold text-trash2print-green-primary group-hover:scale-110 transition-transform duration-300">1000+</div>
                  <div className="text-sm text-gray-600">Kg Sampah Daur Ulang</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl font-bold text-trash2print-green-primary group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-sm text-gray-600">Customer Puas</div>
                </div>
              </div>
              <Button 
                onClick={handleGeneralBuyClick}
                className="bg-trash2print-green-primary hover:bg-trash2print-green-dark hover:scale-105 transform transition-all duration-300 text-white px-8 py-3 shadow-lg hover:shadow-xl"
              >
                Mulai Berkreasi
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-trash2print-green-light to-trash2print-green-primary p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="bg-white p-6 rounded-2xl group-hover:bg-gray-50 transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=center" 
                    alt="3D Printing Process" 
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <p className="text-center text-gray-600 mt-4 font-medium group-hover:text-trash2print-green-primary transition-colors duration-300">
                    Kualitas printing terbaik dengan filament ramah lingkungan
                  </p>
                </div>
              </div>
            </div>
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
            Mulai Project 3D Print Anda Hari Ini
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Dapatkan filament berkualitas premium dengan harga terjangkau. 
            Gratis ongkir ke seluruh Indonesia dengan garansi kepuasan 100%.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in">
            <Button 
              size="lg" 
              onClick={handleGeneralBuyClick}
              className="bg-yellow-400 text-trash2print-green-dark hover:bg-yellow-300 hover:scale-110 transform transition-all duration-300 font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl border-2 border-yellow-300 animate-glow"
            >
              Belanja di Tokopedia
              <ExternalLink className="ml-2 animate-bounce" size={20} />
            </Button>
            <div className="flex items-center space-x-4 text-white text-sm font-semibold">
              <span className="flex items-center space-x-1">
                <Star className="text-yellow-300 fill-current" size={16} />
                <span>4.9/5 Rating</span>
              </span>
              <span className="flex items-center space-x-1">
                <Truck className="text-white" size={16} />
                <span>Gratis Ongkir</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="text-green-300" size={16} />
                <span>Garansi 100%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyFilaments;