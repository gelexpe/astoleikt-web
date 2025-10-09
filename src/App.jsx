import React, { useState, useEffect } from 'react';
import piscina from './assets/piscina.png'; //
import { ShoppingCart, Phone, Mail, MapPin, Star, Users, Award, Calendar, Clock, User, Instagram, Camera, Globe, ChevronDown } from 'lucide-react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('es');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const translations = {
    es: {
      home: 'Inicio',
      club: 'El Club',
      horarios: 'Horarios',
      tienda: 'Tienda',
      instagram: 'Instagram',
      contacto: 'Contacto',
      welcome: 'Bienvenidos a',
      clubDescription: '¡Bienvenidos al Club de Natación de Abadiño! Nos complace daros la bienvenida a esta nueva etapa del club. Hemos logrado resucitarlo con más fuerza y compromiso. Nuestro objetivo es formar y desarrollar nadadores de todas las edades y niveles, fomentando valores como el esfuerzo, la disciplina y el trabajo en equipo. ¡Gracias por uniros a este nuevo capítulo!',
      knowClub: 'Conoce nuestro club',
      followInstagram: 'Síguenos en Instagram',
      aboutClub: 'Sobre Nuestro Club',
      ourHistory: 'Nuestra Historia',
      founded: [ '¿Cuándo nació el club?', 
                         'El club fue una iniciativa solicitada por el pueblo en el que se fundó 2003, porque antes tenían que ir a Durango. El 20 de febrero se rompió el techo de la piscina y como hubo mucho tiempo de conmoción, se disolvió el club. Desde Mayo 2024, hemos conseguido resucitar al Club.',
                         '¿Cuál es el objetivo del club?',
                         'El objetivo es la formación y desarrollo de nadadores de todas las edades y niveles. Nuestro compromiso es fomentar valores como el esfuerzo, la disciplina y el trabajo en equipo a través de la natación.'
                       ],
      nameMeaning: 'Nuestro nombre "Astola" proviene del euskera y representa la fuerza y determinación que caracteriza a nuestros nadadores.',
      ourValues: 'Nuestros Valores',
      values: ['Formación integral','Respeto y deportividad','Diversión','Excelencia deportiva', 'Formación integral', 'Espíritu de equipo'],
      technicalTeam: 'Nuestro Equipo Técnico',
      trainingSchedule: 'Horarios de Entrenamiento',
      officialStore: 'Tienda Oficial',
      followUsInstagram: 'Síguenos en Instagram',
      stayUpdated: 'Mantente al día con nuestras últimas actividades, competiciones y logros',
      viewAllPosts: 'Ver todas las publicaciones',
      contact: 'Contacto',
      contactInfo: 'Información de Contacto',
      address: 'Piscina Municipal de Abadiño, Bizkaia',
      phone: '+34 679 636 518',
      email: 'astolait@gmail.com',
      hours: 'Lunes a Viernes: 16:00 - 21:00',
      contactForm: 'Formulario de Contacto',
      fullName: 'Nombre completo',
      emailAddress: 'Correo electrónico',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
      swimmingSince: 'Nadando hacia la excelencia desde 2003',
      summerCamps: 'Udalekuak',
      masters: 'Masterrak',
      basqueChampionship: 'EH Txapelketa',
      bizkaiaChampionship: 'Bizkaiko Txapelketa',
      meetUs: 'Ezagutu Gaitzazu',
      times: 'Denborak',
      ourSwimmers: 'Gure Igerilariak',
      categories: 'Categorías'
    },
    eu: {
      home: 'Hasiera',
      club: 'Kluba',
      horarios: 'Ordutegiak',
      tienda: 'Denda',
      instagram: 'Instagram',
      contacto: 'Kontaktua',
      welcome: 'Ongi etorri',
      clubDescription: 'Ongi etorri Abadiñoko Igeriketa Klubera! Ongi etorri klubaren etapa berri honetara. Indar eta konpromiso handiagoz berpiztea lortu dugu. Gure helburua adin eta maila guztietako igerilariak prestatzea eta garatzea da, esfortzua, diziplina eta talde-lana bezalako balioak sustatuz. Eskerrik asko kapitulu berri honetan sartzeagatik!',
      knowClub: 'Ezagutu gure kluba',
      followInstagram: 'Jarraitu gaitzazu Instagramen',
      aboutClub: 'Gure Klubari buruz',
      ourHistory: 'Gure Historia',
      founded: ['Noiz jaio zen kluba?',
                        'Kluba 2003 sortu zen herriak eskatutako ekimena izan zen, lehenago Durangora joan behar zutelako. Otsailaren 20an pistinaren sabaia apurtu zen eta denbora luzez konpozioa izan zenez, kluba desegin zen. Maitz 2024tik, Kluba berpiztea lortu dugu.',
                        'Zein da klubaren helburua?',
                        'Helburua adin eta maila guztietako igerilarien prestakuntza eta garapena da. Gure konpromisoa da igeriketaren bidez ahalegina, diziplina eta talde-lana bezalako balioak sustatzea.'],
      nameMeaning: 'Gure "Astola" izena euskarazko hitzetik dator eta gure igerilariek dituzten indarra eta erabakitasuna adierazten du.',
      ourValues: 'Gure Balioak',
      values: ['Kirol maila bikaina', 'Formazio integrala', 'Talde espiritu', 'Errespetua eta kiroltasuna'],
      technicalTeam: 'Gure Teknikari Taldea',
      trainingSchedule: 'Entrenamendu Ordutegiak',
      officialStore: 'Denda Ofiziala',
      followUsInstagram: 'Jarraitu gaitzazu Instagramen',
      stayUpdated: 'Eguneratu gure azken jarduerak, lehiaketak eta lorpenak',
      viewAllPosts: 'Ikusi argitalpen guztiak',
      contact: 'Kontaktua',
      contactInfo: 'Kontaktu Informazioa',
      address: 'Abadiñoko Piscina Udala, Bizkaia',
      phone: '+34 679 636 518',
      email: 'astolait@gmail.com',
      hours: 'Astelehenetik ostiralera: 16:00 - 21:00',
      contactForm: 'Kontaktu Formularioa',
      fullName: 'Izen osoa',
      emailAddress: 'Posta elektronikoa',
      message: 'Mezua',
      sendMessage: 'Bidali Mezua',
      swimmingSince: '2003tik aurrera maila bikainera igeritzen',
      summerCamps: 'Udalekuak',
      masters: 'Masterrak',
      basqueChampionship: 'EH Txapelketa',
      bizkaiaChampionship: 'Bizkaiko Txapelketa',
      meetUs: 'Ezagutu Gaitzazu',
      times: 'Denborak',
      ourSwimmers: 'Gure Igerilariak',
      categories: 'Kategoriak'
    }
  };

  const t = translations[language];

  const products = [
    {
      id: 1,
      name: language === 'es' ? 'Gorros de Natación' : 'Igeriketa Kapela',
      price: 12.99,
      image: 'https://placehold.co/300x200/16a34a/ffffff?text=Gorros+Verdes',
      description: language === 'es' ? 'Gorros de silicona de alta calidad' : 'Silikonazko kapel kalitate handia'
    },
    {
      id: 2,
      name: language === 'es' ? 'Gafas de Natación' : 'Igeriketa Betaurrekoak',
      price: 24.99,
      image: 'https://placehold.co/300x200/16a34a/ffffff?text=Gafas+Verdes',
      description: language === 'es' ? 'Gafas antivaho con protección UV' : 'Izotz gabeko betaurrekoak UV babesa dutenak'
    },
    {
      id: 3,
      name: language === 'es' ? 'Bañador Competición' : 'Lehiaketarako Bainu-trajea',
      price: 45.99,
      image: 'https://placehold.co/300x200/16a34a/ffffff?text=Bañador+Verde',
      description: language === 'es' ? 'Bañador técnico para competición' : 'Lehiaketarako traje teknikoa'
    },
    {
      id: 4,
      name: language === 'es' ? 'Chándal Club' : 'Klubeko Txandal',
      price: 65.99,
      image: 'https://placehold.co/300x200/16a34a/ffffff?text=Chándal+Verde',
      description: language === 'es' ? 'Chándal oficial del club' : 'Klubaren txandal ofiziala'
    },
    {
      id: 5,
      name: language === 'es' ? 'Toalla Técnica' : 'Toalla Teknikoa',
      price: 18.99,
      image: 'https://placehold.co/300x200/16a34a/ffffff?text=Toalla+Verde',
      description: language === 'es' ? 'Toalla de microfibra rápida secado' : 'Azkar lehortzen den mikrofibra toalla'
    },
    {
      id: 6,
      name: language === 'es' ? 'Bolsa Deportiva' : 'Zorro Kirola',
      price: 29.99,
      image: 'https://placehold.co/300x200/16a34a/ffffff?text=Bolsa+Verde',
      description: language === 'es' ? 'Bolsa impermeable para material' : 'Materialarentzako zorro ur-iragazkorra'
    }
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const instagramCategories = [
    { id: 'udalekuak', name: t.summerCamps, image: 'https://placehold.co/400x400/16a34a/ffffff?text=Udalekuak', posts: 12 },
    { id: 'masterrak', name: t.masters, image: 'https://placehold.co/400x400/16a34a/ffffff?text=Masterrak', posts: 8 },
    { id: 'eh-txapelketa', name: t.basqueChampionship, image: 'https://placehold.co/400x400/16a34a/ffffff?text=EH+Txapelketa', posts: 15 },
    { id: 'bizkaia-txapelketa', name: t.bizkaiaChampionship, image: 'https://placehold.co/400x400/16a34a/ffffff?text=Bizkaia', posts: 18 },
    { id: 'ezagutu-gaitzazu', name: t.meetUs, image: 'https://placehold.co/400x400/16a34a/ffffff?text=Ezagutu+Gaitzazu', posts: 25 },
    { id: 'denborak', name: t.times, image: 'https://placehold.co/400x400/16a34a/ffffff?text=Denborak', posts: 6 },
    { id: 'gure-igerilariak', name: t.ourSwimmers, image: 'https://placehold.co/400x400/16a34a/ffffff?text=Gure+Igerilariak', posts: 32 }
  ];

  const clubInfo = {
    name: "Astola I.K.T. Abadiño",
    slogan: t.swimmingSince,
    description: t.clubDescription,
    values: t.values,
    instagram: "https://www.instagram.com/astola.it/",
    googleDrive: "https://drive.google.com/drive/folders/1IFuR32QN30TTxHKbLkE79pRJIZMKBXcu?usp=drive_link"
  };

  const trainingSchedule = [
    { group: "Benjamín", age: language === 'es' ? "2017/2016/2015" : "2017/2016/2015", schedule: language === 'es' ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"] : ["Astelehena, Asteazkena 17:00-18:00", "Asteartea, Osteguna 18:30-19:30"] },
    { group: "Alevín", age: language === 'es' ? "2014/2013" : "2014/2013", schedule: language === 'es' ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]:["Astelehena, Asteazkena 17:00-18:00", "Asteartea, Osteguna 18:30-19:30"] },
    { group: "G3", age: language === 'es' ? "2010/201172012" : "2010/2011/2012", schedule: language === 'es' ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]:["Astelehena, Asteazkena 17:00-18:00", "Asteartea, Osteguna 18:30-19:30"] },
    { group: "Masters", age: language === 'es' ? "Adultos" : "Adin handikoa", schedule: language === 'es' ? "Martes, Jueves 20:00-21:30" : "Asteartea, Osteguna 20:00-21:30" }
  ];

const staff = [
  { name: "Alfonso", role: language === 'es' ? "Presidente" : "Presidentea", experience: "" },
  { name: "Jokin", role: language === 'es' ? "Entrenadora Principal" : "Entrenatzaile Nagusia", experience: "" },
];
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{clubInfo.name}</h1>
                <p className="text-sm text-green-600">{clubInfo.slogan}</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {['home', 'club', 'horarios', 'tienda', 'instagram', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize font-medium transition-colors text-sm ${
                    activeSection === section
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {section === 'home' ? t.home : 
                   section === 'club' ? t.club :
                   section === 'horarios' ? t.horarios :
                   section === 'tienda' ? t.tienda :
                   section === 'instagram' ? t.instagram : t.contacto}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EU'}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border z-50">
                    <button
                      onClick={() => {
                        setLanguage('es');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm ${language === 'es' ? 'text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('eu');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm ${language === 'eu' ? 'text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      Euskera
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    {/* Hero Section */}
    {activeSection === 'home' && (
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${piscina})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay semitransparente para mejorar legibilidad */}
        {/*<div className="absolute inset-0 bg-black bg-opacity-40"></div>*/}
    
    <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        {t.welcome}{' '}
        <span className="text-[#00A63E]">Astola I.K.T.</span>
      </h2>
      
      <div className="text-lg md:text-xl font-medium mb-8 space-y-4">
        {Array.isArray(t.clubDescription) ? (
          t.clubDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{t.clubDescription}</p>
        )}
      </div>
   
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection('club')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              {t.knowClub}
            </button>
            <button
              onClick={() => setActiveSection('instagram')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center"
            >
              <Instagram className="w-5 h-5 mr-2" />
              {t.followInstagram}
            </button>
          </div>
        </div>
      </section>
    )}
      {/* El Club Section */}
      {activeSection === 'club' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.aboutClub}</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.ourHistory}</h3>

            <div className="text-gray-600 mb-6">
              {t.founded.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>



                <p className="text-gray-600">
                  {t.nameMeaning}
                </p>
                <div className="mt-6">
                  <a
                    href={clubInfo.googleDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    {language === 'es' ? 'Ver fotos y videos' : 'Ikusi argazkiak eta bideoak'}
                  </a>
                </div>
              </div>
              <div className="bg-green-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.ourValues}</h3>
                <ul className="space-y-2">
                  {t.values.map((value, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-green-600 mr-2" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">{t.technicalTeam}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {staff.map((member, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                    <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-green-600 text-sm">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

{/* Horarios Section */}
{activeSection === 'horarios' && (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        {t.trainingSchedule}
      </h2>
      
      <div className="space-y-4">
        {trainingSchedule.map((group, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{group.group}</h3>
                <p className="text-gray-600">{group.age}</p>
              </div>
              <div className="mt-2 md:mt-0 text-gray-700">
                <div className="flex items-start">
                  <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    {Array.isArray(group.schedule) ? (
                      group.schedule.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))
                    ) : (
                      group.schedule.split('\n').map((line, i) => (
                        <span key={i} className="block">
                          {line.trim()}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}
      {/* Tienda Section */}
      {activeSection === 'tienda' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.officialStore}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">€{product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {language === 'es' ? 'Añadir' : 'Gehitu'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instagram Section */}
      {activeSection === 'instagram' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.followUsInstagram}</h2>
              <p className="text-gray-600 mb-6">{t.stayUpdated}</p>
              <a
                href={clubInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @astola.it
              </a>
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">{t.categories}</h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Explora nuestras categorías en Instagram. Haz clic en cualquier imagen para ir a nuestro perfil y ver los Highlights.' 
                : 'Esploratu gure kategoriak Instagramen. Egin klik edozein iruditan gure profilera joateko eta Highlight-ak ikusteko.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramCategories.map((category) => (
                <a
                  key={category.id}
                  href={clubInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4">
                    <div className="text-white text-center">
                      <Camera className="w-8 h-8 mx-auto mb-2" />
                      <h4 className="text-lg font-bold mb-1">{category.name}</h4>
                      <p className="text-sm">{category.posts} {language === 'es' ? 'publicaciones' : 'argitalpen'}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900">{category.name}</h4>
                      <p className="text-sm text-gray-600">{category.posts} {language === 'es' ? 'publicaciones' : 'argitalpen'}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={clubInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                {t.viewAllPosts}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Contacto Section */}
      {activeSection === 'contacto' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.contact}</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.contactInfo}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{t.hours}</span>
                  </div>
                  <div className="flex items-center pt-4 border-t border-gray-200">
                    <Instagram className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href={clubInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      @astola.it
                    </a>
                  </div>
                  <div className="flex items-center pt-2">
                    <Camera className="w-5 h-5 text-green-600 mr-3" />
                    <a
                      href={clubInfo.googleDrive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      {language === 'es' ? 'Fotos y Videos' : 'Argazkiak eta Bideoak'}
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.contactForm}</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t.fullName}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t.emailAddress}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder={t.message}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    {t.sendMessage}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold">
                  {language === 'es' ? 'Carrito de Compras' : 'Erosketa Saskaia'}
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    {language === 'es' ? 'Tu carrito está vacío' : 'Zure saskia hutsik dago'}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-green-600 font-semibold">€{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cart.length > 0 && (
                <div className="p-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">
                      {language === 'es' ? 'Total:' : 'Guztira:'}
                    </span>
                    <span className="text-xl font-bold text-green-600">€{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    {language === 'es' ? 'Proceder al Pago' : 'Ordainketa Egin'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{clubInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-6">{clubInfo.slogan}</p>
            <div className="flex justify-center space-x-6 text-gray-400 mb-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {t.address}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                {t.phone}
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {t.email}
              </div>
            </div>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href={clubInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-1" />
                @astola.it
              </a>
              <a
                href={clubInfo.googleDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <Camera className="w-5 h-5 mr-1" />
                {language === 'es' ? 'Google Drive' : 'Google Drive'}
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Astola I.K.T. Abadiño. {language === 'es' ? 'Todos los derechos reservados.' : 'Eskubide guztiak erreserbaturik.'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
