import express from "express";
import { selectsql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  const employee = await selectsql.getEmployee(); //sql파일에 작성해두었던 selectsql함수의 getEmployee함수를 이용한다.
  const department = await selectsql.getDepartment(); //sql파일에 작성해두었던 getDeparment함수를 이용한다.

  res.render("select", {
    title: "직원 테이블",
    title2: "부서 테이블",
    employee,
    department,
  }); //employee와 department를 불러와서 화면에 보여줄 것이다. hbs파일에 변수를 던지는 코드
});

module.exports = router;
