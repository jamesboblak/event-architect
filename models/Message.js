const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Event = require('./Event');

class Message extends Model {};

Message.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},

		content: {
			type: DataTypes.STRING,
			allowNull: false
		},

		event_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Event,
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		modelName: 'message',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = Message;