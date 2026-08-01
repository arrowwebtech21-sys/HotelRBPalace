import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ChevronRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { CORPORATE_CLIENTS, type CorporateClient } from '../data/clients';

export default function CorporateClientsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Divide the 68 clients into 3 balanced rows for the continuous marquee
  const row1 = CORPORATE_CLIENTS.slice(0, 23);
  const row2 = CORPORATE_CLIENTS.slice(23, 46);
  const row3 = CORPORATE_CLIENTS.slice(46);

  const filteredClients = CORPORATE_CLIENTS.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="corporate-clients" className="py-20 bg-[#fcfdfc] border-t border-b border-[#1f2a1d]/10 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 text-center mb-12">
        <span className="inline-flex items-center gap-1.5 text-[#336443] font-semibold text-xs uppercase tracking-widest bg-[#f4f7f4] px-4 py-1.5 rounded-full border border-[#1f2a1d]/10 mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Corporate Excellence
        </span>
        <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2a1d] tracking-tight leading-tight mt-1">
          Trusted by Industry Leaders
        </h2>
        <p className="text-[#4b5b47] text-xs sm:text-sm max-w-2xl mx-auto mt-3 font-light">
          Over 68+ premier multinational corporations, banking leaders, automotive manufacturers, and industrial giants host their official conferences, executive retreats, and banquets at Hotel RB Palace.
        </p>
      </div>

      {/* Marquee Outer Container with Edge Gradient Fades */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full space-y-5 py-2 overflow-hidden"
      >
        {/* Left & Right Edge Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-48 bg-gradient-to-r from-[#fcfdfc] via-[#fcfdfc]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-48 bg-gradient-to-l from-[#fcfdfc] via-[#fcfdfc]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Infinite Marquee */}
        <div className="flex overflow-hidden relative">
          <motion.div
            animate={{ x: isHovered ? undefined : ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 130
            }}
            className="flex gap-4 pr-4 shrink-0"
          >
            {[...row1, ...row1].map((client, idx) => (
              <ClientCard key={`r1-${client.id}-${idx}`} client={client} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="flex overflow-hidden relative">
          <motion.div
            animate={{ x: isHovered ? undefined : ['-50%', '0%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 140
            }}
            className="flex gap-4 pr-4 shrink-0"
          >
            {[...row2, ...row2].map((client, idx) => (
              <ClientCard key={`r2-${client.id}-${idx}`} client={client} isAltBg />
            ))}
          </motion.div>
        </div>

        {/* Row 3: Leftward Infinite Marquee */}
        <div className="flex overflow-hidden relative">
          <motion.div
            animate={{ x: isHovered ? undefined : ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 135
            }}
            className="flex gap-4 pr-4 shrink-0"
          >
            {[...row3, ...row3].map((client, idx) => (
              <ClientCard key={`r3-${client.id}-${idx}`} client={client} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer CTA & View All Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f2a1d] bg-[#f4f7f4] hover:bg-[#e4eae4] px-6 py-3 rounded-full transition-all border border-[#1f2a1d]/10 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
        >
          View All 68 Corporate Partners <ChevronRight className="w-4 h-4 text-[#336443]" />
        </button>
      </div>

      {/* Full Directory Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[36px] max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#1f2a1d]/10"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center justify-between bg-[#f4f7f4]/60">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#336443]">
                    Official Client Directory
                  </span>
                  <h3 className="text-2xl font-normal text-[#1f2a1d] mt-1">
                    Corporate Partners & Delegations ({CORPORATE_CLIENTS.length})
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2.5 rounded-full bg-white hover:bg-gray-100 border border-gray-200 text-[#1f2a1d] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="p-6 border-b border-gray-100 bg-white">
                <input
                  type="text"
                  placeholder="Search corporate company name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f4f7f4] border border-[#1f2a1d]/10 rounded-2xl px-5 py-3 text-sm text-[#1f2a1d] focus:outline-none focus:border-[#85AB8B]"
                />
              </div>

              {/* Grid of All 68 Corporate Clients */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 scrollbar-thin">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className="p-4 rounded-2xl bg-[#f4f7f4]/60 border border-[#1f2a1d]/5 hover:border-[#85AB8B] hover:bg-white transition-all text-xs font-semibold text-[#1f2a1d] flex items-center gap-3 shadow-2xs"
                  >
                    <LogoImage client={client} size="sm" />
                    <span>{client.name}</span>
                  </div>
                ))}
                {filteredClients.length === 0 && (
                  <p className="col-span-full text-center text-sm text-gray-500 py-8">
                    No corporate partners found matching "{searchQuery}".
                  </p>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 bg-[#f4f7f4]/60 text-center text-xs text-[#4b5b47]">
                For corporate event bookings, banquets, and bulk room reservations, email us directly at{' '}
                <a href="mailto:hotelrbpalace@gmail.com" className="font-bold text-[#336443] underline">
                  hotelrbpalace@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Client Card Component with Real Logo & Fallback
function ClientCard({ client, isAltBg = false }: { client: CorporateClient; isAltBg?: boolean }) {
  return (
    <div
      className={`px-5 py-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 shrink-0 cursor-pointer group hover:scale-105 hover:shadow-xl hover:border-[#85AB8B] ${
        isAltBg ? 'bg-[#f4f7f4]/80 border-[#1f2a1d]/10 hover:bg-white' : 'bg-white border-[#1f2a1d]/10'
      }`}
    >
      <LogoImage client={client} />
      <span className="text-xs font-semibold text-[#1f2a1d] tracking-wide whitespace-nowrap group-hover:text-[#336443]">
        {client.name}
      </span>
    </div>
  );
}

// Smart Logo Image Component with Fallback to Corporate Emblem
function LogoImage({ client, size = 'md' }: { client: CorporateClient; size?: 'sm' | 'md' }) {
  const [imgError, setImgError] = useState(false);
  const dimensionClass = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';

  // Primary Clearbit Logo Endpoint & Fallback Google Favicon Endpoint
  const primaryLogoUrl = client.logo;
  const secondaryLogoUrl = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=64`;

  return (
    <div
      className={`${dimensionClass} rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[#85AB8B] transition-colors p-1`}
    >
      {!imgError ? (
        <img
          src={primaryLogoUrl}
          alt={`${client.name} Logo`}
          onError={(e) => {
            // If Clearbit logo fails, try Google Favicon
            const target = e.currentTarget;
            if (target.src === primaryLogoUrl) {
              target.src = secondaryLogoUrl;
            } else {
              setImgError(true);
            }
          }}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full bg-[#f4f7f4] text-[#336443] flex items-center justify-center text-[10px] font-bold">
          {client.name.substring(0, 2)}
        </div>
      )}
    </div>
  );
}
