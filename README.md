# 2021-02-database

## 3주차 실습 실행 방법

1. 레포지토리 복사(wsl 환경에서 명령어 입력)
   -(SSH 설정한 경우) git clone git@github.com:simjeongho/dataBaseClass.git
   -(token을 사용하는 경우)git clone https://github.com/simjeongho/dataBaseClass.git
2. week2_3/week3/week3폴더로 이동
   > cd week2_3/week3/week3
3. 콘솔창(powershell)에서 npm package 설치
   > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
   <pre>
   <code>
   const pool = mysql.createPool(
       process.env.JAWSDB_URL ?? {
           host: 'localhost',
           user: 'root', //본인의 mysql user id
           database: 'tutorial', //본인이 만든 데이터베이스 이름
           password: 'password', //본인의 mysql password
           waitForConnections: true,
           connectionLimit: 10,
           queueLimit: 0
       }
   );
   </code>
   </pre>
   <br>

##<span style="color:red">테이블 작성법</span>

| 이름   | 과             | 전공         | 학번     |
| ------ | -------------- | ------------ | -------- |
| 김영희 | 정보통신공학과 | 정보통신     | 12201111 |
| 홍길동 | 컴퓨터고학과   | 데이터베이스 | 12191111 |
| 이순신 | 인공지능학과   | 인공지능     | 12181111 |

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

## 3주차 실습 DB TABLE

1. 테이블 종류

   -student

   > create table Student()

2. student table attribute

   -studentNumber INTEGER NOT NYLL,

   -name VARCHAR(10) NOT NULL,

   -Major VARCHAR(10) NOT NULL,

   -grade INTEGER NOT NULL,

   -Admission_Date DATE NOt NULL,

   -e_mail VARCHAR(30) NOT NULL,로 구성

   -PRIMARY KEY(STUDENT NUMBER);
   <pre>
   <code>
   CREATE TABLE STUDENT (StudentNumber INTEGER NOT NULL,
   name VARCHAR(10) NOT NULL
   Major VARCHAR(10) NOT NULL,
   grade INTEGER NOT NULL,
   Admission_Date DATE NOt NULL,
   e_mail VARCHAR(30) NOT NULL,
   PRIMARY KEY(STUDENT NUMBER);
   </pre>
   </code>

## 8주차 테이블

-테이블 종류

    -Department
    -Employee

-Department Table

| Field          | Type        | Null | Key | Default | Extra |
| -------------- | ----------- | ---- | --- | ------- | ----- |
| Dname          | VARCHAR(15) | No   |     | NULL    |       |
| Dnumber        | int         | No   | PRI | NULL    |       |
| MGR_START_DATE | date        | YES  |     | NULL    |       |
| mgr_ssn        | char(9)     | NO   | MUL | NULL    |       |

-Employee Table

| Field     | Type         | Null | Key | Default | Extra |
| --------- | ------------ | ---- | --- | ------- | ----- |
| Fname     | VARCHAR(10)  | NO   |     | NULL    |       |
| Minit     | char(1)      | YES  |     | NUL     |       |
| Lname     | VARCHAR(20)  | NO   |     | NULL    |       |
| Ssn       | char(9)      | YES  | PRI | NULL    |       |
| Bdate     | date         | YES  |     | NULL    |       |
| Address   | varchar(30)  | YES  |     | NULL    |       |
| Sex       | char(1)      | YES  |     | NULL    |       |
| Salary    | decimal(5,0) | YES  |     | NULL    |       |
| Super_ssn | char(9)      | YES  |     | NULL    |       |
| Dno       | int          | No   |     | NULL    |       |

-Department의 primary key는 Dnumber이고 Employee의 primary key는 Ssn이다. 또한 mgr_ssn은 employee의 ssn을 바라보는 foreign key이다.

## 10주차 테이블

1. 테이블 종류

   1. department
   2. nonit
   3. user

2. 테이블 속성

   1. department

   | Field   | Type        | Null | Key | Default | Extra |
   | ------- | ----------- | ---- | --- | ------- | ----- |
   | Dname   | VARCHAR(15) | NO   | UNI | NULL    |       |
   | Dnumber | int         | NO   | PRI | NULL    |       |

   - department테이블은 두 가지 속성이 존재하고 Dname은 unique 속성이 있고 Dnumber가 primary key이다.

   2. nonit

   | Field   | Type        | Null | Key | Default | Extra |
   | ------- | ----------- | ---- | --- | ------- | ----- |
   | Dname   | VARCHAR(15) | NO   |     | NULL    |       |
   | Dnumber | int         | NO   | PRI | NULL    |       |

   - nonit 테이블은 department 속성과 동일하나 Dname에 unique 속성이 없다.

   3. user

   | Field    | Type        | Null | Key | Default | Extra |
   | -------- | ----------- | ---- | --- | ------- | ----- |
   | Id       | VARCHAR(20) | NO   | PRI | NULL    |       |
   | PASSWORD | VARCHAR(20) | NO   |     | NULL    |       |
   | ROLE     | VARCHAR(5)  | NO   |     | NULL    |       |

   - user 테이블은 세가지 attribute가 존재하고 key는 id이다.

   각각의 테이블을 확인하고 싶다면 다음 명령어를 입력하면 된다.

   > desc 테이블 명;
