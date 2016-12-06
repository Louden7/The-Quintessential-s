<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="Style Sheet.css">
  <script src="Script Sheet.js"></script>
</head>

<body>
  <h1>
    <?php
    echo "Thanks for voting!" . "<br>";

    $UserVote = trim($_POST["ConstitutionalVote"]);

    $itemFile = fopen("ConstitutionalVotingHistory.txt, r") or die("Unable to read");
    $yes = trim(fgets($itemFile));
    $no = trim(fgets($itemFile));
    fclose($itemFile)

    if($UserVote == "yes"){
      $yes++;
    }
    elseif($UserVote == "no"){
      $no++;
    }

    $total = $yes + $no;

    $itemFile = fopen("ConstitutionalVotingHistory.txt, r") or die("Unable to read");
    fwrite($itemFile, $yes . "\n");
    fwrite($itemFile, $no . "\n");
    fclose($itemFile)
     ?>
   </body>
   </html>
