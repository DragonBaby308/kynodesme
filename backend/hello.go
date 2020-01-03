package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/astaxie/beego/orm"
)

//结构体模型
type User struct {
	Id   int
	Name string `orm:"size(100)"`
}

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
	o := orm.NewOrm()

	user := User{Name: "slene"}

	// insert，插入
	id, err := o.Insert(&user)
	fmt.Printf("ID: %d, ERR: %v\n", id, err)

	// update，更新
	user.Name = "astaxie"
	num, err := o.Update(&user)
	fmt.Printf("NUM: %d, ERR: %v\n", num, err)

	// read one，查询
	u := User{Id: user.Id}
	err = o.Read(&u)
	fmt.Printf("ERR: %v\n", err)

	// delete，删除
	num, err = o.Delete(&u)
	fmt.Printf("NUM: %d, ERR: %v\n", num, err)
}


