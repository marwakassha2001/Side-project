import db from '../models/index.js';

const {MemeModel,UserModel} = db;

export const AddMeme = async (req,res) => {
    const {imageURLS,caption,userId} = req.body;
    try {
        const newMeme = await MemeModel.create({
          imageURLS,
            caption,
            userId
        });
        res.status(200).json({"message" :"Meme added " ,"data":newMeme});
    }catch (error) {
        res.status(400).json({error :error.message});
    }
}


export const getMeme = async (req, res) => {
    const { id } = req.params;
    try {

        const Meme= await MemeModel.findByPk(id,{include: [UserModel]});


if(Meme){
        res.status(200).json({ "data":Meme });}
        else{
            res.status(404).json({ "message":"Meme not found" });   
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getAllMeme = async (req, res) => {

    try {

        const Memes = await MemeModel.findAll({include: [UserModel]});



        res.status(200).json({ "data":Memes });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteMeme = async (req, res) => {
    const id = req.body.id;
  
    if (id) {
      try {
        const target = await MemeModel.findByPk(id);
  
        if (target) {
          await target.destroy();
          res.json({ message: "Deleted successfully" });
        } else {
          res.json({ message: `No element with the id ${id}` });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error deleting Training service with id ${id}` });
      }
    } else {
      res.status(400).json({ message: "Provide an id" });
    }
  };


  export const updateMeme = async (req, res) => {
    const id = req.body.id;
  
    if (id) {
      try {
        const target = await MemeModel.findByPk(id);
  
        if (target) {
          const { imageURL = target.imageURL, caption = target.caption } = req.body;
  
          await target.update({
            imageURL:imageURL,
            caption: caption,
          });
  
          res.json({ data: target });
        } else {
          res.json({ message: `No element with the id ${id}` });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error updating meme service with id ${id}` });
      }
    } else {
      res.status(400).json({ message: "Id is not provided" });
    }
  };
  