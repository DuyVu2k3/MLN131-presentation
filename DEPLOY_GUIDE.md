# 🚀 Hướng dẫn Deploy lên Vercel

## Phương pháp 1: Deploy qua GitHub (Khuyến khích - Dễ nhất!)

### Bước 1: Tạo GitHub Repository

1. Vào [github.com](https://github.com)
2. Đăng nhập hoặc đăng ký tài khoản (miễn phí)
3. Click nút **"New"** hoặc **"+"** góc trên bên phải → **"New repository"**
4. Đặt tên repository: `dan-toc-viet` (hoặc tên gì bạn thích)
5. Chọn **Public** (để deploy miễn phí)
6. **KHÔNG** check "Add README file" (vì đã có sẵn)
7. Click **"Create repository"**

### Bước 2: Upload code lên GitHub

#### Option A: Dùng GitHub Web (Dễ nhất cho người mới)

1. Trong repository vừa tạo, click **"uploading an existing file"**
2. Kéo thả TẤT CẢ file và folder vào
3. Viết commit message: "Initial commit"
4. Click **"Commit changes"**

#### Option B: Dùng Git Command Line

```bash
# Trong folder project của bạn
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/dan-toc-viet.git
git push -u origin main
```

### Bước 3: Deploy trên Vercel

1. Vào [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Chọn **"Continue with GitHub"**
3. Sau khi đăng nhập, click **"Add New..."** → **"Project"**
4. Tìm repository `dan-toc-viet` trong danh sách
5. Click **"Import"**
6. **Framework Preset**: Vercel sẽ tự động chọn "Vite"
7. **Build Settings**: Giữ nguyên (không cần thay đổi)
   - Build Command: `vite build`
   - Output Directory: `dist`
8. Click **"Deploy"**
9. Đợi 2-3 phút để Vercel build và deploy

### Bước 4: Hoàn thành! 🎉

- URL của bạn sẽ có dạng: `https://dan-toc-viet.vercel.app`
- Mỗi lần bạn push code mới lên GitHub, Vercel sẽ tự động deploy lại!

---

## Phương pháp 2: Deploy trực tiếp (Không qua GitHub)

### Cài đặt Vercel CLI

```bash
npm install -g vercel
```

### Deploy

```bash
# Trong folder project
vercel

# Làm theo hướng dẫn:
# - Set up and deploy? Y
# - Which scope? Choose your account
# - Link to existing project? N
# - What's your project's name? dan-toc-viet
# - In which directory is your code located? ./
# - Want to override the settings? N
```

### Deploy Production

```bash
vercel --prod
```

---

## ⚙️ Cấu hình tùy chỉnh (Tùy chọn)

Nếu cần, tạo file `vercel.json` trong root folder:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🔧 Fix lỗi thường gặp

### Lỗi: "Build failed"

**Nguyên nhân**: Thiếu dependencies

**Giải pháp**:
```bash
# Xóa node_modules và cài lại
rm -rf node_modules
npm install
npm run build

# Nếu build local thành công, deploy lại
```

### Lỗi: "Module not found"

**Nguyên nhân**: Import path sai

**Giải pháp**: Kiểm tra tất cả import statements, đảm bảo:
- Dùng relative path đúng (`./components/Hero` chứ không phải `/components/Hero`)
- Extension đúng (`.tsx` hoặc không cần extension)

### Lỗi: Trang trắng sau khi deploy

**Nguyên nhân**: Console có lỗi JavaScript

**Giải pháp**:
1. Mở Developer Tools (F12)
2. Check tab Console xem lỗi gì
3. Fix lỗi và deploy lại

---

## 🎨 Tùy chỉnh Domain (Tùy chọn)

### Domain miễn phí của Vercel

Mặc định bạn được: `your-project.vercel.app`

### Domain tùy chỉnh (Có phí)

1. Mua domain từ Namecheap, GoDaddy, etc.
2. Trong Vercel Dashboard → Settings → Domains
3. Add domain của bạn
4. Làm theo hướng dẫn config DNS

---

## 📊 Monitor & Analytics

Sau khi deploy, bạn có thể:

- **Xem traffic**: Vercel Dashboard → Analytics
- **Xem logs**: Deployments → Click vào deployment → Logs
- **Rollback**: Deployments → Chọn version cũ → Promote to Production

---

## 🔄 Update Website

### Nếu deploy qua GitHub:

```bash
# Thay đổi code
git add .
git commit -m "Update content"
git push

# Vercel tự động deploy!
```

### Nếu deploy qua CLI:

```bash
# Thay đổi code
vercel --prod
```

---

## 💡 Tips

1. **Preview Deployments**: Mỗi commit vào branch khác `main` sẽ tạo preview deployment
2. **Environment Variables**: Settings → Environment Variables (nếu cần)
3. **Performance**: Vercel tự động optimize images và cache
4. **CDN**: Website của bạn được serve từ global CDN, nhanh toàn cầu!

---

## 📞 Cần giúp?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Tạo issue trong repository của bạn

---

## ✅ Checklist Deploy

- [ ] Code chạy được ở local (`npm run dev`)
- [ ] Build được ở local (`npm run build`)
- [ ] Đã push code lên GitHub (nếu dùng method 1)
- [ ] Đã đăng ký tài khoản Vercel
- [ ] Đã import project vào Vercel
- [ ] Deploy thành công
- [ ] Test website trên URL Vercel
- [ ] Share link với bạn bè! 🎉

---

Good luck! 🚀🇻🇳
