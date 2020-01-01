import Sequelize, { Model } from 'sequelize';

class Matricula extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
        },
        duration: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
  }
}
export default Matricula;
