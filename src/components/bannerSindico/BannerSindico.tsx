'use client'
import { ArrowUpRight, Check, User2Icon } from "lucide-react";
import styles from "./StylesBannerSindico.module.css";
import Image from "next/image";
import { useState } from "react";


type FaqProps = {
  setOpenIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}; //novo

export function BannerSindico({
  setOpenIndex,
}: FaqProps) {

const [enviado, setEnviado] = useState(false)
const [handleNameClick, setHandleNameClick] = useState(false)
const [nomeUsuario, setNomeUsuario] = useState('')
const [isPending, setIsPending] = useState(false)


function formatarNomeInput(nome: string) {
  return nome
    .toLowerCase()
    .replace(/[^A-Za-zÀ-ÿ\s]/g, "")
    .replace(/\s{2,}/g, " ") // evita espaços duplicados
    .replace(/\b\w/g, (letra) => letra.toUpperCase())
}

function formatarNomeFinal(nome: string) {
  return nome
    .toLowerCase()
    .trim() // AQUI SIM pode usar
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase())
}


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (isPending) return //blocks extra clicks
  const form = e.currentTarget
  const formData = new FormData(form)

  const nome = formatarNomeFinal(formData.get("nome")?.toString() || "")
  let telefone = formData.get("whatsapp")?.toString()

  telefone = telefone?.replace(/\D/g, "")

  setNomeUsuario(nome)

  if (!nome) {
    alert("Digite seu nome")
    return
  }

  if (!telefone || telefone.length < 10 || telefone.length > 11) {
    alert("Digite um telefone válido com DDD")
    return
  }

  setIsPending(true) //lock before the request


  try {
    const response = await fetch("/api/clientes", {
      method: "POST",
      body: formData
    })

    if (!response.ok) {
      throw new Error("Erro ao enviar")
    }

    form.reset()
    setEnviado(true)

  } catch (error) {
    alert("Erro ao enviar. Tente novamente.")
    console.error(error)
  }
   finally {
    setIsPending(false) //always unlocks after finish
  }
}


const handleOpenPreventiva = () => {
  setOpenIndex(8);

  setTimeout(() => {
    document
      .getElementById(
        'o-que-e-manutencao-preventiva'
      )
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, 100);
}; //novo, junto com o onclick que leva ele


    const phoneNumber = '+5541985011909'; 
    const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian!👋%20Acabei%20de%20solicitar%20o%20Manual%20de%20Sobrevivência%20do%20Síndico%20pelo%20site%20e%20vim%20continuar%20nosso%20contato%20pelo%20WhatsApp.`;
    window.open(whatsappLink, '_blank'); 
  }



  return(
    <div className={styles.componentBannerSindico} id="banner-sindico">
      <div className={styles.contentBannerSindico} id="banner-sindico-content">
        <div className={styles.gridLeftBannerSindico}>
          <h2 className={styles.titleBanner}>Ei, Síndico!</h2>
          <p className={styles.subTitleBanner}>Veja dicas práticas de manutenção preventiva para manter seu condomínio sempre funcionando.</p>

          <div className={styles.divTexteForm}>
            <div className={styles.textGratis}>
              <div className={styles.textGratisContent}>
                <p className={styles.titleBlock}>Receba <b className={styles.gratisWord}>GRÁTIS</b> o:</p>
                <div className={styles.manutencaoIcone}><p><Check className={styles.iconeChevromD}/> Manual de Sobrevivência do Síndico </p></div>
                <div className={styles.manutencaoPrevent} onClick={handleOpenPreventiva}><div  className={styles.textManuPrevenDiv}><Check className={styles.iconeChevromD}/> <span className={styles.textManuPreven}>1 Manutenção Preventiva</span> <ArrowUpRight className={styles.arrowUpRight}/></div> </div>
              </div> 
            </div>
         
            {/* <h3 className={styles.textGratis}>Receba <b className={styles.gratisWord}>GRÁTIS</b> o: <br /> <span className={styles.manutencaoIcone}> <Check className={styles.iconeChevromD}/> Manual de sobrevivênia do Síndico +</span><span className={styles.manutencaoPrevent} ><Check className={styles.iconeChevromD}/> 1 Manutenção Preventiva</span>.</h3> */}
           
            <div className={styles.divForm}>
              
              
              {!enviado ? (
              <form onSubmit={handleSubmit} className={styles.blockForm}>
                <div className={styles.blockInputs}>
                  <div className={styles.divUserName}>
                    <User2Icon className={handleNameClick ? `${styles.iconUser} ${styles.iconUserClick}` : styles.iconUser}/>
                    <input 
                      type="text" 
                      name="nome" 
                      placeholder={"Digite seu nome aqui"} 
                      className={styles.inputName} 
                      pattern="[A-Za-zÀ-ÿ\s]+"
                      title="Digite apenas letras"
                      maxLength={30}
                      required
                      onClick={() => setHandleNameClick(!handleNameClick)}
                      onInput={(e) => {
                        let value = e.currentTarget.value
                        // remove caracteres que não são letras
                        value = formatarNomeInput(value)
                        e.currentTarget.value = value
                      }}       
                    />

                  </div>
                  
                  <div className={styles.divUserWhats}>
                    <span>
                      <Image src={"/assets/btnWhatsBannerSindico.webp"} alt={""}width={84} height={84} className={styles.iconWhats} />
                      {/* <Phone className={styles.iconWhats}/> */}
                    </span>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      placeholder={"(__) _____-____"}
                      inputMode="numeric"
                      className={styles.inputWhats}
                      required 
                      title="Digite 11 números"

                      onInput={(e) => {
                        let value = e.currentTarget.value.replace(/\D/g, "") // só números

                      // limita a 11 números
                        if (value.length > 11) {
                          value = value.slice(0, 11)
                        }

                        // aplica máscara
                        if (value.length <= 2) {
                          value = value.replace(/^(\d{0,2})/, "($1")
                        } else if (value.length <= 7) {
                          value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2")
                        } else {
                          value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
                        }

                        e.currentTarget.value = value
                     }}
                  />
                  </div>
                </div>
                <div className={styles.divBtn}>
                  <button type="submit" className={styles.btn} disabled={isPending}>
                    <Image src={"/assets/btnWhatsBannerSindico.webp"} alt={""}width={84} height={84} className={styles.iconWhatsBtnForm} />
                    {isPending ? " Enviando... " : "RECEBER GRÁTIS NO WHATSAPP"}
                  </button>
                </div>
              </form> 

              ) : (
              <div className={styles.msgEnviado}>
                <p className={styles.nomeUsuarioMsg}>⚡Mensagem enviada, {nomeUsuario}! Agora é com a gente.<br /><br />Em breve falaremos com você<br />ou 🚀</p>
                <div><button className={styles.buttonFaleAgora} onClick={handleClickTalkWithUs}>FALE CONOSCO AGORA</button></div>
                </div>
              
              )} 
             
            <div>
          </div>
            </div>
          </div> 
        </div>

          <div className={styles.gridRightBannerSindico}>
             <picture className={styles.imageBannerPicture}>
                        <source media="(max-width: 850px)" srcSet="/assets/imgBannerSindicoMobile.webp" />
                        <img src="/assets/bannerSindicoOfc.webp" alt="banner" className={styles.imageBanner}/>
                      </picture>
          </div>
      </div>
    </div>
  )
}