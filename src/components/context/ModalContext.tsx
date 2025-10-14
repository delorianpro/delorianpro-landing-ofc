'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface Solucao {
  id: number;
  title: string;
  description: string;
  descriptionVideo: string;
  videoModal?: string;
  imagesThumbNail: { src: string; alt: string; width: number; height: number }[];
  iconLogoDelorian: { src: string; alt: string; width: number; height: number }[];
}

interface ModalContextType {
  modalAberto: boolean;
  solucaoSelecionada: Solucao | null;
  abrirModal: (solucao: Solucao) => void;
  fecharModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [solucaoSelecionada, setSolucaoSelecionada] = useState<Solucao | null>(null);

  const abrirModal = (solucao: Solucao) => {
    setSolucaoSelecionada(solucao);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setSolucaoSelecionada(null);
  };

  return (
    <ModalContext.Provider value={{ modalAberto, solucaoSelecionada, abrirModal, fecharModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
}
