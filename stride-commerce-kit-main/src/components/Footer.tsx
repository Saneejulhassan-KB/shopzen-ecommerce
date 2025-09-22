// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopZen</h3>
              <p className="text-white/80 mb-4">
                Your one-stop destination for everything you need. Quality
                products, great prices, fast delivery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li>Help Center</li>
                <li>Track Order</li>
                <li>Returns</li>
                <li>Shipping Info</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 ShopZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  