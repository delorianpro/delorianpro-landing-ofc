
'use client'

import styles from "./StylesPlansDelorian.module.css";
import Image from "next/image";
import {Check} from "lucide-react";

export function PlansDelorian() {
  const phoneNumber = '+5541985011909'; 
  const handleClickPlanBronze = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Bronze.`;
    window.open(whatsappLink, '_blank'); 
  }
  const handleClickPlanPrata = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Prata.`;
    window.open(whatsappLink, '_blank'); 
  }
  const handleClickPlanOuro = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Ouro.`;
    window.open(whatsappLink, '_blank'); 
  }
  const handleClickPlanDiamante = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações%20sobre%20o%20plano%20Diamante.`;
    window.open(whatsappLink, '_blank'); 
  }
  return (
    <div className={styles.plansBg} id="plansDelorianId">
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
                      <span className={styles.destaqueTextBronze}> mês</span></span>
                    </p>
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e08569" className={`${styles.checkIcon} ${styles.checkIconBronze}`}/>
                    <p className={styles.itemList}>Cadastro de Até 
                      <span><br/> <span className={styles.destaqueTextBronze}>05 Controles</span></span>
                      <span className={styles.parenteses}><br/>(Por visita)</span>
                    </p>                 
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e08569" className={`${styles.checkIcon} ${styles.checkIconBronze}`}/>
                    <p className={`${styles.itemList}`}> <span className={styles.destaqueTextBronze}>Relatório de Diagnóstico </span> 
                      <span className={styles.parenteses}><br/>Técnico especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnBronze}`}  onClick={handleClickPlanBronze}>SAIBA MAIS</button>
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
                    <p className={styles.itemList}>Cobertura Total de 
                      <span className={styles.destaqueTextPrata}><br/>Mão de Obra</span>
                    </p>                 
                  </div>
                   <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList}>Atendimento Prioritário 
                      <span className={styles.destaqueTextPrata}><br/>Prata</span>
                    </p>                 
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList1}> Manutenção Preventiva
                      <span className={styles.parenteses}><br/>1 vez por 
                      <span className={styles.destaqueTextPrata}><b> mês</b></span></span>
                    </p>
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList}>Cadastro de Até 
                      <span className={styles.destaqueTextPrata}><br/>15 Controles</span>
                      <span className={styles.parenteses}><br/>(Por visita)</span>
                    </p>                 
                  </div>
                  <div className={styles.serviceCheckAndText}>
                    <Check size={20} color="#e0dfdf" className={`${styles.checkIcon} ${styles.checkIconPrata}`}/>
                    <p className={styles.itemList}> <span className={styles.destaqueTextPrata}>Relatório de Diagnóstico</span>
                      <span className={styles.parenteses}><br/>Técnico especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnPrata}`} onClick={handleClickPlanPrata}>SAIBA MAIS</button>
          </div>
          {/* PLANO OURO */}
          <div className={`${styles.planBlock} ${styles.planOuro}`}>
            <div className={`${styles.blockPriceGlobal} ${styles.blockPriceOuro}`}>
                  <p className={styles.aPartir}>A PARTIR DE</p>
                  <div className={`${styles.blockValue} ${styles.blockValueOuro}`}>
                    <span className={`${styles.realSymbolGlobal} ${styles.realSymbolOuro}`}>R$</span>
                    <span className={`${styles.valorGlobal} ${styles.valorOuro}`}>549</span>
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
                      <p className={`${styles.itemList} ${styles.itemListOuro} `}> <span className={styles.destaqueTextOuro}>1 Atendimento <br />Emergencial por Mês</span>
                        <span className={styles.parentesesOuro}><br/>(Entre 6h e 22h - Todos os dias) 
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
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> Cobertura Contra <b className={styles.destaqueTextOuro}>Fenômenos Naturais</b>
                      <span className={styles.parentesesOuro}><br/>(Raios, chuva, poeira, insetos etc.)
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> Segurança Elétrica
                      <span><br/> <b className={styles.parentesesOuro}>Garantia contra curtos e instabilidade da rede elétrica</b>
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>Cobertura Total de</span><b className={styles.destaqueTextOuro}>Travas de Segurança</b>
                      <span><br/>
                      </span>
                    </p>
                  </div>
                     <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>Cobertura Total de </span><b className={styles.destaqueTextOuro}>Sensores Anti Esmagamento</b>
                      <span><br/>
                      </span>
                    </p>
                  </div>
                     <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>Atendimento Prioritário Ouro</span><span><br/>
                      </span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}> <span className={styles.destaqueTextOuro}>Manutenção Preventiva</span>
                      <span className={styles.parentesesOuro}><br/>(1 vez por
                      <span><b> mês)</b></span></span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.itemListOuro}`}>Cadastro de Até 
                      <span className={`${styles.amountControls} ${styles.destaqueTextOuro}`}><br/>45 Controles</span>
                      <span className={styles.parentesesOuro}><br/>(Por visita)</span>
                    </p>                 
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceCheckAndTextOuro}`}>
                    <Check size={20} color="#ffcc00" className={`${styles.checkIcon} ${styles.checkIconOuro}`}/>
                    <p className={`${styles.itemList} ${styles.relatorio} ${styles.itemListOuro} ${styles.destaqueTextOuro}`}>Relatório de Diagnóstico 
                      <span className={styles.parentesesOuro}><br/>Técnico especializado</span>
                    </p>
                  </div>      
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnOuro}`} onClick={handleClickPlanOuro}>SAIBA MAIS</button>
          </div>
          {/* PLANO DIAMANTE */}
          <div className={`${styles.planBlock} ${styles.planDiamante}`}>
            <div className={`${styles.blockPriceGlobal} ${styles.blockPriceDiamante}`}>
                  <p className={`${styles.aPartir} ${styles.aPartirDiamante}`}>A PARTIR DE</p>
                  <div className={`${styles.blockValue} ${styles.blockValueDiamante}`}>
                    <span className={`${styles.realSymbolGlobal} ${styles.realSymbolDiamante}`}>R$</span>
                    <span className={`${styles.valorGlobal} ${styles.valorDiamante}`}>790</span>
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
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>2&nbsp;Atendimentos Emergenciais <br /><span className={styles.vinteQuatroHoras}>por Mês</span></span>
                      <span className={styles.parentesesDiamante}><br/>(Entre 6h e 22h - Todos os dias)</span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>Travas de Segurança Reserva</span>
                       <span className={styles.parentesesDiamante}><br/>Suporte imediato para emergências
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
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>Substituição de Cabos de Aço</span>
                      <span className={`${styles.parentesesDiamante}`}><br/>Quando estiverem desgastados
                      </span>
                    </p>
                  </div> 
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}> Cobertura Contra
                      <span className={styles.destaqueTextDiamante}><br/>Fenômenos <br />Naturais
                      </span><span className={styles.parentesesDiamante}><br/>(Raios, chuva, poeira, insetos etc.)</span>
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
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}>Atendimento Prioritário<span className={styles.destaqueTextDiamante}> Diamante</span>  
                    </p>
                  </div> 
                   <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}>Cobertura Total de<span className={styles.destaqueTextDiamante}> Travas de Segurança</span>  
                    </p>
                  </div>   
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}>Cobertura Total de<span className={styles.destaqueTextDiamante}> Sensores Anti Esmagamento</span>  
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
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>Alinhamento do Portão</span></p>
                  </div>  
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>Balanceamento do Portão</span></p>
                  </div>  
                    <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList} ${styles.itemListDiamante}`}> <span className={styles.destaqueTextDiamante}>Relatório de Diagnóstico </span> 
                      <span className={styles.parentesesDiamante}><br/>Técnico especializado</span>
                    </p>
                  </div>                              
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList} ${styles.itemListDiamante}`}>Cadastro de até 
                      <span className={styles.destaqueTextDiamante}><br/>60 Controles</span>
                      <span className={` ${styles.parentesesDiamante}`}><br/>(Por visita)</span>
                    </p>                 
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>Manutenção Preventiva</span> 
                      <span className={styles.parentesesDiamante}><br/>(1 vez por 
                      <span><b> mês)</b></span></span>
                    </p>
                  </div>
                  <div className={`${styles.serviceCheckAndText} ${styles.serviceDiamante}`}>
                    <Check size={20} color="#FFFFFF" className={`${styles.checkIcon} ${styles.checkIconDiamante}`}/>
                    <p className={`${styles.itemList1} ${styles.itemListDiamante}`}><span className={styles.destaqueTextDiamante}>Reforço de Soldas</span>
                    </p>
                  </div>  
              </div>
            </div>
              <button className={`${styles.btnGlobal} ${styles.btnDiamante}`} onClick={handleClickPlanDiamante}>SAIBA MAIS</button>
          </div>
        </div>
    </div>
  </div>
  );
};