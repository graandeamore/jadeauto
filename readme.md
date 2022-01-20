#PERN stack web-app 
##Before deploying made:
*ALTER TABLE cars ALTER COLUMN description TYPE varying char(1000000)*
##Ubuntu server preparing:
###Change super-user for PostgreSQL:
*su - postgres*
###Enter to PostgreSQL:
*psql*
###Create data-base User:
*create user user_name with password 'password';*
###Create data-base:
*create database base_name;*
###Root for data-base:
*grant all privileges on database base_name to user_name;*
###Connect to database with user:
*psql -h localhost base_name user_name*
###Drop data-base:
*DROP DATABASE base_name;*
###Show tables:
*\dt*
###Quit psql:
*\q*
###Reload psql:
*systemctl restart postgresql*
###Show table values:
*TABLE table_name;*
###Change value in table:
*UPDATE users SET role = 'ADMIN' WHERE id = 1;*
####While alfa:
*pm2 --name Process_name start npm -- start*
####Logs:
*pm2 logs*
####Kill all:
*pm2 kill*
