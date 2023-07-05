-- danh sách Proc, dò trong cái danh sách proc trong cái mysql coi chưa có thì thêm vào 

-- AddAccount (done)
-- AddItem (done)
-- AddCart (done)
-- AddCartDetail (done)
 
-- mỗi proc t sẽ có 1 file .js hướng dẫn call


-- tạo account mới 
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

-- CALL AddAccount('johny', 'password4', 'Johny', '2001-05-04', 8000, 'johny@example.com', '127536789', '123 Main St');
-- ----------------------------------


-- tạo 1 item mới (dùng cho admin thêm hàng mới để bày bán) chứ ko phải là mua hàng 
DELIMITER //
CREATE PROCEDURE AddItem(
  IN p_Name nvarchar(50),
  IN p_Price bigint,
  IN p_Description nvarchar(300),
  IN p_Color nvarchar(50),
  IN p_Status nvarchar(100),
  IN p_CateName nvarchar(50),
  IN p_ProducerName nvarchar(50)
)
BEGIN
  DECLARE newCateID varchar(50);
  DECLARE newProducerID varchar(50);
  DECLARE newIDCount INT;
  DECLARE newItemID VARCHAR(50);
   
  SELECT CateID INTO newCateID FROM Category WHERE Name = p_CateName;
  SELECT ProducerID INTO newProducerID FROM Producer WHERE Name = p_ProducerName;
  IF newCateID IS  NULL  or newProducerID IS NULL
	THEN
		SELECT 0 AS Result;
	ELSE	
		SET newIDCount = (SELECT COUNT(*) + 1 FROM Item);
		SET newItemID = CONCAT('Item', newIDCount);
		INSERT INTO Item (ItemID, Name, Price, Description, Color, Status, CateID, ProDucerID)
		VALUES (newItemID, p_Name, p_Price, p_Description, p_Color, p_Status, newCateID, newProducerID);
		SELECT newItemID AS ItemID;
  END IF;
    
 
  
END //

DELIMITER ;

-- call AddItem('Laptop test', 1500000, 'i3-1115G4/ RAM 8GB/ 256GB SSD/ Windows 11', 'Silver', 'Available', 'Latop', 'Asus')
-- ---------------------------------

-- Tạo một giỏ hàng mới (thằng này sẽ phải đi chung vs 1 thằng add item vào giỏ hàng)
DELIMITER //

CREATE PROCEDURE AddCart(
  IN p_status nvarchar(50),
  IN p_AccountID varchar(50)
)
BEGIN
  DECLARE newCartID varchar(50);
  DECLARE usernameCount int;
  SET newCartID = CONCAT('cart', (SELECT COUNT(*) + 1 FROM Cart));
  
  SELECT COUNT(*) INTO usernameCount FROM Account WHERE AccountID = p_AccountID;
  
  IF usernameCount = 0 THEN
    SELECT 0 AS Result;
  ELSE
	INSERT INTO Cart (CartID, day, status, AccountID)
	VALUES (newCartID, CURDATE(), p_status, p_AccountID);
  
	SELECT newCartID AS CartID;
  END IF;
  
END //

DELIMITER ;

-- select * from cart
-- CALL AddCart('Saved', 'Acc1');
-- ------------------------

-- thêm đồ vào giỏ hàng sau khi lưu
DELIMITER //

CREATE PROCEDURE AddCartDetail(
  IN p_CartID varchar(50),
  IN p_ItemID varchar(50),
  IN p_Quantity bigint
)
BEGIN
  DECLARE itemPrice bigint;
  DECLARE totalPrice bigint;
  
  SELECT Price INTO itemPrice FROM Item WHERE ItemID = p_ItemID;
  
  SET totalPrice = itemPrice * p_Quantity;
  
  INSERT INTO Cart_Detail (CartID, ItemID, Quantity, Price)
  VALUES (p_CartID, p_ItemID, p_Quantity, totalPrice);
  
END //

DELIMITER ;

-- select * from cart_detail where CartId = 'cart6'
-- call AddCartDetail('cart4', 'Item1', 1)
-- --------------------------------------------------

-- tạo oder mới 
DELIMITER //

CREATE PROCEDURE AddOrder(
  IN p_GuessName nvarchar(50),
  IN p_Delivery_Address nvarchar(100),
  IN p_Phone varchar(50),
  IN p_Note nvarchar(100),
  IN p_Total_Price bigint,
  IN p_Status nvarchar(100),
  IN p_AccountID varchar(50)
)
BEGIN
  DECLARE newOrderID varchar(50);
  DECLARE usernameCount int;
  SET newOrderID = CONCAT('Order', (SELECT COUNT(*) + 1 FROM Order_));
  
  SELECT COUNT(*) INTO usernameCount FROM Account WHERE AccountID = p_AccountID;
  
  IF usernameCount = 0 or p_AccountID != null THEN
    SELECT 0 AS Result;
  ELSE
	INSERT INTO Order_ (OrderID, GuessName, Delivery_Address, Day, Phone, note, Total_Price, Status, AccountID)
	VALUES (newOrderID, p_GuessName, p_Delivery_Address, CURDATE(), p_Phone, p_Note, p_Total_Price, p_Status, p_AccountID);
  
	SELECT newOrderID AS OrderID;
  END IF;
END //


DELIMITER ;

-- call AddOrder('Grian', '12 London', '090855410', 'call before shiping', 15000, 'Shipping', null);

DELIMITER //

CREATE PROCEDURE AddOrderDetail(
  IN p_OrderID varchar(50),
  IN p_ItemID varchar(50),
  IN p_Quantity bigint
)
BEGIN
  DECLARE itemPrice bigint;
  DECLARE totalPrice bigint;
  
  SELECT Price INTO itemPrice FROM Item WHERE ItemID = p_ItemID;
  
  SET totalPrice = itemPrice * p_Quantity;
  
  INSERT INTO Order_Details (OrderID, ItemID, Quantity, Price)
  VALUES (p_OrderID, p_ItemID, p_Quantity, totalPrice);
  
END //

DELIMITER ;

select * from order_Details

-- call AddOrderDetail('Order5', 'Item1', 1)