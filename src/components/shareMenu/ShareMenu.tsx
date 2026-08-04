'use client'


import { FaEnvelope, FaLink, FaTelegram, FaWhatsapp } from "react-icons/fa"
import styles from "./StylesShareMenu.module.css"
import { useEffect, useState } from "react"

export function ShareMenu() {
  const [currentUrl, setCurrentUrl] = useState('')
  const text = encodeURIComponent('Confira este serviço da Delorian!')


  useEffect(() => {
    // Só roda no cliente
    setCurrentUrl(encodeURIComponent(window.location.href))
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copiado!')
  }

  // ✅ Cada item tem um único objeto de imagem
  const shareOptions = [
    {
      id: 'whatsapp',
      icon: <FaWhatsapp color="#25D366" size={28}/>,
      href: `https://wa.me/?text=${text}%20${currentUrl}`,
    },
    {
      id: 'telegram',
      icon: <FaTelegram color="#0088cc" size={28} />,
      href: `https://t.me/share/url?url=${currentUrl}&text=${text}`,
    },
    {
      id: 'email',
      icon: <FaEnvelope color="#EA4335" size={28} />,
      href: `mailto:?subject=Delorian&body=${text}%20${currentUrl}`,
    },
  ]

  return (
    <div className={styles.shareMenuContainer}>
      <div className={styles.shareMenuContent}>
        {shareOptions.map((opt) => (
          <div key={opt.id}  className={styles.shareMenuIcons}>
            <a  href={opt.href} target="_blank" rel="noopener noreferrer" className={styles.iconLink} >
              {opt.icon}
            </a>
          </div>
        
        ))}

      </div>
       <button onClick={handleCopy} className={styles.shareMenuBtn}>
        <div><FaLink className="text-gray-700 text-3xl" /><p>Copiar Link</p></div>
      </button>
  </div>
  )
}
