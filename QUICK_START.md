# ⚡ Quick Start - Bắt đầu nhanh

## 🎯 Mục tiêu: Deploy website trong 10 phút!

---

## ✅ Bước 1: Chuẩn bị (2 phút)

### Cần có:
- [ ] Tài khoản GitHub (đăng ký miễn phí tại [github.com](https://github.com))
- [ ] Tài khoản Vercel (đăng ký miễn phí tại [vercel.com](https://vercel.com))

### Không cần:
- ❌ Kiến thức lập trình
- ❌ Cài đặt gì trên máy
- ❌ Trả tiền

---

## 📤 Bước 2: Upload code lên GitHub (3 phút)

### Option A: Dùng GitHub Desktop (Dễ nhất!)

1. **Download GitHub Desktop**
   - Vào [desktop.github.com](https://desktop.github.com)
   - Download và cài đặt

2. **Tạo repository**
   - Mở GitHub Desktop
   - File → New Repository
   - Name: `dan-toc-viet`
   - Local Path: Chọn folder project này
   - Click "Create Repository"

3. **Publish lên GitHub**
   - Click "Publish repository"
   - Bỏ tick "Keep this code private" (để deploy free)
   - Click "Publish repository"

### Option B: Dùng Web (Nhanh nhưng upload từng file)

1. Vào [github.com/new](https://github.com/new)
2. Repository name: `dan-toc-viet`
3. Public
4. Create repository
5. Click "uploading an existing file"
6. Kéo thả TẤT CẢ file vào
7. Commit changes

---

## 🚀 Bước 3: Deploy lên Vercel (5 phút)

1. **Vào [vercel.com](https://vercel.com)**

2. **Sign up với GitHub**
   - Click "Continue with GitHub"
   - Authorize Vercel

3. **Import Project**
   - Click "Add New..." → "Project"
   - Chọn repository `dan-toc-viet`
   - Click "Import"

4. **Configure** (Không cần làm gì!)
   - Framework Preset: Vite ✅ (tự động)
   - Build Command: `vite build` ✅ (tự động)
   - Output Directory: `dist` ✅ (tự động)

5. **Deploy**
   - Click "Deploy"
   - Đợi 2-3 phút ☕

6. **Done! 🎉**
   - URL của bạn: `https://dan-toc-viet-xxx.vercel.app`
   - Click vào để xem website!

---

## 🎨 Bước 4: Tùy chỉnh (Tùy chọn)

### Đổi tên domain

Trong Vercel Dashboard:
- Settings → Domains
- Edit → Đổi thành tên bạn muốn
- Ví dụ: `ban-sac-viet.vercel.app`

### Update nội dung

Nếu muốn sửa nội dung:
1. Sửa file code
2. Upload lại lên GitHub
3. Vercel tự động deploy lại!

---

## ❓ Troubleshooting

### "Build failed"
➡️ Xem chi tiết lỗi trong Vercel logs
➡️ Thường là do thiếu file hoặc syntax error

### "404 Not Found"
➡️ Đợi thêm vài phút, Vercel đang deploy

### "Page is blank"
➡️ Mở DevTools (F12) → Console → Xem lỗi gì

---

## 📚 Các file hướng dẫn

| File | Nội dung |
|------|----------|
| `QUICK_START.md` | **File này** - Bắt đầu nhanh |
| `DEPLOY_GUIDE.md` | Chi tiết về deploy |
| `IMAGES_GUIDE.md` | Thay đổi ảnh |
| `PROJECT_SUMMARY.md` | Tổng quan project |
| `README.md` | Hướng dẫn chung |

---

## 🎯 Checklist hoàn thành

- [ ] Đã có tài khoản GitHub
- [ ] Đã có tài khoản Vercel
- [ ] Code đã lên GitHub
- [ ] Website đã deploy thành công
- [ ] Test được trên link Vercel
- [ ] Share với thầy/cô và bạn bè!

---

## 🎉 Xong rồi!

Website của bạn giờ đây:
- ✅ Hoạt động 24/7
- ✅ Tốc độ nhanh (global CDN)
- ✅ HTTPS miễn phí
- ✅ Tự động update khi bạn push code mới

**Chia sẻ link với mọi người ngay! 🇻🇳**

---

Need help? Xem file `DEPLOY_GUIDE.md` cho hướng dẫn chi tiết hơn!
