// 导入express
const express = require('express');
// 创建服务器的实例对象
const app = express();

//跨域问题解决方面
app.all('*',function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:8080');//仅支持配置一个域名
  res.header('Access-Control-Allow-Origin', '*');//仅支持配置一个域名
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials',true)//允许客户端携带验证信息
 　next();　
 });
 // 解析表单数据：解析JSON格式的请求体
 app.use(express.json());

// 导入数据库操作模块
const db = require('./db/index');

app.get('/article/get/:id', (req, res)=>{
  const id = req.params.id;
  console.log('id', id);

  const sql = `select * from articles where id=? order by id asc`;
  db.query(sql, id, (err, results)=>{
    console.log('db.query()方法进入了。');
    if (err) return res.send(err);
    res.send({
      status: 0,
      message: '获取文章分类数据成功！',
      data: results
    });
  });
});

app.post('/article/postJson/search', (req, res)=>{
  console.log('req.body,',req.body);
  const params = {
    title: req.body.title
  }
  console.log('params：', params);
  const sql = `select * from articles where title=?`;
  db.query(sql, params.title, (err, results)=>{
    if(err) return res.send(err);
    res.send({
      status: 0,
      message: '查询数据成功',
      data: results
    });
  });
});

// 启动服务器
app.listen(8080, ()=>{
  console.log('Vue3-quick-study server running at http://127.0.0.1:8080');
});