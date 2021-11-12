const { Client } = require("cassandra-driver");
var express = require('express');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


var app = express();
app.use(cors());
app.use(express.json()); 
async function run() {
const client = new Client({
    cloud: {
    secureConnectBundle: "/Users/admin/Downloads/secure-connect-member-mangament.zip",
    },
    credentials: {
      username: "IsvCMYoWvlCtWQoRZZySPAlL",
      password: ",W5Q0jRL_v7YGjmRv1px5JO2ZeqPtlW,FP4EN,Zw+0Onpgd,bJs6Jj.nMF-,rF7XXhOJ+tuSJRtYvuZN_BFZ_LP.nFB.KBpPKsqSwzihRmJH7nevvnuBtKE3oRCx99hQ",
    },
});


// const query = `UPDATE member.member SET username = ?, 
//                                         postal_code = ?, 
//                                         last_name = ?, 
//                                         first_name = ?, 
//                                         email_address = ?, 
//                                         country = ?, 
//                                         company = ?, 
//                                         city = ?, 
//                                         address = ?, 
//                                         about_me = ?
//                                     WHERE id = ?`;
// await client.execute(query,['TMH24', '240199', 'Tran', 'Minh Hoang', 'hoangvt6868@gmail.com', 'VN', 'Vu Thao', 'VT', '30 Tran Quang Dieu', 'All about me', '1',], { prepare: true });


app.get('/user', async (req, res, next) => {
  await client.connect();
  const result =  await client.execute('SELECT * FROM member.users;')
  res.send(result.rows);
});

app.post('/add-user', async (req, res, next) => {
  await client.connect();
  let user = req.body
    const query = `INSERT INTO member.users (id, name, email, phone, address) VALUES (?, ?, ?, ?, ?)`
    const result = await client.execute(query, [uuidv4(), user.name, user.email, user.phone, user.address])
    res.send(result)
})

app.put('/update-user/:id', async (req, res, next) => {
  const {id} = req.params
  let userUpdate = req.body
  await client.connect();
  const query = `UPDATE member.users SET name = ?, email = ?, address = ?, phone = ? WHERE id = ?`
  const result = await client.execute(query, [userUpdate.name, userUpdate.email, userUpdate.address, userUpdate.phone, id])
  res.send(result)
})

app.put('/delete-user/:id', async (req, res, next) => {
  const {id} = req.params
  await client.connect();
  const result = await client.execute(`DELETE from member.users where id = ${id}`)
  res.send(result)
})
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

await client.shutdown();
}

run();
