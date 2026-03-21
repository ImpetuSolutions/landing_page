"use client";

import { useState } from "react";

export function ContactForm({ dict }: { dict: any }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: "",
    desafioTecnico: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ nombre: "", apellido: "", empresa: "", email: "", telefono: "", desafioTecnico: "" });
      } else {
        alert(dict.errorSend);
      }
    } catch (err) {
      alert(dict.errorNet);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {success && (
        <div className="bg-primary/20 border border-primary text-primary px-6 py-4 rounded-xl font-bold mt-4 mb-6">
          {dict.success}
        </div>
      )}
      <div className="bg-surface/60 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                {dict.lblNombre}
              </label>
              <input
                className="w-full bg-surface-container-high border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder={dict.plcNombre} type="text" name="nombre" required
                value={formData.nombre} onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                {dict.lblApellido}
              </label>
              <input
                className="w-full bg-surface-container-high border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder={dict.plcApellido} type="text" name="apellido" required
                value={formData.apellido} onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              {dict.lblEmpresa}
            </label>
            <input
              className="w-full bg-surface-container-high border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
              placeholder={dict.plcEmpresa} type="text" name="empresa" required
              value={formData.empresa} onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                {dict.lblEmail}
              </label>
              <input
                className="w-full bg-surface-container-high border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder={dict.plcEmail} type="email" name="email" required
                value={formData.email} onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                {dict.lblPhone}
              </label>
              <input
                className="w-full bg-surface-container-high border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder={dict.plcPhone} type="tel" name="telefono"
                value={formData.telefono} onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              {dict.lblChallenge}
            </label>
            <select
              className="w-full bg-surface-container-high border-white/5 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
              name="desafioTecnico" required value={formData.desafioTecnico} onChange={handleChange}
            >
              <option disabled value="">{dict.optDefault}</option>
              <option value="Desarrollo a la medida">{dict.optDev}</option>
              <option value="Escalar App Existente">{dict.optScale}</option>
              <option value="Implementar Agentes de IA">{dict.optAi}</option>
              <option value="Consultoría Arquitectónica">{dict.optArch}</option>
            </select>
          </div>
          <button
            className="w-full py-4 bg-primary text-on-primary rounded-xl font-headline font-bold text-xl hover:bg-primary-container transition-all shadow-[0_10px_30px_rgba(0,163,175,0.3)] disabled:opacity-50"
            type="submit" disabled={isSubmitting}
          >
            {isSubmitting ? dict.submitting : dict.submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
}
