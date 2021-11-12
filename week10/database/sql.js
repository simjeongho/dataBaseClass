import mysql from "mysql2";

//데이터 베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week10",
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
  getUser: async () => {
    //비동기적으로 통신하는 함수이다. 상응하는 응답이 와야지만 작동
    const [rows] = await promisePool.query(`select * from user`); // user table의 모든 데이터를 호출하는 query문
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`); //department table의 모든 데이터를 호출하는 query문
    return rows;
  },
  getNonIt: async () => {
    const [rows] = await promisePool.query(`select * from nonit`);
    return rows;
  },
};

//delete query
export const deletesql = {
  deleteDepartment: async (data) => {
    console.log("deletesql.deleteDepartment: ", data.Dnumber);
    const sql = `delete from department where Dnumber=${data.Dnumber}`; // 클릭한 버튼의 dnumber가 같은 department를 지운다.
    await promisePool.query(sql);
  },
  deleteNonIt: async (data) => {
    console.log("nonit delete", data.Dname);
    const sql = `delete from nonit where Dname='${data.Dname}'`;
    await promisePool.query(sql);
  },
};
