
'use client'

import { useModal } from "../context/ModalContext";
import { ModalPortaoComProblemas } from "@/components/modalPortaoComProblemas/ModalPortaoComProblemas";

export function ModalGlobal() {
  const { modalAberto, solucaoSelecionada, fecharModal } = useModal();

  if (!modalAberto || !solucaoSelecionada) return null;

  return (
    <ModalPortaoComProblemas
      solucao={solucaoSelecionada}
      modalAberto={modalAberto}
      onClose={fecharModal}
    />
  );
}
