import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
    productDAO.getAll()
        .then(products => res.json({ products }))
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}
    
export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    productDAO.getOne(barcode)
        .then(product => {
            !product ? res.json({
                message: "Product not found" 
            }) : res.json({ product });
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};

export const insertOne = (req, res) => {
    productDAO.insertOne(req.body)
        .then(result => res.json({ status: 'Success' }))
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Server Unavailable' });
        });
};

export const updateOne = (req, res) => {
    productDAO
      .updateOne(req.params.barcode, req.body)
      .then((product) => {
        !product
          ? res.json({
              message: "Product not found",
            })
          : res.json({ status: 'Success' });
      })
      .catch((err) => res.json({ status: "Server Unavailable" }));
};

export const deleteOne = (req, res) => {
    productDAO
        .deleteOne(req.params.barcode)
        .then((product) => {
            !product
                ? res.json({
                    message: "Product not found"
                })
                : res.json({ status: 'Success' });
        })
        .catch(err => res.json({ status: "Server Unavailable" }));
};