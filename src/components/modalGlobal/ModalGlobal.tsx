
'use client'

import { useModal } from "../context/ModalContext";
import { ModalPortaoComProblemas } from "@/components/modalPortaoComProblemas/ModalPortaoComProblemas";
import { solucoes } from "@/components/servicosDelorian/ServicosDelorian";

export function ModalGlobal() {
  const { modalAberto, solucaoSelecionada, fecharModal } = useModal();

  if (!modalAberto || !solucaoSelecionada) return null;

  return (
    <ModalPortaoComProblemas
      solucao={solucaoSelecionada}
      solucoes={solucoes}
      modalAberto={modalAberto}
      onClose={fecharModal}
    />
  );
}
