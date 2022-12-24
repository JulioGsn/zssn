import { Survivor } from '../models/index';
import { SurvivorType } from '../types';

const SurvivorsService = {

  getAll: async () => {
    console.log("Getting all survivors");
    try {
      const survivors = await Survivor.find();
      return survivors || [];
    } catch (error) {
      console.log("Error getAll", error);     
    }
  },

  create: async (data: SurvivorType) => {
    console.log("Creating new survivor");
   
    try {
      const survivor = new Survivor(data);

      await survivor.save();

      return survivor;
      
    } catch (error) {
      console.log("Error create", error);
    }
  }

}

export default SurvivorsService;
