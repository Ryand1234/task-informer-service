const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	title: {
		type: String
	},
	task: {
		type: String
	},
	email: {
		type: String
	},
	date: {
		type: String
	},
	priority: {
		type: Number
	},
	updated_at: {
		type: String
	},
	created_at: {
		type: String
	},
})

const Task = new mongoose.model('task', taskSchema);
module.exports = Task;