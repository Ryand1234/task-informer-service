const nodemailer = require('nodemailer')

const tranporter = async(task)=>{
	const driver = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				username: process.env.EMAIL,
				password: process.env.PASSWORD
			}
		})

	var mailOptions = {
		from: process.env.EMAIL,
		to: task.email,
		subject: `Remainder for ${task.title}`,
		text: `This email is sent to make you remind of the task you need to done.
		\n${task.task} is of ${task.priority} priority and needs to 
		be done by ${task.date}.\nThanks you.`
	}

	driver.sendMail(mailOptions, (err, status)=>{
		if(err){
			console.log("Error: "+err)
		}
	})
}

module.exports = tranporter;