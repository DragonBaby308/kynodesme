package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"strings"
)

//数据库连接常量
const(
	username = "root"
	passwd = "xxxx"		//不要提交真实密码
	ip = "127.0.0.1"
	port = "3306"
	dbname = "kynodesme"
)

//Db数据库连接池
var DB *sql.DB

//初始化数据库连接
func InitDB()  {
	//构建连接："用户名:密码@tcp(IP:端口)/数据库?charset=utf8"
	path := strings.Join([]string{username, ":", passwd, "@tcp(",ip, ":", port, ")/", dbname, "?charset=utf8mb4"}, "")

	//打开数据库,前者是驱动名，所以要导入： _ "github.com/go-sql-driver/mysql"
	DB, _ = sql.Open("mysql", path)
	//设置数据库最大连接数
	DB.SetConnMaxLifetime(100)
	//设置上数据库最大闲置连接数
	DB.SetMaxIdleConns(10)

	//验证连接
	if err := DB.Ping(); err != nil{
		fmt.Println("opon database fail")
		return
	}
	fmt.Println("connnect success")
}
