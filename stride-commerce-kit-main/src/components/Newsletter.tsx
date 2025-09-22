// src/components/Newsletter.jsx
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-12 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Latest Offers
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and get exclusive deals, new arrivals,
          and special discounts delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
