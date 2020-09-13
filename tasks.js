const Task = require('./model');
const transporter = require('./transport');

const checkForTask = async () =>{
	task = await Task.findOne({date: {$lte: Date.now()}}).sort({priority: -1}).limit(1);
	if(task == null){
		console.log("NO Data");
		setTimeout(()=>{checkForTask()}, 60000);
		return;	
	} else {
		transporter(task);	
		await Task.deleteOne({_id: task._id})
		checkForTask();
	}
}

module.exports = {
	checkForTask: checkForTask
}