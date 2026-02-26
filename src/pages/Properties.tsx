import { useState, useEffect } from "react";
import { Bed, Bath, Search, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Get Supabase function URL from environment variable
const FUNCTION_URL = 'https://yqbphdwjrkpzdvsufjsv.supabase.co/functions/v1/tenninety';

const portals = ["Zoopla","On the Market",];

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [searchableAreas, setSearchableAreas] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingAreas, setLoadingAreas] = useState(true);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("recent");
  
  // Filters
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    minBedrooms: "",
    maxPrice: "",
    transType: "2", // Default to lettings (2)
  });

  // Fetch searchable areas on mount
  useEffect(() => {
    fetchSearchableAreas();
  }, []);

  // Fetch property types on mount
  useEffect(() => {
    fetchPropertyTypes();
  }, []);

  // Fetch properties on mount
  useEffect(() => {
    fetchProperties();
  }, []);

  // Fetch searchable areas
  const fetchSearchableAreas = async () => {
    setLoadingAreas(true);
    try {
      const params = new URLSearchParams({
        endpoint: 'searchable_areas',
      });

      const response = await fetch(`${FUNCTION_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch areas');
      }

      const data = await response.json();
      setSearchableAreas(data.searchable_areas || []);
    } catch (err) {
      console.error('Error fetching searchable areas:', err);
    } finally {
      setLoadingAreas(false);
    }
  };

  // Fetch property types
  const fetchPropertyTypes = async () => {
    setLoadingTypes(true);
    try {
      const params = new URLSearchParams({
        endpoint: 'property_types',
      });

      const response = await fetch(`${FUNCTION_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch property types');
      }

      const data = await response.json();
      setPropertyTypes(data.property_types || []);
    } catch (err) {
      console.error('Error fetching property types:', err);
    } finally {
      setLoadingTypes(false);
    }
  };

  // Fetch properties from API
  const fetchProperties = async () => {
    setLoading(true);
    setError(null);

    try {
      // Build query parameters
      const params = new URLSearchParams({
        endpoint: 'properties',
        trans_type_id: filters.transType,
        page: '1',
        page_size: '12'
      });

      // Add optional filters
      if (filters.minBedrooms) {
        params.append('min_bedrooms', filters.minBedrooms);
      }
      if (filters.maxPrice) {
        params.append('max_price', filters.maxPrice);
      }
      if (filters.location) {
        params.append('searchable_areas', filters.location);
      }
      if (filters.propertyType) {
        params.append('prop_sub_ids', filters.propertyType);
      }

      const response = await fetch(`${FUNCTION_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }

      const data = await response.json();
      setProperties(data.properties || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching properties:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    fetchProperties();
  };

  // Sort properties
  const sortedProperties = [...properties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'recent':
      default:
        return new Date(b.update_date).getTime() - new Date(a.update_date).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero / Title */}
      <section className="pt-28 pb-12 bg-secondary">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Available Properties
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Browse our latest rental properties. Professionally marketed, fully managed, and ready for quality tenants.
          </p>
        </div>
      </section>

      {/* Search / Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1 w-full">
              <label className="text-xs text-muted-foreground mb-1 block">Location</label>
              <select 
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                disabled={loadingAreas}
                className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer disabled:opacity-50"
              >
                <option value="">All Locations</option>
                {searchableAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="text-xs text-muted-foreground mb-1 block">Property Type</label>
              <select 
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                disabled={loadingTypes}
                className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer disabled:opacity-50"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="text-xs text-muted-foreground mb-1 block">Min Bedrooms</label>
              <select 
                value={filters.minBedrooms}
                onChange={(e) => setFilters({...filters, minBedrooms: e.target.value})}
                className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="text-xs text-muted-foreground mb-1 block">Max Price (Monthly)</label>
              <select 
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer"
              >
                <option value="">Any</option>
                <option value="500">£500</option>
                <option value="750">£750</option>
                <option value="1000">£1,000</option>
                <option value="1500">£1,500</option>
                <option value="2000">£2,000</option>
                <option value="3000">£3,000</option>
              </select>
            </div>
            <button 
              onClick={handleSearch}
              disabled={loading}
              className="flex items-center gap-2 bg-brand text-brand-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Search
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6">
            {portals.map((portal) => (
              <span
                key={portal}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {portal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{sortedProperties.length}</span> Matches
            {filters.location && searchableAreas.find(a => a.id === parseInt(filters.location)) && (
              <span className="ml-2">
                in <span className="font-semibold text-foreground">
                  {searchableAreas.find(a => a.id === parseInt(filters.location)).name}
                </span>
              </span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-1.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer"
            >
              <option value="recent">Most recent</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-brand" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-medium mb-2">Failed to load properties</p>
              <p className="text-red-500 text-sm mb-4">{error}</p>
              <button 
                onClick={fetchProperties}
                className="bg-brand text-brand-foreground px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Properties Grid */}
          {!loading && !error && (
            <>
              {sortedProperties.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg mb-2">No properties found</p>
                  <p className="text-sm text-muted-foreground mb-4">Try adjusting your search criteria</p>
                  <button 
                    onClick={() => {
                      setFilters({
                        location: "",
                        propertyType: "",
                        minBedrooms: "",
                        maxPrice: "",
                        transType: "2",
                      });
                      setTimeout(() => fetchProperties(), 100);
                    }}
                    className="bg-brand text-brand-foreground px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProperties.map((property) => (
                    <div
                      key={property.property_ref}
                      className="bg-card rounded-xl overflow-hidden border border-border group"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={
                            property.images && property.images[0]
                              ? property.images[0].url
                              : "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80"
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
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Need Help Finding the Right Rental?
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto mb-8">
            Get expert help finding a home that suits your budget and needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;