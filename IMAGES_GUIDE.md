# 📸 Hướng dẫn Hình ảnh - Images Guide

## Danh sách ảnh hiện tại đang dùng

### 1. Hero Section (Trang chủ)
- **Ảnh nền**: Cờ Việt Nam / Unity
  - URL: `https://images.unsplash.com/photo-1764745021431-7938cce88819`
  - Mô tả: Vietnam flag unity
  - Vị trí: `/src/app/components/Hero.tsx` - line ~13

### 2. Concept Section (Phần 1)

#### Card 1 - Nghĩa hẹp
- **Ảnh**: Văn hóa truyền thống Việt Nam
  - URL: `https://images.unsplash.com/photo-1696276735314-88029e54148b`
  - Mô tả: Vietnam traditional culture
  - Vị trí: `/src/app/components/ConceptSection.tsx` - concept array

#### Card 2 - Nghĩa rộng
- **Ảnh**: Ruộng lúa Việt Nam
  - URL: `https://images.unsplash.com/photo-1571267011930-677915c391f9`
  - Mô tả: Vietnam rice field farmer
  - Vị trí: `/src/app/components/ConceptSection.tsx` - concept array

#### Culture Gallery (4 ảnh)
1. **Văn hóa truyền thống**: `photo-1696276735314-88029e54148b`
2. **Áo dài**: `photo-1675389017197-9ae63c2b2fe8`
3. **Ẩm thực**: `photo-1765608358606-1d0edbb5abb8`
4. **Kiến trúc**: `photo-1687585102149-08a4bd425052`

### 3. Principles Section (Phần 2)

#### Ba nguyên tắc (3 ảnh)
1. **Quyền bình đẳng**: Vịnh Hạ Long
   - URL: `https://images.unsplash.com/photo-1668000018482-a02acf02b22a`
   
2. **Quyền tự quyết**: Chùa Việt Nam
   - URL: `https://images.unsplash.com/photo-1687585102149-08a4bd425052`
   
3. **Liên hiệp**: Teamwork hands
   - URL: `https://images.unsplash.com/photo-1559225306-3f60aa7b39a3`

### 4. Psychology Section (Phần 3)

#### Cố kết (2 ảnh)
1. **Lúa nước**: `photo-1571267011930-677915c391f9`
2. **Cộng đồng**: `photo-1758784881816-d87f2fdfc5d1`

### 5. Conclusion Section
- **Background**: Unity hands
  - URL: `https://images.unsplash.com/photo-1670299160449-58cccb9545ff`

---

## 🎨 Gợi ý thêm ảnh

### Nếu muốn thay đổi hoặc thêm ảnh, tìm kiếm các từ khóa sau trên Unsplash:

#### Về văn hóa Việt Nam:
- "vietnam traditional dress"
- "vietnam temple architecture"
- "vietnam street life"
- "vietnam coffee culture"
- "vietnam silk lantern"
- "vietnam conical hat"
- "vietnam water puppet"

#### Về đoàn kết:
- "teamwork hands circle"
- "people holding hands"
- "community together"
- "unity diversity"

#### Về nông nghiệp:
- "rice paddy terraces"
- "farmer working field"
- "vietnam agriculture"

#### Về lịch sử:
- "vietnam historical building"
- "ancient temple asia"
- "traditional asian architecture"

---

## 🔧 Cách thay đổi ảnh

### Option 1: Dùng Unsplash Tool (Khuyến khích)
Nếu bạn muốn tôi tìm ảnh mới, chỉ cần nói:
> "Tìm ảnh về [chủ đề] cho [phần nào]"

Ví dụ: "Tìm ảnh về đền chùa Việt Nam cho phần Hero"

### Option 2: Tự thay bằng URL
1. Vào [unsplash.com](https://unsplash.com)
2. Tìm kiếm từ khóa
3. Click vào ảnh, copy URL
4. Mở file component tương ứng
5. Thay thế URL trong code

**Ví dụ**:
```tsx
// File: /src/app/components/Hero.tsx
<img
  src="YOUR_NEW_IMAGE_URL_HERE"
  alt="Vietnam unity"
  className="w-full h-full object-cover opacity-20"
/>
```

### Option 3: Upload ảnh riêng
1. Đặt ảnh vào folder `/public/images/`
2. Thay URL thành: `/images/ten-anh.jpg`

---

## 📍 Vị trí các ảnh trong code

| Component | File Path | Số lượng ảnh | Dòng code |
|-----------|-----------|--------------|-----------|
| Hero | `/src/app/components/Hero.tsx` | 1 | ~13 |
| ConceptSection | `/src/app/components/ConceptSection.tsx` | 2 | ~12, ~23 |
| CultureGallery | `/src/app/components/CultureGallery.tsx` | 4 | ~7-45 |
| PrinciplesSection | `/src/app/components/PrinciplesSection.tsx` | 3 | ~11, ~19, ~27 |
| PsychologySection | `/src/app/components/PsychologySection.tsx` | 2 | ~9, ~16 |
| ConclusionSection | `/src/app/components/ConclusionSection.tsx` | 1 | ~11 |

---

## 💡 Tips

1. **Chọn ảnh chất lượng cao**: Dùng URL có `&w=1080` hoặc `&w=1920` để có độ phân giải tốt
2. **Phù hợp chủ đề**: Ảnh nên liên quan trực tiếp đến nội dung
3. **Màu sắc hài hòa**: Chọn ảnh có tone màu phù hợp với gradient đỏ-vàng của website
4. **Tránh quá đông người**: Ảnh có nhiều người có thể làm mất focus
5. **Ảnh ngang**: Ưu tiên ảnh landscape (ngang) cho đẹp hơn

---

## 🌈 Màu chủ đạo của website

- Đỏ: `#dc2626` (red-600)
- Vàng: `#eab308` (yellow-500)
- Cam: `#f97316` (orange-500)

Chọn ảnh có tone màu ấm (warm colors) sẽ phù hợp nhất!
