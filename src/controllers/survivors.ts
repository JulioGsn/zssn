import { Request, Response } from 'express';
import SurvivorsService from '../services/survivors';

export default {
  
  index: async (req: Request, res: Response) => {
    try {
      const survivors = await SurvivorsService.getAll();

      console.log("I got the survivors", survivors);
      
      return res.status(200).json({ bug: false, survivors });
      
    } catch (error) {
      console.log("Error index", error);
      return res.status(500).json({ bug: false });     
    }
  },

  create: async (req: Request, res: Response) => {

    console.log("req.body", req.body);

    const survivor = {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      lastLocation: req.body.lastLocation,
      infected: req.body.infected,
    }

    await SurvivorsService.create(survivor);

    return res.status(201).json({ bug: false, msg: "Successfuly survivor created" });
  }

};
