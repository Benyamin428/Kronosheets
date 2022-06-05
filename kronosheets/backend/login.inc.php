<?php
class Login{
    // Properties
    private $userName;
    private $password;
    private $sessionID;

    // Methods
    public function __construct($UN = "", $PWD = ""){
        $this->userName = $UN;
        $this->password = sha1($PWD);
        $this->sessionID =sha1($UN.$PWD.rand(0, 10000));
        session_id($this->sessionID);
    }

    public function getUN(): string {
        return $this->name;
    }

    public function getPWD(): string {
        return $this->password;
    }
}
?>