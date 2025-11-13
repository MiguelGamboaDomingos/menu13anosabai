import { useState } from 'react'
import './App.css'
import { useMouseEffect } from './useMouseEffect'
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import { Utensils } from 'lucide-react'




const menuData = {
  categories: [
    {
      id: 1,
      name: 'Entradas',
      subtitle: 'Inícios Refrescantes',
      icon: '🥗',
      items: [
        { name: 'Rissóis de bacalhau', description: 'Clássico português crocante por fora e cremoso por dentro.' },
        { name: 'Croquetes de carne', description: 'Recheio suculento com tempero tradicional.' },
        { name: 'Bolo do caco', description: 'Pão típico da Madeira, perfeito com manteiga de alho.' },
        { name: 'Choco Frito', description: 'Tiras de choco empanadas e crocantes.' },
        { name: 'Chouriço assado', description: 'Sabor intenso e aroma defumado.' },
        { name: 'Pica-Pau', description: 'Tiras de carne em molho picante e delicioso.' }
      ]
    },
    {
      id: 2,
      name: 'Buffet',
      subtitle: 'Sabores da Nossa Terra',
      icon: '🍽️',
      items: [
        { name: 'Lasanha vegetariana', description: 'Camadas de vegetais grelhados e queijo gratinado.' },
        { name: 'Arroz de pato', description: 'Receita tradicional com crosta dourada.' },
        { name: 'Calulu de Carne', description: 'Prato angolano com verduras e carne suculenta.' },
        { name: 'Feijoada Madeirense', description: 'Sabor intenso e autêntico da ilha.' },
        { name: 'Bacalhau com Natas', description: 'Cremosidade e sabor em cada garfada.' },
        { name: 'Espetada Madeirense/Frango/Ananás', description: 'Espetadas grelhadas com toque tropical.' }
      ]
    },
    {
      id: 3,
      name: 'Acompanhantes',
      subtitle: 'Para Completar o Sabor',
      icon: '🍚',
      items: [
        { name: 'Arroz branco', description: 'Solto e leve, ideal para acompanhar qualquer prato.' },
        { name: 'Batata frita madeirense', description: 'Crocante e dourada, com toque artesanal.' },
        { name: 'Milho frito', description: 'Clássico da culinária madeirense, irresistível.' },
        { name: 'Salada especial', description: 'Colorida e refrescante, com tempero equilibrado.' },
        { name: 'Feijão preto', description: 'Textura cremosa e sabor intenso.' }
      ]
    },
    {
      id: 4,
      name: 'Sobremesas',
      subtitle: 'Celebração Doce',
      icon: '🍰',
      items: [
        { name: 'Mousse de chocolate', description: 'Cremosa e intensa, um clássico irresistível.' },
        { name: 'Mousse de maracujá', description: 'Leve e refrescante com toque tropical.' },
        { name: 'Bolo de chocolate', description: 'Fofinho e coberto com ganache.' },
        { name: 'Fruta da época', description: 'Seleção fresca e colorida.' }
      ]
    },
    {
      id: 5,
      name: 'Bebidas',
      subtitle: 'Um Brinde ao Futuro',
      icon: '🥂',
      items: [
        { name: 'Fino', description: 'Refrescante e dourado.' },
        { name: 'Vinho da casa - Tinto/Branco', description: 'Selecionado especialmente para o evento.' },
        { name: 'Champanhada de frutos vermelhos', description: 'Equilíbrio entre doce e cítrico.' },
        { name: 'Água mineral', description: 'Pureza e leveza.' },
        { name: 'Refrigerante', description: 'Coca-Cola, Fanta, Sprite, Sumol' },
        { name: 'Sumos', description: 'Um pacote de sabores frescos e nutritivos.' },
        { name: 'Café/chá', description: 'Encerramento perfeito para a refeição.' }
      ]
    }
  ],
  location: {
    address: '',
    city: 'Luanda - Angola',
    phone: '',
    hours: ''
  }
}

function App() {
  const [openCategory, setOpenCategory] = useState(null)

  useMouseEffect()

  const closeModal = () => setOpenCategory(null)

  return (
    <div className="app">
      {/* Padrão lateral */}
      <div className="side-pattern left">
        <img src="/padrao 13 anos abai.svg" alt="" />
      </div>
      <div className="side-pattern right">
        <img src="/padrao 13 anos abai.svg" alt="" />
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo-left">
          <img src="/logo 13 anos abai.svg" alt="Logo 13 Anos ABAI" className="logo-svg logo-left-img" />
        </div>
        <div className="logo-right">
          <img src="/abai.svg" alt="Logo ABAI" className="logo-svg logo-right-img" />
        </div>
      </header>

      {/* Subtítulo */}
      <div className="subtitle">
        <h2>MENU</h2>
        <div className="divider"></div>
        <h3>Jantar de Comemoração</h3>
      </div>

      {/* Categorias */}
      <main className="menu-container">
        {menuData.categories.map((category, index) => (
          <div
            key={category.id}
            className="category-card"
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={() => setOpenCategory(category.id)}
          >
            <h3 className="category-name">{category.icon} {category.name}</h3>
            <p className="category-subtitle">{category.subtitle}</p>
          </div>
        ))}
        <p className="menu-warning">
                  Por favor, solicite apenas os itens disponíveis no nosso menu. <br />
                  Tudo foi pensado para lhe proporcionar a melhor experiência.
                </p>
      </main>

      {/* Modal */}
      {openCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="back-button" onClick={closeModal}>
              <ArrowLeft size={20} /> Voltar
            </button>
            <h3 className="modal-title">
              {menuData.categories.find((c) => c.id === openCategory).name}
            </h3>
            
            <div className="modal-items">
              {menuData.categories
                .find((c) => c.id === openCategory)
                .items.map((item, idx) => (
                  <div key={idx} className="modal-item">
                    <h4>{item.name}</h4>
                    <p className="item-hover-desc">{item.description}</p>
                  </div>
                ))}
                
            </div>
            {/* Aviso */}
                
          </div>
          
        </div>
        
      )}
      
      {/* Rodapé */}
      <footer className="location">
  <div className="footer-container">
    {/* Grupo de localização */}
    <div className="footer-group">
      <h4>Localização</h4>
      <p> Restaurante Madeirense</p>
      <p>Futungo, Rua da Pomobel, Luanda</p>
    </div>

    {/* Grupo de contato */}
    <div className="footer-group">
      <h4>Contato</h4>
      <p>Telefone: (+244) 227 281 005</p>
      <p>Academia BAI</p>
    </div>

    {/* Grupo de data e hora */}
    <div className="footer-group">
      <h4>Data & Hora</h4>
      <p>14 de Novembro</p>
      <p>19h 30min</p>
    </div>
  </div>
</footer>
    </div>
  )
}


export default App
