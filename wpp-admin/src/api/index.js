import WPAPI from 'wpapi';

const wp = new WPAPI({
  endpoint: window.WP_API_Settings.endpoint,
  nonce: window.WP_API_Settings.nonce,
});

wp.setHeaders('content-type', 'application/json');

wp.images = wp.registerRoute('wpws/v1', '/images');
wp.category = wp.registerRoute('wpws/v1', '/category');
wp.categoryByName = wp.registerRoute('wpws/v1', '/category/(?P<id>\\d+)');
wp.categories = wp.registerRoute('wpws/v1', '/categories');
wp.templateByID = wp.registerRoute('wpws/v1', '/template/(?P<id>\\d+)');
wp.productBoxByID = wp.registerRoute('wpws/v1', '/productBox/(?P<id>\\d+)');
wp.template = wp.registerRoute('wpws/v1', '/template');
wp.updateTemplate = wp.registerRoute('wpws/v1', '/updatetemplate');
wp.productBox = wp.registerRoute('wpws/v1', '/productBox');
wp.updateProductBox = wp.registerRoute('wpws/v1', '/updateproductBox');
wp.productBoxes = wp.registerRoute('wpws/v1', '/productBoxes');
wp.updateProductBoxes = wp.registerRoute('wpws/v1', '/updateproductBoxes');
wp.productBoxesByID = wp.registerRoute('wpws/v1', '/productBoxes/(?P<id>\\d+)');
wp.templates = wp.registerRoute('wpws/v1', '/templates');

const api = {
  getImages: () => wp.images(),
  getCategories: () => wp.categories(),
  deleteCategory: (id) => wp.categoryByName().id(id).delete(),
  postCategory: (category) => wp.category().create(JSON.stringify(category)),
  deleteTemplate: (id) => wp.templateByID().id(parseInt(id, 10)).delete(),
  deleteProductBox: (id) => wp.productBoxByID().id(parseInt(id, 10)).delete(),
  patchTemplate: (template) => wp.updateTemplate().create(JSON.stringify(template)),
  patchProductBox: (productBox) => wp.updateProductBox().create(JSON.stringify(productBox)),
  postTemplate: (template) => wp.template().create(JSON.stringify(template)),
  postProductBox: (productBox) => wp.productBox().create(JSON.stringify(productBox)),
  patchProductBoxes: (productBoxes) => wp.updateProductBoxes().create(JSON.stringify(productBoxes)),
  getTemplates: () => wp.templates(),
  getProductBoxes: () => wp.productBoxes(),
  getProductBoxesByTemplateID: (templateID) => wp.productBoxesByID().id(parseInt(templateID, 10)).get(),
  getTemplate: (id) => wp.templateByID().id(parseInt(id, 10)).get(),
  getProductBox: (id) => wp.productBoxByID().id(parseInt(id, 10)).get(),
};

export default api;
