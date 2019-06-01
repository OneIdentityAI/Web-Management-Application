<?php
$url = "http://18.138.254.59/Verify-Passport/RetrieveNews.aspx";
//$url = "http://localhost/test.php";
$authorization = "APIKey: NDRGRkM1MUMtNTU2OC00OEM0LTkwMUEtNkREN0UyNTBBNTFF";
$post = array(
    'Type' => '1',
    'LanguageID' => 'e'
);
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); 
curl_setopt($curl, CURLOPT_HTTPHEADER, array($authorization));
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo $result;
?>