'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
     Meme.belongsTo(models.UserModel);
    }
  }
  Meme.init({
    imageURLS: DataTypes.STRING,
    caption: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};