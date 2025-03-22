# 📌 Kế Hoạch Phát Triển Extension Quản Lý Tài Chính Cá Nhân

## 1️⃣ Xác Định Yêu Cầu Và Phạm Vi Dự Án

### 🎯 **Mục tiêu chính:**
- Xây dựng **extension trình duyệt** giúp theo dõi thu nhập & chi tiêu.
- Backend **Golang** quản lý dữ liệu, xử lý logic tài chính.
- Tích hợp **database & cloud** để đồng bộ dữ liệu.
- Hỗ trợ **báo cáo tài chính** với biểu đồ phân tích chi tiêu.
- Hỗ trợ đăng nhập & xác thực tài khoản.

### 🔥 **Chức năng chính:**
- ✅ **Ghi chép thu/chi** (nhập số tiền, danh mục, ghi chú)
- ✅ **Quản lý tài khoản** (ngân hàng, ví điện tử, tiền mặt)
- ✅ **Lập ngân sách** (đặt giới hạn chi tiêu theo danh mục)
- ✅ **Thống kê & Báo cáo** (biểu đồ tổng quan, phân tích tài chính)
- ✅ **Tích hợp Cloud** (lưu trữ dữ liệu an toàn, đồng bộ nhiều thiết bị)
- ✅ **Hỗ trợ đa nền tảng** (Chrome Extension + Mobile/Web sau này)

---

## 2️⃣ Công Nghệ & Công Cụ Sử Dụng

- **Backend:** Golang (Gin framework), PostgreSQL/MongoDB, AWS (RDS, S3, Cognito)
- **Frontend:** ReactJS/VueJS (hiển thị dữ liệu), Chrome Extension APIs
- **Authentication:** JWT hoặc OAuth (Google, Facebook)
- **Deployment:** Docker + AWS (EC2, Lambda)
- **Version Control:** GitHub (quản lý mã nguồn)
- **OS Phát triển:** Windows hoặc Linux (Ubuntu trên WSL)

---

## 3️⃣ Phân Bố Thư Mục & File Structure

### 📂 **Backend (Golang - Gin framework)**
```bash
backend/
├── cmd/            # Entrypoint
├── config/         # Cấu hình app, database
├── controllers/    # Xử lý API request
├── models/         # Định nghĩa dữ liệu, database schema
├── routes/         # Định tuyến API
├── services/       # Logic ứng dụng
├── middlewares/    # Xác thực, logging
├── database/       # Kết nối PostgreSQL/MongoDB
├── tests/          # Unit test
└── main.go         # File chạy chính
```

### 📂 **Frontend (React/VueJS - Chrome Extension)**
```bash
frontend/
├── public/         # Icon, manifest.json
├── src/
│   ├── components/ # UI components
│   ├── pages/      # Dashboard, thống kê, cài đặt
│   ├── store/      # Quản lý state (Redux/Zustand/Vuex)
│   ├── utils/      # Hàm helper
│   ├── api/        # Gọi API backend
│   ├── assets/     # Icons, hình ảnh
│   └── App.jsx     # File chính
└── manifest.json   # Cấu hình extension
```

### 📂 **Extension Project Folder**
```bash
MyMoneyExtension/
├── backend/                 # Backend (Golang - Gin framework)
│   ├── cmd/                 # Entrypoint
│   ├── config/              # Cấu hình ứng dụng
│   ├── controllers/         # Xử lý API request
│   ├── database/            # Kết nối Database (PostgreSQL/MongoDB)
│   ├── middlewares/         # Xác thực, logging
│   ├── models/              # Định nghĩa dữ liệu
│   ├── routes/              # API routes
│   ├── services/            # Xử lý logic ứng dụng
│   ├── tests/               # Unit test
│   ├── Dockerfile           # Docker setup
│   ├── go.mod               # Quản lý dependencies
│   ├── go.sum               # File checksum
│   └── main.go              # File chạy chính
│
├── frontend/                # Frontend (React/Vue)
│   ├── public/              # Chứa manifest.json và icon
│   │   ├── manifest.json    # Cấu hình Chrome Extension
│   │   ├── icon-16.png      # Icon nhỏ
│   │   ├── icon-48.png      # Icon trung bình
│   │   ├── icon-128.png     # Icon lớn
│   ├── src/                 # Source code React/Vue
│   │   ├── components/      # UI components
│   │   ├── pages/           # Các trang (Popup, Dashboard, Settings)
│   │   ├── store/           # Quản lý state (Redux/Zustand/Vuex)
│   │   ├── api/             # API calls kết nối backend
│   │   ├── assets/          # Ảnh, icons
│   │   ├── contentScript.js # Script chạy trong trang web
│   │   ├── background.js    # Background script
│   │   ├── popup.html       # Giao diện popup
│   │   ├── App.jsx          # File chính (React)
│   ├── package.json         # Quản lý dependencies
│   ├── vite.config.js       # Cấu hình build (Vite)
│   ├── webpack.config.js    # Cấu hình build (Webpack - nếu dùng)
│   └── README.md            # Hướng dẫn sử dụng frontend
│
├── deploy/                  # Scripts triển khai
│   ├── docker-compose.yml   # Docker Compose để chạy cả backend & frontend
│   ├── deploy.sh            # Script tự động deploy
│
├── docs/                    # Tài liệu dự án
│   ├── API_Documentation.md # Mô tả API backend
│   ├── User_Guide.md        # Hướng dẫn sử dụng extension
│
├── .gitignore               # File ignore Git
├── README.md                # Giới thiệu dự án
└── LICENSE                  # Giấy phép phần mềm (MIT, GPL, Apache...)
```

---

## 4️⃣ Lộ Trình Phát Triển Dự Án

### 🚀 **Giai đoạn 1: Xây dựng Backend** (2-3 tuần)
- [ ] Thiết kế database (PostgreSQL/MongoDB)
- [ ] Xây dựng API với Gin (CRUD thu/chi, đăng nhập, ngân sách)
- [ ] Viết unit test và tài liệu API

### 🚀 **Giai đoạn 2: Xây dựng Extension** (2-3 tuần)
- [ ] Thiết kế UI với React/VueJS
- [ ] Kết nối frontend với backend (API calls)
- [ ] Xử lý state, hiển thị dữ liệu chi tiêu

### 🚀 **Giai đoạn 3: Tích hợp Cloud & Hoàn Thiện** (2-3 tuần)
- [ ] Triển khai backend trên AWS (EC2, RDS, S3)
- [ ] Bảo mật API (JWT, OAuth)
- [ ] Cải thiện UI/UX, tối ưu hiệu suất

---

## 5️⃣ Quản Lý Dự Án Trên GitHub

- **Repository:** `github.com/yourname/finance-extension`
- **Branching Strategy:**
  - `main`: Production-ready code
  - `dev`: Code đang phát triển
  - `feature/<tên-tính-năng>`: Mỗi tính năng mới có nhánh riêng
- **Issue & Task Management:** Dùng **GitHub Projects** để theo dõi tiến độ.

---

## 6️⃣ Công Cụ Hỗ Trợ

- 🔹 **IDE:** VS Code / Goland (backend), VS Code / WebStorm (frontend)
- 🔹 **Database GUI:** pgAdmin / TablePlus (PostgreSQL)
- 🔹 **Postman:** Test API
- 🔹 **Docker:** Container hóa backend
- 🔹 **AWS CLI & Terraform:** Triển khai hạ tầng cloud

---

### 🚀 Quá trình phát triển Frontend

#### **📌 Giai đoạn 1: Setup & Cấu trúc dự án**
1. **Chọn framework:** Sử dụng **React (MUI)** cho frontend.
2. **Khởi tạo dự án với Vite & MUI:**
   ```bash
   npx create-vite@latest MyMoneyExtension --template react
   cd MyMoneyExtension
   npm install @mui/material @emotion/react @emotion/styled
   ```
3. **Cấu trúc file** 
  ```bash
  frontend/
  ├── public/                 # Static files
  │   ├── manifest.json        # Cấu hình Extension
  │   ├── icon-16.png          # Icon nhỏ
  │   ├── icon-48.png          # Icon trung bình
  │   ├── icon-128.png         # Icon lớn
  ├── src/                    # Source code
  │   ├── components/         # Các component tái sử dụng
  │   ├── pages/              # Các trang chính (Popup, Dashboard)
  │   ├── api/                # Giao tiếp với backend
  │   ├── store/              # Quản lý state (Redux/Zustand)
  │   ├── styles/             # CSS/SCSS
  │   ├── contentScript.js    # Script chạy trên trang web
  │   ├── background.js       # Script chạy nền
  │   ├── popup.jsx           # UI chính của Extension
  │   ├── App.jsx             # Entry point của ứng dụng
  ├── package.json            # Dependencies
  ├── vite.config.js          # Cấu hình build
  ├── webpack.config.js       # Cấu hình Webpack (nếu cần)
  └── README.md               # Hướng dẫn sử dụng
  ```

