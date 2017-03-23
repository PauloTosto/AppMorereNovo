angular.module("photoBrowser", [])
    .service("imageService", function ($http) {
        return {
            getImages: function () {
                return $http.get("../arrastaoFotos.json", { responseType: "json" });
            }
        }

    })
    .controller("photoList", function ($scope, imageService) {
       
        imageService.getImages().then(function (result) {
            $scope.images = result.data;
        }, function (result) { console.log(result); });
    })