import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Users, MapPin, Check, Calendar, ArrowLeft, Loader2, Home, Sofa } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Get Supabase function URL from environment variable
const FUNCTION_URL = import.meta.env.VITE_SUPABASE_FUNCTION_URL;

const PropertyDetail = () => {
  const { id } = useParams(); // This is property_ref from the URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          endpoint: `properties/${id}`,
        });

        const response = await fetch(`${FUNCTION_URL}?${params}`);

        if (!response.ok) {
          throw new Error('Property not found');
        }

        const data = await response.json();
        setProperty(data);
        setActiveImage(0);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching property:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Available now';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return dateString;
    }
  };

  // Get rent frequency text
  const getRentFrequency = () => {
    if (!property) return '/ month';
    if (property.let_rent_frequency === 52) return '/ week';
    if (property.let_rent_frequency === 1) return '/ month';
    if (property.let_rent_frequency === 12) return '/ month';
    return '/ month';
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 pb-20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-brand" />
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 pb-20 text-center container mx-auto px-6">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">{error || "The property you're looking for doesn't exist."}</p>
          <Link 
            to="/properties" 
            className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View All Properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Build property details from available data
  const propertyFeatures = property.features || [];
  const propertyDetails = [];
  
  if (property.bedrooms) {
    propertyDetails.push(`${property.bedrooms} ${property.bedrooms === 1 ? 'bedroom' : 'bedrooms'}`);
  }
  if (property.bathrooms) {
    propertyDetails.push(`${property.bathrooms} ${property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}`);
  }
  if (property.receptions) {
    propertyDetails.push(`${property.receptions} reception ${property.receptions === 1 ? 'room' : 'rooms'}`);
  }
  if (property.floor_area) {
    propertyDetails.push(`${property.floor_area} floor area`);
  }

  // Add parking info
  if (property.parking && property.parking.length > 0) {
    propertyDetails.push(`Parking: ${property.parking.join(', ')}`);
  }

  // Add heating info
  if (property.heating && property.heating.length > 0) {
    propertyDetails.push(`Heating: ${property.heating.join(', ')}`);
  }

  // Add outdoor space
  if (property.outside_space && property.outside_space.length > 0) {
    propertyDetails.push(`Outdoor space: ${property.outside_space.join(', ')}`);
  }

  // Images with fallback
  const images = property.images && property.images.length > 0 
    ? property.images 
    : [{ url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80", text: "" }];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back link */}
      <section className="pt-24 pb-4">
        <div className="container mx-auto px-6">
          <Link 
            to="/properties" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View more properties
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={images[activeImage]?.url || images[0]?.url}
                alt={property.display_address}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-brand" : "border-transparent hover:border-border"
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={`View ${i + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Title & Quick Info */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            {property.headline || property.display_address}
          </h1>
          <p className="text-muted-foreground mb-6">{property.display_address}</p>
          
          <div className="flex flex-wrap gap-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bed className="w-4 h-4" /> {property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
            </span>
            {property.bathrooms && (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bath className="w-4 h-4" /> {property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}
              </span>
            )}
            {property.receptions && (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sofa className="w-4 h-4" /> {property.receptions} Reception
              </span>
            )}
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> {property.town || property.county}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Description */}
            <div className="lg:col-span-2 space-y-10">
              {/* Property Type Badge */}
              <div>
                <span className="inline-block bg-brand/10 text-brand text-xs font-medium px-3 py-1 rounded-full">
                  {property.trans_type_id === 1 ? 'For Sale' : 'To Let'}
                </span>
                {property.new_home_flag && (
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full ml-2">
                    New Home
                  </span>
                )}
              </div>

              {/* Availability */}
              {property.let_date_available && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" /> 
                  Available from: {formatDate(property.let_date_available)}
                </div>
              )}

              {/* Summary */}
              {property.summary && (
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Summary</h3>
                  <div 
                    className="text-muted-foreground text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: property.summary }}
                  />
                </div>
              )}

              {/* Full Description */}
              {property.description && (
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Full Description</h3>
                  <div 
                    className="text-muted-foreground text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: property.description }}
                  />
                </div>
              )}

              {/* Key Features */}
              {propertyFeatures.length > 0 && (
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {propertyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-brand font-bold mt-0.5">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Property Details */}
              {propertyDetails.length > 0 && (
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Property Details</h3>
                  <ul className="space-y-2">
                    {propertyDetails.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-brand font-bold mt-0.5">+</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Location */}
              {property.searchable_areas && property.searchable_areas.length > 0 && (
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Location</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.searchable_areas.map((area) => (
                      <span 
                        key={area.id}
                        className="inline-block bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-lg"
                      >
                        {area.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              {(property.council_tax_band || property.tenure_type_id) && (
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Additional Information</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {property.council_tax_band && (
                      <p>Council Tax Band: <span className="text-foreground font-medium">{property.council_tax_band}</span></p>
                    )}
                    {property.tenure_type_id && (
                      <p>Tenure: <span className="text-foreground font-medium">
                        {property.tenure_type_id === 1 ? 'Freehold' : 
                         property.tenure_type_id === 2 ? 'Leasehold' : 'Unknown'}
                      </span></p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-xs text-muted-foreground mb-1">
                  {property.trans_type_id === 1 ? 'Price' : 'Rent'}
                </p>
                <p className="font-heading text-2xl font-bold text-foreground mb-4">
                  £{property.price?.toLocaleString()}
                  <span className="text-sm font-normal text-muted-foreground">
                    {property.trans_type_id === 2 ? getRentFrequency() : ''}
                  </span>
                </p>

                {/* Deposit Info for Lettings */}
                {property.trans_type_id === 2 && property.let_bond && (
                  <p className="text-sm text-muted-foreground mb-4">
                    Deposit: £{property.let_bond?.toLocaleString()}
                  </p>
                )}

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-brand" /> Professional management
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-brand" /> Full transparency
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-brand" /> Quality assured
                  </li>
                </ul>

                <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                  Interested in this property?
                </h4>
                
                <Link
                  to="/contact"
                  className="inline-block w-full text-center bg-brand text-brand-foreground text-sm font-medium py-3 rounded-lg hover:opacity-90 transition-opacity mb-3"
                >
                  Request Viewing
                </Link>

                {/* EPC and Brochure */}
                <div className="space-y-2">
                  {property.epc && (
                    <a
                      href={property.epc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-brand hover:underline"
                    >
                      View EPC Certificate
                    </a>
                  )}
                  {property.brochure && (
                    <a
                      href={property.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-brand hover:underline"
                    >
                      Download Brochure
                    </a>
                  )}
                </div>
              </div>

              {/* Agent Info */}
              {property.lead_staff && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Contact Agent</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                      {property.lead_staff.split(" ").map(n => n[0]).join("")}
                    </div>
                    <p className="text-sm font-medium text-foreground">{property.lead_staff}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Ref: {property.property_ref}
                  </p>
                </div>
              )}

              {/* Map placeholder */}
              {(property.latitude && property.longitude) && (
                <div className="bg-secondary border border-border rounded-xl p-6 text-center">
                  <MapPin className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Location</p>
                  <p className="text-xs text-muted-foreground">
                    {property.latitude}, {property.longitude}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;