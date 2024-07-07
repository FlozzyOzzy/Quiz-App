body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#question, #answer-buttons, #next-btn {
    margin: 20px;
}

.btn {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
}

.btn:hover {
    background-color: #0069D9;
}

.correct {
    background-color: #28A745;
}

.wrong {
    background-color: #DC3545;
}