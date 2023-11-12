<?php

    error_reporting(0);

    header('Content-Type: application/json; charset=utf-8');

    $db_host        = '127.0.0.1:3306';
    $db_user        = 'root';
    $db_pass        = 'Ne$w5P#a4s%sw^or0d';
    $db_database    = 'mirforex';

    $link = mysqli_connect($db_host,$db_user,$db_pass);

    mysqli_select_db($link, $db_database);
    mysqli_query($link ,'SET NAMES "utf8mb4"');

    $postDataJson = file_get_contents('php://input');
    $JSON = json_decode($postDataJson, true);

    if ($JSON["login"]) { 
        session_start();

        $sql = "SELECT * FROM `users` WHERE `username` = '".$JSON['login']."' AND `password` = '".md5($JSON['password'])."'";
        $result = mysqli_query($link, $sql);

        if (mysqli_num_rows($result) == 0) {
            echo json_encode(array(
                'type' => 'error'
            ));
        } else {
            $member = mysqli_fetch_assoc($result);
            if (!$member) {
                session_destroy();
                echo json_encode(array(
                    'type' => 'error'
                ));
            } else {
                $_SESSION["userId"] = $member["id"];
                echo json_encode(array(
                    'type' => 'success'
                ));
            }
        }
        exit();
    }

    if ($JSON['action'] == 'checkMe') {
        session_start();

        if ($_SESSION["userId"]) {

            $sql = 'SELECT * FROM `requests`';
            $result = mysqli_query($link, $sql);

            echo json_encode(array(
                'type' => 'success'
            ));
        } else {
            echo json_encode(array(
                'type' => 'error'
            ));
        }
    }

    if ($_GET['action'] == 'approveFeedback' && $_GET['id']) {
        session_start();
        error_log(json_encode($_SESSION));
        if ($_SESSION["userId"]) {

            $sql = "UPDATE `feedback` SET `active` = 1 WHERE `feedback`.`id` = ".$_GET['id'];
		
            //$result = mysqli_query($link, $sql);
            try {
                mysqli_query($link, $sql);
            } catch(\Exception $e) {
		error_log(json_encode($e->getMessage()));              
	    }

            echo json_encode(array(
                'type' => 'success'
            ));
        } else {
            echo json_encode(array(
                'type' => 'error'
            ));
        }
    }

    if ($_GET['action'] == 'deleteFeedback' && $_GET['id']) {
        session_start();

        if ($_SESSION["userId"]) {

            $sql = "DELETE `feedback` WHERE `feedback`.`id` = ".$_GET['id'];
            $result = mysqli_query($link, $sql);

            echo json_encode(array(
                'type' => 'success'
            ));
        } else {
            echo json_encode(array(
                'type' => 'error'
            ));
        }
    }

    if ($_GET['action'] == 'getAllFeedback') {
        session_start();

        $sql = "SELECT * FROM `feedback` WHERE `active` = 1";

        if ($_SESSION["userId"] && !isset($_GET['active'])) {
            $sql = "SELECT * FROM `feedback`";
        }

        $result = mysqli_query($link, $sql);

        $data = array();

        while ($row = mysqli_fetch_array($result)) {

            $activeBool = FALSE;
            if ($row["active"] == '1' || $row["active"] == 1) {
                $activeBool = TRUE;
            }

            array_push($data, [
                'id' => $row["id"], 
                'username' => $row["username"], 
                'text' => $row["text"], 
                'code' => $row["code"], 
                'active' => $activeBool, 
                'created_at' => $row["created_at"]
            ]);

        }
        echo json_encode($data);
    }

    if ($_GET['action'] == 'getAllRequest') {
        session_start();

        if ($_SESSION["userId"]) {

            $sql = 'SELECT * FROM `requests`';
            $result = mysqli_query($link, $sql);

            $data = array();

            while ($row = mysqli_fetch_array($result)) {

                $typeStr = '';
                if ($row["type"] == 'learn') {
                    $typeStr = '🎓 Обучение';
                } else if ( $row["type"] == 'score' ) {
                    $typeStr = '💲 Счет';
                }

                array_push($data, [
                    'id' => $row["id"], 
                    'username' => $row["username"], 
                    'type' => $typeStr, 
                    'phone_number' => $row["phone_number"], 
                    'description' => $row["description"], 
                    'created_at' => $row["created_at"]
                ]);

            }
            echo json_encode($data);
        } else {
            echo '[]';
        }
    }

    if ($_GET['action'] == 'getRequest' && $_GET['id']) {
        session_start();

        if ($_SESSION["userId"]) {

            $sql = 'SELECT * FROM `requests` WHERE id = "'.$_GET['id'].'"';
            $result = mysqli_query($link, $sql);

            $data = array();

            while ($row = mysqli_fetch_array($result)) {

                $typeStr = '';
                if ($row["type"] == 'learn') {
                    $typeStr = '🎓 Обучение';
                } else if ( $row["type"] == 'score' ) {
                    $typeStr = '💲 Счет';
                } else if ( $row["type"] == 'call' ) {
                    $typeStr = '📞 Звонок';
                }

                array_push($data, [
                    'id' => $row["id"], 
                    'username' => $row["username"], 
                    'type' => $typeStr, 
                    'phone_number' => $row["phone_number"], 
                    'description' => $row["description"], 
                    'created_at' => $row["created_at"]
                ]);

            }
            echo json_encode($data);
        } else {
            echo '[]';
        }
    }

    if ($_GET['action'] == 'getFeedback' && $_GET['id']) {
        session_start();

        if ($_SESSION["userId"]) {

            $sql = 'SELECT * FROM `feedback` WHERE id = "'.$_GET['id'].'"';
            $result = mysqli_query($link, $sql);

            $data = array();

            while ($row = mysqli_fetch_array($result)) {

                $activeBool = FALSE;
                if ($row["active"] == '1' || $row["active"] == 1) {
                    $activeBool = TRUE;
                }

                array_push($data, [
                    'id' => $row["id"], 
                    'username' => $row["username"], 
                    'code' => $row["code"], 
                    'text' => $row["text"], 
                    'active' => $activeBool,
                    'created_at' => $row["created_at"]
                ]);

            }
            echo json_encode($data);
        } else {
            echo '[]';
        }
    }

    if ($JSON['action'] == 'createRequest') {
        if ( $JSON['type'] && $JSON['username'] && $JSON['phone_number'] ) {
            
            $sql = 'INSERT INTO `requests` (`type`, `username`, `phone_number`) VALUES ("'.$JSON['type'].'", "'.$JSON['username'].'","'.$JSON['phone_number'].'");';
	    if (isset($JSON['description'])) {
               $sql = 'INSERT INTO `requests` (`type`, `username`, `phone_number`, `description`) VALUES ("'.$JSON['type'].'", "'.$JSON['username'].'", "'.$JSON['phone_number'].'","'.$JSON['description'].'");';
	    }
            try {
                mysqli_query($link, $sql);
            } catch(\Exception $e) {
		error_log(json_encode($e->getMessage()));              
	    }
            echo json_encode(array(
                'type' => 'success'
            ));
        } else {
            echo json_encode(array(
                'type' => 'error'
            ));
        }
    }

    if ($JSON['action'] == 'createFeedback') {

        if ( $JSON['text'] && $JSON['username'] && strlen($JSON['code']) == 7 ) {
            $sql = "INSERT INTO `feedback` (`text`, `username`, `code`) VALUES ('".$JSON['text']."', '".$JSON['username']."','".$JSON['code']."')";

            mysqli_query($link, $sql);

            echo json_encode(array(
                'type' => 'success'
            ));
        } else {
            echo json_encode(array(
                'type' => 'error'
            ));
        }
    }
  
?>
