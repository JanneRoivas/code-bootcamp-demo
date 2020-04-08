*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BROWSER}      %{BROWSER}

***Test Cases ***
Test Getting Kakku
    Open Browser    http://react/Kakku
    Select From List By Value   name:tyyppi   Kakut
    Element Should Contain  name:nimi     Juustokakku
