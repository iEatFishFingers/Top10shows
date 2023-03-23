app.factory("shows", [
    "$http",
    function ($http) {
      return $http
        .get(
          "https://content.codecademy.com/courses/ltp4/shows-api/shows.json?_gl=1*1b8da3p*_ga*NjIyNjc1NzQ3Ny4xNjc4OTU5OTQ5*_ga_3LRZM6TM9L*MTY3OTQ3Nzc2OC44LjEuMTY3OTQ4MDUyOC4wLjAuMA.."
        )
        .success(function (data) {
          return data;
        })
        .error(function (err) {
          return err;
        });
    },
  ]);
  