const connection = require('../../Database/connecting.js');

exports.ProductsDetail = (req, res) => {
    console.log(req.body)
    const ItemID = req.params.ItemID
    connection.query('SELECT * FROM Item, Item_Picture WHERE Item.ItemID = ? AND Item.ItemID = Item_Picture.ItemID', [ItemID], (err, result) => {
        if (err) {
            console.log(err)
            res.send('Failed !')
        } else {
            if (result.length > 0) {
                console.log(result)
                res.send(result)
            } else {
                console.log(result)
                res.send('Failed !')
            }
        }
    })
}
exports.EditProductDetail = (req, res) => {
    console.log(req.body)
    const ItemID = req.params.ItemID
    const Name = req.body.Name
    const Price = req.body.Price
    const Description = req.body.Description
    const Color = req.body.Color
    const Status = req.body.Status
    const CateID = req.body.CateID
    const ProDucerID = req.body.ProDucerID
    console.log(Price)
    connection.query('UPDATE Item SET Item.Name=?, Item.Price=?, Item.Description=?, Item.Color=?, Item.Status=?, Item.CateID=?, Item.ProDucerID=? WHERE ItemID = ?', [Name, Price, Description, Color, Status, CateID, ProDucerID, ItemID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send('Update Product Accepted')
        }
    })
}

exports.AddProduct = (req, res) => {
    console.log(req.body)
    const Name = req.body.Name
    const Price = req.body.Price
    const Description = req.body.Description
    const Color = req.body.Color
    const Status = req.body.Status
    const CateID = req.body.CateID
    const ProDucerID = req.body.ProDucerID
    const Content = req.body.Content
    // console.log(Price)
    connection.query('CALL AddItem(?,?,?,?,?,?,?)', [Name, Price, Description, Color, Status, CateID, ProDucerID], (err, results) => {
        if (err) {
            console.log(err)
        }
        const result = Object.values(results[0][0])[0];

        if (results === 0) {
            console.log('Category or producer is wrong.');
        } else {
            console.log(results)
            console.log('New Item created. New id is: ', result);
            connection.query('CALL Add_ItemPicture(?,?)', [result, Content], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send('Update Product Accepted')
                }
            })
        }
    })
}