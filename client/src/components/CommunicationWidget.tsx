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
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Call us now'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/251937383931',
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Chat on WhatsApp'
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:sarahsarina0@gmail.com',
      color: 'bg-amber-600 hover:bg-amber-700',
      description: 'Send us an email'
    },
    {
      name: 'App Chat',
      icon: FiMessageCircle,
      href: '#',
      color: 'bg-purple-600 hover:bg-purple-700',
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
          <div className="bg-white rounded-2xl shadow-2xl p-4 min-w-[280px] border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">Get in Touch</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-900 transition-colors p-1"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
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
                    className={`flex items-center gap-4 p-4 rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${option.color}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base">{option.name}</div>
                      <div className="text-sm text-white/90">{option.description}</div>
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
        className={`group relative w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-amber-500/50 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        aria-label="Contact us"
      >
        {isOpen ? (
          <FiX className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <FiMessageCircle className="w-6 h-6 transition-transform duration-300" />
        )}
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75"></span>
        )}
      </button>
    </div>
  )
}

export default CommunicationWidget
