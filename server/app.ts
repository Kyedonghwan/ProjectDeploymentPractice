import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, ()=> {
  console.log("server is running");
});

//client build = > build 폴더 => server/build => 서버 실행

// client 폴더 이동 => npm ci(package-lock 버젼 명시되어있으므로) => npm run build => client/build를 server/build로 이동

// server 폴더 이동 => tsc ==> node app.js