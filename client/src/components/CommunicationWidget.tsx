import { useState } from 'react'
import { FiPhone, FiMail, FiMessageCircle, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

function CommunicationWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const communicationOptions = [
    {
      name: 'Phone',
      icon: FiPhone,
      href: 'tel:+251937383931',
      description: 'Call us now'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/251937383931',
      description: 'Chat on WhatsApp'
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:neatifycleaningservice@gmail.com',
      description: 'Send us an email'
    },
    {
      name: 'App Chat',
      icon: FiMessageCircle,
      href: '#',
      description: 'Live chat support',
      onClick: () => {
        // Handle app chat - could open a chat widget
        alert('Chat feature coming soon!')
      }
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Communication Options Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-4 animate-fade-in-up">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 min-w-[260px] border border-gray-200">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-blue-600 transition-all duration-200 p-1 rounded-full"
                aria-label="Close"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {communicationOptions.map((option) => {
                const Icon = option.icon
                return (
                  <a
                    key={option.name}
                    href={option.href}
                    onClick={(e) => {
                      if (option.onClick) {
                        e.preventDefault()
                        option.onClick()
                      }
                    }}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 p-3 rounded-lg bg-transparent hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-blue-500 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm leading-tight group-hover:text-blue-600 transition-colors duration-200">{option.name}</div>
                      <div className="text-xs text-gray-500 leading-tight">{option.description}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        aria-label="Contact us"
      >
        {isOpen ? (
          <FiX className="w-6 h-6 transition-transform duration-300 relative z-10" />
        ) : (
          <FiMessageCircle className="w-6 h-6 transition-transform duration-300 relative z-10" />
        )}
      </button>
    </div>
  )
}

export default CommunicationWidget
