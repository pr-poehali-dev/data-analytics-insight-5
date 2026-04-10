import { Camera, CheckCircle, Loader2, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTER_URL = "https://functions.poehali.dev/b11ff587-a193-4557-ae38-d3a74096eb05";

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
}

import { useState } from "react";

const RegisterModal = ({ show, onClose }: RegisterModalProps) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setSuccess(false);
    setError("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setPhone("");
        setEmail("");
      } else {
        setError(data.error || "Ошибка отправки. Попробуй ещё раз.");
      }
    } catch {
      setError("Ошибка сети. Проверь подключение.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="bg-[#36393f] rounded-xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl">
        <button
          className="absolute top-4 right-4 text-[#8e9297] hover:text-white"
          onClick={handleClose}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-white text-xl font-bold">Kazangram</h2>
            <p className="text-[#b9bbbe] text-sm">Оставь заявку на ранний доступ</p>
          </div>
        </div>

        {success ? (
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-[#3ba55c] mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Заявка принята!</h3>
            <p className="text-[#b9bbbe] text-sm">Мы свяжемся с тобой, когда Kazangram откроется.</p>
            <Button
              className="mt-6 bg-[#5865f2] hover:bg-[#4752c4] text-white w-full"
              onClick={handleClose}
            >
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[#b9bbbe] text-sm font-medium block mb-1.5">Номер телефона</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 000-00-00"
                required
                className="w-full bg-[#40444b] text-white placeholder-[#72767d] rounded px-3 py-2.5 text-sm border border-[#202225] focus:border-[#5865f2] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[#b9bbbe] text-sm font-medium block mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-[#40444b] text-white placeholder-[#72767d] rounded px-3 py-2.5 text-sm border border-[#202225] focus:border-[#5865f2] focus:outline-none"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white py-2.5 rounded text-sm font-medium"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Отправляем...</>
              ) : (
                <><UserPlus className="w-4 h-4 mr-2" />Оставить заявку</>
              )}
            </Button>
            <p className="text-[#72767d] text-xs text-center">
              Никакого спама — только уведомление о запуске
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
