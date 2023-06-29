DELIMITER //

CREATE PROCEDURE AddAccount(
  IN p_UserName varchar(50),
  IN p_Password varchar(50),
  IN p_Name nvarchar(50),
  IN p_Birth date,
  IN p_Money bigint,
  IN p_Email varchar(50),
  IN p_Phone varchar(50),
  IN p_Address nvarchar(100)
)
BEGIN
  DECLARE newAccountID varchar(50);
  DECLARE usernameCount INT;
  
  SELECT COUNT(*) INTO usernameCount FROM Account WHERE UserName = p_UserName;
  
  IF usernameCount > 0 THEN
    SELECT 1 AS Result;
  ELSE
	SET newAccountID = CONCAT('Acc', (SELECT COUNT(*) + 1 FROM Account));
	INSERT INTO Account (AccountID, UserName, Password, Name, Birth, Money, Email, Phone, Adress)
	VALUES (newAccountID, p_UserName, p_Password, p_Name, p_Birth, p_Money, p_Email, p_Phone, p_Address);
	SELECT 0 AS Result, newAccountID AS AccountID;
  END IF;
END //

DELIMITER ;

select * from account

-- CALL AddAccount('johny', 'password4', 'Johny', '2001-05-04', 8000, 'johny@example.com', '127536789', '123 Main St');

