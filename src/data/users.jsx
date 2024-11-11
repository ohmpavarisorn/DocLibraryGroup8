// users.js

// ตัวอย่างข้อมูลผู้ใช้ที่เก็บในระบบ (สามารถปรับเปลี่ยนเป็นข้อมูลจากฐานข้อมูลจริงได้)
const users = [
    { username: "Team", password: "1234", token: "token1", role: "admin" },
    { username: "Vic", password: "1234", token: "token1", role: "admin" },
    { username: "user2", password: "password2", token: "token2", role: "user" },
    { username: "guest", password: "guestpassword", token: "guest_token", role: "guest" },
  ];
  
  // ฟังก์ชันตรวจสอบชื่อผู้ใช้และรหัสผ่าน
  export const verifyUser = (username, password) => {
    // ค้นหาผู้ใช้ที่ตรงกับชื่อผู้ใช้และรหัสผ่านที่กรอก
    const user = users.find(user => user.username === username && user.password === password);
  
    // ถ้าไม่เจอผู้ใช้ หรือ รหัสผ่านไม่ตรงกัน จะคืนค่า null
    if (!user) {
      return null;
    }
  
    // ถ้าพบผู้ใช้ที่ตรงกัน จะคืนค่าข้อมูลของผู้ใช้
    return user;
  };
  