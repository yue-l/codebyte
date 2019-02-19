<?php
/**
 * reverse string
 * @param string
 * @return string reversed string
 */
function FirstReverse($str) {
    return strrev($str);
}

/**
 * shift letter by 1 from ASCII table, and change vowels to uppercase.
 * @param  string        $str
 * @return string formatted string
 */
function LetterChanges($str) {
    $out = "";
    for ($i = 0; $i < strlen($str); $i++) {
        if (ctype_alpha($str[$i])) {
            $temp = chr(ord($str[$i]) + 1);
            $temp = ($temp == "a" || $temp == "e" || $temp == "i" || $temp == "o" || $temp == "u") ? strtoupper($temp) : $temp;
            $out .= $temp;
        } else {
            $out .= $str[$i];
        }
    }

    return $out;
}
