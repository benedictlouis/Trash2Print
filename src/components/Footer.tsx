
import { Recycle, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="text-trash2print-green-light" size={24} />
              <span className="text-xl font-bold">Trash2Print</span>
            </div>
            <p className="text-gray-300 mb-4">
              Mengubah sampah plastik menjadi filament 3D print berkualitas tinggi. 
              Bersama membangun masa depan yang lebih hijau dan berkelanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-trash2print-green-light transition-colors">Home</a></li>
              <li><a href="/daftar-mitra" className="text-gray-300 hover:text-trash2print-green-light transition-colors">Daftar Mitra</a></li>
              <li><a href="/buy-filaments" className="text-gray-300 hover:text-trash2print-green-light transition-colors">Buy Filaments</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-trash2print-green-light" />
                <span className="text-gray-300">info@trash2print.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-trash2print-green-light" />
                <span className="text-gray-300">+62 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-trash2print-green-light" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Trash2Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
