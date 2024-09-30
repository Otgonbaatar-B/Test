import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const port = 9999;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello GET хүсэлт ирлээ");
});

app.get("/item-list", (request, response) => {
  fs.readFile("./data/item.json", "utf-8", (readError, data) => {
    if (readError) {
      return response.json({
        success: false,
        error: readError,
      });
    }

    let savedData = data ? JSON.parse(data) : [];
    response.json(savedData);
  });
});

app.post("/item-register", (request, response) => {
  const { itemName, itemCategory, itemPrice } = request.body;

  fs.readFile("./data/item.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    if (readError) {
      return response.json({
        success: false,
        error: readError,
      });
    }

    const newItem = {
      id: Date.now().toString(),
      itemName: itemName,
      itemCategory: itemCategory,
      itemPrice: itemPrice,
    };
    savedData.push(newItem);

    fs.writeFile("./data/item.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
          message: "Бүртгэл амжилтгүй",
        });
      } else {
        response.json({
          success: true,
          item: newItem,
          message: "Бүртгэл амжилттай",
        });
      }
    });
  });
});

app.delete("/item-delete/:id", (request, response) => {
  const itemId = request.params.id;

  fs.readFile("./data/item.json", "utf-8", (readError, data) => {
    if (readError) {
      return response.json({
        success: false,
        error: readError,
      });
    }

    let savedData = data ? JSON.parse(data) : [];

    const itemIndex = savedData.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      return response.json({
        success: false,
        message: "Бараа олдсонгүй",
      });
    }

    savedData.splice(itemIndex, 1);

    fs.writeFile("./data/item.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          message: "Бараа амжилттай устлаа",
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Сервер ажиллаж байна http://localhost:${port}`);
});
