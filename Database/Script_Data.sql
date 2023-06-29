-- nhóm 4 
-- file data 

insert into category (CateID, Name)
values ('Cate1', 'Laptop'),
		('Cate2', 'HeadPhone'),
        ('Cate3', 'Mouse');
        
insert into producer (ProducerID, Name, Adress, Email)
values  ('Pro1', 'Sony', 'Minato City, Tokyo, Japan', 'Sony@gmail.com'),
		('Pro2', 'Hp', 'Palo Alto, California, United States', 'Hp@gmail.com'),
        ('Pro3', 'Asus', 'Beitou District, Taipei, Taiwan', 'Asus@gmail.com' );
        
insert into item (ItemID, Name, Price, Description, Color, Status, CateID, ProducerID)
values  ('Item1', 'Laptop HP 15s-fq2712TU', 9999000, 'i3-1115G4/ RAM 8GB/ 256GB SSD/ Windows 11', 'Silver', 'Available', 'Cate1', 'Pro2'),
		('Item2', 'Laptop HP Spectre x360 14-ef0030TU', 45190000, 'i7-1255U/ RAM 16GB/ 1TB SSD/ Windows 11', 'Blue', 'Available', 'Cate1', 'Pro2'),
		('Item3', 'Laptop ASUS Vivobook X415EA-EK675W', 9690000, 'i3-1115G4/ RAM 4GB/ 256GB SSD/ Windows 11', 'Silver', 'Available', 'Cate1', 'Pro3'),
		('Item4', 'Laptop ASUS ROG Flow X16 GV601VV-NL016W', 60990000, 'i9-13900H/ RAM 16GB/ 1TB SSD/ Windows 11', 'Black', 'Available', 'Cate1', 'Pro3'),
		('Item5', 'Head Phone In-ear Sony MDR-EX15APBZE', 199000, 'In-ear/ 3.5 mm/ wired/ No LED/ No Micro', 'Black', 'Available', 'Cate2', 'Pro1'),
		('Item6', 'Head Phone INZONE H7 SONY WH-G700/WZ', 5300000, 'Over-ear/ Bluetooth/ Wireless/ No LED/ Micro', 'White', 'Available', 'Cate2', 'Pro1'),
		('Item7', 'Gaming mouse ASUS GT200', 299000, 'Gaming/ USB 2.0/ wired/ Switch Omron', 'Black', 'Available', 'Cate3', 'Pro3'),
		('Item8', 'Gaming mouse ASUS Gladius III WL Aimpoint', 2749000, 'Gaming/ USB, Bluetooth/ 2.4 GHz Wireless/ 19.000 dpi', 'Black', 'Available', 'Cate3', 'Pro3');
        
insert into item_picture (PictureID, Name, Content, ItemID)
values  ('Pic1', 'Laptop HP 15s-fq2712TU', 'https://shorturl.at/foCQY', 'Item1'),
		('Pic2', 'Laptop HP Spectre x360 14-ef0030TU', 'https://shorturl.at/LMXY4', 'Item2'),
		('Pic3', 'Laptop ASUS Vivobook X415EA-EK675W', 'https://shorturl.at/gyQTX', 'Item3'),
		('Pic4', 'Laptop ASUS ROG Flow X16 GV601VV-NL016W', 'https://shorturl.at/bkX26', 'Item4'),
		('Pic5', 'Head Phone In-ear Sony MDR-EX15APBZE', 'https://shorturl.at/ouT36', 'Item5'),
		('Pic6', 'Head Phone INZONE H7 SONY WH-G700/WZ', 'https://shorturl.at/anrxW', 'Item6'),
		('Pic7', 'Gaming mouse ASUS GT200', 'https://shorturl.at/abiIL', 'Item7'),
		('Pic8', 'Gaming mouse ASUS Gladius III WL Aimpoint', 'https://shorturl.at/lvEFO', 'Item8');
        
insert into account (AccountID, UserName, Password, Name, Birth, Money, Email, Phone, Adress)
values ('Acc1', 'john_doe', 'password1', 'John Doe', '1990-01-01', 5000, 'john.doe@example.com', '123456789', '123 Main St'),
 ('Acc2', 'jane_smith', 'password2', 'Jane Smith', '1995-03-15', 10000, 'jane.smith@example.com', '987654321', '456 Elm St'),
 ('Acc3', 'bob_johnson', 'password3', 'Bob Johnson', '1988-07-10', 7500, 'bob.johnson@example.com', '555555555', '789 Oak St');
 
 INSERT INTO Order_ (OrderID, GuessName, Delivery_Address, Day, Phone, Note, Total_Price, Status, AccountID)
VALUES ('Order1', 'John Doe', '123 Main St', '2023-06-21', '123456789', 'Please deliver to the front door', 10497000, 'Pending', 'Acc1'),
		('Order2', 'Jane Smith', '456 Elm St', '2023-06-22', '987654321', 'Call upon arrival', 45190000, 'Processing', 'Acc2'),
		('Order3', 'Bob Johnson', '789 Oak St', '2023-06-23', '555555555', 'Leave package at the back porch', 9690000, 'Delivered', 'Acc3'),
		('Order4', 'Bob Johnson', '789 Oak St', '2023-03-23', '555555555', 'Leave package at the back porch', 5300000, 'Returned', 'Acc3');

insert into  Order_Details (ItemID, OrderID , Quantity, Price)
VALUES ('Item1', 'Order1', 1, 9999000),
		('Item7', 'Order1', 1, 299000),
		('Item5', 'Order1', 1, 199000),
		('Item2', 'Order2', 1, 45190000),
		('Item3', 'Order3', 1, 9690000),
		('Item6', 'Order4', 1, 5300000);
        
INSERT INTO Rate (RateID, AccountID, Point, Comment, Day, ItemID)
VALUES ('Rate1', 'Acc1', 4, 'Great product!', '2023-06-21', 'Item1'),
		('Rate2', 'Acc2', 3, 'Average experience.', '2023-06-22', 'Item2'),
		('Rate3', 'Acc3', 5, 'Excellent service!', '2023-06-23', 'Item3');

insert into	return_item (ItemID, OrderID,  ReturnDate, Status, comment)
values ('Item6', 'Order4', '2023-03-25', 'Returned', 'Not working');




 
 
	



