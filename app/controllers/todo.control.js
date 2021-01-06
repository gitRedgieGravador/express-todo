exports.getAll = (req, res) => {
    let mysql = req.app.get('mysql')
    mysql.query("select * from test.todolist", result=>{
        res.json({result})
    })
}

exports.newTodo = (req, res) => {
    let mysql = req.app.get('mysql')
    console.log(req.body)
    mysql.query(`call test.newTodo('${req.body.todo}');`, result=>{
        res.json({result})
    })
}

exports.updateTodo = (req, res) => {
    let mysql = req.app.get('mysql')
    mysql.query(`call test.updateTodo('${req.body.todo}', ${req.body.id});`, result=>{
        res.json({result})
    })
}

exports.deleteTodo = (req, res) => {
    let mysql = req.app.get('mysql')
    mysql.query(`call test.deleteTodo(${req.params.id});`, result=>{
        res.json({result})
    })
}

exports.toogleDone = (req, res) => {
    let mysql = req.app.get('mysql')
    mysql.query(`call test.markdone(${req.body.id}, ${req.body.isdone});`, result=>{
        res.json({result})
    })
}