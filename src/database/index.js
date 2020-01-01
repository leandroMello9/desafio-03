import Sequelize from 'sequelize';
import User from '../app/models/User';
import Students from '../app/models/Students';
import databaseconfig from '../config/database';
import Matricula from '../app/models/Matricula';

const models = [User, Students, Matricula];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connect = new Sequelize(databaseconfig);
    models.map(model => model.init(this.connect));
  }
}
export default new Database();
