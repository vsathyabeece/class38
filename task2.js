//1.Find all the topics and tasks which are thought in the month of October
db.zen.find().forEach(function(proc){print(proc.topics,proc.task)})
//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zen.find({company_drives:{$gt :15-oct-2020 , $lt:31-oct-2020}})
//3.Find all the company drives and students who are appeared for the placement.
db.zen.find({students:"attended"})
//4.Find the number of problems solved by the user in codekata
db.zen.find({number_problems:"solved"})
//5.Find all the mentors with who has the mentee's count more than 15
db.zen.find({mentors:{$gt15}})
//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zen.find({students:"absent",task:"not submitted"})
