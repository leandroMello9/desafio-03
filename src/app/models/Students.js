import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        idade: {
          type: Sequelize.STRING,
        },
        peso: {
          type: Sequelize.STRING,
        },
        altura: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
  }
}
export default Student;
