package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/astaxie/beego/orm"
)

//初始化
func init() {
	maxIdle := 30 //最大空闲连接
	maxConn := 30 //最大连接数
	//连接数据库
	orm.RegisterDataBase("default", "mysql", "root:password@/kynodesme?charset=utf8", maxIdle, maxConn)

	//注册模型
	orm.RegisterModel(new(User))

	//根据注册模型，创建表
	orm.RunSyncdb("default", false, true)
}

func main() {
	fmt.Println("小程序后端测试")
}


