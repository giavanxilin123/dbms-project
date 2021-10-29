const { Client } = require("cassandra-driver");
var express = require('express');
const cors = require("cors");

var app = express();
app.use(cors());

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




app.get('/user', async (req, res) => {
  await client.connect();
  const result =  await client.execute('SELECT * FROM member.users;')
  res.send(result.rows);

  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
await client.shutdown();
}

run();
