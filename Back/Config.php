<?php
const   CONFIG_NOT_FOUND_EXCEPTION = "Configuration file not found.";

class Config
{
    private $settings;
    public function __construct($filePath)
    {
        if (!file_exists($filePath)) {
            throw new Exception(CONFIG_NOT_FOUND_EXCEPTION);
        }
        $this->settings = parse_ini_file($filePath);
    }

    public function get($key, $default = null)
    {
        return $this->settings[$key] ?? $default;
    }
}
