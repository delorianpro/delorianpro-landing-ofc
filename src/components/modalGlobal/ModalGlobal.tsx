
'use client'

import { useCallback, useEffect } from "react";
import { useModal } from "../context/ModalContext";
import { ModalPortaoComProblemas } from "@/components/modalPortaoComProblemas/ModalPortaoComProblemas";
import { solucoes } from "@/components/servicosDelorian/ServicosDelorian";

const SHARED_SERVICE_QUERY_PARAM = 'servico';

export function ModalGlobal() {
  const { modalAberto, solucaoSelecionada, abrirModal, fecharModal } = useModal();

  useEffect(() => {
    const openSharedService = () => {
      const sharedServiceId = Number(new URLSearchParams(window.location.search).get(SHARED_SERVICE_QUERY_PARAM));
      const sharedService = solucoes.find((solucao) => solucao.id === sharedServiceId);

      if (sharedService) abrirModal(sharedService);
    };

    openSharedService();
    window.addEventListener('popstate', openSharedService);
    return () => window.removeEventListener('popstate', openSharedService);
  }, [abrirModal]);

  const handleClose = useCallback(() => {
    const url = new URL(window.location.href);

    if (url.searchParams.has(SHARED_SERVICE_QUERY_PARAM)) {
      url.searchParams.delete(SHARED_SERVICE_QUERY_PARAM);
      window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
    }

    fecharModal();
  }, [fecharModal]);

  if (!modalAberto || !solucaoSelecionada) return null;

  return (
    <ModalPortaoComProblemas
      solucao={solucaoSelecionada}
      solucoes={solucoes}
      modalAberto={modalAberto}
      onClose={handleClose}
    />
  );
}
