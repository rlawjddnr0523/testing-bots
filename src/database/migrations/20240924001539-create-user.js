'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: false
      },
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0 // 기본 포인트 값을 0으로 설정
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW // 등록 일시를 현재 시각으로 설정
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW // 마지막 업데이트 일시를 현재 시각으로 설정
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};