
const express = require("express")
const router = express.Router()
const Flight = require("../models/Flight");

//add  flight
router.post("/add-flight" , async (req,res)=>{
    const newflight = new Flight(req.body);
    try{
        const savedflight = await newflight.save();
        console.log(savedflight);
        res.status(200).json(savedflight);
    }catch(err){
        res.status(500).json(err);
    }
})

// fetch all flights
router.get("/flight-list", async (req, res) => {
    try {
      const list = await Flight.find();
      res.status(200).json(list);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });


// delete flite by id
router.delete("/delete-flight/:id",async(req,res)=>{
    console.log(req.params.id);
    const flight =await Flight.findById(req.params.id);
    console.log(flight)
    if(flight){
      await flight.deleteOne();
               res.status(200).json("success")
               
    }
    else{
      res.status(403).json("flight does not exist")
  }
});

router.post("/flight-searched",async (req,res)=>{
    try{
        const from= await Flight.find({from:req.body.from});
  
        if(from.length>0){
            const to= await Flight.find({to:req.body.to});
            if(to.length>0){
              
              console.log(to);
                res.status(200).json(to);              
            }
            else{
                res.status(400).json("flight is not available");
            }
        }
        else{
            res.status(404).json("flight is not available");
        }
        
        
  
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
  });



module.exports = router;