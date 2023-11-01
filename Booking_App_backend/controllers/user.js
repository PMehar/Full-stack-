const User = require('../models/user');

exports.addUser =  async(req, res, next) =>{
  try{
      const name =  req.body.name;
      // console.log(name);
      const email =  req.body.email;
      const phone_no =  req.body.phone_no;
      const date = req.body.date;
      const time = req.body.time;

      const userData  =  await User.create ( {name: name, email: email, phone_no: phone_no , date: date , time: time });
      res.status(201).json( {newUserDetails: userData});
      console.log("post is successful");
  }
  catch(err){
      console.log("Post User is not working",JSON.stringify(err));
      console.log(err);
      res.status(500).json({
          error: err
      })
  }
}

exports.getUser = async (req, res, next) =>{
  try{
      const users = await User.findAll();
      res.status(200).json({allUsers : users});
      console.log("get is successful");
  }
  catch(err){
      console.log("Get User is failing ", JSON.stringify(err));
      res.status(500).json({
          error: err
      })
  }
}

exports.deleteUser = async(req, res, next) =>{
  try{
      if(req.params.id === 'undefined'){
          console.log("id is missing");
          return res.status(400).json({err :'Id is missing'});
      }
      const userId = req.params.id;
      console.log(userId);
      await User.destroy({where: {id: userId}});
      console.log("successfully deleted")
      return res.sendStatus(200);
     
  }
  catch(err){
      console.log("Delete User is failing ", JSON.stringify(err));
      console.log(err + "helo");
      res.sendStatus(500).json({
          error: err
      })
  }
}
