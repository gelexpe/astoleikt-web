import React, { useState, useEffect } from "react";
import piscina from "./assets/piscina.png";
import mochila from "./assets/mochila.png";
import mochila2 from "./assets/mochila2.jpg";
import mochila3 from "./assets/mochila3.png";
import udalekuak from "./assets/udalekuak.png";
import jardunaldiak from "./assets/jardunaldiak.png";
import eh_txapelketa from "./assets/eh_txapelketa.png";
import master from "./assets/master.png";
import bizkaia from "./assets/bizkaia.png";
import igerilariak from "./assets/igerilariak.png";
import denborak from "./assets/denborak.png";
import ekintzak from "./assets/ekintzak.png";
import camiseta1 from "./assets/camiseta1.png";
import camiseta2 from "./assets/camiseta2.png";
import camiseta3 from "./assets/camiseta3.png";
import sudadera from "./assets/sudadera.jpeg";
import pantalon1 from "./assets/pantalon1.jpg";
import pantalon2 from "./assets/pantalon2.png";
import pantalon3 from "./assets/pantalon3.png";
import logoabadino from "./assets/logoabadino.png";
import logoabadino2 from "./assets/logoabadino-blanco.png";

// Logos de federaciones
import bizkaiaLogo from "./assets/bizkaia_federazioa_logo.png";
import euskadiLogo from "./assets/euskadi_federazioa_logo.png";
import arabaLogo from "./assets/araba_federazioa_logo.png";
import gipuzkoaLogo from "./assets/gipuzkoa_federazioa_logo.png";
import navarraLogo from "./assets/navarra_federazioa_logo.png";
import rfenLogo from "./assets/rfen_logo.png";

import {
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Calendar,
  Clock,
  User,
  Instagram,
  Camera,
  Globe,
  ChevronDown,
  Facebook,
  Music,
  Link as LinkIcon,
  FileText,
} from "lucide-react";

// Funciones auxiliares para localStorage
const getStoredValue = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.warn(`Error reading localStorage key “${key}”:`, e);
    return defaultValue;
  }
};
const setStoredValue = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Error setting localStorage key “${key}”:`, e);
  }
};

const App = () => {
  // Estados con persistencia en localStorage
  const [cart, setCart] = useState(() => getStoredValue("astola_cart", []));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() =>
    getStoredValue("astola_activeSection", "hasiera"),
  );
  const [language, setLanguage] = useState(() =>
    getStoredValue("astola_language", "eu"),
  );
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");
  const [currentSize, setCurrentSize] = useState("S");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderName, setOrderName] = useState("");
  const [orderLastName, setOrderLastName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [socialMediaTab, setSocialMediaTab] = useState(() =>
    getStoredValue("astola_socialMediaTab", "instagram"),
  );

  // Guardar estados en localStorage cuando cambien
  useEffect(() => {
    setStoredValue("astola_cart", cart);
  }, [cart]);
  useEffect(() => {
    setStoredValue("astola_activeSection", activeSection);
  }, [activeSection]);
  useEffect(() => {
    setStoredValue("astola_language", language);
  }, [language]);
  useEffect(() => {
    setStoredValue("astola_socialMediaTab", socialMediaTab);
  }, [socialMediaTab]);

  const translations = {
    es: {
      hasiera: "Inicio",
      kluba: "Kluba",
      horarios: "Horarios",
      tienda: "Tienda",
      redes: "Redes",
      contacto: "Contacto",
      calendario: "Calendario",
      enlaces: "Enlaces de interés",
      avisoLegal: "Aviso Legal",
      welcome: "Bienvenidos a",
      clubDescription:
        "¡Bienvenidos al Club de Natación de Abadiño! Nos complace daros la bienvenida a esta nueva etapa del club. Hemos logrado resucitarlo con más fuerza y compromiso. Nuestro objetivo es formar y desarrollar nadadores de todas las edades y niveles, fomentando valores como el esfuerzo, la disciplina y el trabajo en equipo. ¡Gracias por uniros a este nuevo capítulo!",
      knowClub: "Conoce nuestro club",
      followInstagram: "Síguenos en Instagram",
      aboutClub: "Sobre Nuestro Club",
      ourHistory: "Nuestra Historia",
      founded: [
        "¿Cuándo nació el club?",
        "El club fue una iniciativa solicitada por el pueblo en el que se fundó 2003, porque antes tenían que ir a Durango. El 20 de febrero se rompió el techo de la piscina y como hubo mucho tiempo de conmoción, se disolvió el club. Desde Mayo 2024, hemos conseguido resucitar al Club.",
        "¿Cuál es el objetivo del club?",
        "El objetivo es la formación y desarrollo de nadadores de todas las edades y niveles. Nuestro compromiso es fomentar valores como el esfuerzo, la disciplina y el trabajo en equipo a través de la natación.",
      ],
      nameMeaning:
        'Nuestro nombre "Astola" proviene del euskera y representa la fuerza y determinación que caracteriza a nuestros nadadores.',
      ourValues: "Nuestros Valores",
      values: [
        "Formación integral",
        "Respeto y deportividad",
        "Diversión",
        "Excelencia deportiva",
        "Formación integral",
        "Espíritu de equipo",
      ],
      technicalTeam: "Nuestro Equipo Técnico",
      trainingSchedule: "Horarios de Entrenamiento",
      officialStore: "Tienda Oficial",
      followUsInstagram: "Síguenos en Instagram",
      followUsFacebook: "Síguenos en Facebook",
      followUsTikTok: "Síguenos en TikTok",
      stayUpdated:
        "Mantente al día con nuestras últimas actividades, competiciones y logros",
      viewAllPosts: "Ver todas las publicaciones",
      contact: "Contacto",
      contactInfo: "Información de Contacto",
      address: "Piscina Municipal de Abadiño, Bizkaia",
      phone: "+34 679 636 518",
      email: "astolait@gmail.com",
      hours: "Lunes a Viernes: 16:00 - 21:00",
      contactForm: "Formulario de Contacto",
      fullName: "Nombre completo",
      emailAddress: "Correo electrónico",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      swimmingSince: "Nadando hacia la excelencia desde 2003",
      summerCamps: "Udalekuak",
      masters: "Masterrak",
      basqueChampionship: "EH Txapelketa",
      bizkaiaChampionship: "Bizkaiko Txapelketa",
      competition: "Jardunaldiak",
      times: "Denborak",
      actions: "Ekintza bereziak",
      ourSwimmers: "Gure Igerilariak",
      categories: "Categorías",
      interesLinks: "Enlaces de interés",
      federationBizkaia: "Federación Bizkaia",
      federationEuskadi: "Federación Euskadi",
      federationAraba: "Federación Álava",
      federationGipuzkoa: "Federación Gipuzkoa",
      federationNavarra: "Federación Navarra",
      federationSpain: "RFEN",
      legalNotice: "Aviso legal y descargo de responsabilidad",
      privacyPolicy: "Política de privacidad",
      responsible: "Responsable del tratamiento",
      email: "Correo electrónico",
      addressFull: "Domicilio",
      purpose: "Finalidad del tratamiento",
      legalBasis: "Base jurídica (legitimación)",
      recipients: "Destinatarios",
      rights: "Derechos de las personas interesadas",
      dataRetention: "Conservación de los datos",
      securityMeasures: "Medidas de seguridad",
      imageUse: "Uso de imágenes y redes sociales",
      cookies: "Cookies",
      contact: "Contacto",
      lastUpdate: "Última actualización: octubre 2025",
    },
    eu: {
      hasiera: "Hasiera",
      kluba: "Kluba",
      horarios: "Ordutegiak",
      tienda: "Denda",
      redes: "Sare sozialak",
      contacto: "Kontaktua",
      calendario: "Egutegia",
      enlaces: "Interes Estekak",
      avisoLegal: "Lege Oharra",
      welcome: "Ongi etorri",
      clubDescription:
        "Ongi etorri Abadiñoko Igeriketa Klubera! Ongi etorri klubaren etapa berri honetara. Indar eta konpromiso handiagoz berpiztea lortu dugu. Gure helburua adin eta maila guztietako igerilariak prestatzea eta garatzea da, esfortzua, diziplina eta talde-lana bezalako balioak sustatuz. Eskerrik asko kapitulu berri honetan sartzeagatik!",
      knowClub: "Ezagutu gure kluba",
      followInstagram: "Jarraitu gaitzazu Instagramen",
      aboutClub: "Gure Klubari buruz",
      ourHistory: "Gure Historia",
      founded: [
        "Noiz jaio zen kluba?",
        "Kluba 2003 sortu zen herriak eskatutako ekimena izan zen, lehenago Durangora joan behar zutelako. Otsailaren 20an pistinaren sabaia apurtu zen eta denbora luzez konpozioa izan zenez, kluba desegin zen. Maitz 2024tik, Kluba berpiztea lortu dugu.",
        "Zein da klubaren helburua?",
        "Helburua adin eta maila guztietako igerilarien prestakuntza eta garapena da. Gure konpromisoa da igeriketaren bidez ahalegina, diziplina eta talde-lana bezalako balioak sustatzea.",
      ],
      nameMeaning:
        'Gure "Astola" izena euskarazko hitzetik dator eta gure igerilariek dituzten indarra eta erabakitasuna adierazten du.',
      ourValues: "Gure Balioak",
      values: [
        "Prestakuntza integrala",
        "Errespetua eta kiroltasuna",
        "Dibertsioa",
        "Kirol bikaintasuna",
        "Prestakuntza integrala",
        "Talde espiritua",
      ],
      technicalTeam: "Gure Teknikari Taldea",
      trainingSchedule: "Entrenamendu Ordutegiak",
      officialStore: "Denda Ofiziala",
      followUsInstagram: "Jarraitu gaitzazu Instagramen",
      followUsFacebook: "Jarraitu gaitzazu Facebooken",
      followUsTikTok: "Jarraitu gaitzazu TikTokean",
      stayUpdated: "Eguneratu gure azken jarduerak, lehiaketak eta lorpenak",
      viewAllPosts: "Ikusi argitalpen guztiak",
      contact: "Kontaktua",
      contactInfo: "Kontaktu Informazioa",
      address: "Abadiñoko Piscina Udala, Bizkaia",
      phone: "+34 679 636 518",
      email: "astolait@gmail.com",
      hours: "Astelehenetik ostiralera: 16:00 - 21:00",
      contactForm: "Kontaktu Formularioa",
      fullName: "Izen osoa",
      emailAddress: "Posta elektronikoa",
      message: "Mezua",
      sendMessage: "Bidali Mezua",
      swimmingSince: "2003tik aurrera maila bikainera igeritzen",
      summerCamps: "Udalekuak",
      masters: "Masterrak",
      basqueChampionship: "EH Txapelketa",
      bizkaiaChampionship: "Bizkaiko Txapelketa",
      competition: "Competiciones",
      times: "Denborak",
      actions: "Acitvidades especiales",
      ourSwimmers: "Gure Igerilariak",
      categories: "Kategoriak",
      interesLinks: "Interes Estekak",
      federationBizkaia: "Bizkaiko Federazioa",
      federationEuskadi: "Euskadiko Federazioa",
      federationAraba: "Arabako Federazioa",
      federationGipuzkoa: "Gipuzkoako Federazioa",
      federationNavarra: "Nafarroako Federazioa",
      federationSpain: "RFEN",
      legalNotice: "Lege oharra eta erantzukizunaren ukapena",
      privacyPolicy: "Pribatutasun politika",
      responsible: "Tratamenduaren arduraduna",
      email: "Posta elektronikoa",
      addressFull: "Helbidea",
      purpose: "Tratamenduaren xedea",
      legalBasis: "Oinarri juridikoa (legitimazioa)",
      recipients: "Hartzaileak",
      rights: "Interesatuen eskubideak",
      dataRetention: "Datuak gordetzeko iraupena",
      securityMeasures: "Segurtasun neurriak",
      imageUse: "Irudi eta sare sozialen erabilera",
      cookies: "Cookieak",
      contact: "Kontaktua",
      lastUpdate: "Azken eguneratzea: Urria 2025",
    },
  };

  const t = translations[language];

  const products = [
    {
      id: 1,
      name: language === "es" ? "Mochila" : "Motxila",
      price: 35,
      images: [mochila, mochila2, mochila3],
      description:
        language === "es"
          ? "Mochila oficial del club"
          : "Klubaren motxila ofiziala",
      sizes: ["Única"],
    },
    {
      id: 2,
      name: language === "es" ? "Camiseta" : "Kamiseta",
      price: 24.99,
      images: [camiseta1, camiseta2, camiseta3],
      description:
        language === "es"
          ? "Camiseta oficial del club"
          : "Klubaren kamiseta ofiziala",
      sizes: ["4", "8", "12", "16", "S", "M", "L", "XL", "2XL"],
    },
    {
      id: 3,
      name: language === "es" ? "Sudadera" : "Sudadera",
      price: 24.99,
      images: [sudadera],
      description:
        language === "es"
          ? "Sudadera oficial del club"
          : "Klubaren sudadera ofiziala",
      sizes: ["4", "8", "12", "16", "S", "M", "L", "XL", "2XL"],
    },
    {
      id: 4,
      name: language === "es" ? "Pantalon" : "Prakak",
      price: 10,
      images: [pantalon3, pantalon1, pantalon2],
      description:
        language === "es"
          ? "Pantalon oficial del club"
          : "Klubaren praka ofiziala",
      sizes: ["4", "8", "12", "16", "S", "M", "L", "XL", "2XL"],
    },
  ];

  const addToCart = (product, size = "Única") => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size,
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const sendOrder = () => {
    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} (Talla: ${item.size}) x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n");
    const formData = new FormData();
    formData.append("Nombre", orderName);
    formData.append("Apellidos", orderLastName);
    formData.append("Email", orderEmail);
    formData.append("Teléfono", orderPhone);
    formData.append("Pedido", orderDetails);
    formData.append("Total", getTotalPrice().toFixed(2));
    fetch("https://formspree.io/f/mnnggvoy", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("¡Pedido enviado! El club se pondrá en contacto contigo.");
          setCart([]);
          setIsOrderModalOpen(false);
        } else {
          alert("Error al enviar el pedido. Por favor, inténtalo de nuevo.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al enviar el pedido. Por favor, inténtalo de nuevo.");
      });
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const instagramCategories = [
    { id: "udalekuak", name: t.summerCamps, image: udalekuak },
    { id: "masterrak", name: t.masters, image: master },
    { id: "eh-txapelketa", name: t.basqueChampionship, image: eh_txapelketa },
    { id: "bizkaia-txapelketa", name: t.bizkaiaChampionship, image: bizkaia },
    { id: "jardunaldiak", name: t.competition, image: jardunaldiak },
    { id: "denborak", name: t.times, image: denborak },
    { id: "gure-igerilariak", name: t.ourSwimmers, image: igerilariak },
    { id: "ekintzak", name: t.actions, image: ekintzak },
  ];

  const instagramCategoryUrls = {
    udalekuak:
      "https://www.instagram.com/stories/highlights/18067081628120919/",
    masterrak:
      "https://www.instagram.com/stories/highlights/18305997631168481/",
    "eh-txapelketa":
      "https://www.instagram.com/stories/highlights/18053520869135974/",
    "bizkaia-txapelketa":
      "https://www.instagram.com/stories/highlights/18043628621270354/",
    jardunaldiak:
      "https://www.instagram.com/stories/highlights/17853377253323369/",
    denborak: "https://www.instagram.com/stories/highlights/18011278007479973/",
    "gure-igerilariak":
      "https://www.instagram.com/stories/highlights/18112680724457408/",
    ekintzak: "https://www.instagram.com/stories/highlights/18112680724457408/",
  };

  const clubInfo = {
    name: "Astola I.K.T. Abadiño",
    slogan: t.swimmingSince,
    description: t.clubDescription,
    values: t.values,
    instagram: "https://www.instagram.com/astola.it/",
    facebook: "https://www.facebook.com/profile.php?id=61561550206896&locale=es_ES",
    tiktok: "https://www.tiktok.com/@astola.igeriketa.taldea",
  };

  const trainingSchedule = [
    {
      group: "Benjamín",
      age: language === "es" ? "2017/2016/2015" : "2017/2016/2015",
      schedule:
        language === "es"
          ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]
          : [
              "Astelehena, Asteazkena 17:00-18:00",
              "Asteartea, Osteguna 18:30-19:30",
            ],
    },
    {
      group: "Alevín",
      age: language === "es" ? "2014/2013" : "2014/2013",
      schedule:
        language === "es"
          ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]
          : [
              "Astelehena, Asteazkena 17:00-18:00",
              "Asteartea, Osteguna 18:30-19:30",
            ],
    },
    {
      group: "G3",
      age: language === "es" ? "2010/2011/2012" : "2010/2011/2012",
      schedule:
        language === "es"
          ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]
          : [
              "Astelehena, Asteazkena 17:00-18:00",
              "Asteartea, Osteguna 18:30-19:30",
            ],
    },
    {
      group: "Masters",
      age: language === "es" ? "Adultos" : "Adin handikoa",
      schedule:
        language === "es"
          ? "Martes, Jueves 19:30-20:30"
          : "Asteartea, Osteguna 19:30-20:30",
    },
  ];

  const staff = [
    {
      name: "Alfonso",
      role: language === "es" ? "Presidente" : "Presidentea",
      experience: "",
    },
    {
      name: "Jokin",
      role:
        language === "es" ? "Entrenador Principal" : "Entrenatzaile Nagusia",
      experience: "",
    },
  ];

  const interestLinks = [
    {
      name: t.federationBizkaia,
      url: "https://bizkaiaigeri.es/index2.php",
      logo: bizkaiaLogo,
    },
    {
      name: t.federationEuskadi,
      url: "http://www.eif-fvn.org/inicio.php",
      logo: euskadiLogo,
    },
    {
      name: t.federationAraba,
      url: "http://www.alavesanatacion.org/",
      logo: arabaLogo,
    },
    {
      name: t.federationGipuzkoa,
      url: "https://www.gif.eus/",
      logo: gipuzkoaLogo,
    },
    {
      name: t.federationNavarra,
      url: "https://www.fnn-nif.com/",
      logo: navarraLogo,
    },
    {
      name: t.federationSpain,
      url: "https://rfen.es/publicacion/principal.asp",
      logo: rfenLogo,
    },
  ];

  const mainNavItems = [
    "hasiera",
    "kluba",
    "horarios",
    "enlaces",
    "tienda",
    "redes",
    "calendario",
    "contacto",
    "aviso-legal",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00A63E] to-[#008a34]">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={logoabadino}
                  alt="Astola I.K.T. Abadiño"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {clubInfo.name}
                </h1>
                <p className="text-sm text-green-600">{clubInfo.slogan}</p>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {mainNavItems.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`capitalize font-medium transition-colors text-sm ${
                    activeSection === section
                      ? "text-[#00A63E] border-b-2 border-[#00A63E]"
                      : "text-gray-700 hover:text-[#00A63E]"
                  }`}
                >
                  {section === "hasiera"
                    ? t.hasiera
                    : section === "kluba"
                      ? t.kluba
                      : section === "horarios"
                        ? t.horarios
                        : section === "enlaces"
                          ? t.enlaces
                          : section === "tienda"
                            ? t.tienda
                            : section === "redes"
                              ? t.redes
                              : section === "calendario"
                                ? t.calendario
                                : section === "aviso-legal"
                                  ? t.avisoLegal
                                  : t.contacto}
                </button>
              ))}
            </nav>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#00A63E]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#00A63E] transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {language === "es" ? "ES" : "EU"}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border z-50">
                    <button
                      onClick={() => {
                        setLanguage("es");
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm ${language === "es" ? "text-[#00A63E] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("eu");
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm ${language === "eu" ? "text-[#00A63E] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      Euskera
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-[#00A63E] transition-colors"
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

     {/* Mobile menu - Fixed at top */}
     {isMobileMenuOpen && (
       <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b">
         {/* Header for the mobile menu */}
         <div className="flex items-center justify-between p-4 border-b">
           <div className="flex items-center space-x-3">
             <div className="w-12 h-12 flex items-center justify-center">
               <img
                 src={logoabadino}
                 alt="Astola I.K.T. Abadiño"
                 className="w-12 h-12 object-contain"
               />
             </div>
             <div>
               <h1 className="text-xl font-bold text-gray-900">{clubInfo.name}</h1>
               <p className="text-sm text-green-600">{clubInfo.slogan}</p>
             </div>
           </div>
           <button
             onClick={() => setIsMobileMenuOpen(false)}
             className="text-gray-700 hover:text-[#00A63E]"
           >
             ✕
           </button>
         </div>
     
         {/* Menu Items */}
         <div className="px-4 pt-2 pb-3 space-y-1">
           {mainNavItems.map((section) => (
             <button
               key={section}
               onClick={() => {
                 setActiveSection(section);
                 setIsMobileMenuOpen(false);
               }}
               className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                 activeSection === section
                   ? "text-[#00A63E] bg-green-50"
                   : "text-gray-700 hover:text-[#00A63E] hover:bg-gray-50"
               }`}
             >
               {section === "hasiera"
                 ? t.hasiera
                 : section === "kluba"
                   ? t.kluba
                   : section === "horarios"
                     ? t.horarios
                     : section === "enlaces"
                       ? t.enlaces
                       : section === "tienda"
                         ? t.tienda
                         : section === "redes"
                           ? t.redes
                           : section === "calendario"
                             ? t.calendario
                             : section === "aviso-legal"
                               ? t.avisoLegal
                               : t.contacto}
             </button>
           ))}
         </div>
       </div>
     )} 
      {/* Hero Section */}
      {activeSection === "hasiera" && (
        <section
          className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${piscina})`,
            backgroundSize: "cover",
            backgroundPosition: "center 58%",
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.welcome} <span className="text-[#00A63E]">Astola I.K.T.</span>
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
                onClick={() => setActiveSection("kluba")}
                className="bg-[#00A63E] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#008a34] transition-colors"
              >
                {t.knowClub}
              </button>
              <button
                onClick={() => {
                  setActiveSection("redes");
                  setSocialMediaTab("instagram");
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                {t.followInstagram}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Kluba Section */}
      {activeSection === "kluba" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {t.aboutClub}
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {t.ourHistory}
                  </h3>
                  <div className="text-gray-600 space-y-6">
                    {t.founded.map((paragraph, index) => (
                      <p
                        key={index}
                        className={
                          index % 2 === 0 ? "font-bold text-gray-800" : ""
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600">{t.nameMeaning}</p>
                </div>
                <div className="bg-green-100 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.ourValues}
                  </h3>
                  <ul className="space-y-2">
                    {t.values.map((value, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <Star className="w-4 h-4 text-[#00A63E] mr-2" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  {t.technicalTeam}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {staff.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border"
                    >
                      <User className="w-12 h-12 text-[#00A63E] mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900">
                        {member.name}
                      </h4>
                      <p className="text-[#00A63E] text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Horarios Section */}
      {activeSection === "horarios" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {t.trainingSchedule}
              </h2>
              <div className="space-y-4">
                {trainingSchedule.map((group, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {group.group}
                        </h3>
                        <p className="text-gray-600">{group.age}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-gray-700">
                        <div className="flex items-start">
                          <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            {Array.isArray(group.schedule)
                              ? group.schedule.map((line, i) => (
                                  <span key={i} className="block">
                                    {line}
                                  </span>
                                ))
                              : group.schedule.split("\n").map((line, i) => (
                                  <span key={i} className="block">
                                    {line.trim()}
                                  </span>
                                ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enlaces de interés Section */}
      {activeSection === "enlaces" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {t.interesLinks}
              </h2>
              <div className="space-y-6">
                {interestLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <img
                      src={link.logo}
                      alt={`${link.name} logo`}
                      className="w-8 h-8 mr-4 rounded"
                    />
                    <span className="text-gray-800 font-medium group-hover:text-[#00A63E]">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tienda Section */}
      {activeSection === "tienda" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {t.officialStore}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>
                      <p className="text-xl font-bold text-[#00A63E] mb-3">
                        €{product.price}
                      </p>
                      {product.sizes && product.sizes.length > 1 && (
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {language === "es" ? "Talla:" : "Neurria:"}
                          </label>
                          <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                          >
                            {product.sizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openProductModal(product)}
                          className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 text-sm font-medium"
                        >
                          {language === "es" ? "Ver" : "Ikusi"}
                        </button>
                        <button
                          onClick={() => addToCart(product, selectedSize)}
                          className="flex-1 bg-[#00A63E] text-white py-2 rounded-lg hover:bg-[#008a34] text-sm font-medium"
                        >
                          {language === "es" ? "Pedir" : "Eskatu"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Redes Section */}
      {activeSection === "redes" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.redes}
                </h2>
                <p className="text-gray-600 mb-6">{t.stayUpdated}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={clubInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    @astola.it
                  </a>
                  <a
                    href={clubInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    {language === "es" ? "Facebook" : "Facebook"}
                  </a>
                  <a
                    href={clubInfo.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    TikTok
                  </a>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setSocialMediaTab("instagram")}
                    className={`px-6 py-2 rounded-md text-sm font-medium ${
                      socialMediaTab === "instagram"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Instagram className="w-4 h-4 inline mr-1" />
                    Instagram
                  </button>
                  <button
                    onClick={() => setSocialMediaTab("facebook")}
                    className={`px-6 py-2 rounded-md text-sm font-medium ${
                      socialMediaTab === "facebook"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Facebook className="w-4 h-4 inline mr-1" />
                    Facebook
                  </button>
                  <button
                    onClick={() => setSocialMediaTab("tiktok")}
                    className={`px-6 py-2 rounded-md text-sm font-medium ${
                      socialMediaTab === "tiktok"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Music className="w-4 h-4 inline mr-1" />
                    TikTok
                  </button>
                </div>
              </div>
              {/* Instagram Content */}
              {socialMediaTab === "instagram" && (
                <>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    {t.categories}
                  </h3>
                  <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    {language === "es"
                      ? "Explora nuestras categorías en Instagram. Haz clic en cualquier imagen para ir a nuestro perfil y ver los Highlights."
                      : "Esploratu gure kategoriak Instagramen. Egin klik edozein iruditan gure profilera joateko eta Highlight-ak ikusteko."}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {instagramCategories.map((category) => (
                      <a
                        key={category.id}
                        href={
                          instagramCategoryUrls[category.id] || clubInfo.instagram
                        }
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
                            <h4 className="text-lg font-bold mb-1">
                              {category.name}
                            </h4>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white bg-opacity-90 rounded-lg p-3">
                            <h4 className="font-semibold text-gray-900">
                              {category.name}
                            </h4>
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
                      className="inline-flex items-center bg-[#00A63E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#008a34] transition-colors"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      {t.viewAllPosts}
                    </a>
                  </div>
                </>
              )}
              {/* Facebook Content */}
              {socialMediaTab === "facebook" && (
                <div className="text-center py-12">
                  <Facebook className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.followUsFacebook}
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    {language === "es"
                      ? "Síguenos en Facebook para estar al tanto de todas nuestras novedades, eventos y actividades del club."
                      : "Jarraitu gaitzazu Facebooken klubearen berri guztiak, ekitaldiak eta jarduerak ez galdutzeko."}
                  </p>
                  <a
                    href={clubInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    {language === "es" ? "Ir a Facebook" : "Joan Facebookera"}
                  </a>
                </div>
              )}
              {/* TikTok Content */}
              {socialMediaTab === "tiktok" && (
                <div className="text-center py-12">
                  <Music className="w-16 h-16 text-black mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.followUsTikTok}
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    {language === "es"
                      ? "Síguenos en TikTok para ver nuestros videos más divertidos, entrenamientos y momentos especiales del club."
                      : "Jarraitu gaitzazu TikTokean klubearen bideo dibertigarrienak, entrenamenduak eta momentu bereziak ikusteko."}
                  </p>
                  <a
                    href={clubInfo.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    {language === "es" ? "Ir a TikTok" : "Joan TikTokera"}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contacto Section */}
      {activeSection === "contacto" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {t.contact}
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {t.contactInfo}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-[#00A63E] mr-3" />
                      <span className="text-gray-700">{t.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#00A63E] mr-3" />
                      <span className="text-gray-700">{t.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#00A63E] mr-3" />
                      <span className="text-gray-700">{t.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-[#00A63E] mr-3" />
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
                    <div className="flex items-center">
                      <Facebook className="w-5 h-5 text-blue-600 mr-3" />
                      <a
                        href={clubInfo.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {language === "es" ? "Facebook" : "Facebook"}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Music className="w-5 h-5 text-black mr-3" />
                      <a
                        href={clubInfo.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800 font-medium"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {t.contactForm}
                  </h3>
                  <form
                    action="https://formspree.io/f/mnnggdeq"
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder={t.fullName}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder={t.emailAddress}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder={t.message}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#00A63E] text-white py-2 rounded-lg font-medium hover:bg-[#008a34] transition-colors"
                    >
                      {t.sendMessage}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Calendario Section */}
      {activeSection === "calendario" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {language === "es"
                ? "Calendario de Eventos"
                : "Ekitaldien Egutegia"}
            </h2>
            <div className="flex justify-center">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FMadrid&showPrint=0&showCalendars=0&title=astolaikt&src=aWt0YXN0b2xAZ21haWwuY29t&color=%23039be5"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Calendario Astole IKT"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Aviso Legal Section */}
      {activeSection === "aviso-legal" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                {t.avisoLegal}
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">{t.legalNotice}</h3>
                <p className="text-gray-700 mb-4">
                  El sitio web de Astola I.K.T. Abadiño tiene como objetivo ofrecer información sobre las actividades del club y servir de punto de contacto con sus miembros y simpatizantes.
                </p>
                <p className="text-gray-700 mb-4">
                  Aunque el contenido se revisa cuidadosamente, el club no garantiza que la información publicada sea completa, exacta o actualizada, y no asume responsabilidad alguna derivada del uso de dicha información.
                </p>
                <p className="text-gray-700 mb-4">
                  Los textos, imágenes, logotipos y demás contenidos de este sitio web están protegidos por derechos de autor y pertenecen a Astola I.K.T. Abadiño. No está permitida su reproducción total o parcial sin autorización previa y por escrito.
                </p>
                <p className="text-gray-700">
                  El club no se hace responsable del contenido de los enlaces externos que puedan incluirse en este sitio web.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">{t.privacyPolicy}</h3>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.responsible}</h4>
                  <p>Astola I.K.T. Abadiño</p>
                  <p><strong>{t.email}:</strong> <a href="mailto:astolait@gamail.com" className="text-blue-600">astolait@gamail.com</a></p>
                  <p><strong>{t.addressFull}:</strong> Eulena 2, 48220 Abadiño (Bizkaia)</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.purpose}</h4>
                  <p>Los datos personales recabados a través de los formularios de contacto o inscripción se utilizan exclusivamente para gestionar la actividad deportiva del club, responder consultas o mantener la comunicación con socios y participantes.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.legalBasis}</h4>
                  <p>El tratamiento de los datos se basa en el consentimiento de la persona interesada y/o en la relación asociativa que mantiene con el club.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.recipients}</h4>
                  <p>Los datos no se cederán a terceros salvo obligación legal o cuando sea necesario para la correcta prestación de servicios relacionados con la actividad del club (por ejemplo, federaciones deportivas o aseguradoras). Cuando sea imprescindible utilizar proveedores que puedan acceder a datos (p. ej., alojamiento web, herramientas ofimáticas), el club firmará con ellos los contratos de encargo de tratamiento exigidos por el RGPD.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.rights}</h4>
                  <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Astola I.K.T. Abadiño tratamos datos personales que le conciernan. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. También podrán solicitar la limitación del tratamiento, la portabilidad de sus datos y oponerse al tratamiento en determinadas circunstancias.</p>
                  <p className="mt-2">Para ejercer estos derechos, envía un correo a <a href="mailto:astolait@gamail.com" className="text-blue-600">astolait@gamail.com</a> indicando el derecho que deseas ejercer.</p>
                  <p>Asimismo, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600">www.aepd.es</a>) si consideras que tus derechos no han sido atendidos correctamente.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.dataRetention}</h4>
                  <p>Los datos personales se conservarán mientras dure la relación con el club y durante los plazos necesarios para cumplir las obligaciones legales correspondientes.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.securityMeasures}</h4>
                  <p>Astola I.K.T. Abadiño aplica las medidas técnicas y organizativas necesarias para garantizar la confidencialidad e integridad de los datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.imageUse}</h4>
                  <p>El club podrá publicar en su web o redes sociales fotografías o vídeos de las actividades deportivas y eventos, siempre con fines informativos y de difusión de la actividad del club.</p>
                  <p>Si no deseas que tu imagen o la de tus hijos/as aparezca, puedes solicitar su retirada escribiendo a <a href="mailto:astolait@gamail.com" className="text-blue-600">astolait@gamail.com</a>. En caso de menores de edad, el club recabará, cuando corresponda, la autorización de sus progenitores o tutores.</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium">{t.cookies}</h4>
                  <p>Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento. No se emplean cookies con fines publicitarios ni de seguimiento.</p>
                  <p>Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento. Si en el futuro se incorporaran cookies analíticas o de terceros, se informará debidamente y se solicitará el consentimiento correspondiente.</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium">{t.contact}</h4>
                  <p>Para cualquier duda relacionada con este aviso o con la política de privacidad, puedes escribir a <a href="mailto:astolait@gamail.com" className="text-blue-600">astolait@gamail.com</a> o dirigirte por escrito a Astola I.K.T. Abadiño, Eulena 2, 48220 Abadiño (Bizkaia).</p>
                </div>
              </div>

              <div className="text-center text-gray-600 mt-8">
                <p>{t.lastUpdate}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold">
                  {language === "es"
                    ? "Carrito de Compras"
                    : "Erosketa Saskaia"}
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
                    {language === "es"
                      ? "Tu carrito está vacío"
                      : "Zure saskia hutsik dago"}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 p-4 border rounded-lg"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            {language === "es" ? "Talla:" : "Neurria:"}{" "}
                            {item.size}
                          </p>
                          <p className="text-[#00A63E] font-semibold">
                            €{item.price}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
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
                      {language === "es" ? "Total:" : "Guztira:"}
                    </span>
                    <span className="text-xl font-bold text-[#00A63E]">
                      €{getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="w-full bg-[#00A63E] text-white py-3 rounded-lg font-medium hover:bg-[#008a34] transition-colors"
                  >
                    {language === "es" ? "Enviar Pedido" : "Bidali Eskaera"}
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
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={logoabadino2}
                  alt="Astola I.K.T. Abadiño"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-xl font-bold">{clubInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-6">{clubInfo.slogan}</p>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 text-gray-400 mb-6">
              <div className="flex items-center mb-2 sm:mb-0">
                <MapPin className="w-4 h-4 mr-1" />
                {t.address}
              </div>
              <div className="flex items-center mb-2 sm:mb-0">
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
                href={clubInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook className="w-5 h-5 mr-1" />
                Facebook
              </a>
              <a
                href={clubInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-gray-800 transition-colors"
              >
                <Music className="w-5 h-5 mr-1" />
                TikTok
              </a>
            </div>
            <div className="mb-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("aviso-legal");
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.avisoLegal}
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Astola I.K.T. Abadiño.{" "}
              {language === "es"
                ? "Todos los derechos reservados."
                : "Eskubide guztiak erreserbaturik."}
            </div>
          </div>
        </div>
      </footer>

      {/* Product Gallery Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] h-[90vh] sm:h-auto overflow-y-auto relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              ✕
            </button>
            <div className="p-6">
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="w-full max-h-[60vh] object-contain mx-auto"
              />
            </div>
            <div className="px-6 pb-6 flex justify-center space-x-2 overflow-x-auto">
              {selectedProduct.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 border-2 rounded-lg ${
                    index === currentImageIndex
                      ? "border-[#00A63E]"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? selectedProduct.images.length - 1 : prev - 1,
                  )
                }
                className="bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100"
              >
                ‹
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === selectedProduct.images.length - 1 ? 0 : prev + 1,
                  )
                }
                className="bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100"
              >
                ›
              </button>
            </div>
            <div className="px-6 py-4 border-t flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 truncate">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {selectedProduct.description}
                </p>
                {selectedProduct.sizes && selectedProduct.sizes.length > 1 && (
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "es" ? "Talla:" : "Neurria:"}
                    </label>
                    <select
                      value={currentSize}
                      onChange={(e) => setCurrentSize(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    >
                      {selectedProduct.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 flex flex-col justify-between min-w-0">
                <div>
                  <span className="text-2xl font-bold text-[#00A63E]">
                    €{selectedProduct.price}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const size =
                      selectedProduct.sizes && selectedProduct.sizes.length > 1
                        ? currentSize
                        : "Única";
                    addToCart(selectedProduct, size);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-[#00A63E] text-white py-2 rounded-lg hover:bg-[#008a34] transition-colors mt-4"
                >
                  {language === "es" ? "Añadir al pedido" : "Gehitu eskaerara"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {language === "es" ? "Solicitar Pedido" : "Eskaera Eskatu"}
              </h2>
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={language === "es" ? "Nombre" : "Izena"}
                value={orderName}
                onChange={(e) => setOrderName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder={language === "es" ? "Apellidos" : "Abizena"}
                value={orderLastName}
                onChange={(e) => setOrderLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder={
                  language === "es"
                    ? "Correo electrónico"
                    : "Posta elektronikoa"
                }
                value={orderEmail}
                onChange={(e) => setOrderEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
              <input
                type="tel"
                placeholder={language === "es" ? "Teléfono" : "Telefonoa"}
                value={orderPhone}
                onChange={(e) => setOrderPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                {language === "es" ? "Cancelar" : "Utzi"}
              </button>
              <button
                onClick={sendOrder}
                className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#008a34] transition-colors"
              >
                {language === "es" ? "Enviar Pedido" : "Bidali Eskaera"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
