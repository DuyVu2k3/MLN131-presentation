import { motion } from "motion/react";

export function CultureGallery() {
  const cultureImages = [
    {
      url: "https://images.unsplash.com/photo-1696276735314-88029e54148b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlfGVufDF8fHx8MTc3MzYzOTk3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Văn hóa truyền thống",
      description: "Nền văn hóa lúa nước 4000 năm"
    },
    {
      url: "https://images.unsplash.com/photo-1675389017197-9ae63c2b2fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwYW8lMjBkYWklMjB0cmFkaXRpb25hbCUyMGRyZXNzfGVufDF8fHx8MTc3MzY0MDUyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Trang phục truyền thống",
      description: "Áo dài Việt Nam"
    },
    {
      url: "https://images.unsplash.com/photo-1765608358606-1d0edbb5abb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwc3RyZWV0JTIwZm9vZCUyMGN1bHR1cmV8ZW58MXx8fHwxNzczNjQwNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Ẩm thực đường phố",
      description: "Văn hóa ẩm thực đa dạng"
    },
    {
      url: "https://images.unsplash.com/photo-1687585102149-08a4bd425052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaGFub2klMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczNjQwNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kiến trúc cổ kính",
      description: "Di sản văn hóa thế giới"
    }
  ];

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl font-bold mb-4">🇻🇳 Bản sắc văn hóa Việt Nam</h3>
        <p className="text-white/70 max-w-2xl mx-auto">
          Từ ruộng lúa xanh mượt đến những ngôi chùa cổ kính, văn hóa Việt là sự giao thoa giữa truyền thống và hiện đại
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cultureImages.map((image, index) => (
          <motion.div
            key={image.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl aspect-square">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                <p className="text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
