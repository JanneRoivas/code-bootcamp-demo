*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BROWSER}      %{BROWSER}

***Test Cases ***
Test Home Page Title
    Open Browser    http://react
    ${title}=       Get Title
    Should Be Equal     Sample Codes    ${title}

Test Home Page Greeting
    Open Browser    http://react
    Element Should Contain      id:root     code boot-camp
