-- nhóm 4 
-- file data 

insert into Category (CateID, Name)
values ('Cate1', 'Laptop'),
		('Cate2', 'HeadPhone'),
        ('Cate3', 'Mouse'),
        ('Cate4', 'Keyboard');
        
insert into Producer (ProducerID, Name, Adress, Email)
values  ('Pro1', 'Sony', 'Minato City, Tokyo, Japan', 'Sony@gmail.com'),
		('Pro2', 'Hp', 'Palo Alto, California, United States', 'Hp@gmail.com'),
        ('Pro3', 'Asus', 'Beitou District, Taipei, Taiwan', 'Asus@gmail.com' ),
        ('Pro4', 'Apple', '1 Infinite Loop, Cupertino, California, United States', 'Apple@gmail.com' ),
        ('Pro5', 'Logitech', 'Lausanne, Switzerland', 'Logitech@gmail.com' );
        
insert into Item (ItemID, Name, Price, Description, Color, Status, CateID, ProducerID)
values  ('Item1', 'Laptop HP 15s-fq2712TU', 9999000, 'i3-1115G4/ RAM 8GB/ 256GB SSD/ Windows 11', 'Silver', 'Available', 'Cate1', 'Pro2'),
		('Item2', 'Laptop HP Spectre x360 14-ef0030TU', 45190000, 'i7-1255U/ RAM 16GB/ 1TB SSD/ Windows 11', 'Blue', 'Available', 'Cate1', 'Pro2'),
		('Item3', 'Laptop ASUS Vivobook X415EA-EK675W', 9690000, 'i3-1115G4/ RAM 4GB/ 256GB SSD/ Windows 11', 'Silver', 'Available', 'Cate1', 'Pro3'),
		('Item4', 'Laptop ASUS ROG Flow X16 GV601VV-NL016W', 60990000, 'i9-13900H/ RAM 16GB/ 1TB SSD/ Windows 11', 'Black', 'Available', 'Cate1', 'Pro3'),
		('Item5', 'Head Phone In-ear Sony MDR-EX15APBZE', 199000, 'In-ear/ 3.5 mm/ wired/ No LED/ No Micro', 'Black', 'Available', 'Cate2', 'Pro1'),
		('Item6', 'Head Phone INZONE H7 SONY WH-G700/WZ', 5300000, 'Over-ear/ Bluetooth/ Wireless/ No LED/ Micro', 'White', 'Available', 'Cate2', 'Pro1'),
		('Item7', 'Gaming mouse ASUS GT200', 299000, 'Gaming/ USB 2.0/ wired/ Switch Omron', 'Black', 'Available', 'Cate3', 'Pro3'),
		('Item8', 'Gaming mouse ASUS Gladius III WL Aimpoint', 2749000, 'Gaming/ USB, Bluetooth/ 2.4 GHz Wireless/ 19.000 dpi', 'Black', 'Available', 'Cate3', 'Pro3'),
		('Item9', 'Prodigy G213 Full-size', 1182025, 'Gaming/ Wired / Membrane/ RGB Backlighting', 'Black', 'Available', 'Cate4', 'Pro5'),
		('Item10', 'ERGO K860 Ergonomic Full-size', 2576814, 'Wireless/ Windows and Mac/ Palm Rest', 'Black', 'Available', 'Cate4', 'Pro5'),
		('Item11', 'MX Keys S Advanced Full-size', 2600455, 'Wireless Scissor Keyboard/ PC and Mac/ Backlit keys', 'Black', 'Available', 'Cate4', 'Pro5'),
		('Item12', 'MX Mechanical Full size', 3806120, 'Wireless Mechanical Tactile Switch/ Windows and Mac/ Backlit Keys', 'Graphite', 'Available', 'Cate4', 'Pro5'),
		('Item13', 'K380 TKL', 709215, 'Wireless Scissor Keyboard/ PC/ Laptop/ Windows/ Mac/ Android/ iPad/ Apple TV', 'Gray', 'Available', 'Cate4', 'Pro5'),
		('Item14', 'Magic Keyboard with Numeric Keypad', 3073265, 'Wireless  Scissor Keyboard/ Mac computer/  iOS', 'Silver', 'Available', 'Cate4', 'Pro4'),
		('Item15', 'Magic Keyboard', 2364050, 'Wireless  Scissor Keyboard/ Mac computer/  iOS', 'Silver', 'Available', 'Cate4', 'Pro4'),
		('Item16', 'Magic Keyboard with Touch ID and Numeric Keypad', 4728100, 'Wireless  Scissor Keyboard/ Mac computer/  iOS', 'Black', 'Available', 'Cate4', 'Pro4'),
		('Item17', 'Magic Keyboard with Touch ID', 3546075, 'Wireless  Scissor Keyboard/ Mac computer/  iOS', 'Silver', 'Available', 'Cate4', 'Pro4'),
		('Item18', 'MacBook Air 13.6 inch Laptop', 23640500, 'Apple M2 chip - 8GB Memory - 256GB SSD', 'Silver', 'Available', 'Cate1', 'Pro4'),
		('Item19', 'MacBook Pro 1 Laptop', 42552900, 'M2 Pro chip - 16GB Memory - 512GB SSD', 'Gray', 'Available', 'Cate1', 'Pro4'),
		('Item20', 'MacBook Air 15 inch Laptop', 35460750, 'M2 chip - 8GB Memory - 512GB SSD', 'Starlight', 'Available', 'Cate1', 'Pro4'),
		('Item21', 'MacBook Pro 16 inch Laptop', 59101250, 'M2 Pro chip - 16GB Memory - 512GB SSD', 'Gray', 'Available', 'Cate1', 'Pro4'),
		('Item22', 'MacBook Pro 14 inch Laptop', 54373150, 'M2 Pro chip - 16GB Memory - 512GB SSD', 'Gray', 'Available', 'Cate1', 'Pro4'),
		('Item23', 'TUF Gaming A16 16 inch 165Hz Gaming Laptop', 21276450, 'FHD-AMD Ryzen 7 7735HS with 16GB DDR5 Memory- Radeon RX7600S 512GB PCIe SSD', 'Black', 'Available', 'Cate1', 'Pro3'),
		('Item24', 'Vivobook 14 inch Laptop', 6619340, 'Intel Core 11th Gen i3 with 8GB Memory - 128GB SSD', 'Silver', 'Available', 'Cate1', 'Pro3'),
		('Item25', 'Zenbook 14" 2.8K OLED Laptop', 13002275, 'Intel Evo Platform - 12th Gen Core i5 Processor - 8GB Memory - 256GB SSD', 'Blue', 'Available', 'Cate1', 'Pro3'),
		('Item26', 'ROG Zephyrus 1  inch240Hz Gaming Laptop QHD', 37824800, 'Intel 13th Gen Core i9 with 16GB Memory - NVIDIA GeForce RTX 4070 - 1TB SSD', 'Black', 'Available', 'Cate1', 'Pro3'),
		('Item27', '17.3 inch Chromebook', 5910125, 'Intel Celeron N4500 with 4GB Memory - 64GB', 'Gray', 'Available', 'Cate1', 'Pro3'),
		('Item28', 'HP  14 inch Laptop', 3546000, 'Intel Celeron - 4GB Memory - 64GB eMMC', 'White', 'Available', 'Cate1', 'Pro2'),
		('Item29', 'HP 15.6 inch Touch-Screen Laptop', 15366000, 'Intel Core i7 - 16GB Memory - 512GB SSD', 'Silver', 'Available', 'Cate1', 'Pro2'),
		('Item30', 'HP ENVY 2-in-1 14 inch Full HD Touch-Screen Laptop', 15602400, 'Intel Core i5 - 8GB Memory - 512GB SSD', 'Silver', 'Available', 'Cate1', 'Pro2'),
		('Item31', 'HP 17.3 inch HD+ Laptop', 9456000, 'HP - 17.3" HD+ Laptop', 'Silver', 'Available', 'Cate1', 'Pro2'),
		('Item32', 'HP Pavilion - 2-in-1 14 inch FHD Laptop', 8983200, 'Intel Core i3 - 8GB Memory - 256GB SSD', 'Blue', 'Available', 'Cate1', 'Pro2');
	
    
INSERT INTO Item_Picture (PictureID, Name, Content, ItemID)
VALUES
    ('Pic1', 'Laptop HP 15s-fq2712TU', 'https://shorturl.at/foCQY', 'Item1'),
    ('Pic2', 'Laptop HP Spectre x360 14-ef0030TU', 'https://shorturl.at/LMXY4', 'Item2'),
    ('Pic3', 'Laptop ASUS Vivobook X415EA-EK675W', 'https://shorturl.at/gyQTX', 'Item3'),
    ('Pic4', 'Laptop ASUS ROG Flow X16 GV601VV-NL016W', 'https://shorturl.at/bkX26', 'Item4'),
    ('Pic5', 'Head Phone In-ear Sony MDR-EX15APBZE', 'https://shorturl.at/ouT36', 'Item5'),
    ('Pic6', 'Head Phone INZONE H7 SONY WH-G700/WZ', 'https://shorturl.at/anrxW', 'Item6'),
    ('Pic7', 'Gaming mouse ASUS GT200', 'https://shorturl.at/abiIL', 'Item7'),
    ('Pic8', 'Gaming mouse ASUS Gladius III WL Aimpoint', 'https://shorturl.at/lvEFO', 'Item8'),
    ('Pic9', 'Prodigy G213 Full-size', 'https://shorturl.at/abBP4', 'Item9'),
    ('Pic10', 'Prodigy G213 Full-size', 'https://shorturl.at/rGQS1', 'Item9'),
    ('Pic11', 'Prodigy G213 Full-size', 'https://shorturl.at/qENU8', 'Item9'),
    ('Pic12', 'ERGO K860 Ergonomic Full-size', 'https://shorturl.at/ajkwQ', 'Item10'),
    ('Pic13', 'ERGO K860 Ergonomic Full-size', 'https://shorturl.at/kzCKW', 'Item10'),
    ('Pic14', 'ERGO K860 Ergonomic Full-size', 'https://shorturl.at/sGKV3', 'Item10'),
    ('Pic15', 'MX Keys S Advanced Full-size', 'https://shorturl.at/fEQU0', 'Item11'),
    ('Pic16', 'MX Keys S Advanced Full-size', 'https://shorturl.at/bgnzC', 'Item11'),
    ('Pic17', 'MX Keys S Advanced Full-size', 'https://shorturl.at/gxSY7', 'Item11'),
    ('Pic18', 'MX Mechanical Full size', 'https://shorturl.at/iJSZ3', 'Item12'),
    ('Pic19', 'MX Mechanical Full size', 'https://shorturl.at/gpHW1', 'Item12'),
    ('Pic20', 'MX Mechanical Full size', 'https://shorturl.at/fgqCR', 'Item12'),
    ('Pic21', 'K380 TKL', 'https://shorturl.at/ituSX', 'Item13'),
    ('Pic22', 'K380 TKL', 'https://shorturl.at/bdeGO', 'Item13'),
    ('Pic23', 'K380 TKL', 'https://shorturl.at/joAMN', 'Item13'),
    ('Pic24', 'Magic Keyboard with Numeric Keypad', 'https://shorturl.at/ixBF8', 'Item14'),
    ('Pic25', 'Magic Keyboard with Numeric Keypad', 'https://shorturl.at/jrzX1', 'Item14'),
    ('Pic26', 'Magic Keyboard with Numeric Keypad', 'https://shorturl.at/jzRV6', 'Item14'),
    ('Pic27', 'Magic Keyboard', 'https://shorturl.at/enIJ7', 'Item15'),
    ('Pic28', 'Magic Keyboard', 'https://shorturl.at/kpCKN', 'Item15'),
    ('Pic29', 'Magic Keyboard', 'https://shorturl.at/dlHWZ', 'Item15'),
    ('Pic30', 'Magic Keyboard with Touch ID and Numeric Keypad', 'https://shorturl.at/jzEK8', 'Item16'),
    ('Pic31', 'Magic Keyboard with Touch ID and Numeric Keypad', 'https://shorturl.at/bwGU1', 'Item16'),
    ('Pic32', 'Magic Keyboard with Touch ID and Numeric Keypad', 'https://shorturl.at/nwKQ4', 'Item16'),
    ('Pic33', 'Magic Keyboard with Touch ID', 'https://shorturl.at/lpzHI', 'Item17'),
    ('Pic34', 'Magic Keyboard with Touch ID', 'https://shorturl.at/hLN68', 'Item17'),
    ('Pic35', 'Magic Keyboard with Touch ID', 'https://shorturl.at/oCFQ1', 'Item17'),
    ('Pic36', 'MacBook Air 13.6 inch Laptop', 'https://shorturl.at/ahpqT', 'Item18'),
    ('Pic37', 'MacBook Air 13.6 inch Laptop', 'https://shorturl.at/bsE15', 'Item18'),
    ('Pic38', 'MacBook Air 13.6 inch Laptop', 'https://shorturl.at/puORW', 'Item18'),
    ('Pic39', 'MacBook Pro 1 Laptop', 'https://shorturl.at/lwFV6', 'Item19'),
    ('Pic40', 'MacBook Pro 1 Laptop', 'https://shorturl.at/afkO8', 'Item19'),
    ('Pic41', 'MacBook Pro 1 Laptop', 'https://shorturl.at/degkA', 'Item19'),
    ('Pic42', 'MacBook Air 15 inch Laptop', 'https://shorturl.at/nxJLP', 'Item20'),
    ('Pic43', 'MacBook Air 15 inch Laptop', 'https://shorturl.at/ajmDG', 'Item20'),
    ('Pic44', 'MacBook Air 15 inch Laptop', 'https://shorturl.at/efHKN', 'Item20'),
    ('Pic45', 'MacBook Pro 16 inch Laptop', 'https://shorturl.at/bjpD9', 'Item21'),
    ('Pic46', 'MacBook Pro 16 inch Laptop', 'https://shorturl.at/jnrMZ', 'Item21'),
    ('Pic47', 'MacBook Pro 16 inch Laptop', 'https://shorturl.at/bBGWX', 'Item21'),
    ('Pic48', 'MacBook Pro 14 inch Laptop', 'https://shorturl.at/mqMSU', 'Item22'),
    ('Pic49', 'MacBook Pro 14 inch Laptop', 'https://shorturl.at/ioFM8', 'Item22'),
    ('Pic50', 'MacBook Pro 14 inch Laptop', 'https://shorturl.at/amKW5', 'Item22'),
    ('Pic51', 'TUF Gaming A16 16 inch 165Hz Gaming Laptop', 'https://shorturl.at/cjmC4', 'Item23'),
    ('Pic52', 'TUF Gaming A16 16 inch 165Hz Gaming Laptop', 'https://shorturl.at/ftxCR', 'Item23'),
    ('Pic53', 'TUF Gaming A16 16 inch 165Hz Gaming Laptop', 'https://shorturl.at/amDT6', 'Item23'),
    ('Pic54', 'Vivobook 14 inch Laptop', 'https://shorturl.at/tCHJ1', 'Item24'),
    ('Pic55', 'Vivobook 14 inch Laptop', 'https://shorturl.at/wACD7', 'Item24'),
    ('Pic56', 'Vivobook 14 inch Laptop', 'https://shorturl.at/hDFGW', 'Item24'),
    ('Pic57', 'Zenbook 14" 2.8K OLED Laptop', 'https://shorturl.at/goxO1', 'Item25'),
    ('Pic58', 'Zenbook 14" 2.8K OLED Laptop', 'https://shorturl.at/chEK4', 'Item25'),
    ('Pic59', 'Zenbook 14" 2.8K OLED Laptop', 'https://shorturl.at/mpFO7', 'Item25'),
    ('Pic60', 'ROG Zephyrus 1 inch 240Hz Gaming Laptop QHD', 'https://shorturl.at/fASV0', 'Item26'),
    ('Pic61', 'ROG Zephyrus 1 inch 240Hz Gaming Laptop QHD', 'https://shorturl.at/eqtX6', 'Item26'),
    ('Pic62', 'ROG Zephyrus 1 inch 240Hz Gaming Laptop QHD', 'https://shorturl.at/dI039', 'Item26'),
    ('Pic63', '17.3 inch Chromebook', 'https://shorturl.at/BNUZ9', 'Item27'),
    ('Pic64', '17.3 inch Chromebook', 'https://shorturl.at/hyKN4', 'Item27'),
    ('Pic65', '17.3 inch Chromebook', 'https://shorturl.at/aqQUV', 'Item27'),
    ('Pic66', 'HP 14 inch Laptop', 'https://shorturl.at/sNTX6', 'Item28'),
    ('Pic67', 'HP 14 inch Laptop', 'https://shorturl.at/mzA57', 'Item28'),
    ('Pic68', 'HP 14 inch Laptop', 'https://shorturl.at/yFGHY', 'Item28'),
    ('Pic69', 'HP 15.6 inch Touch-Screen Laptop', 'https://shorturl.at/jFGL0', 'Item29'),
    ('Pic70', 'HP 15.6 inch Touch-Screen Laptop', 'https://shorturl.at/imnIZ', 'Item29'),
    ('Pic71', 'HP 15.6 inch Touch-Screen Laptop', 'https://shorturl.at/bexXZ', 'Item29'),
    ('Pic72', 'HP ENVY 2-in-1 14 inch Full HD Touch-Screen Laptop', 'https://shorturl.at/kmJP1', 'Item30'),
    ('Pic73', 'HP ENVY 2-in-1 14 inch Full HD Touch-Screen Laptop', 'https://shorturl.at/jnFM2', 'Item30'),
    ('Pic74', 'HP ENVY 2-in-1 14 inch Full HD Touch-Screen Laptop', 'https://shorturl.at/fzOY0', 'Item30'),
    ('Pic75', 'HP 17.3 inch HD+ Laptop', 'https://shorturl.at/ghz29', 'Item31'),
    ('Pic76', 'HP 17.3 inch HD+ Laptop', 'https://shorturl.at/cjIN1', 'Item31'),
    ('Pic77', 'HP 17.3 inch HD+ Laptop', 'https://shorturl.at/DGR24', 'Item31'),
    ('Pic78', 'HP Pavilion - 2-in-1 14 inch FHD Laptop', 'https://shorturl.at/knvU1', 'Item32'),
    ('Pic79', 'HP Pavilion - 2-in-1 14 inch FHD Laptop', 'https://shorturl.at/izBW2', 'Item32'),
    ('Pic80', 'HP Pavilion - 2-in-1 14 inch FHD Laptop', 'https://shorturl.at/prPW0', 'Item32');

        
insert into Account (AccountID, UserName, Password, Name, Birth, Money, Email, Phone, Adress)
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

insert into	Return_Item (ItemID, OrderID,  ReturnDate, Status, comment)
values ('Item6', 'Order4', '2023-03-25', 'Returned', 'Not working');

insert into Cart (CartID, day, status, AccountID)
values  ('Cart1', '2023-06-21', 'saved', 'Acc1'),
		('Cart2', '2023-06-22', 'saved', 'Acc2'),
        ('Cart3', '2023-06-23', 'saved', 'Acc3');

INSERT INTO Cart_Detail (CartID, itemID, Quantity)
VALUES  ('Cart1', 'Item1', 2),
        ('Cart2', 'Item2', 1),
		('Cart3', 'Item3', 3);
        
        



 
 
	



