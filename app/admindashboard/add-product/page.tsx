"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { 
  ArrowLeft, BookOpen, Upload, CheckCircle, 
  ImagePlus, Package, Loader2, Plus, Minus, 
  Info, Layers, ChevronRight
} from "lucide-react";

// --- 1. TypeScript Interfaces ---

type Condition = "Excellent" | "Good" | "Fair";

interface BookFormData {
  title: string;
  author: string;
  category: string;
  condition: Condition;
  buyPrice: string;
  rentPrice: string;
  stock: string;
  description: string;
  isbn: string;
  forSale: boolean;
  forRent: boolean;
}

interface InputProps {
  label: string;
  value: string;
  onChange: (val: string) => void; 
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

interface ToggleButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

interface SuccessScreenProps {
  title: string;
  onReset: () => void;
}

// --- 2. Constants ---

const CATEGORIES = ["Engineering", "Medicine", "Literature", "Science", "History", "Business"];

const INITIAL_FORM: BookFormData = {
  title: "", author: "", category: "", condition: "Good",
  buyPrice: "", rentPrice: "", stock: "1",
  description: "", isbn: "", forSale: true, forRent: true,
};

// --- 3. Main Component ---

export default function AddBookPage() {
  const [form, setForm] = useState<BookFormData>(INITIAL_FORM);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const updateField = (key: keyof BookFormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    console.log("Submitting Payload:", { ...form, image: imagePreview });

    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen title={form.title} onReset={() => { setSubmitted(false); setForm(INITIAL_FORM); setImagePreview(null); }} />;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-12">
      
      {/* HEADER: Standard (Not Sticky) */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <button type="button" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-[#1d606e]">List a Book</h1>
                <p className="hidden sm:block text-xs text-slate-400 font-medium uppercase tracking-wider">Marketplace Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              Draft <ChevronRight className="w-4 h-4" /> <span className="text-[#1d606e]">Publishing</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SIDEBAR: Cover & Availability (Top on mobile, Left on desktop) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Image Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4 ml-1">Cover Image</span>
              <div 
                onClick={() => fileRef.current?.click()}
                className={`relative aspect-[3/4] rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center overflow-hidden
                  ${imagePreview ? 'border-[#1d606e]' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'}`}
              >
                {imagePreview ? (
                  <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                ) : (
                  <div className="text-center p-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-[#1d606e]">
                      <ImagePlus className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-600">Upload Front Cover</p>
                  </div>
                )}
              </div>
              <input type="file" ref={fileRef} hidden onChange={handleImage} accept="image/*" />
            </div>

            {/* Availability Options */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-6 text-sm uppercase tracking-wide">
                <Package className="w-4 h-4 text-[#1d606e]" /> Offer Type
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <ToggleButton label="Available for Sale" active={form.forSale} onClick={() => updateField("forSale", !form.forSale)} />
                <ToggleButton label="Available for Rent" active={form.forRent} onClick={() => updateField("forRent", !form.forRent)} />
              </div>
            </div>
          </div>

          {/* MAIN FORM: Details (Full width on mobile, Right on desktop) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-slate-200">
              <header className="flex items-center gap-3 mb-10">
                <div className="p-2.5 bg-[#1d606e]/10 rounded-xl"><Info className="w-5 h-5 text-[#1d606e]" /></div>
                <h2 className="text-xl font-bold">Book Information</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <Input label="Title of the Book" value={form.title} onChange={v => updateField("title", v)} placeholder="e.g. Atomic Habits" />
                </div>
                
                <Input label="Author Name" value={form.author} onChange={v => updateField("author", v)} placeholder="James Clear" />
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Genre / Category</label>
                  <div className="relative">
                    <select 
                      value={form.category} onChange={e => updateField("category", e.target.value)}
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1d606e]/20 focus:bg-white rounded-2xl px-5 py-4 appearance-none outline-none font-medium transition-all cursor-pointer"
                    >
                      <option value="">Select Genre</option>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <Layers className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <Input label="Selling Price (₹)" type="number" value={form.buyPrice} onChange={v => updateField("buyPrice", v)} disabled={!form.forSale} />
                <Input label="Rental Price (₹/mo)" type="number" value={form.rentPrice} onChange={v => updateField("rentPrice", v)} disabled={!form.forRent} />

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Stock Count</label>
                  <div className="flex items-center bg-slate-50 rounded-2xl p-1 border-2 border-transparent focus-within:border-[#1d606e]/20 transition-all">
                    <button type="button" onClick={() => updateField("stock", String(Math.max(1, Number(form.stock)-1)))} className="p-4 text-slate-400 hover:text-[#1d606e]"><Minus className="w-4 h-4" /></button>
                    <input type="number" value={form.stock} onChange={e => updateField("stock", e.target.value)} className="w-full bg-transparent text-center font-bold outline-none text-[#1d606e] text-lg" />
                    <button type="button" onClick={() => updateField("stock", String(Number(form.stock)+1))} className="p-4 text-slate-400 hover:text-[#1d606e]"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Physical Condition</label>
                  <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                    {(["Excellent", "Good", "Fair"] as Condition[]).map(c => (
                      <button 
                        key={c} type="button" onClick={() => updateField("condition", c)}
                        className={`flex-1 py-3 text-[10px] font-black rounded-xl transition-all ${form.condition === c ? 'bg-white shadow-sm text-[#1d606e]' : 'text-slate-400'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Additional Notes</label>
                  <textarea 
                    rows={5} value={form.description} onChange={e => updateField("description", e.target.value)}
                    placeholder="Describe marks, highlightings, or edition details..."
                    className="w-full mt-2 bg-slate-50 border-2 border-transparent focus:border-[#1d606e]/20 focus:bg-white rounded-[2rem] px-6 py-5 outline-none font-medium transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                type="submit" disabled={loading}
                className="w-full mt-10 cursor-pointer bg-[#1d606e] text-white py-5 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 shadow-2xl shadow-[#1d606e]/20 hover:bg-[#164a55] transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><BookOpen className="w-5 h-5" /> Confirm & Publish</>}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

// --- HELPER COMPONENTS (Strictly Typed) ---

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, type = "text", disabled = false }) => (
  <div className={`space-y-2 transition-opacity ${disabled ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">{label}</label>
    <input 
      type={type} value={value} disabled={disabled}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1d606e]/20 focus:bg-white rounded-2xl px-6 py-4 outline-none font-medium transition-all placeholder:text-slate-300"
    />
  </div>
);

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, active, onClick }) => (
  <button
    type="button" onClick={onClick}
    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer
      ${active ? 'bg-[#1d606e]/5 border-[#1d606e]/20 shadow-sm' : 'bg-white border-slate-50 opacity-60'}`}
  >
    <span className={`text-sm font-bold ${active ? 'text-[#1d606e]' : 'text-slate-500'}`}>{label}</span>
    <div className={`w-11 h-6 rounded-full relative transition-colors ${active ? 'bg-[#1d606e]' : 'bg-slate-200'}`}>
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${active ? 'right-1' : 'left-1'}`} />
    </div>
  </button>
);

const SuccessScreen: React.FC<SuccessScreenProps> = ({ title, onReset }) => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
    <div className="w-24 h-24 bg-[#1d606e]/10 text-[#1d606e] rounded-full flex items-center justify-center mb-8">
      <CheckCircle className="w-12 h-12" />
    </div>
    <h2 className="text-3xl font-black text-slate-900 mb-2">Listing Published!</h2>
    <p className="text-slate-500 max-w-xs font-medium mb-10">"{title}" is now available in the store.</p>
    <button 
      onClick={onReset}
      className="bg-[#1d606e] text-white px-14 py-5 rounded-[1.5rem] font-bold shadow-2xl shadow-[#1d606e]/30 hover:bg-[#164a55] transition-all"
    >
      Add New Book
    </button>
  </div>
);