import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
};

export function Lightbox({ images, index, onClose, onNavigate, title }: LightboxProps) {
  const open = index !== null;
  const total = images.length;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goPrev, goNext]);

  if (typeof document === "undefined") return null;

  const current = index !== null ? images[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={title ? `${title} image gallery` : "Image gallery"}
        >
          <div className="absolute inset-0 bg-navy-deep/92" onClick={onClose} aria-hidden="true" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image gallery"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/80 hover:text-white p-2 rounded-[4px] focus-visible:outline-2 focus-visible:outline-gold z-10"
          >
            <Icon name="close" size={26} />
          </button>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold z-10"
            >
              <Icon name="chevron-left" size={24} />
            </button>
          )}

          <motion.figure
            key={current.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-[4px] shadow-2xl"
            />
            <figcaption className="text-white/70 text-sm text-center px-4">
              {current.alt}
              {total > 1 && (
                <span className="block text-white/40 text-xs mt-1">
                  {index !== null ? index + 1 : 0} / {total}
                </span>
              )}
            </figcaption>
          </motion.figure>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold z-10"
            >
              <Icon name="chevron-right" size={24} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
