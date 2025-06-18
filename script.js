const a = () => {
  // 1. Promptda foydalanuvchidan son olish
  let miqdor = +prompt("Qiyqiriq сет nechta buyurtma qilasiz?");

  // 2. Har bir qiyqiriq сет 45000 so‘m
  let narx = 45000;

  // 3. Qiymat raqammi yoki yo‘qmi — tekshiramiz
  let valid = !isNaN(miqdor) && miqdor > 0;

  // 4. True yoki false ko‘rsatish
  alert("Bu kiritilgan son to‘g‘rimi? " + valid);

  // 5. Narxni hisoblash va ko‘rsatish
  if (valid) {
    let jami = miqdor * narx;

    alert(`
🧾 Buyurtma:
- Mahsulot: Qiyqiriq сет
- Miqdor: ${miqdor} ta
- Narxi: 45 000 so‘m
- Umumiy: ${jami.toLocaleString()} so‘m
- Tasdiqlangan: ${valid}
    `);

    // 6. Buyurtmani tasdiqlash
    let tasdiq = confirm("Buyurtmani tasdiqlaysizmi?");

    if (tasdiq) {
      alert("✅ Buyurtma qabul qilindi. Rahmat!");
    } else {
      alert("❌ Buyurtma qabul qilinmadi.");
    }

  } else {
    alert("Iltimos, to‘g‘ri son kiriting (1 yoki undan katta).");
  }
};
