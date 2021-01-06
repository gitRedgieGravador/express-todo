CREATE DATABASE  IF NOT EXISTS `test`;
USE `test`;

DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `todo` varchar(45) DEFAULT NULL,
  `done` tinyint(4) DEFAULT 0,
  `dbcreated` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DELIMITER ;;
CREATE  PROCEDURE `deleteTodo`(IN _id INT)
BEGIN
	set sql_safe_updates = 0;
	delete from test.todolist
	WHERE `id` = _id;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE PROCEDURE `markdone`(IN _id INT, IN _done bool)
BEGIN
	set sql_safe_updates = 0;
	UPDATE test.todolist
	SET `done` = _done
	WHERE `id` = _id;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `newTodo`(IN todo varchar(45))
BEGIN
	INSERT INTO `test`.`todolist`(`todo`)VALUES(todo);
END ;;
DELIMITER ;

DELIMITER ;;
CREATE PROCEDURE `updateTodo`(
IN todo varchar(45),
IN _id INT
)
BEGIN
	set sql_safe_updates = 0;
	UPDATE test.todolist
	SET `todo` = todo
	WHERE `id` = _id;
END ;;
DELIMITER ;

