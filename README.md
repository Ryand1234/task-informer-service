# task-informer-service

Task informer service is built on nodejs using mongoose for connecting database and nodemailer to send emails.

This service will check database every minute for tasks. If task is found an email is sent to the user informing about the task. An email will be sent once for a task. Task will be deleted once email is send.
