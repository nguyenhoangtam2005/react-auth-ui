# Hướng dẫn nhanh cho dự án React (Create React App)

## 1) Chạy dự án
- Cài dependency (nếu chưa): `npm install`
- Chạy dev server: `npm start` (mặc định mở tại http://localhost:3000)
- Build production: `npm run build`

## 2) Cấu trúc thư mục chính
- `src/index.js`: Điểm khởi động, render `<App />` vào DOM.
- `src/App.js`: Thành phần gốc, điều hướng tới các trang con.
- `src/pages/Login/index.jsx`: Trang Login (bạn vừa xem).
- `src/pages/Login/Login.scss`: Style cho trang Login.
- `public/`: Chứa `index.html` và tài nguyên tĩnh.

## 3) Giải thích nhanh file `src/pages/Login/index.jsx`
```jsx
import React, { useState } from 'react';
import './Login.scss';
```
- `useState` tạo state cục bộ cho dữ liệu form và lỗi.

```jsx
const [formData, setFormData] = useState({ username: '', password: '' });
const [errors, setErrors] = useState({});
```
- `formData` lưu giá trị ô nhập; `errors` lưu thông báo lỗi (vd: thiếu username).

```jsx
const handleChange = (e) => { ... }
```
- Cập nhật `formData` mỗi khi bạn gõ vào input.

```jsx
const validate = () => { ... }
```
- Kiểm tra rỗng cho username/password, trả về object chứa lỗi. Nếu không lỗi => object rỗng.

```jsx
const handleSubmit = async (e) => { ... }
```
Quy trình submit:
1. `preventDefault()` chặn reload trang.
2. Gọi `validate()`. Nếu có lỗi -> setErrors và dừng.
3. Gửi request `fetch('/api/login', POST, body = formData)`.
4. Nếu server trả lỗi (`!response.ok`) -> hiện lỗi `errors.form`.
5. Nếu thành công -> log `Login success` (bạn có thể chuyển hướng hoặc lưu token tại đây).
6. Nếu lỗi mạng -> báo `Network error`.

```jsx
return (...) 
```
- JSX hiển thị form. `errors.username/password/form` hiện thông báo dưới trường tương ứng.

## 4) Bạn có thể tùy chỉnh gì tiếp?
- Thay `'/api/login'` thành endpoint thật.
- Sau khi login thành công, chuyển trang bằng `useNavigate` (react-router) hoặc lưu token vào `localStorage`.
- Thêm loading state để disable nút `Login` khi đang gọi API.
- Hoàn thiện UX: hiện thông báo thành công, reset form.

## 5) Gợi ý học React nhanh (dành cho người mới)
1. JSX & component: https://react.dev/learn#learn-react
2. State & event: https://react.dev/learn/state-a-components-memory
3. Form handling: https://react.dev/learn/managing-state
4. Fetch API/async: https://developer.mozilla.org/docs/Web/API/Fetch_API

Chỉ cần đọc theo thứ tự trên, thử sửa file `src/pages/Login/index.jsx` và xem kết quả khi `npm start`. Chúc bạn học tốt!
