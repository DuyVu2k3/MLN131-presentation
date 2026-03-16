import { motion } from "motion/react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Trang chủ"},
    { id: "concept", label: "Phân định"},
    { id: "principles", label: "Cương lĩnh" },
    { id: "psychology", label: "Tâm lý" },
    { id: "conclusion", label: "Kết luận" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            🇻🇳 Bản Sắc Việt
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    isActive 
                      ? "bg-white/20 text-white" 
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile menu indicator */}
          <div className="md:hidden flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSection === item.id 
                    ? "bg-white w-8" 
                    : "bg-white/30"
                }`}
                aria-label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}