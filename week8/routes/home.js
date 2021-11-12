import express from "express";
import { insertsql } from "../database/sql";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  //post 요청을 보낼 것이다. key와 value로 관리되는 object를 생성하고
  const vars = req.body; // 길이를 받아온다.
  const var_length = Object.keys(req.body).length;
  console.log("i send");

  if (var_length > 4) {
    //제출한 data의 길이가 4보다 길다면 employee로 취급하고 아닐 시에는 department로 취급한다.
    const data = {
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    }; // employee의 data
    console.log(data);
    insertsql.setEmployee(data); //sql파일에 작성해 두었던 insertsql.setEmployee함수를 실행한다. query라는 함수로 작동한다.
  } else {
    const data = {
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_start_date: vars.mgr_start_date,
      Mgr_ssn: vars.mgr_ssn,
    };

    insertsql.setDepartment(data); //sql파일에 작성해 두었던 insertsql.setDepartment함수를 실행한다.
  }

  res.redirect("/"); // 리다이렉트 주소를 설정한다.
});

module.exports = router; // 꼭 export를 시켜줘야한다.
