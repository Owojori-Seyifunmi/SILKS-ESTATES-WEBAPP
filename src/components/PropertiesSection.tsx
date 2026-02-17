import { useState, useEffect } from "react";
import { Bed, Bath, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

// Get Supabase function URL from environment variable
const FUNCTION_URL = import.meta.env.VITE_SUPABASE_FUNCTION_URL || 
  'https://YOUR_PROJECT_REF.supabase.co/functions/v1/tenninety';

const PropertiesSection = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch first 3 properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          endpoint: 'properties',
          trans_type_id: '2', // Lettings
          page: '1',
          page_size: '3' // Only fetch 3 properties
        });

        const response = await fetch(`${FUNCTION_URL}?${params}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }

        const data = await response.json();
        setProperties(data.properties || []);
      } catch (err) {
        console.error('Error fetching properties:', err);
        // Set empty array on error so UI doesn't break
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Properties
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Browse our latest rental properties. Professionally marketed, fully managed, and ready for quality tenants.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-brand" />
          </div>
        ) : (
          <>
            {/* Property Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div
                  key={property.property_ref}
                  className="bg-card rounded-xl overflow-hidden border border-border group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={
                        property.images && property.images[0]
                          ? property.images[0].url
                          : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                      }
                      alt={property.display_address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <span className="font-heading text-xl font-bold text-foreground">
                        £{property.price?.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {property.let_rent_frequency === 1 ? ' / month' : 
                         property.let_rent_frequency === 52 ? ' / week' : 
                         ' / month'}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {property.display_address}
                    </p>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Bed className="w-4 h-4" />
                        {property.bedrooms} Beds
                      </span>
                      {property.bathrooms && (
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Bath className="w-4 h-4" />
                          {property.bathrooms} Baths
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/properties/${property.property_ref}`}
                      className="inline-block w-full text-center bg-brand text-brand-foreground text-sm font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Rent now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* View All */}
            <div className="mt-12 text-center">
              <Link
                to="/properties"
                className="inline-block border border-brand text-brand text-sm font-medium px-8 py-3 rounded-lg hover:bg-brand hover:text-brand-foreground transition-colors"
              >
                View all available properties
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;