import express from "express";
import { selectsql, updatesql } from "../database/sql";

const router = express.Router();

//기존의 값을 불러오기
router.get("/employee", async (req, res) => {
  const emp_res = await selectsql.getEmployee();// 일단 값을 불러와야하므로 getEmployee함수를 써서 값을 불러온다. 
  res.render("updateEmployee", {
    title: "직원 테이블 갱신",
    emp_res,//hbs파일에 값을 전달해준다. 
  });
});

//기존의 값을 불러오기
router.get("/department", async (req, res) => {// 값을 불러와야하므로 sql파일의 getDepartment함수를 사용한다. 
  const dep_res = await selectsql.getDepartment();
  res.render("updateDepartment", {
    title: "부서 테이블 갱신",//hbs파일에 값을 전달해준다. 
    dep_res,
  });
});

// 수정 버튼을 눌렀을 경우, update query를 실행하여 조회 페이지로 이동
router.post("/employee", async (req, res) => {
  const vars = req.body; //request의 body를 변수에 담늗다. 
  console.log(vars.fname);
  console.log(vars.salary);
  const data = {// post 요청으로 보낼 데이터 
    Fname: vars.fname,
    Salary: vars.salary,
  };
  await updatesql.updateEmployee(data);
  res.redirect("/update/employee");
});

router.post("/department", async (req, res) => { // post 요청으로 보낼 것이다. 
  const vars = req.body;//보낼 데이터의 body부분을 변수에 저장한다. 
  console.log(vars.dname);
  const data = {// 보낼 데이터 
    Dname: vars.dname,
  };
  await updatesql.updateDepartment(data);// update를 한다. 
});

module.exports = router;
