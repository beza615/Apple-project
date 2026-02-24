const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Mongoose ተጨምሯል

const app = express();
app.use(cors());
app.use(express.json());

// 1. የዳታቤዝ ግንኙነት (አዲሱ ሊንክሽ)
// ማሳሰቢያ፡ bezaDB የሚለውን ስም በመካከል ጨምሬበታለሁ
// አዲሱ እና ትክክለኛው ሊንክሽ
const dbURI = 'mongodb+srv://beza:beza123@cluster0.9hgwdgb.mongodb.net/bezaDB?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(dbURI)
  .then(() => console.log("ዳታቤዝ በስኬት ተገናኝቷል! ✅"))
  .catch((err) => console.log("የዳታቤዝ ግንኙነት ስህተት፡", err));

// 2. ዳታቤዝ ውስጥ የሚቀመጥ መረጃ ፎርማት (Schema)
const nameSchema = new mongoose.Schema({
  name: String,
  time: { type: Date, default: Date.now },
});

const Name = mongoose.model("Name", nameSchema);

// 3. መረጃ ተቀብሎ ዳታቤዝ ውስጥ ማስቀመጥ (POST)
app.post("/api/send-name", async (req, res) => {
  try {
    const newName = new Name({ name: req.body.name });
    await newName.save(); // መረጃው ዳታቤዝ ውስጥ ተቀመጠ!
    res.json({ message: `ሰላም ${req.body.name}! ስምሽ በቋሚነት ዳታቤዝ ውስጥ ተቀምጧል።` });
  } catch (err) {
    res.status(500).json({ message: "መረጃውን ማስቀመጥ አልተቻለም" });
  }
});

// 4. ሁሉንም ስሞች ከዳታቤዝ ማምጣት (GET)
app.get("/api/all-names", async (req, res) => {
  try {
    const names = await Name.find();
    res.json(names);
  } catch (err) {
    res.status(500).json({ message: "መረጃውን ማምጣት አልተቻለም" });
  }
});

app.listen(5000, () => {
  console.log("------------------------------------------");
  console.log("ሰርቨሩ በፖርት 5000 ላይ እየሰራ ነው! ✅");
  console.log("------------------------------------------");
});
