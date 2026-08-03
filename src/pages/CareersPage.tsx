import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowLeft, Briefcase, Send, CheckCircle2, User, Mail, Phone, FileText, Sparkles, Building2, MapPin, Loader2, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import Magnet from '../components/Magnet';
import BrandLogo from '../components/BrandLogo';
import { CAREER_LISTINGS, type JobListing } from '../data/careers';
import { sendCareerApplication, type CareerApplication } from '../utils/booking';
import { MANAGER_EMAIL } from '../data/constants';

export default function CareersPage() {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeJobModal, setActiveJobModal] = useState<JobListing | null>(null);

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    positionTitle: string;
    department: string;
    experienceYears: string;
    portfolioUrl: string;
    coverNote: string;
  }>({
    name: '',
    email: '',
    phone: '',
    positionTitle: CAREER_LISTINGS[0].title,
    department: CAREER_LISTINGS[0].department,
    experienceYears: '1-3 Years',
    portfolioUrl: '',
    coverNote: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = ['All', 'Front Office', 'Food & Beverage', 'Housekeeping', 'Management', 'Transport'];

  const filteredJobs = selectedDept === 'All'
    ? CAREER_LISTINGS
    : CAREER_LISTINGS.filter((job) => job.department === selectedDept);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'positionTitle') {
      const matched = CAREER_LISTINGS.find((j) => j.title === value);
      setFormData((prev) => ({
        ...prev,
        positionTitle: value,
        department: matched ? matched.department : prev.department
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleApplyClick = (job: JobListing) => {
    setFormData((prev) => ({
      ...prev,
      positionTitle: job.title,
      department: job.department
    }));
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: CareerApplication = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      positionTitle: formData.positionTitle,
      department: formData.department,
      experienceYears: formData.experienceYears,
      portfolioUrl: formData.portfolioUrl,
      coverNote: formData.coverNote
    };

    await sendCareerApplication(payload);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fcfdfc] text-[#1f2a1d] min-h-screen flex flex-col justify-between selection:bg-[#85AB8B] selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#172215]/95 backdrop-blur-md text-white border-b border-white/10 px-4 sm:px-12 py-3 sm:py-4 flex items-center justify-between shadow-md gap-4">
        {/* Far Left: Back to Home */}
        <button
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer border border-white/15 active:scale-95 shrink-0 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#85AB8B]" /> <span className="hidden sm:inline">Back to Home</span><span className="sm:hidden">Back</span>
        </button>

        {/* Center: Hotel RB Palace Brand Logo */}
        <BrandLogo
          variant="header"
          size="sm"
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        />

        {/* Far Right: Apply Now CTA */}
        <a
          href="#apply-form"
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] text-xs font-bold px-4 py-2 rounded-full transition-all shrink-0"
        >
          <Briefcase className="w-3.5 h-3.5" /> Apply Now
        </a>
      </header>

      {/* Hero Banner Section */}
      <section className="bg-[#172215] text-white py-16 sm:py-24 px-4 sm:px-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#85AB8B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center sm:text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#85AB8B]" /> Join Our Hospitality Family
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white leading-tight">
              Build Your Career at <span className="text-[#85AB8B]">Hotel RB Palace</span>
            </h1>
            <p className="text-white/70 text-xs sm:text-base font-light leading-relaxed">
              We are expanding our team in Dholpur, Rajasthan! Join a premier hospitality establishment dedicated to guest satisfaction, professional growth, and Rajasthan's authentic warmth.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="bg-white/5 border border-white/15 p-6 rounded-3xl backdrop-blur-md grid grid-cols-2 gap-4 shrink-0 text-center sm:text-left">
            <div>
              <span className="text-2xl font-bold text-[#85AB8B]">5+</span>
              <p className="text-xs text-white/70">Department Tiers</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">24/7</span>
              <p className="text-xs text-white/70">Support Operations</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">100%</span>
              <p className="text-xs text-white/70">Direct Hotel Role</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#85AB8B]">300 Pax</span>
              <p className="text-xs text-white/70">Event Venue Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-12 py-12 sm:py-20 w-full space-y-16">
        {/* Culture / Perks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#336443]/10 text-[#336443] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1f2a1d]">Competitive Salary & Incentives</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              We offer attractive salary packages, performance bonuses, duty meals, and timely salary disbursements for all staff categories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#336443]/10 text-[#336443] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1f2a1d]">Professional Environment</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Work alongside experienced hospitality leaders, gain hands-on operational exposure in room management, dining, and banquet hosting.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#336443]/10 text-[#336443] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1f2a1d]">Prime Location & Facilities</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Situated right on the NH-3 Highway near Chopra Mode with 24/7 power backup, staff dining room, and convenient commute links.
            </p>
          </div>
        </div>

        {/* Job Listings Section */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#336443] uppercase tracking-wider block">Current Opportunities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1d]">Explore Open Positions</h2>
            </div>

            {/* Department Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[#1f2a1d] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#336443]/10 text-[#336443]">
                      {job.department}
                    </span>
                    {job.isHot && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-600" /> Urgent Hiring
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1f2a1d]">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#336443]" /> {job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{job.description}</p>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#1f2a1d]">
                    <span>Experience: <span className="text-[#336443]">{job.experience}</span></span>
                    <span>Salary: <span className="text-[#336443]">{job.salaryRange}</span></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="text-xs font-semibold text-gray-600 hover:text-[#1f2a1d] underline cursor-pointer"
                  >
                    View Details & Requirements
                  </button>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    Apply for Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" className="bg-[#172215] text-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-[#85AB8B]/20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[#85AB8B] font-semibold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                <Briefcase className="w-3.5 h-3.5 text-[#85AB8B]" /> Direct Application Form
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-white">Apply for a Position</h2>
              <p className="text-white/70 text-xs sm:text-sm font-light">
                Fill out your details below. Your application will be sent straight to our management desk at <span className="text-[#85AB8B] font-medium">{MANAGER_EMAIL}</span>.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/10 border border-[#85AB8B]/40 rounded-3xl p-8 text-center space-y-4 backdrop-blur-md">
                <CheckCircle2 className="w-12 h-12 text-[#85AB8B] mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white">Application Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                  Thank you for applying to Hotel RB Palace. Our HR / Management team has received your application and will review your profile. Shortlisted candidates will be contacted via phone or email for an interview.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      positionTitle: CAREER_LISTINGS[0].title,
                      department: CAREER_LISTINGS[0].department,
                      experienceYears: '1-3 Years',
                      portfolioUrl: '',
                      coverNote: ''
                    });
                  }}
                  className="bg-[#85AB8B] text-[#172215] text-xs font-bold px-6 py-3 rounded-full hover:bg-[#6e9674] transition-all cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#85AB8B]" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#85AB8B]" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#85AB8B]" /> Phone / Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#85AB8B]" /> Position Applied For
                  </label>
                  <select
                    name="positionTitle"
                    value={formData.positionTitle}
                    onChange={handleInputChange}
                    className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] cursor-pointer"
                  >
                    {CAREER_LISTINGS.map((job) => (
                      <option key={job.id} value={job.title} className="bg-[#1c281a] text-white py-2">
                        {job.title} ({job.department})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#85AB8B]" /> Years of Hospitality Experience
                  </label>
                  <select
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    className="w-full bg-[#233120] border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#85AB8B] cursor-pointer"
                  >
                    <option value="Fresher / < 1 Year">Fresher / Less than 1 Year</option>
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years Senior Experience</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#85AB8B]" /> Resume Link / Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    placeholder="https://drive.google.com/your-resume-link"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#85AB8B]" /> Brief Pitch / Experience Summary
                  </label>
                  <textarea
                    name="coverNote"
                    rows={4}
                    placeholder="Tell us briefly about your past hotel roles, strengths, and preferred shift hours..."
                    value={formData.coverNote}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#85AB8B] focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <div className="sm:col-span-2 pt-4 flex justify-center">
                  <Magnet padding={60} strength={2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#85AB8B] hover:bg-[#6e9674] text-[#172215] font-bold text-sm px-10 py-4 rounded-full flex items-center gap-2.5 shadow-2xl hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Submit Job Application
                        </>
                      )}
                    </button>
                  </Magnet>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Modal for Job Details */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-[#336443]/10 text-[#336443]">
                  {activeJobModal.department}
                </span>
                <h3 className="text-xl font-bold text-[#1f2a1d] mt-2">{activeJobModal.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{activeJobModal.location} • {activeJobModal.type}</p>
              </div>
              <button
                onClick={() => setActiveJobModal(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-gray-700">
              <div>
                <h4 className="font-bold text-[#1f2a1d] text-xs uppercase tracking-wider mb-1">Role Description</h4>
                <p className="leading-relaxed">{activeJobModal.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#1f2a1d] text-xs uppercase tracking-wider mb-1">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {activeJobModal.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#1f2a1d] text-xs uppercase tracking-wider mb-1">Qualifications & Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {activeJobModal.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[#f4f7f4] rounded-2xl flex items-center justify-between text-xs font-bold text-[#1f2a1d]">
                <span>Offered Salary: <span className="text-[#336443]">{activeJobModal.salaryRange}</span></span>
                <span>Experience: <span className="text-[#336443]">{activeJobModal.experience}</span></span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveJobModal(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const job = activeJobModal;
                  setActiveJobModal(null);
                  handleApplyClick(job);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#1f2a1d] text-white hover:bg-[#2a3827] transition-colors cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      <SiteFooter variant="landing" />
    </div>
  );
}
