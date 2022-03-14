const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = class User extends Sequelize.Model {
  //테이블 설정
  static init(sequelize) {
    return super.init(
      //테이블 컬럼 설정
      {
        userId: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        hashedPassword: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
      },
      {
        //테이블 설정
        sequelize,
        timestamps: false,
        modelName: 'User',
        tableName: 'user',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  //   static async setPassword(password) {
  //     const hash = await bcrypt.hash(password, 10);
  //     this.hashedPassword = hash;
  //   }
  //   static async checkPassword(password) {
  //     const result = await bcrypt.compare(password, this.hashedPassword);
  //     return result;
  //   }

  //다른 모델과의 관계
  static associate(db) {}
};
