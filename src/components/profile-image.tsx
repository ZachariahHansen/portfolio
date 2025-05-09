import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa"

// Import all images from the profile directory
const imageModules = import.meta.glob('/src/assets/images/profile/*.{jpg,jpeg,png,gif}', { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)

export function ProfileImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleImageClick = () => {
    if (images.length === 0) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        className="relative cursor-pointer"
        onClick={handleImageClick}
      >
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt="Zachariah Hansen"
            className={`rounded-full w-[32rem] h-[32rem] object-cover border-4 border-primary shadow-lg transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-full w-[32rem] h-[32rem] flex items-center justify-center`}>
            <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300" /  >
          </div>
        </div>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/ZachariahHansen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-primary transition-colors"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/zachariah-hansen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-primary transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:zachariahjhansen@gmail.com"
          className="text-2xl hover:text-primary transition-colors"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://discord.com/users/218216183181213696"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-primary transition-colors"
          title="Discord"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  )
} 