const Sequelize = require('sequelize');

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

  //다른 모델과의 관계
  static associate(db) {}
};
