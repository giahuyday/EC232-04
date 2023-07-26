-- Nhóm 4  
-- file database

create table Account(
	AccountID varchar(50),
    UserName varchar(50),
    Password varchar(50),
    Name nvarchar(50),
    Birth date,
    Money bigint,
    Email varchar(50),
    Phone varchar(50),
    Adress nvarchar(100),
    
    primary key(AccountID)
);

create table Order_(
	OrderID varchar(50),
    GuessName nvarchar(50),
    Delivery_Address nvarchar(100),
    Day date,
    Phone varchar(50),
    note nvarchar(100),
    Total_Price bigint,
    Status nvarchar(100),
    
    AccountID varchar(50),
    
    primary key(OrderID)
);

ALTER TABLE Order_
ADD CONSTRAINT fk_Order__Account_1
FOREIGN KEY (AccountID) REFERENCES Account(AccountID);

create table Item(
	ItemID varchar(50),
    Name nvarchar(50),
    Price bigint,
    Description nvarchar(300),
    Color nvarchar(50),
    Status nvarchar(100),
    
    CateID varchar(50),
    ProDucerID varchar(50),
    
    primary key(ItemID)
);

create table Category(
	CateID varchar(50),
    Name nvarchar(50),
    Description nvarchar(300),
    
    primary key(CateID)
);

ALTER TABLE Item
ADD CONSTRAINT fk_Item_Category_1
FOREIGN KEY (CateID) REFERENCES Category(CateID);

create table Producer(
	ProducerID varchar(50),
    Name nvarchar(50),
    Email varchar(50),
    Adress nvarchar(100),
    
    primary key(ProducerID)
);

ALTER TABLE Item
ADD CONSTRAINT fk_Item_Producer_1
FOREIGN KEY (ProducerID) REFERENCES Producer(ProducerID);

create table Item_Picture(
	PictureID varchar(50),
    Name nvarchar(50),
    Content varchar(500),
    
    ItemID varchar(50),
    
    primary key(PictureID)
);


ALTER TABLE Item_Picture
ADD CONSTRAINT fk_Item_Picture_Item
FOREIGN KEY (ItemID) REFERENCES Item(ItemID);

create table Item_Discount(
	ItemID varchar(50),
    Discount int,
    
    primary key(ItemID)
);

ALTER TABLE Item_Discount
ADD CONSTRAINT fk_Item_Discount_Item
FOREIGN KEY (ItemID) REFERENCES Item(ItemID);


create table Return_Item(
	ItemID varchar(50),
    OrderID varchar(50),
    ReturnDate date,
    Status nvarchar(50),
    comment nvarchar(100),
    
    primary key(ItemID, OrderID)
);

ALTER TABLE Return_Item
ADD CONSTRAINT fk_ReturnItem_Item_1
FOREIGN KEY (ItemID) REFERENCES Item(ItemID);

ALTER TABLE Return_Item
ADD CONSTRAINT fk_ReturnItem_Order_1
FOREIGN KEY (OrderID) REFERENCES Order_(OrderID);

create table Order_Details(
	ItemID varchar(50),
    OrderID varchar(50),
    Quantity bigint,
    Price bigint,
    
	primary key(ItemID, OrderID)
);

ALTER TABLE Order_Details
ADD CONSTRAINT fk_OrderDetails_Item_1
FOREIGN KEY (ItemID) REFERENCES Item(ItemID);

ALTER TABLE Order_Details
ADD CONSTRAINT fk_OrderDetails_Order_1
FOREIGN KEY (OrderID) REFERENCES Order_(OrderID);

create table Rate(
	RateID varchar(50),
    AccountID varchar(50),
    point float,
    comment nvarchar(500),
    day date,
    
    ItemID varchar(50),
    
	primary key(RateID, AccountID)
);

ALTER TABLE Rate
ADD CONSTRAINT fk_Rate_Account_1
FOREIGN KEY (AccountID ) REFERENCES Account(AccountID );

ALTER TABLE Rate
ADD CONSTRAINT fk_Rate_Item_1
FOREIGN KEY (ItemID) REFERENCES Item(ItemID);

create table Cart(
	CartID varchar(50),
    day date,
    status nvarchar(50),
    AccountID varchar(50),
    
	primary key(CartID)
);

create table Cart_Detail(
	CartID varchar(50),
    ItemID varchar(50),
    Quantity bigint,
    
	primary key(ItemID, CartID)
);

ALTER TABLE Cart
ADD CONSTRAINT fk_Cart_Account_1
FOREIGN KEY (AccountID) REFERENCES Account(AccountID);

ALTER TABLE Cart_Detail
ADD CONSTRAINT fk_CartDetail_Cart_1
FOREIGN KEY (CartID) REFERENCES Cart(CartID);

ALTER TABLE Cart_Detail
ADD CONSTRAINT fk_CartDetail_item_1
FOREIGN KEY (itemID) REFERENCES item(itemID);


