
'use client'

import styles from "./StylesPlansDelorian.module.css";
import Image from "next/image";
import {Check} from "lucide-react";

export function PlansDelorian() {
  const phoneNumber = '+5541985011909'; 
  const handleClickPlanBronze = () => {
    // window.gtag('event', 'conversion', { 'send_to': 'AW-16762428286/MgdfCI6pxuYZEP62-bg-' });
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Bronze.`;
    window.open(whatsappLink, '_blank'); 
  }
  const handleClickPlanPrata = () => {
    // window.gtag('event', 'conversion', { 'send_to': 'AW-16762428286/MgdfCI6pxuYZEP62-bg-' });
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Prata.`;
    window.open(whatsappLink, '_blank'); 
  }
  const handleClickPlanOuro = () => {
    // window.gtag('event', 'conversion', { 'send_to': 'AW-16762428286/MgdfCI6pxuYZEP62-bg-' });
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Ouro.`;
    window.open(whatsappLink, '_blank'); 
  }
  const handleClickPlanDiamante = () => {
    // window.gtag('event', 'conversion', { 'send_to': 'AW-16762428286/MgdfCI6pxuYZEP62-bg-' });
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Diamante.`;
    window.open(whatsappLink, '_blank'); 
  }
  return (
    <div className={styles.plansBg}>
    <div className={styles.plansSectionContainer}>
        <div className={styles.titlePlansSection}>
          <Image 
            src={"/assets/raioAzul.png"}
            className={styles.raioAzul}
            width={30}
            height={94} 
            alt={"raio na cor azul"}  
            loading="lazy"        
            />
          <h2 className={styles.titleH1PlansSection}> Escolha o plano ideal para seu portão automático</h2>
        </div>
        <div className={styles.plansContainer}>
          <div className={`${styles.planBlock} ${styles.planBronze}`}>
            <div className={`${styles.blockPriceGlobal} ${styles.blockPriceBronze}`}>
                  <p className={styles.aPartir}>A PARTIR DE</p>
                  <div className={`${styles.blockValue} ${styles.blockValueBronze}`}>
                    <span className={`${styles.realSymbolGlobal} ${styles.realSymbolBronze}`}>R$</span>
                    <span className={`${styles.valorGlobal} ${styles.valorBronze}`}>99</span>
                    <div className={styles.blockZeroeMes}>
                      <p className={`${styles.centavosGlobal} ${styles.centavosBronze}`}>,00</p>
                      <p className={`${styles.mesGlobal} ${styles.mesBronze}`}>/mês</p>
                    </div>
                  </div>     
                  <p className={`${styles.formPagamentoGlobal} ${styles.formPagamentoBronze}`}>Cartão • Boleto • Pix</p>
            </div>
              <div className={styles.blockTitleAndServices}>
                <h3 className={`${styles.titlePlan} ${styles.titlePlanBronze}`}>BRONZE</h3>
                <div className={`${styles.blockServices} ${styles.blockServiceBronze}`}>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e08569" className={`${styles.checkIcon} ${styles.checkIconBronze}`}/>
                    <p className={styles.itemList1}> Manutenção Preventiva
                      <span className={styles.parenteses}><br/>1 vez por 
                      <span className={styles.destaqueTextBronze}> MÊS</span></span>
                    </p>
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e08569" className={`${styles.checkIcon} ${styles.checkIconBronze}`}/>
                    <p className={styles.itemList}>Cadastro de até 
                      <span><br/> <span className={styles.destaqueTextBronze}>05 Controles</span></span>
                      <span className={styles.parenteses}><br/>(Por Visita)</span>
                    </p>                 
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e08569" className={`${styles.checkIcon} ${styles.checkIconBronze}`}/>
                    <p className={`${styles.itemList}`}> <span className={styles.destaqueTextBronze}>Relatório de Diagnóstico </span> 
                      <span className={styles.parenteses}><br/>Técnico Especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnBronze}`}  onClick={handleClickPlanBronze}>CONTRATAR</button>
          </div>
          {/* PLANO PRATA */}
          <div className={`${styles.planBlock} ${styles.planPrata}`}>
            <div className={`${styles.blockPriceGlobal} ${styles.blockPricePrata}`}>
                  <p className={`${styles.aPartir} ${styles.aPartirPrata}`}>A PARTIR DE</p>
                  <div className={`${styles.blockValue} ${styles.blockValuePrata}`}>
                    <span className={`${styles.realSymbolGlobal} ${styles.realSymbolPrata}`}>R$</span>
                    <span className={`${styles.valorGlobal} ${styles.valorPrata}`}>389</span>
                    <div className={styles.blockZeroeMes}>
                      <p className={`${styles.centavosGlobal} ${styles.centavosPrata}`}>,00</p>
                      <p className={`${styles.mesGlobal} ${styles.mesPrata}`}>/mês</p>
                    </div>
                  </div>     
                  <p className={`${styles.formPagamentoGlobal} ${styles.formPagamentoPrata}`}>Cartão • Boleto • Pix</p>
            </div>
              <div className={styles.blockTitleAndServices}>
                <h3 className={`${styles.titlePlan} ${styles.titlePlanPrata}`}>PRATA</h3>
                <div className={`${styles.blockServices} ${styles.blockServicePrata}`}>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList1}> Manutenção Preventiva
                      <span className={styles.parenteses}><br/>1 vez por 
                      <span className={styles.destaqueTextPrata}><b> SEMANA</b></span></span>
                    </p>
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList}>Cadastro de até 
                      <span className={styles.destaqueTextPrata}><br/>15 Controles</span>
                      <span className={styles.parenteses}><br/>(Por Visita)</span>
                    </p>                 
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList}> <span className={styles.destaqueTextPrata}>Relatório de Diagnóstico</span>
                      <span className={styles.parenteses}><br/>Técnico Especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnPrata}`} onClick={handleClickPlanPrata}>CONTRATAR</button>
          </div>
          {/* PLANO OURO */}
          <div className={`${styles.planBlock} ${styles.planOuro}`}>
            <div className={`${styles.blockPriceGlobal} ${styles.blockPriceOuro}`}>
                  <p className={styles.aPartir}>A PARTIR DE</p>
                  <div className={`${styles.blockValue} ${styles.blockValueOuro}`}>
                    <span className={`${styles.realSymbolGlobal} ${styles.realSymbolOuro}`}>R$</span>
                    <span className={`${styles.valorGlobal} ${styles.valorOuro}`}>1.089</span>
                    <div className={styles.blockZeroeMes}>
                      <p className={`${styles.centavosGlobal} ${styles.centavosOuro}`}>,00</p>
                      <p className={`${styles.mesGlobal} ${styles.mesOuro}`}>/mês</p>
                    </div>
                  </div>     
                  <p className={`${styles.formPagamentoGlobal} ${styles.formPagamentoOuro}`}>Boleto • Pix</p>
            </div>
              <div className={styles.blockTitleAndServices}>
                <h3 className={`${styles.titlePlan} ${styles.titlePlanOuro}`}>OURO</h3>
                <div className={`${styles.blockServices} ${styles.blockServiceOuro}`}>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                      <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                      <p className={`${styles.itemList} ${styles.itemListOuro} `}> <span className={styles.destaqueTextOuro}>Motor Reserva</span>
                        <span className={styles.corPadrao}><br/>Suporte Imediato para Emergências 
                        </span>
                      </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>Cobertura Total</span>
                      <span className={styles.corPadrao}><br/>de <b>Mão de Obra</b> e <b>Peças Desgastadas </b>
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> Troca de <b className={styles.destaqueTextOuro}>Motor</b>
                      <span ><br/>a cada <b className={styles.destaqueTextOuro}>6 meses</b>
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> Revisão Completa 
                      <span><br/>a cada <b className={styles.destaqueTextOuro}>6 meses</b>
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>5%</span> de <b className={styles.destaqueTextOuro}>Desconto</b>
                      <span><br/>em outros Serviços 
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>Manutenção Preventiva</span>
                      <span className={styles.parentesesOuro}><br/>(1 vez por
                      <span><b> SEMANA)</b></span></span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}>Cadastro de até 
                      <span className={`${styles.amountControls} ${styles.destaqueTextOuro}`}><br/>45 Controles</span>
                      <span className={styles.parentesesOuro}><br/>(Por Visita)</span>
                    </p>                 
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.relatorio} ${styles.itemListOuro} ${styles.destaqueTextOuro}`}>Relatório de Diagnóstico 
                      <span className={styles.parentesesOuro}><br/>Técnico Especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnOuro}`} onClick={handleClickPlanOuro}>CONTRATAR</button>
          </div>
          {/* PLANO DIAMANTE */}
          <div className={`${styles.planBlock} ${styles.planDiamante}`}>
            <div className={`${styles.blockPriceGlobal} ${styles.blockPriceDiamante}`}>
                  <p className={`${styles.aPartir} ${styles.aPartirDiamante}`}>A PARTIR DE</p>
                  <div className={`${styles.blockValue} ${styles.blockValueDiamante}`}>
                    <span className={`${styles.realSymbolGlobal} ${styles.realSymbolDiamante}`}>R$</span>
                    <span className={`${styles.valorGlobal} ${styles.valorDiamante}`}>3.490</span>
                    <div className={styles.blockZeroeMes}>
                      <p className={`${styles.centavosGlobal} ${styles.centavosDiamante}`}>,00</p>
                      <p className={`${styles.mesGlobal} ${styles.mesDiamante}`}>/mês</p>
                    </div>
                  </div>     
                  <p className={`${styles.formPagamentoGlobal} ${styles.formPagamentoDiamante}`}>Boleto • Pix</p>
            </div>
              <div className={styles.blockTitleAndServices}>
                <h3 className={`${styles.titlePlan} ${styles.titlePlanDiamante}`}>DIAMANTE</h3>
                <div className={`${styles.blockServiceDiamante}`}>
                <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> Assistência<br /><span className={styles.destaqueTextDiamante}>Disponível <br /><span className={styles.vinteQuatroHoras}>24h/dia</span></span>
                      <span className={styles.parentesesDiamante}><br/>(Todos os dias)</span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante} ${styles.itemListDiamante6Child}`}> <span className={styles.destaqueTextDiamante}>Segurança Elétrica</span>
                      <span className={` ${styles.parentesesDiamante}`}><br/>Garantia contra curtos e instabilidades da rede elétrica
                      </span>
                    </p>
                  </div>  
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> Cobertura contra
                      <span className={styles.destaqueTextDiamante}><br/>Fenômenos <br />Naturais
                      </span>
                    </p>
                  </div>                 
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>Atendimento Prioritário</span>
                      <span className={`${styles.parentesesDiamante}`}><br/>Em até 4h no seu local
                      </span>
                    </p>
                  </div>                  
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> Revisão Completa
                      <span><br/>a cada <span className={styles.destaqueTextDiamante}>6 meses</span>
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> Troca de <span className={styles.destaqueTextDiamante}>Motor</span>
                      <span><br/>a cada <span className={styles.destaqueTextDiamante}>6 meses</span>
                      </span>
                    </p>
                  </div>                                   
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>Cobertura Total</span>
                      <span className={styles.parentesesDiamante}><br/>de Peças e Mão de Obra
                      </span>
                    </p>
                  </div>                                   
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>Motor Reserva</span>
                      <span className={styles.parentesesDiamante}><br/>Suporte imediato para emergências
                      </span>
                    </p>
                  </div>                  
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>10%</span> de<span className={styles.destaqueTextDiamante}> Desconto</span>
                      <span className={styles.parentesesDiamante}><br/>Em outros serviços
                      </span>
                    </p>
                  </div>  
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>Manutenção Preventiva</span> 
                      <span className={styles.parentesesDiamante}><br/>(1 vez por 
                      <span><b> SEMANA)</b></span></span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList} ${styles.itemListDiamante}`}>Cadastro de até 
                      <span className={styles.destaqueTextDiamante}><br/>60 controles</span>
                      <span className={` ${styles.parentesesDiamante}`}><br/>(Por visita)</span>
                    </p>                 
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>Relatório de Diagnóstico </span> 
                      <span className={styles.parentesesDiamante}><br/>Técnico Especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnDiamante}`} onClick={handleClickPlanDiamante}>CONTRATAR</button>
          </div>
        </div>
    </div>
  </div>
  );
};