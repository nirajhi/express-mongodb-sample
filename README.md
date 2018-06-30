router.post('/create', product_controller.product_create);


router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);


Create : http://<host-name>/create  (Post)
Get Product by id :   http://<host-name>/<id>/  (Get)
Update Product by id :   http://<host-name>/<id>/update  (Put)
Delete Product by id :   http://<host-name>/<id>/delete  (Get)

