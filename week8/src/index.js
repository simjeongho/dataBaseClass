import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000; //port 번호

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //json 형식을 사용하겠다.

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs"); //hbs파일을 이용해서 view를 보여주겠다.

app.use(logger("dev")); //log를 사용하겠다.

app.use("/", homeRouter); //기본적인 주소에 해당한다.
app.use("/update", updateRouter); //update 기능이 들어간 페이지를 /update주소에서 보여주겠다.
app.use("/select", selectRouter); //select 기능이 들어간 페이지를 /select주소에서 보여주겠다.

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`); //로그 찍기
});
