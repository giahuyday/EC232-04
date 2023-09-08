-- Nhóm 4  
-- file Procedure


-- tạo Account mới 
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
  SET newCartID = CONCAT('Cart', (SELECT COUNT(*) + 1 FROM Cart));
  
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

-- select * from Cart
-- CALL AddCart('Saved', 'Acc1');

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

-- call AddOrderDetail('Order5', 'Item1', 1)
-- ----------------------------------------------------
-- thêm 1 món vào giỏ hàng với kiểm tra có giỏ hàng tồn tại chưa
DELIMITER //

CREATE  PROCEDURE Add_cardItem(
  IN p_AccountID varchar(50),
  IN p_ItemID varchar(50),
  IN p_Quantity bigint
)
BEGIN
  DECLARE existingCartID varchar(50);
  DECLARE newCartID varchar(50);
  DECLARE ExistingQuantity BIGINT;
  
  SELECT CartID INTO existingCartID FROM Cart WHERE AccountID = p_AccountID AND status = 'Saved';
  
  IF existingCartID IS NOT NULL THEN
	SELECT Quantity INTO ExistingQuantity FROM Cart_Detail WHERE CartID = existingCartID AND ItemID = p_ItemID;
        IF ExistingQuantity IS NOT NULL THEN
            UPDATE Cart_Detail
            SET Quantity = Quantity + p_Quantity
            WHERE CartID = existingCartID AND ItemID = p_ItemID;
        ELSE
            INSERT INTO Cart_Detail (CartID, ItemID, Quantity)
            VALUES (existingCartID, p_ItemID, p_Quantity);
        END IF;
  ELSE
    SET newCartID = CONCAT('Cart', (SELECT COUNT(*) + 1 FROM Cart));
    
    INSERT INTO Cart (CartID, day, status, AccountID)
    VALUES (newCartID, CURDATE(), 'Saved', p_AccountID);
    
    INSERT INTO Cart_Detail (CartID, ItemID, Quantity)
    VALUES (newCartID, p_ItemID, p_Quantity);
  END IF;
  
  SELECT 1 AS Result;
END //

-- call Add_cardItem('Acc1', 'Item2', 2)
DELIMITER ;

-- -------------------------
-- hàm add hoặc edit comment
DELIMITER //

CREATE PROCEDURE AddOrUpdateRate(
    IN p_AccountID VARCHAR(50),
    IN p_Point FLOAT,
    IN p_ItemID VARCHAR(50),
    IN p_Comment NVARCHAR(500)
)
BEGIN
    DECLARE v_RateID VARCHAR(50);
    DECLARE v_Day DATE;
    
    SELECT RateID INTO v_RateID FROM Rate WHERE AccountID = p_AccountID AND ItemID = p_ItemID;
    
    IF v_RateID IS NOT NULL THEN
        UPDATE Rate
        SET point = p_Point,
            comment = p_Comment,
            day = CURDATE()
        WHERE RateID = v_RateID AND AccountID = p_AccountID;
    ELSE
        SET @count = (SELECT COUNT(*) FROM Rate) + 1;
        SET v_RateID = CONCAT('Rate', @count);
        
        INSERT INTO Rate (RateID, AccountID, point, comment, day, ItemID)
        VALUES (v_RateID, p_AccountID, p_Point, p_Comment, CURDATE(), p_ItemID);
    END IF;
    
    SELECT 1 AS Result;
END //
-- call AddOrUpdateRate('Acc1', 4.5, 'Item1', 'Very good')
DELIMITER ;
-- --------------------------

-- hàm tính trung bình đánh giá

DELIMITER //

CREATE PROCEDURE GetAveragePoint(
    IN p_ItemID VARCHAR(50)
)
BEGIN
    SELECT AVG(point)
    FROM Rate
    WHERE ItemID = p_ItemID;
END //
-- call GetAveragePoint('Item1')
DELIMITER ;
-- ---------------------------------------------------------------------------------
-- lấy điểm trung bình nhưng là fucntion
DELIMITER //

CREATE FUNCTION GetAveragePoint_F(p_ItemID VARCHAR(50)) RETURNS DECIMAL(10,2)
BEGIN
    DECLARE avgPoint DECIMAL(10,2);

    SELECT AVG(point) INTO avgPoint
    FROM Rate
    WHERE ItemID = p_ItemID;

    RETURN avgPoint;
END //

DELIMITER ;



-- -------------------------------------
-- thêm 1 ảnh mới vào 
DELIMITER //
CREATE PROCEDURE Add_ItemPicture(
	IN p_ItemID VARCHAR(50),
    IN p_Content VARCHAR(500)
)
BEGIN
    DECLARE v_ItemCount INT;
    DECLARE v_Name NVARCHAR(50);
    DECLARE v_PictureID VARCHAR(50);
    
    SELECT COUNT(*) INTO v_ItemCount FROM Item WHERE ItemID = p_ItemID;
    
    IF v_ItemCount > 0 THEN
        SELECT Name INTO v_Name FROM Item WHERE ItemID = p_ItemID;
        
        SET @count = (SELECT COUNT(*) FROM Item_Picture) + 1;
        SET v_PictureID = CONCAT('Pic', @count);
        
        INSERT INTO Item_Picture (PictureID, Name, Content, ItemID)
        VALUES (v_PictureID, v_Name, p_Content, p_ItemID);
        
        SELECT 1 AS Result; 
    ELSE
        SELECT 0 AS Result; 
    END IF;
END //

DELIMITER ;
-- CALL Add_ItemPicture('Item44', 'https://marketingai.vn/wp-content/uploads/2023/02/332867346_700587748460794_8977339113547331667_n.jpg');
-- --------------------------

-- hàm tính trung bình doanh thu của tuần trong tháng 
DELIMITER //
CREATE PROCEDURE GetTotalPriceByWeeks(IN inputDate DATE)
BEGIN
    DECLARE startDate DATE;
    DECLARE endDate DATE;
    DECLARE currentDate DATE;
    DECLARE nextWeekDate DATE;
    DECLARE weekNumber INT;
    DECLARE weekTotal BIGINT;

    SET startDate = DATE_FORMAT(inputDate, '%Y-%m-01');
    SET endDate = LAST_DAY(startDate);

    SET currentDate = startDate;
    
    SET weekNumber = 1;
    
    DROP TEMPORARY TABLE IF EXISTS WeeklyTotals;
    CREATE TEMPORARY TABLE WeeklyTotals (WeekNumber INT, TotalPrice BIGINT);

    WHILE currentDate <= endDate DO
        SET weekTotal = 0;
		SET nextWeekDate = DATE_ADD(currentDate, INTERVAL 7 DAY);
        
        SELECT SUM(Total_Price) INTO weekTotal
        FROM Order_ 
        WHERE Order_.Day >= currentDate and Order_.Day < nextWeekDate;
		
		IF weekTotal is null THEN
			SET weekTotal = 0;
        END IF;
    
        INSERT INTO WeeklyTotals (WeekNumber, TotalPrice) VALUES (weekNumber, weekTotal);

        SET currentDate = DATE_ADD(currentDate, INTERVAL 7 DAY);
        
        
        
        IF weekNumber = 5 THEN
			update WeeklyTotals as we
            SET we.TotalPrice = we.TotalPrice + weekTotal
            where we.WeekNumber = 4;
        END IF;
        
        SET weekNumber = weekNumber + 1;
                
    END WHILE;

    SELECT we.WeekNumber as value , we.TotalPrice as totalPrice FROM WeeklyTotals as we where we.WeekNumber <= 4;
    
    DROP TEMPORARY TABLE IF EXISTS WeeklyTotals;
END //

DELIMITER ;

-- -----------------------
-- hàm tính trung bình doanh thua của tháng trong năm 
DELIMITER //
CREATE PROCEDURE GetTotalPriceByMonth(IN inputDate DATE)
BEGIN
    DECLARE startMonth DATE;
    DECLARE endMonth DATE;
    DECLARE currentMonth DATE;
    DECLARE nextMonth DATE;
    DECLARE MonthNumber INT;
    DECLARE MonthTotal BIGINT;

    SET startMonth = DATE_FORMAT(inputDate, '%Y-01-01');
    SET endMonth = DATE_FORMAT(inputDate, '%Y-12-01');

    SET currentMonth = startMonth;
    
    SET MonthNumber = 1;
    
    DROP TEMPORARY TABLE IF EXISTS MonthTotals;
    CREATE TEMPORARY TABLE MonthTotals (MonthNumber INT, TotalPrice BIGINT);

    WHILE currentMonth <= endMonth DO
        SET MonthTotal = 0;
        
        SELECT SUM(Total_Price) INTO MonthTotal
        FROM Order_ 
        where year(Order_.Day) = year(currentMonth) and month(Order_.Day) = month(currentMonth);
		
		IF MonthTotal is null THEN
			SET MonthTotal = 0;
        END IF;
    
        INSERT INTO MonthTotals (MonthNumber, TotalPrice) VALUES (MonthNumber, MonthTotal);

        SET currentMonth = DATE_ADD(currentMonth, INTERVAL 1 month);
        
        SET MonthNumber = MonthNumber + 1;
                
    END WHILE;

    SELECT we.MonthNumber as value , we.TotalPrice as totalPrice FROM MonthTotals as we;
    
    DROP TEMPORARY TABLE IF EXISTS MonthTotals;
END//
DELIMITER ;

-- --------------------------
-- hàm tính doanh thu của quí 4 tháng trong năm
DELIMITER //
CREATE PROCEDURE GetTotalPriceByQuater(IN inputDate DATE)
BEGIN
    DECLARE startMonth DATE;
    DECLARE endMonth DATE;
    DECLARE currentMonth DATE;
    DECLARE nextMonth DATE;
    DECLARE QuaterNumber INT;
    DECLARE QuaterTotal BIGINT;

    SET startMonth = DATE_FORMAT(inputDate, '%Y-01-01');
    SET endMonth = DATE_FORMAT(inputDate, '%Y-12-01');

    SET currentMonth = startMonth;
    
    SET QuaterNumber = 1;
    
    DROP TEMPORARY TABLE IF EXISTS QuaterTotals;
    CREATE TEMPORARY TABLE QuaterTotals (QuaterNumber INT, TotalPrice BIGINT);

    WHILE currentMonth <= endMonth DO
        SET QuaterTotal = 0;
        
        set nextMonth = DATE_ADD(currentMonth, INTERVAL 2 month);
        
        SELECT SUM(Total_Price) INTO QuaterTotal
        FROM Order_ 
        where year(Order_.Day) = year(currentMonth) and ( 
        month(Order_.Day) >= month(currentMonth) 
        and month(Order_.Day) <= month(nextMonth) ) ;
		
		IF QuaterTotal is null THEN
			SET QuaterTotal = 0;
        END IF;
    
        INSERT INTO QuaterTotals (QuaterNumber, TotalPrice) VALUES (QuaterNumber, QuaterTotal);

        SET currentMonth = DATE_ADD(currentMonth, INTERVAL 3 month);
        
        SET QuaterNumber = QuaterNumber + 1;
                
    END WHILE;

    SELECT we.QuaterNumber as value , we.TotalPrice as totalPrice FROM QuaterTotals as we;
    
    DROP TEMPORARY TABLE IF EXISTS QuaterTotals;
END //

DELIMITER ;


-- -----------------------------------------------------------
-- hàm tính doanh thu trong tất cả các năm 
DELIMITER //
CREATE PROCEDURE GetTotalPriceByYear()
BEGIN
    DECLARE startYear YEAR;
    DECLARE endYear YEAR;
    DECLARE currentYear YEAR;
    DECLARE nextYear YEAR;
    DECLARE YearNumber YEAR;
    DECLARE YearTotal BIGINT;
	
	SELECT DATE_FORMAT( Min(day),'%Y') into startYear FROM Order_;
	SELECT DATE_FORMAT( Max(day),'%Y') into endYear FROM Order_;
    
    SET currentYear = startYear;
    
    SET YearNumber = startYear;
    
    
    DROP TEMPORARY TABLE IF EXISTS YearTotals;
    CREATE TEMPORARY TABLE YearTotals (YearNumber YEAR, TotalPrice BIGINT);

    WHILE currentYear <= endYear DO
        SET YearTotal = 0;
        
        SELECT SUM(Total_Price) INTO YearTotal
        FROM Order_  as Od
        where DATE_FORMAT(Od.Day,'%Y') = currentYear;
        
        /* -- 1 cách nào đó tùy phiên bản mysql nó lại chịu cái này và ngược lại 
        SELECT SUM(Total_Price) INTO YearTotal
        FROM Order_ 
        where year(Order_.Day) = currentYear;
		*/
        
		IF YearTotal is null THEN
			SET YearTotal = 0;
        END IF;
    
        INSERT INTO YearTotals (YearNumber, TotalPrice) VALUES (YearNumber, YearTotal);

        SET currentYear = currentYear + 1;
        
        SET YearNumber = YearNumber + 1;
                
    END WHILE;

    SELECT we.YearNumber as value , we.TotalPrice as totalPrice FROM YearTotals as we;
    
    DROP TEMPORARY TABLE IF EXISTS YearTotals;
    
END //

DELIMITER ;


-- ----------------
-- trả về loại hạng của khách 
DELIMITER //
CREATE PROCEDURE GetGuessType(IN AccID varchar(50))
BEGIN
	DECLARE Num int;
    DECLARE Price int;
    DECLARE Id int;
    DECLARE MaxId int;
    DECLARE CurPoint int;
    DECLARE AccountType varchar(50);
    DECLARE Percent int;

	select count(Order_.OrderID) into Num
	from Order_
	where (Order_.AccountID = AccID) and (Order_.Total_Price > 500);
    
    select count(gt.TypeID) into  MaxId
    from Guess_Type as gt;
    
    set ID = 1;
    while Id <= MaxId do

        select gt.PointUpgrade  into CurPoint
		from Guess_Type as gt
		where gt.TypeID = ID;
        
        if num = CurPoint then
         select gt.TypeName as Type
		 from Guess_Type as gt
		 where gt.TypeID = ID;
         set ID = ID + MaxId;
         
         elseif num > CurPoint  and Id + 1 <= MaxId then set ID = ID + 1;
         
         elseif num > CurPoint  and Id + 1 > MaxId then 
         select gt.TypeName as Type
		 from Guess_Type as gt
		 where gt.TypeID = ID;
         set ID = ID + MaxId;
         
         elseif num < CurPoint then 
         set ID = ID - 1;
         select gt.TypeName as Type
		 from Guess_Type as gt
		 where gt.TypeID = ID;
         set ID = ID + MaxId;
         

        end if;

    end while;
    
    
    
END //

DELIMITER ;
-- --------------------------------------------------------
-- lấy thông tin cơ bản của 1 Account
DELIMITER //
CREATE PROCEDURE GetAccountInfo(IN AccID varchar(50))
BEGIN
	DECLARE Num int;
    DECLARE Price int;
    DECLARE Id int;
    DECLARE MaxId int;
    DECLARE CurPoint int;
    DECLARE AccountType varchar(50);
    DECLARE Percent int;
    

	select count(Order_.OrderID) into Num
	from Order_
	where (Order_.AccountID = AccID) and (Order_.Total_Price > 500);
    
    select count(gt.TypeID) into  MaxId
    from Guess_Type as gt;
    
    set ID = 1;
    while Id <= MaxId do

        select gt.PointUpgrade  into CurPoint
		from Guess_Type as gt
		where gt.TypeID = ID;
        
        if num = CurPoint then
         select gt.TypeName , gt.PointPercent into AccountType , Percent
		 from Guess_Type as gt
		 where gt.TypeID = ID;
         set ID = ID + MaxId;
         
         elseif num > CurPoint  and Id + 1 <= MaxId then set ID = ID + 1;
         
         elseif num > CurPoint  and Id + 1 > MaxId then 
         select gt.TypeName , gt.PointPercent into AccountType , Percent
		 from Guess_Type as gt
		 where gt.TypeID = ID;
         set ID = ID + MaxId;
         
         elseif num < CurPoint then 
         set ID = ID - 1;
         select gt.TypeName , gt.PointPercent into AccountType , Percent
		 from Guess_Type as gt
		 where gt.TypeID = ID;
         set ID = ID + MaxId;
         

        end if;

    end while;
    
    select *, AccountType, Percent
    from Account as Ac
    where Ac.AccountID = AccID;
    
    
END //

DELIMITER ;

-- ------------------------------------------------------
-- lấy loại khách nhưng là fuction
DELIMITER //
CREATE FUNCTION GetGuessTypeFunction(AccID varchar(50)) RETURNS varchar(50)
BEGIN
    DECLARE Num int;
    DECLARE Price int;
    DECLARE Id int;
    DECLARE MaxId int;
    DECLARE CurPoint int;
    DECLARE AccountType varchar(50);
    DECLARE Percent int;
    DECLARE GuessedType varchar(50);

    SELECT COUNT(Order_.OrderID) INTO Num
    FROM Order_
    WHERE (Order_.AccountID = AccID) AND (Order_.Total_Price > 500);

    SELECT COUNT(gt.TypeID) INTO MaxId
    FROM Guess_Type as gt;

    SET ID = 1;
    WHILE Id <= MaxId DO
        SELECT gt.PointUpgrade INTO CurPoint
        FROM Guess_Type as gt
        WHERE gt.TypeID = ID;

        IF num = CurPoint THEN
            SELECT gt.TypeName INTO GuessedType
            FROM Guess_Type as gt
            WHERE gt.TypeID = ID;
            SET ID = ID + MaxId;

        ELSEIF num > CurPoint AND Id + 1 <= MaxId THEN
            SET ID = ID + 1;

        ELSEIF num > CurPoint AND Id + 1 > MaxId THEN
            SELECT gt.TypeName INTO GuessedType
            FROM Guess_Type as gt
            WHERE gt.TypeID = ID;
            SET ID = ID + MaxId;

        ELSEIF num < CurPoint THEN
            SET ID = ID - 1;
            SELECT gt.TypeName INTO GuessedType
            FROM Guess_Type as gt
            WHERE gt.TypeID = ID;
            SET ID = ID + MaxId;

        END IF;

    END WHILE;

    RETURN GuessedType;
END //
DELIMITER ;


-- ------------------------------------------------------
-- Tính điểm tích lũy sau khi thanh toán đơn
DELIMITER //
CREATE PROCEDURE CalPoint(IN OrderID varchar(50))
BEGIN
	declare Point int;
    declare AccID varchar(50);
    declare Guesstype varchar(50);
    declare PercentType int;
    declare Bill bigint;
    declare temp bigint;
    
    -- Lấy số bill qui ra điểm 
    select Order_.AccountID into AccID from Order_ where Order_.OrderID = OrderID;
    select Order_.Total_Price into Bill from Order_ where Order_.OrderID = OrderID;
    
    If AccID is not Null then
    Set Guesstype = GetGuessTypeFunction(AccID);
    
    select gt.PointUpgrade into PercentType
    from Guess_Type as gt
    where gt.TypeName = Guesstype;
    
    set Bill = Bill * PercentType/100;
    
    -- lấy các loại cate qui ra điểm 
    
    SELECT sum(ca.PointAdd) into temp
	FROM Order_Details as od, Item as it, Category as ca
	WHERE od.OrderID = OrderID and od.ItemID = it.ItemID and it.CateID = ca.CateID;
    
    set Bill = Bill + temp;
    
    -- lấy số lượng món để ra điểm
    
    SELECT sum(od.Quantity) into temp
	FROM Order_Details as od
	WHERE od.OrderID =  OrderID; 
    
    set Bill = Bill + temp;
    
    select Bill as Result;
    
    update Account 
    set Money = Money + Bill
    where AccountID = AccID;
    
    elseif AccID is Null then
    select 0 as Result;
    
    end if;
    

END //

DELIMITER ;

-- ------------------------------------------------------
-- Thêm 1 món vào WishList
DELIMITER //
CREATE PROCEDURE AddItemWishList(
	IN AccID varchar(50),
    ItID varchar(50)
)
BEGIN
	DECLARE AccCount INT;
    DECLARE ItemCount INT;
	SELECT COUNT(*) INTO AccCount FROM Account as ac WHERE ac.AccountID = AccID;
	SELECT COUNT(*) INTO ItemCount FROM Item as It WHERE It.ItemID = ItID;
    
	IF AccCount != 0 and ItemCount !=0 THEN
		insert into WishList (AccountID ,ItemID)
        values (AccID, ItID);
        select 1;
	elseif AccCount = 0 or ItemCount =0 then
		select 0;
    end if;
END //

DELIMITER ;
-- ------------------------------------------------------
-- Xóa 1 món khỏi WishList
DELIMITER //
CREATE PROCEDURE RemoveItemWishList(
	IN AccID varchar(50),
    ItID varchar(50)
)
BEGIN
	DECLARE AccCount INT;
    DECLARE ItemCount INT;
	SELECT COUNT(*) INTO AccCount FROM Account as ac WHERE ac.AccountID = AccID;
	SELECT COUNT(*) INTO ItemCount FROM Item as It WHERE It.ItemID = ItID;
    
	IF AccCount != 0 and ItemCount !=0 THEN
		DELETE FROM WishList
		WHERE AccountID = AccID and ItemID = ItID;
        select 1;
	elseif AccCount = 0 or ItemCount =0 then
		select 0;
    end if;
END //

DELIMITER ;
-- -----------------------------------------------------------
-- Lấy thông tin WishList của 1 user 
DELIMITER //
CREATE PROCEDURE ViewItemWishList(
	IN AccID varchar(50)
)
BEGIN
	DECLARE AccCount INT;    
	SELECT COUNT(*) INTO AccCount FROM Account as ac WHERE ac.AccountID = AccID;

	IF AccCount != 0  THEN
		SELECT count(It.ItemID) as Quantity
		FROM WishList as wi, Item as It, Category as Ca, Producer as pro
		WHERE wi.AccountID = AccID and wi.ItemID = It.ItemID and It.CateID = Ca.CateID and It.ProDucerID = pro.ProducerID;
    
		SELECT  It.ItemID, It.Name, It.Price, It.Description, It.Status, Ca.Name as Category, pro.Name as Producer,  Ip.Content as Pic
		FROM WishList as wi, Item as It, Category as Ca, Producer as pro, Item_Picture as Ip
		WHERE wi.AccountID = AccID and wi.ItemID = It.ItemID and It.CateID = Ca.CateID and It.ProDucerID = pro.ProducerID and Ip.Content = (Select MAX(Ip.Content)
		from Item_Picture as Ip	
where Ip.ItemID = wi.ItemID);
	elseif AccCount = 0  then
		select 0;
    end if;
END //

DELIMITER ;
