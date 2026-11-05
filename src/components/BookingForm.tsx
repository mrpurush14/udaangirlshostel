import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Bed, 
  Phone, 
  User, 
  School, 
  Copy, 
  Check, 
  ShieldCheck, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES, ROOMS } from '../data/hostelData';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialRoomType?: string;
  initialBranch?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialRoomType, initialBranch }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    residentType: 'student',
    institution: '',
    branch: initialBranch || 'boring-road',
    roomType: initialRoomType || 'Double Sharing Room',
    acPreference: 'non-ac',
    moveInDate: '',
    parentName: '',
    parentPhone: '',
    specialRequests: ''
  });

  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Update room/branch when props change
  useEffect(() => {
    if (initialRoomType) {
      setFormData((prev) => ({ ...prev, roomType: initialRoomType }));
    }
    if (initialBranch) {
      setFormData((prev) => ({ ...prev, branch: initialBranch }));
    }
  }, [initialRoomType, initialBranch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'phone' && sameAsPhone) {
        updated.whatsapp = value;
      }
      return updated;
    });
  };

  const generateWhatsAppMessage = () => {
    const branchObj = BRANCHES.find((b) => b.id === formData.branch);
    const branchName = branchObj ? branchObj.shortName : formData.branch;

    return `🌸 *NEW BOOKING INQUIRY - UDAAN GIRLS' HOSTEL* 🌸
------------------------------------------------
👤 *Resident Name:* ${formData.fullName}
📱 *Phone:* ${formData.phone}
💬 *WhatsApp:* ${formData.whatsapp || formData.phone}
${formData.email ? `✉️ *Email:* ${formData.email}\n` : ''}🏢 *Category:* ${formData.residentType === 'student' ? 'Student / Coaching Aspirant' : formData.residentType === 'working' ? 'Working Professional' : 'Other'}
🎓 *Coaching / College:* ${formData.institution || 'Not specified'}

📍 *Preferred Branch:* ${branchName}
🛏️ *Room Type:* ${formData.roomType} (${formData.acPreference.toUpperCase()})
📅 *Expected Move-In Date:* ${formData.moveInDate || 'Immediate / Flexible'}

👨‍👩‍👧 *Parent/Guardian Name:* ${formData.parentName || 'N/A'}
📞 *Parent/Guardian Phone:* ${formData.parentPhone || 'N/A'}

📝 *Special Request:* ${formData.specialRequests || 'None'}
------------------------------------------------
Sent from Udaan Girls Hostel Website`;
  };

  const handleSubmit = (e: React.FormEvent, viaWhatsAppOnly = false) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and 10-digit phone number.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMsg(null);

    // Generate reference ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const leadId = `UD-${new Date().getFullYear()}-${randomNum}`;
    setSubmittedLeadId(leadId);

    // Construct WhatsApp URL
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab for lead notification
    window.open(whatsappUrl, '_blank');
  };

  const copyToClipboard = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-stone-50 via-rose-50/40 to-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" /> Book Your Bed
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Reserve Your Room or Schedule a Visit
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Submit your inquiry below. You will be instantly connected with our admissions desk on WhatsApp, 
            and our manager will verify availability and arrange your room reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Contact Card & Branch Hotlines */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200/90 shadow-md space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <img
                  src="/assets/aistudio/hostel_logo_d4e3810a.jpeg"
                  alt="Udaan Girls Hostel"
                  className="w-12 h-12 rounded-full border border-amber-400 object-cover"
                />
                <div>
                  <h3 className="text-base font-bold text-stone-900">Udaan Admissions Desk</h3>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online & Ready to Assist
                  </span>
                </div>
              </div>

              {/* Direct Phone Numbers from Banner */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Direct Contact Numbers:
                </div>

                <a
                  href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-50/70 hover:bg-rose-100/80 border border-rose-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#931c51] text-white flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 font-medium">Primary Helpline</div>
                      <div className="text-base font-extrabold text-[#931c51]">{HOSTEL_CONTACT.displayPhone1}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#931c51] font-bold group-hover:underline">Call Now →</span>
                </a>

                <a
                  href={`tel:${HOSTEL_CONTACT.secondaryPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-800 text-white flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 font-medium">Secondary Helpline</div>
                      <div className="text-base font-extrabold text-stone-900">{HOSTEL_CONTACT.displayPhone2}</div>
                    </div>
                  </div>
                  <span className="text-xs text-stone-700 font-bold group-hover:underline">Call Now →</span>
                </a>

                <a
                  href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hello%20Udaan%20Girls%20Hostel%2C%20I%20want%20to%20know%20more%20about%20room%20availability`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-800 font-medium">WhatsApp Helpline</div>
                      <div className="text-sm font-extrabold text-emerald-900">Instant Lead Support</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-700 font-bold group-hover:underline">Chat →</span>
                </a>
              </div>

              {/* Visiting Hours & Branches Summary */}
              <div className="pt-2 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-400" />
                  <span>{HOSTEL_CONTACT.openingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Curfew: {HOSTEL_CONTACT.curfewTime}</span>
                </div>
              </div>

            </div>

            {/* Why Book Early Box */}
            <div className="bg-gradient-to-r from-amber-500/15 to-rose-500/15 border border-amber-300/80 rounded-2xl p-5 text-xs text-stone-800 space-y-1.5">
              <span className="font-bold text-amber-900 flex items-center gap-1.5 text-sm">
                ⚡ High Admission Demand Notice
              </span>
              <p>
                Due to commencement of new academic batches at Allen, Aakash & Patna colleges, single and double sharing rooms fill up quickly. 
                We recommend reserving early to lock in your preferred branch and sharing.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-stone-200 shadow-xl relative">
              
              <div className="mb-6 pb-4 border-b border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 font-['Playfair_Display',serif]">
                  Prospective Resident Booking Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Fill in your details below. Clicking "Submit Inquiry via WhatsApp" creates an instant lead and connects you with the hostel management.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-5">
                
                {/* 1. Branch Selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Select Preferred Branch *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BRANCHES.map((b) => (
                      <label
                        key={b.id}
                        className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          formData.branch === b.id
                            ? 'border-[#931c51] bg-rose-50/60 ring-2 ring-[#931c51]/20'
                            : 'border-stone-200 hover:border-stone-300 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="branch"
                          value={b.id}
                          checked={formData.branch === b.id}
                          onChange={handleChange}
                          className="mt-1 accent-[#931c51]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-stone-900 block">{b.shortName}</span>
                          <span className="text-stone-500 block text-[11px] mt-0.5">{b.landmark}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. Room Type & AC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      2. Room Sharing *
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-3 text-stone-800 font-medium focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    >
                      {ROOMS.map((r) => (
                        <option key={r.id} value={r.type}>
                          {r.type} ({r.occupancyName})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Cooling Preference *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, acPreference: 'ac' }))}
                        className={`py-3 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          formData.acPreference === 'ac'
                            ? 'bg-[#931c51] text-white border-[#931c51]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        AC Room
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, acPreference: 'non-ac' }))}
                        className={`py-3 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          formData.acPreference === 'non-ac'
                            ? 'bg-[#931c51] text-white border-[#931c51]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Non-AC Room
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Resident Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Resident Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Priya Kumari"
                        required
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Resident Mobile (10 Digits) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        required
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                        WhatsApp Number
                      </label>
                      <label className="flex items-center gap-1.5 text-[11px] text-stone-500 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sameAsPhone}
                          onChange={(e) => {
                            setSameAsPhone(e.target.checked);
                            if (e.target.checked) {
                              setFormData((p) => ({ ...p, whatsapp: p.phone }));
                            }
                          }}
                          className="accent-[#931c51]"
                        />
                        <span>Same as phone</span>
                      </label>
                    </div>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      disabled={sameAsPhone}
                      placeholder="WhatsApp number"
                      maxLength={10}
                      className="w-full text-xs sm:text-sm px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl disabled:opacity-60 focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@email.com"
                      className="w-full text-xs sm:text-sm px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Resident Type & College/Coaching */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Resident Category
                    </label>
                    <select
                      name="residentType"
                      value={formData.residentType}
                      onChange={handleChange}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-3 text-stone-800 font-medium focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    >
                      <option value="student">Coaching Student (NEET / JEE / Banking / UPSC)</option>
                      <option value="college">College / University Student</option>
                      <option value="working">Working Professional / Intern</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Coaching / College / Office Name
                    </label>
                    <div className="relative">
                      <School className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="e.g. Allen Boring Road / Patna Women's College"
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Move In Date & Parent Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Expected Move-In Date
                    </label>
                    <input
                      type="date"
                      name="moveInDate"
                      value={formData.moveInDate}
                      onChange={handleChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Father / Mother Name"
                      className="w-full text-xs sm:text-sm px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Parent Phone Number
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Parent mobile"
                      maxLength={10}
                      className="w-full text-xs sm:text-sm px-3.5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Questions or Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g. Need ground floor room, planning to visit this Saturday with parents, etc."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#931c51] focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                {/* Submission CTA: Instant WhatsApp Notification Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Send Booking Inquiry via WhatsApp (+91 {HOSTEL_CONTACT.primaryPhone})</span>
                  </button>
                  <p className="text-[11px] text-center text-stone-500 mt-2">
                    🔒 Instant lead generation • Directly sends your formatted requirements to the official hostel helpline.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedLeadId && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-rose-200 text-center animate-in zoom-in-95 duration-200">
            
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Inquiry Dispatched Successfully!
            </span>

            <h3 className="text-2xl font-extrabold text-stone-900 mt-3 font-['Playfair_Display',serif]">
              Welcome to Udaan Girls' Hostel!
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Your inquiry reference code is <strong className="text-[#931c51] font-mono text-base">{submittedLeadId}</strong>.
              Your details have been formatted for our WhatsApp admissions desk.
            </p>

            <div className="bg-stone-50 rounded-2xl p-4 my-5 text-left border border-stone-200 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-stone-500">Applicant:</span>
                <span className="font-bold text-stone-800">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Branch:</span>
                <span className="font-bold text-stone-800">
                  {BRANCHES.find((b) => b.id === formData.branch)?.shortName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Room Requested:</span>
                <span className="font-bold text-stone-800">{formData.roomType} ({formData.acPreference.toUpperCase()})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Contact:</span>
                <span className="font-bold text-stone-800">{formData.phone}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Open / Re-send in WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Details Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
              </button>

              <button
                type="button"
                onClick={() => setSubmittedLeadId(null)}
                className="text-xs text-stone-500 hover:text-stone-800 font-semibold underline mt-2"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
