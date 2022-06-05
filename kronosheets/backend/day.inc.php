<?php
class workDay{
    private $totalHours = 0;
    private $name;
    private $comment;

    public function __construct($name)
    {
        $this->name = $name;
    }
    public function addComment(string $comment){
        return $this->comment = "";
    }
}
?>