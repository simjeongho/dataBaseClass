import express from "express";
import { deletesql, selectsql } from "../database/sql";

const router = express.Router();

//기존의 값을 불러오기
router.get("/", async (req, res) => {
  const nonIt = await selectsql.getNonIt();

  res.render("deleteNonIt", {
    //deleteNonIt.hbs파일을 렌더링한다.
    title: " 비 IT 공대 삭제 기능",
    nonIt,
  });
});
//삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post("/", async (req, res) => {
  console.log("delete router:", req.body.delBtn);
  const data = {
    Dname: req.body.delBtn,
  }; //post로 보낼 정보에는 data라는 객체 안에 Dnumber속성이 있다.
  await deletesql.deleteNonIt(data);

  res.redirect("/deleteNonIt"); // /delete로 redirect한다.
});

module.exports = router;
