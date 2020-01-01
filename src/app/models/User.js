import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: Sequelize.STRING,
        },
        password_hash: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    // Antes de todo usuario se cadastro addHook sera executado de forma automatica
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  checkedPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default User;
