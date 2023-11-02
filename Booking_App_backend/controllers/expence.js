const Expence = require('../models/expence');

exports.addExpence =  async(req, res, next) =>{
  try{
      const amount =  req.body.amount;
      const description =  req.body.description;
      const category =  req.body.category;

      const expenceData  =  await Expence.create ( {amount: amount, description: description, category: category });
      res.status(201).json( {newExpenceDetails: expenceData});
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

exports.getExpence = async (req, res, next) =>{
  try{
      const expences = await Expence.findAll();
      res.status(200).json({allExpences : expences});
      console.log("get is successful");
  }
  catch(err){
      console.log("Get User is failing ", JSON.stringify(err));
      res.status(500).json({
          error: err
      })
  }
}

// exports.getEditExpence = async(req,res,next) =>{
//     try{
//         const expenceId = req.params.id;
//         await Expence.findByPk(expenceId);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// exports.postEditExpence = aysnc (req, res,next)=>{
//     try{
//         const expenceId = req.body.id;
//         const updatedAmount = req.body.amount;
//         const updatedDescription = req.body.description;
//         const updatedCategory = req.body.category;
//         await Expence.findByPk({where: {id: expenceId}})

//         Expence.amount= updatedAmount;
//         await Expence.description= updatedDescription;
//         Expence.category= updatedCategory;
//         return Expence.save();
//     }
//     catch(err){
//         console.log(err);
//     }
//   }

  exports.deleteExpence = async(req, res, next) =>{
    try{
        if(req.params.id === 'undefined'){
            console.log("id is missing");
            return res.status(400).json({err :'Id is missing'});
        }
        const expenceId = req.params.id;
        console.log(expenceId);
        await Expence.destroy({where: {id: expenceId}});
        console.log("successfully deleted");
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

