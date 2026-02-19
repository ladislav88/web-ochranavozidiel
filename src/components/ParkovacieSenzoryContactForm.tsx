'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ParkovacieSenzoryContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Meno je povinné';
    if (!formData.email.trim() && !formData.phone.trim()) {
      e.email = 'Zadajte email alebo telefón';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Neplatný email';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const mailto = `mailto:info@ochranavozidiel.sk?subject=Dotaz - Parkovacie senzory&body=${encodeURIComponent(
        `Meno: ${formData.name}\nEmail: ${formData.email}\nTelefón: ${formData.phone}\n\nSpráva:\n${formData.message}`
      )}`;
      window.location.href = mailto;
      toast.success('Formulár pripravený. Otváram emailového klienta.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch {
      toast.error('Nastala chyba. Skúste zavolať +421 911 911 876.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="ps-name" className="mb-1 block text-sm font-medium">
          Meno *
        </label>
        <Input
          id="ps-name"
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          placeholder="Vaše meno"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ps-email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <Input
            id="ps-email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((p) => ({ ...p, email: e.target.value }))
            }
            placeholder="email@example.sk"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="ps-phone" className="mb-1 block text-sm font-medium">
            Telefón
          </label>
          <Input
            id="ps-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((p) => ({ ...p, phone: e.target.value }))
            }
            placeholder="+421 900 123 456"
          />
        </div>
      </div>
      <div>
        <label htmlFor="ps-message" className="mb-1 block text-sm font-medium">
          Správa
        </label>
        <Textarea
          id="ps-message"
          value={formData.message}
          onChange={(e) =>
            setFormData((p) => ({ ...p, message: e.target.value }))
          }
          placeholder="Napíšte nám..."
          rows={4}
          className="resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#e06329] px-6 py-3 font-medium text-white transition-colors hover:bg-[#c85823] disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? 'Odesielam...' : 'Odoslať'}
      </button>
    </form>
  );
}
