'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('authors');
  },
};