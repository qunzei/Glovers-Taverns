import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Page = 'home' | 'full-menu' | 'upcoming-shows' | 'events';
export type VenueId = 'glovers' | 'packer_stadium' | 'blue_collar' | null;

interface NavigationContextType {
  currentPage: Page;
  currentVenue: VenueId;
  navigate: (page: Page, sectionId?: string) => void;
  selectVenue: (venue: VenueId) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Helper to map Venue IDs to URL slugs
const getVenueSlug = (id: VenueId) => {
  if (!id) return '';
  if (id === 'packer_stadium') return 'packer-stadium';
  if (id === 'blue_collar') return 'blue-collar';
  return id; // glovers
};

const getVenueFromSlug = (slug: string): VenueId => {
  if (slug === 'packer-stadium') return 'packer_stadium';
  if (slug === 'blue-collar') return 'blue_collar';
  if (slug === 'glovers') return 'glovers';
  return null;
};

const getPageSlug = (page: Page, venue: VenueId) => {
    if (page === 'home') return '';
    if (page === 'full-menu') return 'menu';
    if (page === 'upcoming-shows') return 'events';
    if (page === 'events') return 'events';
    return '';
};

const getPageFromSlug = (slug: string, venue: VenueId): Page => {
    if (!slug) return 'home';
    if (slug === 'menu') return 'full-menu';
    if (slug === 'events') {
        if (venue === 'blue_collar') return 'upcoming-shows';
        return 'events';
    }
    return 'home';
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from Hash URL (safer for static/preview environments)
  const getInitialState = () => {
      // Hash format: #/venue-slug/page-slug
      const hash = window.location.hash;
      const path = hash.startsWith('#') ? hash.slice(1) : '';
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      
      const parts = cleanPath.split('/').filter(Boolean);
      
      const venueSlug = parts[0] || '';
      const pageSlug = parts[1] || '';
      
      const venue = getVenueFromSlug(venueSlug);
      // If no valid venue found, default to landing page (null)
      if (!venue && venueSlug) {
          // invalid slug, maybe redirect? for now just null
      }
      
      const page = venue ? getPageFromSlug(pageSlug, venue) : 'home';
      
      return { venue, page };
  };

  const initialState = getInitialState();
  const [currentPage, setCurrentPage] = useState<Page>(initialState.page);
  const [currentVenue, setCurrentVenue] = useState<VenueId>(initialState.venue);

  // Handle hash changes (back button support)
  useEffect(() => {
    const handleHashChange = () => {
      const { venue, page } = getInitialState();
      setCurrentVenue(venue);
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const updateURL = (venue: VenueId, page: Page, sectionId?: string) => {
      let url = '#';
      const venueSlug = getVenueSlug(venue);
      
      if (venueSlug) {
          url += `/${venueSlug}`;
          const pageSlug = getPageSlug(page, venue);
          if (pageSlug) {
              url += `/${pageSlug}`;
          }
      } else {
        url = '#/';
      }
      
      // Update hash - this triggers hashchange event which updates state
      window.location.hash = url;

      // Handle scrolling if sectionId is present
      if (sectionId) {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
      }
  };

  const navigate = (page: Page, sectionId?: string) => {
    // Optimistic update not needed as hashchange is fast, but we can do it if needed.
    // We rely on hashchange listener to update state to keep everything in sync.
    updateURL(currentVenue, page, sectionId);
    if (!sectionId) window.scrollTo(0, 0);
  };

  const selectVenue = (venue: VenueId) => {
    // When changing venue, go to home of that venue
    updateURL(venue, 'home');
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, currentVenue, navigate, selectVenue }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};