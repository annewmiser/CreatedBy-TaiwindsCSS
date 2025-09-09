
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.html"],  // เพิ่ม path ให้ครอบคลุมไฟล์ HTML ในโฟลเดอร์ dist
    theme: {
      extend: {
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],  // เพิ่มฟอนต์ Raleway
        },
      },
    },
    plugins: [],
  }
  