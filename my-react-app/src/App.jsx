import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState(""); // ስምሽን ለመያዝ
  const [responseMsg, setResponseMsg] = useState(""); // ከሰርቨር የሚመጣውን መልስ ለመያዝ

  const handleSend = async () => {
    try {
      // ወደ Backend መረጃ ለመላክ axios.post እንጠቀማለን
      const res = await axios.post("http://localhost:5000/api/send-name", {
        name: name,
      });
      setResponseMsg(res.data.message);
    } catch (err) {
      setResponseMsg("ስህተት ተፈጥሯል!");
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}
    >
      <h1>መረጃ ወደ Backend መላኪያ</h1>
      <input
        type="text"
        placeholder="ስምሽን ጻፊ"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleSend}
        style={{ padding: "10px 20px", marginLeft: "5px" }}
      >
        ላኪ
      </button>

      {responseMsg && <h2 style={{ color: "blue" }}>{responseMsg}</h2>}
    </div>
  );
}

export default App;
