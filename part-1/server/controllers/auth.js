const users = []
const bcrypt = require(`bcryptjs`)

module.exports = {
  login: (req, res) => {
    console.log('Logging In User')
    console.log(req.body)
    const { username, password } = req.body
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && bcrypt.compareSync(password, users[i].passHash)) {
        const userCopy = {...users[i]}
        delete userCopy.passHash
        res.status(200).send(userCopy)
        return
      }
    }
    res.status(400).send("User not found.")
  },
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body

    let salt = bcrypt.genSaltSync(5)
    let passHash = bcrypt.hashSync(req.body.password, salt)

    let newUser = {
      username,
      email,
      firstName,
      lastName,
      passHash
    }

    console.log('Registering User')
    console.log(req.body)
    users.push(newUser)
    res.status(200).send(newUser)
  }
}