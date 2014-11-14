/**
 * Created by kamal on 13/11/14.
 */
var app = angular.module('emp',['ui.bootstrap']);
    app.controller(
        'EmpDataCtrl',
        [
            '$scope',
            function($scope) {

                $scope.editMode  = -1;
                $scope.employees        = [
                    {
                        empName     : "Kamal Kumar",
                        empLocation : "Mohali",
                        empDOB      : "Jun 12, 1990",
                        empDOJ      : "Jun 12, 2013"
                    },
                    {
                        empName     : "Nishant",
                        empLocation : "CHD",
                        empDOB      : "Oct 11, 1988",
                        empDOJ      : "Oct 11, 2011"
                    },
                    {
                        empName     : "Dinesh",
                        empLocation : "Mohali",
                        empDOB      :  "Sep 10, 1988",
                        empDOJ      : "Sep 10, 2011"
                    },
                    {
                        empName     : "KKR",
                        empLocation : "CHD",
                        empDOB      : "Nov 18, 1989",
                        empDOJ      : "Nov 18, 2011"
                    }
                ];
                //CODE TO DELETE THE DATA
                $scope.deleteRecord = function (index) {
                    if (window.confirm('Are you sure you want to delete this User ?')) {
                        $scope.employees.splice(index, 1);
                        $scope.editMode  = -1;
                    }
                };

                //operation perform on click of edit button
                $scope.edit = function(index){
                    $scope.editMode = index;
                };
                $scope.addRecord = function(){

                    $scope.employees.push({

                        empName     : "",
                        empLocation : "",
                        empDOB      : "",
                        empDOJ      : ""
                    })
                    $scope.editMode = $scope.employees.length-1;
                }
                //operation for update the records
                $scope.updateRecord = function()
                {
                   $scope.editMode  = -1;
                }
                // Disable weekend selection
                $scope.disabled = function(date, mode) {
                      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
                };
                $scope.open = function($event, key) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.opened = {};
                    $scope.opened[key] = true;
                };
                $scope.formats = ['MM-dd-yyyy', 'shortDate'];
                $scope.format = $scope.formats[0];
            }
        ]
    );
