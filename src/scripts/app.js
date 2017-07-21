(function () {

  var TRAILING_SLASH_RE = /\/$/;

  angular.module('cebola', [
    'ui.router',
    'ngMaterial',
    'cebola.services',
    'cebola.controllers',
    'cebola.directives'
  ])

  /**
   * Configurations
   */
  .constant('CONFIG', {
    cebolaApiURI:
      window.CONFIG.cebolaApiURI.replace(TRAILING_SLASH_RE, ''),
  })
  
  .config(function ($stateProvider, $urlRouterProvider) {
    
    // urls are in pt-BR
    
    $stateProvider
      .state('inventory', {
        url: '/inventario',
        views: {
          'body@': {
            controller: 'InventoryCtrl',
            templateUrl: 'templates/tabs/inventory.html',
          }
        }
      })
      .state('entry-shipments', {
        url: '/entradas',
        views: {
          'body@': {
            controller: 'EntryShipmentsCtrl',
            templateUrl: 'templates/tabs/entry-shipments.html',
          }
        }
      })
      .state('entry-shipments.detail', {
        url: '/:entryShipmentId',
        views: {
          'body@': {
            controller: 'EntryShipmentDetailCtrl',
            templateUrl: 'templates/tabs/entry-shipment-detail.html',
          }
        },
        params: {
          entryShipment: null,
        }
      })
      .state('exit-shipments', {
        url: '/saidas',
        views: {
          'body@': {
            controller: 'ExitShipmentsCtrl',
            templateUrl: 'templates/tabs/exit-shipments.html',
          }
        }
      })
      .state('exit-shipments.detail', {
        url: '/:exitShipmentId',
        views: {
          'body@': {
            controller: 'ExitShipmentDetailCtrl',
            templateUrl: 'templates/tabs/exit-shipment-detail.html',
          }
        }
      })
      .state('products', {
        url: '/produtos',
        views: {
          'body@': {
            controller: 'ProductModelsCtrl',
            templateUrl: 'templates/tabs/product-models.html',
          }
        }
      })
      .state('organizations', {
        url: '/organization/:role',
        views: {
          'body@': {
            controller: 'OrganizationsCtrl',
            templateUrl: 'templates/tabs/organizations.html',
          }
        }
      })
      .state('account', {
        url: '/minha-conta',
        controller: 'AccountCtrl',
        templateUrl: 'templates/tabs/account.html',
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/inventario');
  });
  
})();
