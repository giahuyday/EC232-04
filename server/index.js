const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")


app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ec_group4'
})

app.get("/product", (req, res) => {
    connection.query("SELECT item.itemID, item.Name, item.Price, item.Description, item_picture.Content FROM item, item_picture WHERE item.ItemID = item_picture.ItemID", (err, result)=>{
      if(err){
        console.log("Fetch Failed !")
      }else{
        // console.log(rows[0])
        console.log(result)
        res.send(result)
      }
    })
})

app.post("/login", (req, res) => {
  console.log(req.body)
  const UserName = req.body.userName
  const Password = req.body.Password
  connection.query("SELECT UserName, Password FROM account WHERE account.UserName = ? AND account.Password = ?", [UserName, Password], (err, result)=>{
    if(err){
      console.log(err)
    }
    if(result.length > 0){
      console.log(result)
      res.send("Success")
    }
     else{
      console.log(result)
      res.send("Failed !")
     }
  })
})

app.post("/signup", (req, res)=>{
    console.log(req.body);
    const userName = req.body.userName;
    const Password = req.body.Password;
    const Name = req.body.Name;
    const Birth = req.body.Birth;
    const Money = req.body.Money;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Adress = req.body.Address;
    connection.query("INSERT INTO account (UserName, Password, Name, Birth, Money, Email, Phone, Adress) VALUES (?,?,?,?,?,?,?,?)",
    [userName,Password,Name,Birth,Money,Email,Phone,Adress],
    (err, result) => {
      if(err){
        console.log(err)
      }else{
        res.send("Register Accepted")
      }
    })
})


// connection.connect()

// connection.query('SELECT * from account', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0])
// })

// connection.end()

app.listen(3001, () => {
    console.log("Your server is run on 3001")
})