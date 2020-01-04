package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", Hello)
	if err := http.ListenAndServe("0.0.0.0:8082", nil); err != nil {
		fmt.Println("HTTP监听端口失败！")	//改为日志 log
	}
}

func Hello(w http.ResponseWriter, r * http.Request) {
	fmt.Println(r.URL)	//记录日志  log
	fmt.Fprintf(w, "Hello World")
}
