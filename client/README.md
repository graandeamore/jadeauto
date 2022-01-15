#Stack: PERN: ReactJS, React bootstrap, Axios, React-router-dom, Mob-X

psql -h localhost blob stamp 
password: ____

su - postgres
psql
create user stamp with password '___';
create database blob;
grant all privileges on database blob to stamp;

pm2 logs
pm delete <index>
pm2 --name HelloWorld start npm -- start
pm2 kill
pm2 list

DROP DATABASE blob; - drop
\dt - tables 
\q - exit

TABLE mytablename; - show values
UPDATE users SET price = 10 WHERE price = 5;

DEPLOYING:
/client/.env localhost:5000 > hostname:5000 
/server/.env localhost > hostname
nano /etc/postgresql/14/main/postgresql.conf: "localhost" - "hostname"
nano /etc/postgresql/14/main/pg_hba.conf: host > hostname:24
systemctl restart postgresql
