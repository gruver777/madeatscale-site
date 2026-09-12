"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { productBySlug, type Product } from "@/lib/site";

const STORAGE_KEY = "mas-cart-v1";

export type CartLine = {
  slug: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  hydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (l) => typeof l.slug === "string" && typeof l.qty === "number" && l.qty > 0,
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const add = useCallback((slug: string, qty = 1) => {
    if (!productBySlug(slug)) return;
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) {
        return prev.map((l) =>
          l.slug === slug ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { slug, qty }];
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((l) => l.slug !== slug);
      return prev.map((l) => (l.slug === slug ? { ...l, qty } : l));
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, count, add, setQty, remove, clear, hydrated }),
    [lines, count, add, setQty, remove, clear, hydrated],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function cartLinesWithProducts(lines: CartLine[]): {
  line: CartLine;
  product: Product;
}[] {
  return lines
    .map((line) => {
      const product = productBySlug(line.slug);
      return product ? { line, product } : null;
    })
    .filter((x): x is { line: CartLine; product: Product } => x != null);
}
