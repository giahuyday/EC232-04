const connection = require('../../Database/connecting')

exports.EditProfile = (req, res) => {
  console.log(req.body)
  const account = req.params // Assuming you're passing AccountID as a parameter
  console.log('🚀 ~ AccountID:', account)
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const address = req.body.address
  const newPassword = req.body.newPassword // Assuming you have a field for new password
  // Add other profile fields as needed

  console.log(firstName, lastName, email, address, newPassword)

  // Assuming you have a table named "User" or similar
  connection.query('UPDATE Account SET UserName=?, Name=?, Email=?, Adress=?, Password=? WHERE AccountID = ?', [firstName, lastName, email, address, newPassword, account.AccountID], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error updating profile')
    } else {
      console.log(result)
      res.send('Profile updated successfully')
    }
  })
}
