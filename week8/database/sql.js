import mysql from "mysql2";

//데이터 베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "Tlawjdgh0!",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  } // 나의 db와 연결한다.
);

//async /await 사용
const promisePool = pool.promise(); // promise 객체를 이용해서 통신을 할 것이다.

//select query
export const selectsql = {
  getEmployee: async () => {
    //비동기적으로 통신하는 함수이다. 상응하는 응답이 와야지만 작동
    const [rows] = await promisePool.query(`select * from employee`); // employee table의 모든 데이터를 호출하는 query문
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`); //department table의 모든 데이터를 호출하는 query문
    return rows;
  },
};

//insert query
export const insertsql = {
  //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
  setEmployee: async (data) => {
    const sql = `insert into employee values (
      '${data.Fname}', '${data.Minit}', '${data.Lname}', '${data.Ssn}', '${data.Bdate}',
        '${data.Address}', '${data.Sex}', '${data.Salary}', '${data.Super_ssn}', '${data.Dno}')`;
    //값을 삽입하려는 sql query문
    await promisePool.query(sql); // promise를 통해 sql에 우리가 보내고 싶은 query문을 보낸다.
  },

  setDepartment: async (data) => {
    //비동기적 함수
    const sql = `insert into department values (
            '${data.Dname}', '${data.Dnumber}', '${data.Mgr_start_date}', '${data.Mgr_ssn}')`;
    //department의 값을 삽입하는 query문
    await promisePool.query(sql);
  },
};

//update query
export const updatesql = {
  updateEmployee: async (data) => {
    //where 조건을 만족하는 행에 대해서 salary 수정
    const sql = `update employee set salary = '${data.Salary}' where Fname = '${data.Fname}'`;
    await promisePool.query(sql);
  }, // department table의 수정하고 싶은 정보를 받아와서 sql query문을 실행시킨다.
  updateDepartment: async (data) => {
    const sql = `update department set dname = "${data.Dname}" where Dnumber = 0`;
    await promisePool.query(sql);
  },
};
