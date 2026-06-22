import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Database,
  BarChart3,
  Shield,
  Download,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  FileText,
  Users,
  History,
  Zap,
  Layers,
  FileSpreadsheet,
  PieChart,
  Check,
  Sun,
  Moon,
  X,
  Maximize2
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Cartographie Interactive",
      description: "Visualisez vos parcelles sur une carte OpenStreetMap avec des couches personnalisables et une précision géographique maximale.",
      color: "from-green-500 to-emerald-600",
      iconColor: "text-green-500 dark:text-green-400"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Base de Données Complète",
      description: "Gérez tous vos lots avec un tableau dynamique, filtres avancés et édition en temps réel.",
      color: "from-blue-500 to-cyan-600",
      iconColor: "text-blue-500 dark:text-blue-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Statistiques & Rapports",
      description: "Graphiques interactifs et rapports PDF professionnels pour suivre vos ventes et votre chiffre d'affaires.",
      color: "from-purple-500 to-pink-600",
      iconColor: "text-purple-500 dark:text-purple-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Avancée",
      description: "Authentification Supabase, code PIN, et historique d'activité complet pour protéger vos données.",
      color: "from-red-500 to-rose-600",
      iconColor: "text-red-500 dark:text-red-400"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Export Professionnel",
      description: "Générez des PDF, Excel et GeoJSON pour partager vos données avec vos partenaires.",
      color: "from-amber-500 to-orange-600",
      iconColor: "text-amber-500 dark:text-amber-400"
    },
    {
      icon: <History className="w-8 h-8" />,
      title: "Historique & Audit",
      description: "Ctrl+Z pour annuler jusqu'à 20 actions et journal complet des modifications.",
      color: "from-indigo-500 to-violet-600",
      iconColor: "text-indigo-500 dark:text-indigo-400"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-slate-50 via-white to-emerald-50'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode 
        ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-700' 
        : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="GéoLotis" className="h-14 w-14 object-contain" />
              <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'bg-gradient-to-r from-green-primary to-green-dark bg-clip-text text-transparent'}`}>
                GéoLotis
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8">
                {[
                  { name: "Fonctionnalités", href: "#fonctionnalités" },
                  { name: "Captures", href: "#captures" },
                  { name: "Télécharger", href: "#telecharger" },
                  { name: "Contact", href: "#contact" }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    className={`font-medium text-lg relative group transition-colors ${
                      darkMode ? 'text-slate-300 hover:text-green-400' : 'text-slate-700 hover:text-green-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                      darkMode ? 'bg-green-400' : 'bg-gradient-to-r from-green-primary to-green-light'
                    }`}></span>
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold mb-8 border ${
                  darkMode 
                    ? 'bg-green-900/30 text-green-400 border-green-800' 
                    : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-primary border-green-200'
                } shadow-sm`}
              >
                <CheckCircle className="w-5 h-5" />
                <span>Version 1.8.2 • Disponible maintenant</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-5xl lg:text-6xl font-extrabold mb-8 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}
              >
                Gérez vos parcelles en
                <span className={`block mt-2 ${
                  darkMode 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500' 
                    : 'bg-gradient-to-r from-green-primary via-green-light to-emerald-600 bg-clip-text text-transparent'
                }`}>
                  tout simplicité
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-2xl mb-10 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                Logiciel professionnel de gestion de lotissements géo-référencé pour promoteurs immobiliers, géomètres et agents immobiliers.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-5"
              >
                <motion.a
                  href="#telecharger"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-primary to-green-dark hover:from-green-dark hover:to-green-primary text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl animate-pulse-glow"
                >
                  <Download className="w-6 h-6" />
                  Télécharger Gratuitement
                </motion.a>
                <motion.a
                  href="#fonctionnalités"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-xl border-2 ${
                    darkMode 
                      ? 'bg-slate-800 text-white border-slate-700 hover:border-green-500' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-green-primary'
                  }`}
                >
                  Découvrir
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`mt-12 grid grid-cols-3 gap-8 pt-8 border-t ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
              >
                {[
                  { num: '10K+', label: 'Lots gérés' },
                  { num: '500+', label: 'Utilisateurs' },
                  { num: '99.9%', label: 'Satisfaction' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-4xl font-bold ${
                      darkMode 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500' 
                        : 'bg-gradient-to-r from-green-primary to-green-dark bg-clip-text text-transparent'
                    }`}>{stat.num}</div>
                    <div className={`font-medium mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 rounded-[3rem] blur-3xl opacity-40"></div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`relative rounded-[2.5rem] p-8 shadow-2xl border ${
                  darkMode 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' 
                    : 'bg-gradient-to-br from-white to-slate-50 border-slate-100'
                }`}
              >
                <div className={`rounded-2xl p-6 shadow-inner ${
                  darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-slate-900 to-slate-800'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <img 
                    src="/screenshots/Interface GéoLotis.png" 
                    alt="Interface GéoLotis"
                    className="rounded-xl w-full h-80 object-contain bg-white cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage("/screenshots/Interface GéoLotis.png")}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalités" className={`py-28 px-6 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 ${
              darkMode 
                ? 'bg-green-900/30 text-green-400 border border-green-800' 
                : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-primary border border-green-200'
            }`}>
              <Zap className="w-4 h-4" />
              <span>Fonctionnalités</span>
            </div>
            <h2 className={`text-5xl lg:text-6xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Tout ce dont vous avez besoin
            </h2>
            <p className={`text-2xl max-w-3xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Des outils puissants pour gérer efficacement vos lotissements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`group relative p-10 rounded-3xl border transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700 hover:border-slate-600' 
                    : 'bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                    darkMode 
                      ? 'text-white group-hover:text-green-400' 
                      : 'text-slate-900 group-hover:text-green-primary'
                  }`}>{feature.title}</h3>
                  <p className={`leading-relaxed text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="captures" className={`py-28 px-6 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 to-emerald-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 ${
              darkMode 
                ? 'bg-blue-900/30 text-blue-400 border border-blue-800' 
                : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200'
            }`}>
              <Layers className="w-4 h-4" />
              <span>Interface</span>
            </div>
            <h2 className={`text-5xl lg:text-6xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Une interface moderne
            </h2>
            <p className={`text-2xl max-w-3xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Facile à utiliser, puissante dans ses fonctionnalités
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Tableau de bord", desc: "Accueil avec actions rapides et alertes", image: "/screenshots/Accueil.png", icon: <Zap className="w-8 h-8" /> },
              { title: "Carte Interactive", desc: "Visualisation des parcelles sur OpenStreetMap", image: "/screenshots/Carte.png", icon: <MapPin className="w-8 h-8" /> },
              { title: "Base de données", desc: "Gestion complète des lots en tableau", image: "/screenshots/BS.png", icon: <Database className="w-8 h-8" /> },
              { title: "Statistiques", desc: "Graphiques et rapports détaillés", image: "/screenshots/Stat.png", icon: <PieChart className="w-8 h-8" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group p-8 rounded-3xl shadow-xl border overflow-hidden transition-all ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className={`relative h-72 rounded-2xl flex items-center justify-center mb-6 overflow-hidden ${
                  darkMode ? 'bg-gradient-to-br from-slate-700 to-slate-600' : 'bg-gradient-to-br from-slate-100 to-slate-200'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item.image ? (
                    <div
                      onClick={() => setSelectedImage(item.image)}
                      className="relative w-full h-full cursor-pointer"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-contain bg-white"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                          <Maximize2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative text-center">
                      <div className="bg-gradient-to-r from-green-primary to-green-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
                        {item.icon}
                      </div>
                      <p className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>Ajoutez votre capture d'écran</p>
                      <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Placez-la dans public/screenshots/</p>
                    </div>
                  )}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Video Tutorial Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-24 bg-gradient-to-r from-green-primary via-green-dark to-emerald-700 rounded-[3rem] p-16 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative">
              <FileText className="w-20 h-20 mx-auto mb-8" />
              <h3 className="text-4xl font-extrabold mb-6">Tutoriels Vidéo</h3>
              <p className="text-2xl text-green-100 mb-10 max-w-3xl mx-auto">
                Apprenez à utiliser GéoLotis avec nos tutoriels vidéo complets
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 max-w-3xl mx-auto border border-white/20">
                <p className="text-xl mb-8 font-semibold">Comment ajouter des vidéos :</p>
                <ol className="text-left text-green-100 space-y-5 text-lg">
                  {[
                    "Téléchargez vos vidéos sur YouTube, Vimeo ou un hébergeur",
                    "Intégrez-les avec un iframe dans cette section",
                    "Ajoutez des liens vers vos guides et documentation"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="telecharger" className={`py-28 px-6 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 ${
              darkMode 
                ? 'bg-green-900/30 text-green-400 border border-green-800' 
                : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-primary border border-green-200'
            }`}>
              <Download className="w-4 h-4" />
              <span>Téléchargement</span>
            </div>
            <Download className="w-24 h-24 mx-auto mb-8 text-green-primary" />
            <h2 className={`text-5xl lg:text-6xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Télécharger GéoLotis
            </h2>
            <p className={`text-2xl mb-16 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Version 1.8.2 • Windows 10/11 (64-bit)
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
              <motion.a
                href="https://github.com/your-username/your-repo/releases"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-green-primary to-green-dark text-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-dark to-green-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <Smartphone className="w-14 h-14 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-3">Installateur .msi</h3>
                  <p className="text-green-100 text-lg">Recommandé pour la plupart des utilisateurs</p>
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/your-username/your-repo/releases"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <FileText className="w-14 h-14 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-3">Installateur .exe</h3>
                  <p className="text-slate-300 text-lg">Version NSIS pour une installation rapide</p>
                </div>
              </motion.a>
            </div>

            <div className={`rounded-3xl p-12 border ${
              darkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-gradient-to-br from-slate-50 to-emerald-50 border-slate-200'
            }`}>
              <h4 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Configuration requise</h4>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  { icon: <Globe className="w-7 h-7 text-green-primary" />, title: "Système", desc: "Windows 10/11 64-bit" },
                  { icon: <Database className="w-7 h-7 text-green-primary" />, title: "RAM", desc: "4 Go minimum" },
                  { icon: <FileSpreadsheet className="w-7 h-7 text-green-primary" />, title: "Espace disque", desc: "200 Mo" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex items-start gap-4 p-6 rounded-2xl shadow-md ${
                      darkMode ? 'bg-slate-900' : 'bg-white'
                    }`}
                  >
                    {item.icon}
                    <div>
                      <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                      <p className={`mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-28 px-6 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 to-slate-100'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 ${
              darkMode 
                ? 'bg-purple-900/30 text-purple-400 border border-purple-800' 
                : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200'
            }`}>
              <Users className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <Users className="w-20 h-20 mx-auto mb-8 text-green-primary" />
            <h2 className={`text-5xl lg:text-6xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Besoin d'aide ?
            </h2>
            <p className={`text-2xl mb-12 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Notre équipe est là pour vous aider
            </p>

            <div className={`rounded-3xl p-12 shadow-xl border ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center justify-center gap-4 p-6 rounded-2xl border ${
                    darkMode 
                      ? 'bg-green-900/20 border-green-800' 
                      : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100'
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-green-primary to-green-light rounded-2xl flex items-center justify-center text-white">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email</p>
                    <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>geolotisstudio@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`flex items-center justify-center gap-4 p-6 rounded-2xl border ${
                    darkMode 
                      ? 'bg-blue-900/20 border-blue-800' 
                      : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-100'
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>Documentation</p>
                    <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Guide d'installation et FAQ disponibles</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white hover:text-green-400 transition-colors p-2"
              >
                <X className="w-10 h-10" />
              </button>
              <img
                src={selectedImage}
                alt="Vue agrandie"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`py-16 px-6 ${
        darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-900 border-t border-slate-800'
      } text-white`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="GéoLotis" className="h-16 w-16 object-contain" />
              <span className="text-3xl font-bold">GéoLotis</span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p className="text-lg mb-2">© 2026 GéoLotis Studio. Tous droits réservés.</p>
              <p className="text-sm">GéoLotis™ - Logiciel de gestion de lotissements</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
