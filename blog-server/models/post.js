const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  //테이블 설정
  static init(sequelize) {
    return super.init(
      //테이블 컬럼 설정
      {
        title: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        body: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        tags: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        created_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        //테이블 설정
        sequelize,
        timestamps: false,
        modelName: 'Post',
        tableName: 'post',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  //다른 모델과의 관계
  static associate(db) {}
};
