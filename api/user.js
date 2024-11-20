export default function handler(req, res) {
    const userInfo = {
      name: "John Doe",
      age: 20,
      birthdate: "Rosario, Pasig City"
    };
  
    res.status(200).json(userInfo);
  }
  